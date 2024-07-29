import {
  createServer,
  getServerById,
  joinServer,
  updateServer,
  getMembers,
  deleteServer,
  banUser,
  leaveServer,
  getPublicServers,
  joinPublicServer,
} from "../controllers/servers";
import { isAuthenticated } from "../middlewares";
import express from "express";

export default (router: express.Router) => {
  router.post("/server", isAuthenticated, createServer);
  router.post("/join", isAuthenticated, joinServer);
  router.post("/leave", isAuthenticated, leaveServer);
  router.get("/server/:id", isAuthenticated, getServerById);
  router.put("/server", isAuthenticated, updateServer);
  router.get("/members/:id", isAuthenticated, getMembers);
  router.delete("/server/:id", isAuthenticated, deleteServer);
  router.post("/ban", isAuthenticated, banUser);
  router.get("/publicServers", isAuthenticated, getPublicServers);
  router.post("/joinPublic", isAuthenticated, joinPublicServer);
};
