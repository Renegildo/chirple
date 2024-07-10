"use client";

import { useEffect } from 'react';
import { socket } from '../socket';

export default function Home() {
  const self = {
    id: "123897123",
    username: "renegildo",
  }

  const roomId = 100;

  const handleSendMessage = () => {
    socket.emit("sendMessage", {
      owner: self,
      roomId: roomId,
      message: "Opa eai kk",
    });
  }

  useEffect(() => {
    socket.emit("joinRoom", roomId);
    console.log("joining room...");

    socket.on("message", (data) => {
      alert(JSON.stringify(data));
    });

    return () => {
      socket.off("message");
    };
  }, []);

  return (
    <div>
      <h1>
        Testando
      </h1>
      <button type='button' onClick={handleSendMessage}>
        Send Message
      </button>
    </div>
  );
}
