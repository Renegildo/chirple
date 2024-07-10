import express from 'express';
import { IRequest } from 'types';
import {
  updateUser as updateUserDb,
  deleteUser as deleteUserDb
} from '../db/users';

export const updateUser = async (req: IRequest, res: express.Response) => {
  try {
    const { id, data } = req.body;

    if (!id || !data) {
      return res.sendStatus(400);
    }

    if (id !== req.user.id) {
      return res.sendStatus(403);
    }

    const updatedUser = await updateUserDb(id, data);

    return res.status(200).json(updatedUser);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

export const deleteUser = async (req: IRequest, res: express.Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.sendStatus(400);
    }

    if (id !== req.user.id) {
      return res.sendStatus(403);
    }

    const deletedUser = await deleteUserDb(id);

    return res.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}
