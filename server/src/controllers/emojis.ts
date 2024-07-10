import express from 'express';
import { IRequest } from '../types';
import {
  getEmojisByServerId as getEmojiByServerIdDb,
  createEmoji as createEmojiDb,
  deleteEmoji as deleteEmojiDb,
  getEmojiById
} from '../db/emojis';
import { getUserById } from '../db/users';
import { getServerById } from '../db/servers';

export const getEmojisByServerId = async (req: IRequest, res: express.Response) => {
  try {
    const { serverId } = req.params;

    if (!serverId) {
      return res.sendStatus(400);
    }

    const user = await getUserById(req.user.id);

    let isMember = false;
    for (let i = 0; i < user.servers.length; i++) {
      if (user.servers[i].userId === user.id) {
        isMember = true;
        break;
      }
    }

    if (!isMember) {
      return res.sendStatus(403);
    }

    const emojis = await getEmojiByServerIdDb(serverId);

    return res.status(200).json(emojis);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createEmoji = async (req: IRequest, res: express.Response) => {
  try {
    const { code, imageUrl, serverId } = req.body;

    if (!code || !imageUrl || !serverId) {
      return res.sendStatus(400);
    }

    const server = await getServerById(serverId);

    if (server.ownerId !== req.user.id) {
      return res.sendStatus(403);
    }

    const newEmoji = await createEmojiDb(code, imageUrl, serverId);

    return res.status(200).json(newEmoji);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const deleteEmoji = async (req: IRequest, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const emoji = await getEmojiById(id);

    if (!emoji) return res.sendStatus(404);

    if (emoji.server.ownerId !== req.user.id) return res.sendStatus(403);

    const deletedEmoji = await deleteEmojiDb(id);

    return res.status(200).json(deletedEmoji);
  } catch (error) {
    console.log(error);

    return res.sendStatus(400);
  }
}
