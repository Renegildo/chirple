import { Socket } from "socket.io";
import express from "express";
import { User } from "@prisma/client";

export interface ISocket extends Socket {
  serverId: string;
  userId: string;
  user: User;
}

export interface IRequest extends express.Request {
  user: User;
  body: any;
  params: any;
  cookies: any;
  file?: Express.Multer.File;
}

export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  hireable: boolean | null;
  bio: string;
  twitter_username: string | null;
  notification_email: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: {
    name: string;
    space: number;
    collaborators: number;
    private_repos: number;
  };
}
