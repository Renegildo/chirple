"use client";

import { socket } from "@/socket";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import MessageComponent from "./message";
import { getChannelNameById, getEmojisByServerId, getMessagesByChannelId } from "@/utils/api";
import { Message, Emoji } from "@/utils/types";
import { Hash, Users } from "lucide-react";
import { compareTimestamps } from "@/utils/utils";
import MessageListSkeleton from "./message-list-skeleton";
import Skeleton from "@/app/app/(components)/skeleton";
import useSelf from "@/hooks/useSelf";
import { useRouter } from "next/navigation";

const MessageList = ({
  setMembersListOpen,
  membersListOpen,
}: {
  setMembersListOpen: Dispatch<SetStateAction<boolean>>;
  membersListOpen: boolean;
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const { channelId, serverId } = useParams() as { channelId: string; serverId: string };
  const [channelName, setChannelName] = useState<string>("");
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [isLoadingMessages, setIsLoadingMessages] = useState<boolean>(true);
  const router = useRouter();
  const { self, selfRef } = useSelf();

  useEffect(() => {
    const getOldMessages = async () => {
      const oldMessages = await getMessagesByChannelId(channelId);

      setMessages([...oldMessages]);
      setIsLoadingMessages(false);
    }

    const getChannelName = async () => {
      const newChannelName = await getChannelNameById(channelId);

      setChannelName(newChannelName);
    }

    const getEmojis = async () => {
      const newEmojis = await getEmojisByServerId(serverId);

      setEmojis(newEmojis);
    }

    socket.emit("joinRoom", { serverId });

    socket.on("message", (message) => {
      if (message.channelId !== channelId) return;
      setMessages(prevMessages => [...prevMessages, message]);
    });

    socket.on("deleteMessage", ({ messageId }) => {
      setMessages(prevMessages => prevMessages.filter(message => message.id !== messageId));
    });

    socket.on("editMessage", ({ messageId, newMessage }) => {
      setMessages(prevMessages =>
        prevMessages.map(message => (
          message.id === messageId ? { ...message, message: newMessage, isEdited: true } : message
        ))
      );
    });

    socket.on("banUser", ({ userId }) => {
      if (!selfRef.current) return;

      if (userId === selfRef.current.id) {
        router.push("/app");
        socket.close();
      }
    });

    getOldMessages();
    getChannelName();
    getEmojis();

    return () => {
      socket.off("message");
      socket.off("deleteMessage");
      socket.off("banUser");
    }
  }, [channelId, serverId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <div
        className="absolute w-[calc(100%-72px-240px)] shadow-black/10 shadow-md border-b border-black/40 bg-[#313338]
        h-11 text-sm font-semibold flex items-center px-2 justify-between z-10"
      >
        <div className="flex gap-1 items-center">
          <Hash className="text-[#80848e] h-6 w-6" />
          <span>
            {
              channelName.length > 0 ? channelName :
                <Skeleton className="h-5 w-28 rounded-md" />
            }
          </span>
        </div>
        <div className="flex gap-2">
          <button
            className="hover:bg-white/10 p-2 rounded-md transition-colors"
            onClick={() => setMembersListOpen(!membersListOpen)}
          >
            <Users className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="overflow-x-hidden h-full mt-10 justify-end">
        <div className="m-5 text-3xl">
          <div className="bg-white/5 p-4 w-min rounded-full">
            <Hash className="w-25 h-25" />
          </div>
          <h1>
            Esse e o comeco do canal
          </h1>
        </div>
        {!isLoadingMessages ? (
          <div>
            {messages.map((message, i) => (
              <MessageComponent
                key={i}
                message={message}
                channelId={channelId}
                showUser={
                  messages?.[i - 1]?.owner?.id !== message.owner?.id ||
                  !compareTimestamps(messages?.[i - 1]?.createdAt, message.createdAt)
                }
                emojis={emojis}
              />
            ))}
          </div>
        ) : (
          <MessageListSkeleton />
        )}
        <div ref={messagesEndRef} />
      </div>
    </>
  );
}

export default MessageList;
