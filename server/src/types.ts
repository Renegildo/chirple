import { Socket } from "socket.io";
import express from 'express';
import { User } from "@prisma/client";

export interface ISocket extends Socket {
  serverId: string;
  userId: string;
  user: User;
}

export interface IRequest extends express.Request {
  user: User;
  body: any;
  params: any;
}

