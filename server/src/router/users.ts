import { updateUser, deleteUser } from "../controllers/users";
import express from "express";
import { isAuthenticated } from "../middlewares";

export default (router: express.Router) => {
  router.put("/user", isAuthenticated, updateUser);
  router.delete("/user/:id", isAuthenticated, deleteUser);
};
