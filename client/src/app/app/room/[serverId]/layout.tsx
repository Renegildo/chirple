"use client";

import { useParams } from "next/navigation";
import { getServerById } from "@/utils/api";
import { ReactNode, useContext, useEffect, useState } from "react";
import { Server, Channel } from '@/utils/types';
import ChannelList from "./(components)/channel-list";
import ChannelServerButton from "./(components)/channel-server-button";
import { useRouter } from "next/navigation";
import { SocketContext } from "@/context/SocketContext";
import { io } from "socket.io-client";
import { baseServerUrl } from "@/utils/constants";

const Room = ({
  children
}: {
  children: ReactNode
}) => {
  const [server, setServer] = useState<Server | null>(null);
  const { serverId } = useParams() as { serverId: string };
  const { socket, setSocket } = useContext(SocketContext);
  const router = useRouter();

  useEffect(() => {
    const fetchServer = async () => {
      try {
        const newServer = await getServerById(serverId);

        const token = localStorage.getItem("token");
        const newSocket = io(baseServerUrl, {
          withCredentials: true,
          auth: { token },
        });

        setSocket(newSocket);
        setServer(newServer);
      } catch (error) {
        router.push("/app");
      }
    }

    fetchServer();
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.emit("joinRoom", { serverId });
  }, [socket]);

  const handleCreateChannel = (newChannel: Channel) => {
    setServer(prevServer => {
      if (!prevServer || !prevServer.channels) return null;

      return {
        ...prevServer,
        channels: [...prevServer.channels, newChannel],
      }
    });
  }

  return (
    <div className="bg-[#313338] w-full flex">
      <div className="h-screen bg-[#2b2d31] min-w-60">
        <ChannelServerButton
          server={server}
        />
        <div className="p-2">
          <ChannelList
            channels={server?.channels}
            onCreateChannel={handleCreateChannel}
          />
        </div>
      </div>
      {server && children}
    </div>
  );
}

export default Room;
