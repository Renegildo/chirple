"use client";

import { io } from "socket.io-client";
import { baseServerUrl } from "./utils/constants";

export const socket = io(baseServerUrl, {
  withCredentials: true,
  auth: {
    token: localStorage?.getItem("token"),
  },
});
