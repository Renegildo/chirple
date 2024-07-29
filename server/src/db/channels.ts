import db from "./prismaClient";

export const createChannel = async (name: string, serverId: string) => {
  const newChannel = await db.channel.create({
    data: {
      name,
      serverId,
      desc: "No description",
    },
  });

  return newChannel;
};

export const updateChannel = async (id: string, data: any) => {
  const updatedChannel = await db.channel.update({
    where: { id },
    data,
  });

  return updatedChannel;
};

export const deleteChannel = async (id: string) => {
  const deletedChannel = db.channel.delete({
    where: { id },
  });

  return deletedChannel;
};

export const getChannelNameById = async (id: string) => {
  const channel = await db.channel.findUnique({
    where: { id },
    select: {
      name: true,
    },
  });

  return channel.name;
};

export const getChannelById = async (id: string) => {
  const channel = await db.channel.findUnique({
    where: { id },
    include: {
      server: {
        include: {
          members: true,
        },
      },
    },
  });

  return channel;
};
