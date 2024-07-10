import express from 'express';
import { isAuthenticated } from '../middlewares';
import {
  sendMessage,
  getMessagesByChannelId,
  removeMessage,
  editMessage
} from '../controllers/messages';

export default (router: express.Router) => {
  router.post("/message", isAuthenticated, sendMessage);
  router.get("/recentMessages/:channelId", isAuthenticated, getMessagesByChannelId);
  router.delete("/message/:id", isAuthenticated, removeMessage);
  router.put("/message", isAuthenticated, editMessage);
}
