import db from './prismaClient';

export const createInvite = async (serverId: string, expiresIn: string, uses: number) => {
  const newInvite = await db.invite.create({
    data: { serverId, expiresIn, uses },
  });

  return newInvite;
}

export const getInviteById = async (id: string) => {
  const invite = await db.invite.findUnique({
    where: { id },
    include: { server: { include: { channels: true } } },
  });

  return invite;
}

