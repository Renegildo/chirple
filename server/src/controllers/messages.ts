import { getChannelById } from '../db/channels';
import {
  createMessage,
  deleteMessage,
  getMessageById,
  getMessagesByChannelId as getMessages,
  updateMessage
} from '../db/messages';
import express from 'express';
import { IRequest } from "../types";

export const sendMessage = async (req: IRequest, res: express.Response) => {
  try {
    const { message, channelId, imageUrl } = req.body;

    if (!channelId || !message && !imageUrl) {
      return res.sendStatus(400);
    }

    const channel = await getChannelById(channelId);

    let isMember = false;

    for (let i = 0; i < channel.server.members.length; i++) {
      if (channel.server.members[i].userId === req.user.id) {
        isMember = true;
        break;
      }
    }

    if (!isMember) {
      return res.sendStatus(403);
    }

    const newMessage = await createMessage(message, req.user.id, channelId, imageUrl);

    return res.status(200).json(newMessage);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getMessagesByChannelId = async (req: IRequest, res: express.Response) => {
  try {
    const { channelId } = req.params;

    if (!channelId) {
      return res.sendStatus(400);
    }

    const channel = await getChannelById(channelId);

    let isMember = false;
    for (let i = 0; i < channel.server.members.length; i++) {
      if (channel.server.members[i].userId === req.user.id) {
        isMember = true;
        break;
      }
    }

    if (!isMember) {
      return res.sendStatus(403);
    }

    const messages = await getMessages(channelId);

    return res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const removeMessage = async (req: IRequest, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const message = await getMessageById(id);

    if (message.ownerId !== req.user.id) {
      return res.sendStatus(403);
    }

    const removedMessage = await deleteMessage(id);

    return res.status(200).json(removedMessage);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const editMessage = async (req: IRequest, res: express.Response) => {
  try {
    const { id, data } = req.body;

    if (!id || !data) {
      return res.sendStatus(400);
    }

    const message = await getMessageById(id);

    if (!message) return res.sendStatus(404);
    if (message.ownerId !== req.user.id) return res.sendStatus(403);

    const updatedMessage = updateMessage(id, data);

    return res.status(200).json(updatedMessage);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
