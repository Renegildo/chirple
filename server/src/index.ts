import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { ISocket } from 'types';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import router from './router';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { getUserById } from './db/users';
import { getServerById } from './db/servers';
import { getMessageById } from './db/messages';

dotenv.config();

const httpPort: number = process.env.HTTPPORT ? Number(process.env.HTTPPORT) : 8080;
const ioPort: number = process.env.IOPORT ? Number(process.env.IOPORT) : 8081;
const clientUrl = "*";

const app = express();

app.use(cors({
  origin: clientUrl,
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: clientUrl,
    credentials: true,
  },
  cookie: {
    name: "token",
    domain: ".localhost",
    sameSite: "strict",
    path: "/",
    httpOnly: true,
    secure: true,
  },
});

io.listen(ioPort);

io.use(async (socket: ISocket, next) => {
  try {
    const token = socket.handshake.auth.token;
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as { userId: string };

    socket.userId = userId;

    const user = await getUserById(userId);

    socket.user = user;

    next();
  } catch (error) {
    next(new Error("Unauthorized"));
  }
});

io.on("connection", (socket: ISocket) => {
  socket.on("joinRoom", async ({ serverId }) => {
    if (!serverId) return;

    const server = await getServerById(serverId);

    let isOnServer = false;
    for (let i = 0; i < server.members.length; i++) {
      if (server.members[i].userId === socket.userId) {
        isOnServer = true;
        break;
      }
    }

    if (!isOnServer) return;

    socket.join(serverId);
    socket.serverId = serverId;
  });

  socket.on("sendMessage", ({ id, message, owner, imageUrl, channelId, ownerId }) => {
    if (!id || !socket.serverId || !channelId || !owner || !ownerId || (!message && !imageUrl)) return;

    io.to(socket.serverId).emit("message", {
      id,
      owner,
      ownerId,
      message,
      imageUrl,
      channelId,
      createdAt: new Date(),
    });
  });

  socket.on("startTyping", ({ channelId }) => {
    if (!socket.serverId || !channelId) return;

    io.to(socket.serverId).emit("startTyping", {
      user: socket.user,
      channelId,
    });
  });

  socket.on("stopTyping", ({ channelId }) => {
    if (!socket.serverId || !channelId) return;

    io.to(socket.serverId).emit("stopTyping", {
      user: socket.user,
      channelId,
    });
  });

  socket.on("deleteMessage", ({ messageId, channelId }) => {
    if (!messageId || !channelId || !socket.serverId) return;

    io.to(socket.serverId).emit("deleteMessage", {
      messageId,
      channelId,
    });
  });

  socket.on("editMessage", async ({ messageId, newMessage, channelId }) => {
    if (!messageId || !newMessage || !channelId || !socket.serverId) return;

    const message = await getMessageById(messageId);

    if (message.ownerId !== socket.userId) return;

    io.to(socket.serverId).emit("editMessage", {
      messageId,
      newMessage,
      channelId,
    });
  });

  socket.on("banUser", ({ userId }) => {
    if (!socket.serverId || !userId) return;

    socket.to(socket.serverId).emit("banUser", {
      userId,
    });
  });

  socket.on("disconnect", () => {
    socket.to(socket.serverId).emit("stopTyping", {
      user: socket.user,
    });
  });
});

app.use("/", router());

server.listen(httpPort, () => {
  console.log(`HTTP server running on port: ${httpPort}`);
});

