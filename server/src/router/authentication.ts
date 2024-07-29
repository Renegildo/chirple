import { isAuthenticated } from "../middlewares";
import { login, logout, register, self } from "../controllers/authentication";
import express from "express";

export default (router: express.Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
  router.get("/auth/self", isAuthenticated, self);
  router.post("/auth/logout", isAuthenticated, logout);
};
