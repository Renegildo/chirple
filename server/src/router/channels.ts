import express from "express";
import {
  createChannel,
  editChannel,
  deleteChannel,
  getChannelNameById,
} from "../controllers/channels";
import { isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
  router.post("/channel", isAuthenticated, createChannel); //TODO: add better security to this route
  router.put("/channel", isAuthenticated, editChannel);
  router.delete("/channel/:id", isAuthenticated, deleteChannel);
  router.get("/channelName/:id", isAuthenticated, getChannelNameById);
};
