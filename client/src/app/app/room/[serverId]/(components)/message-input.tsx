"use client";

import useSelf from "@/hooks/useSelf";
import { useSocket } from "@/socket";
import { sendMessage } from "@/utils/api";
import { User, Emoji } from "@/utils/types";
import { Plus, SendHorizontal, Smile, X } from "lucide-react";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import UploadImageModal from "./upload-image-modal";
import Image from 'next/image';
import EmojisModal from "./emojis-modal";
import { SocketContext } from "@/context/SocketContext";

const MessageInput = () => {
  const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);
  const [typing, setTyping] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const { self, isLoading } = useSelf();
  const { serverId, channelId } = useParams() as { serverId: string; channelId: string };
  const [usersTyping, setUsersTyping] = useState<User[]>([]);
  const [uploadImageModal, setUploadImageModal] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");
  const [emojisModalVisible, setEmojisModalVisible] = useState<boolean>(false);
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (!socket) return;

    socket.on("startTyping", ({ user, channelId: typingChannelId }) => {
      if (typingChannelId !== channelId) return;

      setUsersTyping(prevUsersTyping => [...prevUsersTyping, user]);
    });

    socket.on("stopTyping", ({ user }) => {
      setUsersTyping(prevUsersTyping => prevUsersTyping.filter(usr => usr.id !== user.id));
    });

    return () => {
      socket.off("startTyping");
      socket.off("stopTyping");
    }
  }, [socket]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  }

  const handleSendMessage = async () => {
    if (isLoading || !self || isSendingMessage || message.length === 0 && imageUrl.length === 0 || !socket) return;
    setIsSendingMessage(true);

    const newMessage = await sendMessage(message, channelId, imageUrl);

    socket.emit(
      `sendMessage`,
      {
        id: newMessage.id,
        message,
        imageUrl,
        owner: self,
        ownerId: self.id,
        channelId,
      },
    );

    setMessage("");
    setImageUrl("");
    setIsSendingMessage(false);
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (typing || !socket) return;

    socket.emit("startTyping", { channelId });

    setTyping(true);

    setTimeout(() => {
      socket.emit("stopTyping", { channelId });
      setTyping(false);
    }, 5000);
  }

  const handleSelectImage = (newImageUrl: string) => {
    setUploadImageModal(false);
    setImageUrl(newImageUrl);
  }

  const handleSelectEmoji = (emoji: Emoji) => {
    setMessage(prevMessage => prevMessage + `:${emoji.code}:`);
  }

  return (
    <>
      <UploadImageModal
        uploadImage={uploadImageModal}
        setUploadImage={setUploadImageModal}
        handleSelect={handleSelectImage}
      />
      <div className="flex flex-col w-full z-10 px-5">
        <div className="flex flex-col bg-[#383a40] rounded-md">
          {imageUrl.length > 0 && (
            <div className="border-b-white/50 rounded-t-md bg-[#383a40] p-5 flex items-start">
              <div className="p-2 bg-[#2b2d31] rounded-md relative">
                <button
                  className="absolute right-0 top-0 bg-[#2b2d31] rounded-md text-red-500"
                  onClick={() => setImageUrl("")}
                >
                  <X className="w-5 h-5" />
                </button>
                <Image
                  alt="image"
                  width={100}
                  height={100}
                  src={imageUrl}
                  className="rounded-md"
                />
              </div>
            </div>
          )}
          <div className="flex items-center">
            <button
              className="bg-[#383a40] py-1 px-3 rounded-l-md h-11"
              onClick={() => { setUploadImageModal(true) }}
            >
              <div className="bg-[#b5bac1] p-1 rounded-full">
                <Plus
                  className="h-4 w-4 text-[#383a40]"
                />
              </div>
            </button>
            <input
              className="w-full bg-[#383a40] p-3 h-full rounded-r-md text-sm disabled:bg-[#2a2b30] placeholder:text-white/40 focus:outline-none "
              placeholder="Sua mensagem..."
              disabled={isLoading || isSendingMessage}
              onKeyDown={handleKeyDown}
              onChange={handleOnChange}
              value={message}
            />
            <div className="relative flex items-center justify-center">
              <button
                className="mr-3"
                onClick={() => setEmojisModalVisible(true)}
              >
                <Smile />
              </button>
              <button
                className="mr-3"
                onClick={handleSendMessage}
              >
                <SendHorizontal />
              </button>
              <EmojisModal
                visible={emojisModalVisible}
                setVisible={setEmojisModalVisible}
                serverId={serverId}
                onSelectEmoji={handleSelectEmoji}
              />
            </div>
          </div>
        </div>
        <div className="text-xs h-5 flex items-center gap-2 pt-1 overflow-y-hidden">
          {usersTyping.length > 0 && (
            <>
              <div className="flex h-full gap-1 pl-0.5 items-center">
                {[...Array(3)].map((_, i) => (
                  <div
                    style={{ animationDelay: (i * 150) + "ms" }}
                    className="animate-pulse h-2 w-2 bg-gray-200 rounded-full"
                    key={i}
                  />
                ))}
              </div>
              <div className="flex gap-0.5">
                {usersTyping.map((user, i) => (
                  <span
                    key={i}
                    className="font-bold"
                  >
                    {user.username}
                    {usersTyping.length > 1 && i !== usersTyping.length - 1 ? ", " : " "}
                  </span>
                ))}
                <span>
                  {usersTyping.length > 1 ? "estao digitando..." : usersTyping.length !== 0 ? "esta digitando..." : ""}
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default MessageInput;
