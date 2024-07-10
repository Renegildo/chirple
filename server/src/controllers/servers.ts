import express from 'express';

import { IRequest } from 'types';
import {
  createServer as newServer,
  getServerById as getServer,
  joinServer as enterServer,
  updateServer as updateServerDb,
  deleteServer as deleteServerDb,
  banUser as banUserDb,
  leaveServer as leaveServerDb,
  getMembersInServer,
  getMemberByUserIdServerId,
} from '../db/servers';

export const createServer = async (req: IRequest, res: express.Response) => {
  try {
    const { name, description, userId } = req.body;

    const server = await newServer(name, description, userId);

    return res.status(200).json(server);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getServerById = async (req: IRequest, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const server = await getServer(id);

    if (!server) {
      return res.sendStatus(404);
    }

    let isOnServer = false;
    server.members.map(member => {
      if (member.userId === req.user.id) {
        isOnServer = true;
      }
    });

    if (!isOnServer) {
      return res.sendStatus(403)
    }

    return res.status(200).json(server);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const joinServer = async (req: IRequest, res: express.Response) => {
  try {
    const { serverId } = req.body;
    const userId = req.user.id;

    if (!userId || !serverId) {
      return res.sendStatus(400);
    }

    const existingMember = await getMemberByUserIdServerId(req.user.id, serverId);
    if (existingMember) return res.sendStatus(409);

    const serverUser = await enterServer(serverId, userId);

    return res.status(200).json(serverUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const leaveServer = async (req: IRequest, res: express.Response) => {
  try {
    const { userId, serverId } = req.body;

    await leaveServerDb(serverId, userId);

    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateServer = async (req: IRequest, res: express.Response) => {
  try {
    const { id, data } = req.body;

    if (!id || !data) {
      return res.sendStatus(400);
    }

    const server = await getServer(id);

    if (server.ownerId !== req.user.id) {
      return res.sendStatus(403);
    }

    const updatedServer = await updateServerDb(id, data);

    return res.status(200).json(updatedServer);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getMembers = async (req: IRequest, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const members = await getMembersInServer(id);

    return res.status(200).json(members);

  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const deleteServer = async (req: IRequest, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const server = await getServer(id);

    if (server.ownerId !== req.user.id) {
      return res.sendStatus(403);
    }

    const deletedServer = await deleteServerDb(id);

    return res.status(200).json(deletedServer);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const banUser = async (req: IRequest, res: express.Response) => {
  try {
    const { userId, serverId } = req.body;

    if (!userId || !serverId) {
      return res.sendStatus(400);
    }

    const server = await getServer(serverId);

    if (server.ownerId !== req.user.id) {
      return res.sendStatus(403);
    }

    const bannedUser = await banUserDb(serverId, userId);

    return res.status(200).json(bannedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
