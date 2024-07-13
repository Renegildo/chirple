export interface ServerUser {
  id: string;
  userId: string;
  serverId: string;

  server: Server;
  user: User;
}

export interface User {
  id: string;
  username: string;
  email: string;
  imageUrl?: string;
  aboutMe?: string;

  servers: ServerUser[];
  messages: Message[];
}

export interface Server {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  ownerId: string;
  isPublic: boolean;

  members: ServerUser[];
  channels: Channel[];
  emojis: Emoji[];
}

export interface Channel {
  id: string;
  name: string;
  description: string;

  serverId: string;
  server: Server;
}

export interface Invite {
  id: string;
  serverId: string;
  server: Server;
  expiresIn: string;
  uses: number;
}

export interface Message {
  id: string;
  message: string;
  owner?: User;
  channel: Channel;
  imageUrl?: string;
  ownerId?: string;
  channelId: string;
  createdAt: string;
  isDeleted: boolean;
  isEdited: boolean;
}

export interface Emoji {
  id: string;
  code: string;
  serverId: string;
  imageUrl: string;
  server: Server;
}
