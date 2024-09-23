import express from "express";
import http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./router";
import dotenv from "dotenv";
import { clientUrl, PORT } from "./config/constants";
import { initSocket } from "./socket";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: clientUrl,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

app.use("/", router());

app.get("/", (_, res) => {
  res.json({ msg: "Hello, World!" });
});

const httpServer = http.createServer(app);

const io = initSocket(httpServer);

httpServer.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
