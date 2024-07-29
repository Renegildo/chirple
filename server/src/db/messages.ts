import db from "./prismaClient";

export const createMessage = async (
  message: string,
  ownerId: string,
  channelId: string,
  imageUrl: string,
) => {
  const newMessage = await db.message.create({
    data: {
      message,
      ownerId,
      channelId,
      imageUrl,
    },
  });

  return newMessage;
};

export const getMessagesByChannelId = async (channelId: string) => {
  const messages = await db.message.findMany({
    where: {
      channelId,
    },
    include: {
      owner: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return messages;
};

export const deleteMessage = async (id: string) => {
  const deletedMessage = await db.message.update({
    where: { id },
    data: {
      message: "Mensagem deletada.",
      imageUrl: "",
      isDeleted: true,
    },
  });

  return deletedMessage;
};

export const updateMessage = async (id: string, data: any) => {
  const updatedMessage = await db.message.update({
    where: { id },
    data: {
      ...data,
      isEdited: true,
    },
  });

  return updatedMessage;
};

export const getMessageById = async (id: string) => {
  const message = await db.message.findUnique({
    where: { id },
  });

  return message;
};
