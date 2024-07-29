import { isAuthenticated } from "../middlewares";
import {
  createInvite,
  getInviteById,
  getInvitesByServerId,
  deleteInvite,
} from "../controllers/invites";
import express from "express";

export default (router: express.Router) => {
  router.post("/invite", isAuthenticated, createInvite);
  router.get("/invite/:id", isAuthenticated, getInviteById);
  router.get("/invites/:serverId", isAuthenticated, getInvitesByServerId);
  router.delete("/invite/:inviteId", isAuthenticated, deleteInvite);
};
