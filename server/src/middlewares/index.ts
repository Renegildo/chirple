import express from "express";
import { GithubUser, IRequest } from "types";
import { verify } from "jsonwebtoken";
import { createGithubUser, getUserById } from "../db/users";
import axios from "axios";
import { User } from "@prisma/client";

export const isAuthenticated = async (
  req: IRequest,
  res: express.Response,
  next: express.NextFunction,
) => {
  try {
    const token = req.cookies["token"];
    const githubToken = req.cookies.github_token;

    if (!token && !githubToken) {
      return res.sendStatus(403);
    }

    let user: User;

    if (token) {
      const { userId } = verify(token, process.env.JWT_SECRET) as {
        userId: string;
      };

      user = await getUserById(userId);
    }

    if (!user && githubToken) {
      const { data: githubUser } = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer ${githubToken}`
        },
      }) as { data: GithubUser };

      user = await getUserById(String(githubUser.id));

      if (!user) {
        const newUser = await createGithubUser(githubUser);

        user = newUser;
      }
    }

    if (!user) {
      return res.sendStatus(403);
    }

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
