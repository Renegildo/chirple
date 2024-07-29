import express from "express";
import { isAuthenticated } from "../middlewares";
import {
  createEmoji,
  getEmojisByServerId,
  deleteEmoji,
} from "../controllers/emojis";

export default (router: express.Router) => {
  router.post("/emoji", isAuthenticated, createEmoji); // TODO: Add better security
  router.get("/emoji/:serverId", isAuthenticated, getEmojisByServerId);
  router.delete("/emoji/:id", isAuthenticated, deleteEmoji);
};
