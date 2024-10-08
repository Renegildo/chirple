"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Emoji } from '@/utils/types';
import { getEmojisByServerId } from "@/utils/api";
import Image from 'next/image';
import { Frown } from "lucide-react";

const EmojisModal = ({
  visible,
  setVisible,
  serverId,
  onSelectEmoji
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  serverId: string;
  onSelectEmoji: (emoji: Emoji) => void;
}) => {
  const [emojis, setEmojis] = useState<Emoji[]>([]);
  const [hoveringEmoji, setHoveringEmoji] = useState<Emoji | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchEmojis = async () => {
      if (!serverId) return;

      setIsLoading(true);
      const newEmojis = await getEmojisByServerId(serverId);

      setEmojis(newEmojis);
      setIsLoading(false);
    }

    fetchEmojis();
  }, [serverId]);

  if (visible) return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full"
        onClick={() => setVisible(false)}
      />

      <div
        className={"absolute -top-[225px] max-h-48 -left-[500px] shadow-lg shadow-black/50 rounded-md z-30 w-[500px]"}
      >
        <div className="bg-[#2b2d31] grid grid-cols-9 p-2 rounded-t-md gap-1 max-h-96 overflow-y-scroll">
          {!isLoading && emojis.length > 0 ? emojis.map(emoji => (
            <button
              className="hover:bg-white/10 p-1 rounded-md"
              onMouseEnter={() => setHoveringEmoji(emoji)}
              onClick={() => onSelectEmoji(emoji)}
              key={emoji.id}
            >
              <Image
                src={emoji.imageUrl}
                alt={emoji.code}
                width={50}
                height={50}
                className="rounded-md aspect-square"
              />
            </button>
          )) : (
            !isLoading && emojis.length === 0 ? (
              <div className="flex flex-col w-36 items-center m-auto">
                <Frown className="h-8 w-8" />
                <p className="text-sm text-white/50 text-center">
                  Nenhum emoji encontrado
                </p>
              </div>
            ) : (
              <p>
                Carregando...
              </p>
            )
          )}
        </div>
        <div className="bg-[#111214] p-2 rounded-b-md">
          {hoveringEmoji && (<div className="flex items-center gap-2">
            <Image
              src={hoveringEmoji?.imageUrl}
              alt="emoji"
              width={20}
              height={20}
              className="w-5 h-5"
            />
            <span className="font-semibold">
              :{hoveringEmoji?.code}:
            </span>
          </div>)}
        </div>
      </div>
    </>
  );
}

export default EmojisModal;
