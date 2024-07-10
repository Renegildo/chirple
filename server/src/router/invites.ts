import { isAuthenticated } from '../middlewares';
import {
  createInvite,
  getInviteById
} from '../controllers/invites';
import express from 'express';

export default (router: express.Router) => {
  router.post("/invite", isAuthenticated, createInvite);
  router.get("/invite/:id", isAuthenticated, getInviteById);
}
