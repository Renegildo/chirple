import { IRequest } from 'types';
import express from 'express';
import {
  createInvite as newInvite,
  getInviteById as getInvite,
  getInvitesByServerId as getInvitesByServerIdDb,
  deleteInvite as deleteInviteDb,
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

export const getInvitesByServerId = async (req: IRequest, res: express.Response) => {
  try {
    const { serverId } = req.params;

    if (!serverId) {
      return res.sendStatus(400);
    }

    const server = await getServerById(serverId);

    if (server.ownerId !== req.user.id) {
      return res.sendStatus(403);
    }

    const invites = await getInvitesByServerIdDb(serverId);

    return res.status(200).json(invites);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const deleteInvite = async (req: IRequest, res: express.Response) => {
  try {
    const { inviteId } = req.params;

    if (!inviteId) {
      return res.sendStatus(400);
    }

    console.log("inviteId: ", inviteId);
    const deletedInvite = await deleteInviteDb(inviteId);

    return res.status(200).json(deletedInvite);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

