import { saltRounds } from "../config/constants";
import db from "./prismaClient";
import { hash } from "bcrypt";

export const getUserByEmail = async (email: string) => {
  const user = await db.user.findUnique({
    where: { email },
    include: {
      servers: {
        include: {
          server: {
            include: {
              channels: true,
            },
          },
        },
      },
    },
  });

  return user;
};

export const getUserByUsername = async (username: string) => {
  const user = await db.user.findUnique({
    where: { username },
    include: {
      servers: { include: { server: { include: { channels: true } } } },
    },
  });

  return user;
};

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    include: {
      servers: { include: { server: { include: { channels: true } } } },
    },
    where: { id },
  });

  return user;
};

export const createUser = async (
  email: string,
  username: string,
  password: string,
) => {
  const hashedPassword = await hash(password, saltRounds);

  const newUser = await db.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    },
  });

  return newUser;
};

export const updateUser = async (id: string, data: any) => {
  const updatedUser = await db.user.update({
    where: { id },
    data,
  });

  return updatedUser;
};

export const deleteUser = async (id: string) => {
  const deletedUser = await db.user.delete({
    where: { id },
  });

  return deletedUser;
};
