import { api } from '@/lib/axios';
import { User, Server, Message, Channel } from './types';
import axios from 'axios';

export const login = async (email: string, password: string) => {
  const userResponse = await api.post(
    "/auth/login",
    { email, password },
  );

  return userResponse.data;
}

export const register = async (email: string, password: string, username: string) => {
  const registerResponse = await api.post(
    "/auth/register",
    { email, password, username },
  );

  return registerResponse.data;
}

export const getSelf = async () => {
  const selfResponse = await api.get("/auth/self");

  const self = selfResponse.data as User;

  return self;
}

export const createServer = async (name: string, description: string, userId: string) => {
  const serverResponse = await api.post("/server", { name, description, userId });

  const server = serverResponse.data as Server;

  return server;
}

export const getServerById = async (id: string) => {
  const serverResponse = await api.get(`/server/${id}`);

  const server = serverResponse.data as Server;

  return server;
}

export const createChannel = async (name: string, serverId: string) => {
  const channelResponse = await api.post("/channel", { name, serverId });

  const channel = channelResponse.data as Channel;

  return channel;
}

export const createInvite = async (serverId: string, expiresIn: string, uses: number) => {
  const inviteResponse = await api.post("/invite", { serverId, expiresIn, uses });

  const invite = inviteResponse.data;

  return invite;
}

export const getInviteById = async (id: string) => {
  const inviteResponse = await api.get(`/invite/${id}`);

  const invite = inviteResponse.data;

  return invite;
}

export const joinServer = async (inviteId: string) => {
  const joinResponse = await api.post("/join", { inviteId });

  return joinResponse.data;
}

export const getMessagesByChannelId = async (channelId: string) => {
  const messagesResponse = await api.get(`/recentMessages/${channelId}`);

  const messages = messagesResponse.data as Message[];

  return messages;
}

export const sendMessage = async (message: string, channelId: string, imageUrl: string) => {
  const newMessageResponse = await api.post("/message", { message, channelId, imageUrl });

  const newMessage = newMessageResponse.data;

  return newMessage;
}

export const getMembers = async (serverId: string) => {
  const membersResponse = await api.get(`/members/${serverId}`);

  const members = membersResponse.data;

  return members;
}

export const deleteMessage = async (id: string) => {
  const removeMessage = await api.delete(`/message/${id}`);

  return removeMessage.data;
}

export const editMessage = async (id: string, data: any) => {
  const updatedMessage = await api.put(
    "/message",
    { id, data },
  );

  return updatedMessage.data;
}

export const updateServer = async (id: string, data: any) => {
  const updatedServer = await api.put(
    "/server",
    { id, data },
  );

  return updatedServer.data;
}

export const deleteServer = async (id: string) => {
  const deletedServer = await api.delete(`/server/${id}`);

  return deletedServer.data;
}

export const logout = async () => {
  const logoutResponse = await api.post("/auth/logout");

  return logoutResponse.data;
}

export const updateUser = async (id: string, data: any) => {
  const updatedUser = await api.put("/user", { id, data });

  return updatedUser;
}

export const updateChannel = async (id: string, data: any) => {
  const updatedChannel = await api.put("/channel", { id, data });

  return updatedChannel;
}

export const deleteChannel = async (id: string) => {
  const deletedChannel = await api.delete(`/channel/${id}`);

  return deletedChannel;
}

export const deleteUser = async (id: string) => {
  const deletedUser = await api.delete(`/user/${id}`);

  return deletedUser.data;
}

export const getChannelNameById = async (id: string) => {
  const channelName = await api.get(`/channelName/${id}`);

  return channelName.data;
}

export const getEmojisByServerId = async (serverId: string) => {
  const emojis = await api.get(`/emoji/${serverId}`);

  return emojis.data;
}

export const deleteEmoji = async (id: string) => {
  const deletedEmoji = await api.delete(`/emoji/${id}`);

  return deletedEmoji.data;
}

export const createEmoji = async (code: string, imageUrl: string, serverId: string) => {
  const newEmoji = await api.post("/emoji", { code, imageUrl, serverId });

  return newEmoji.data;
}

export const banUser = async (serverId: string, userId: string) => {
  const bannedUser = await api.post("/ban", { serverId, userId });

  return bannedUser.data;
}

export const leaveServer = async (serverId: string) => {
  const leaveServerResponse = await api.post(
    "/leave",
    { serverId }
  );

  return leaveServerResponse;
}

export const getInvitesByServerId = async (serverId: string) => {
  const invites = await api.get(`/invites/${serverId}`);

  return invites.data;
}

export const deleteInvite = async (inviteId: string) => {
  const deletedInvite = await api.delete(`/invite/${inviteId}`);

  return deletedInvite.data;
}

export const getPublicServers = async () => {
  const servers = await api.get("/publicServers");

  return servers.data;
}

export const joinPublicServer = async (serverId: string) => {
  const newMember = await api.post("/joinPublic", { serverId });

  return newMember.data;
}

export const uploadFile = async (file: File) => {
  const form = new FormData();

  form.append("file", file);

  const imageUrl = await api.post("/upload", form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return imageUrl.data;
}
