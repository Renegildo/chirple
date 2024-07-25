"use client";

import { Socket } from "socket.io-client";
import { SetStateAction, createContext, Dispatch, useState, ReactNode } from "react";

type SocketContextType = {
  socket: Socket | null;
  setSocket: Dispatch<SetStateAction<Socket | null>>;
}

export const SocketContext = createContext<SocketContextType>({
  socket: null,
  setSocket: () => { },
});

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  return (
    <SocketContext.Provider value={{ socket, setSocket }}>
      {children}
    </SocketContext.Provider>
  );
}
