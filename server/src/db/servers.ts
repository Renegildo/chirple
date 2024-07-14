import db from "./prismaClient";

export const createServer = async (name: string, description: string, userId: string) => {
  const server = await db.server.create({
    data: {
      name,
      description,
      ownerId: userId,
      members: {
        create: {
          userId,
        },
      },
      channels: {
        create: {
          name: "geral",
          desc: "Sem descricao",
        },
      },
    },
    include: {
      channels: true,
    },
  });

  return server;
}

export const getServerById = async (id: string) => {
  const server = await db.server.findUnique({
    where: { id },
    include: {
      members: { include: { user: true } },
      channels: { include: { server: true } },
      emojis: true,
    },
  });

  return server;
}

export const joinServer = async (serverId: string, userId: string) => {
  const serverUser = await db.serverUser.create({
    data: {
      serverId,
      userId
    },
  });

  return serverUser;
}

export const leaveServer = async (serverId: string, userId: string) => {
  await db.serverUser.delete({
    where: {
      serverId_userId: {
        serverId,
        userId
      },
    },
  });
}

export const updateServer = async (id: string, data: any) => {
  const updatedUser = await db.server.update({
    where: { id },
    data,
  });

  return updatedUser;
}

export const getMembersInServer = async (id: string) => {
  const server = await db.server.findUnique({
    where: { id },
    include: { members: { include: { user: true } } }
  });

  const members = server.members;

  return members;
}

export const deleteServer = async (id: string) => {
  const deletedServer = await db.server.delete({
    where: { id },
  });

  return deletedServer;
}

export const banUser = async (serverId: string, userId: string) => {
  const bannedUser = await db.serverUser.delete({
    where: { serverId_userId: { userId, serverId } },
  });

  return bannedUser;
}

export const getMemberByUserIdServerId = async (userId: string, serverId: string) => {
  const member = await db.serverUser.findUnique({
    where: {
      serverId_userId: {
        userId,
        serverId
      },
    },
  });

  return member;
}

export const setServerIsPublic = async (id: string, isPublic: boolean) => {
  const newServer = await db.server.update({
    where: { id },
    data: {
      isPublic,
    },
  });

  return newServer;
}

export const getPublicServers = async () => {
  const servers = await db.server.findMany({
    where: { isPublic: true },
    include: { _count: { select: { members: true } }, channels: true }
  });

  return servers;
}
