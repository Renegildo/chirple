"use client";

import { io } from "socket.io-client";

export const socket = io("http://192.168.100.123:8081", {
  withCredentials: true,
  auth: {
    token: localStorage.getItem("token"),
  },
});
