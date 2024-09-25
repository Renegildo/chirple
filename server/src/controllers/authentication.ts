import { compare } from "bcrypt";
import { createUser, getUserByEmail, getUserByUsername } from "../db/users";
import express from "express";
import { sign } from "jsonwebtoken";
import { IRequest } from "../types";

const maxUsernameLength = 20;
const minUsernameLength = 2;
const maxPasswordLength = 200;
const minPasswordLength = 8;

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, username, password } = req.body;

    if (
      !email ||
      !username ||
      !password ||
      password.length > maxPasswordLength ||
      password.length < minPasswordLength ||
      username > maxUsernameLength ||
      username.length < minUsernameLength
    ) {
      return res.sendStatus(400);
    }

    const existingEmail = await getUserByEmail(email);

    if (existingEmail) {
      return res
        .status(400)
        .json({ errorCode: 1, error: "Email already in use." });
    }

    const existingUsername = await getUserByUsername(username);

    if (existingUsername) {
      return res
        .status(400)
        .json({ errorCode: 2, error: "Username already in use." });
    }

    const newUser = await createUser(email, username, password);

    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.sendStatus(400);
    }

    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(400).json({ errorCode: 3, error: "User not found" });
    }

    const match = await compare(password, user.password);

    if (!match) {
      return res
        .status(401)
        .json({ errorCode: 4, error: "Password not match" });
    }

    const token = sign({ userId: user.id }, process.env.JWT_SECRET);

    return res
      .status(200)
      .cookie("token", token, {
        path: "/",
        httpOnly: true,
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        secure: process.env.NODE_ENV === "production",
        domain:
          process.env.NODE_ENV === "production"
            ? ".chirple.vercel.app"
            : undefined,
      })
      .json({ ...user, token });
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const self = (req: IRequest, res: express.Response) => {
  if (!req.user) {
    return res.sendStatus(401);
  }

  return res.status(200).json(req.user);
};

export const logout = (req: express.Request, res: express.Response) => {
  res.clearCookie("token", { httpOnly: true });
  res.clearCookie("github_token", { httpOnly: true }).sendStatus(200);
};
