import { IRequest } from 'types';
import express from 'express';
import {
  createInvite as newInvite,
  getInviteById as getInvite,
} from '../db/invites';
import { getServerById } from '../db/servers';

export const createInvite = async (req: IRequest, res: express.Response) => {
  try {
    const { serverId, expiresIn, uses } = req.body;

    if (!serverId || !expiresIn || !uses) {
      return res.sendStatus(400);
    }

    const server = await getServerById(serverId);

    let isMember = false;
    for (let i = 0; i < server.members.length; i++) {
      if (server.members[i].userId === req.user.id) {
        isMember = true;
        break;
      }
    }

    if (!isMember) return res.sendStatus(403);

    const invite = await newInvite(serverId, expiresIn, uses);

    return res.status(200).json(invite);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const getInviteById = async (req: IRequest, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    const invite = await getInvite(id);

    return res.status(200).json(invite);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
