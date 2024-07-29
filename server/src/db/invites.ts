import db from "./prismaClient";

export const createInvite = async (
  serverId: string,
  expiresIn: string,
  uses: number,
) => {
  const newInvite = await db.invite.create({
    data: { serverId, expiresIn, uses },
  });

  return newInvite;
};

export const getInviteById = async (id: string) => {
  const invite = await db.invite.findUnique({
    where: { id },
    include: { server: { include: { channels: true } } },
  });

  return invite;
};

export const useInvite = async (id: string) => {
  await db.invite.update({
    where: { id },
    data: {
      uses: {
        decrement: 1,
      },
    },
  });
};

export const deleteInvite = async (id: string) => {
  const deletedInvite = await db.invite.delete({
    where: { id },
  });

  return deletedInvite;
};

export const getInvitesByServerId = async (serverId: string) => {
  const invites = await db.invite.findMany({
    where: { serverId },
  });

  return invites;
};
