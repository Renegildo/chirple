import express from 'express';
import { IRequest } from "../types";
import {
  createChannel as newChannel,
  updateChannel,
  deleteChannel as deleteChannelDb,
  getChannelNameById as getChannelNameByIdDb,
  getChannelById
} from '../db/channels';
import { getServerById } from '../db/servers';

export const createChannel = async (req: IRequest, res: express.Response) => {
  try {
    const { name, serverId } = req.body;

    if (!name || !serverId) {
      return res.sendStatus(400);
    }

    const server = await getServerById(serverId);

    if (server.ownerId !== req.user.id) {
      return res.sendStatus(403);
    }

    const channel = await newChannel(name, serverId);

    return res.status(200).json(channel);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const editChannel = async (req: IRequest, res: express.Response) => {
  try {
    const { id, data } = req.body;

    if (!id || !data) {
      return res.sendStatus(400);
    }

    const channel = await getChannelById(id);

    if (channel.server.ownerId !== req.user.id) {
      return res.sendStatus(403);
    };

    const updatedChannel = await updateChannel(id, data);

    return res.status(200).json(updatedChannel);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const deleteChannel = async (req: IRequest, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const channel = await getChannelById(id);

    if (channel.server.ownerId !== req.user.id) {
      return res.sendStatus(403);
    }

    const deletedChannel = await deleteChannelDb(id);

    return res.status(200).json(deletedChannel);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getChannelNameById = async (req: IRequest, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const channelName = await getChannelNameByIdDb(id);

    return res.status(200).json(channelName);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
