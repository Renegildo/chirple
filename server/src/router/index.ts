import express from "express";
import authentication from "./authentication";
import servers from "./servers";
import channels from "./channels";
import invites from "./invites";
import messages from "./messages";
import users from "./users";
import emojis from "./emojis";
import { handleUpload, uploadFile } from "../controllers/upload";

const router = express.Router();

router.post("/upload", uploadFile, handleUpload);

export default (): express.Router => {
  authentication(router);
  servers(router);
  channels(router);
  invites(router);
  messages(router);
  users(router);
  emojis(router);

  return router;
};
