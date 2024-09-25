import { isAuthenticated } from "../middlewares";
import { login, logout, register, self } from "../controllers/authentication";
import express from "express";
import axios from "axios";
import { clientUrl } from "../config/constants";

export default (router: express.Router) => {
  router.post("/auth/register", register);
  router.post("/auth/login", login);
  router.get("/auth/self", isAuthenticated, self);
  router.post("/auth/logout", isAuthenticated, logout);

  router.get("/auth/github", (_, res) => {
    const params = { scope: "read:user", client_id: process.env.GITHUB_CLIENT_ID, };

    const urlEncodedParams = new URLSearchParams(params).toString();
    res.redirect(`https://github.com/login/oauth/authorize?${urlEncodedParams}`);
  });

  router.get("/auth/github/callback", async (req, res) => {
    const { code } = req.query;

    if (!code) return res.sendStatus(500);

    const body = {
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code,
    };

    const options = { headers: { accept: "application/json" } };

    try {
      const tokenResponse = await axios.post(
        "https://github.com/login/oauth/access_token",
        body, options
      );

      const token = tokenResponse.data.access_token;

      if (!token) {
        return res.sendStatus(500);
      }

      res.cookie("github_token", token, { httpOnly: true, sameSite: "lax" });

      res.redirect(clientUrl + "/app");
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
};
