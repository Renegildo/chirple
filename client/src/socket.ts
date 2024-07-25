"use client";

import { baseServerUrl } from "./utils/constants";
import { io } from "socket.io-client";
import { useEffect, useRef } from "react";
import { Socket } from 'socket.io-client';

export const useSocket = () => {
  const socketRef = useRef<null | Socket>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const socket = io(baseServerUrl, {
      withCredentials: true,
      auth: { token },
    });

    socketRef.current = socket;

    return () => {
      socket.disconnect();
    };
  }, []);

  return socketRef.current;
}
