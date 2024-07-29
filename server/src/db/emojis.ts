import db from "./prismaClient";

export const getEmojisByServerId = async (serverId: string) => {
  const emojis = await db.emoji.findMany({
    where: { serverId },
  });

  return emojis;
};

export const createEmoji = async (
  code: string,
  imageUrl: string,
  serverId: string,
) => {
  const newEmoji = await db.emoji.create({
    data: { code, imageUrl, serverId },
  });

  return newEmoji;
};

export const deleteEmoji = async (id: string) => {
  const deletedEmoji = await db.emoji.delete({
    where: { id },
  });

  return deletedEmoji;
};

export const getEmojiById = async (id: string) => {
  const emoji = await db.emoji.findUnique({
    where: { id },
    include: { server: true },
  });

  return emoji;
};
