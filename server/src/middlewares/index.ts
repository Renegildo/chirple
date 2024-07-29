import express from "express";
import { IRequest } from "types";
import { verify } from "jsonwebtoken";
import { getUserById } from "../db/users";

export const isAuthenticated = async (
  req: IRequest,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const token = req.cookies["token"];

    if (!token) {
      return res.sendStatus(403);
    }

    const { userId } = verify(token, process.env.JWT_SECRET) as {
      userId: string;
    };

    const user = await getUserById(userId);

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
