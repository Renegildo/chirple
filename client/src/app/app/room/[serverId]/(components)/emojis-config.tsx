import { Dispatch, SetStateAction, useState } from "react";
import Image from 'next/image';
import { Emoji } from "@/utils/types";
import { Frown, Trash } from "lucide-react";
import { createEmoji, deleteEmoji } from "@/utils/api";

const EmojisConfig = ({
  visible,
  setVisible,
  emojis: initialEmojis,
  serverId
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  emojis: Emoji[];
  serverId: string;
}) => {
  const [code, setCode] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [emojis, setEmojis] = useState<Emoji[]>(initialEmojis);

  const handleCreate = async () => {
    if (!serverId) return;
    const newEmoji = await createEmoji(code, imageUrl, serverId);

    setEmojis(prevEmojis => [...prevEmojis, newEmoji]);
  }

  const handleDelete = async (id: string) => {
    const deletedEmoji = await deleteEmoji(id);

    setEmojis(prevEmojis => prevEmojis.filter(emoji => emoji.id !== deletedEmoji.id));
  }

  if (visible) return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-20"
        onClick={() => setVisible(false)}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-[#313338] p-5 rounded-lg h-96 overflow-y-scroll">
          <div className="mb-2">
            <h2 className="text-2xl font-bold">
              Emojis
            </h2>
            <p className="text-sm text-white/50">
              Adicione emojis customizados em seu servidor
            </p>
          </div>

          <table className="w-full bg-[#1e1f22] rounded-md">
            <thead>
              <tr>
                <th scope="col" className="text-xs text-white/80 font-bold text-start p-2">
                  IMAGEM
                </th>
                <th scope="col" className="text-xs text-white/80 font-bold text-start p-2">
                  CODIGO
                </th>
              </tr>
            </thead>
            {
              emojis.length > 0 ? emojis?.map((emoji, i) => (
                <tbody>
                  <tr key={i} className="hover:bg-white/10 items-center transition-colors duration-75 last:rounded-b-md">
                    <th scope="row" className="p-2">
                      <Image
                        src={emoji.imageUrl}
                        alt={emoji.code}
                        width={40}
                        height={40}
                        className="aspect-square"
                      />
                    </th>
                    <th scope="row" className="text-start p-2">
                      {emoji.code}
                    </th>
                    <th scope="row" className="flex items-center justify-center p-2">
                      <button
                        className="p-2"
                        onClick={() => handleDelete(emoji.id)}
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </th>
                  </tr>
                </tbody>
              )) : (
                <tr>
                  <td colSpan={3} className="p-2">
                    <div className="flex h-20 w-full items-center justify-center flex-col mx-auto">
                      <Frown className="text-white/50" />
                      <p className="text-white/50 text-sm text-center">
                        Sem emojis <br /> no momento
                      </p>
                    </div>
                  </td>
                </tr>
              )
            }
          </table>

          <div className="flex flex-col mt-3 border-t border-t-white/20">
            <div className="mb-2">
              <label className="text-xs text-white/80 font-bold">
                CODIGO
              </label>
              <input
                className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                onChange={(e) => setCode(e.target.value)}
                placeholder="emoji_bacana"
              />
            </div>
            <div className="mb-2">
              <label className="text-xs text-white/80 font-bold">
                URL DA IMAGEM
              </label>
              <input
                className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://imagems.com/exemplo"
              />
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <button
              className="text-white/50 hover:text-white/30 transition-colors"
              onClick={() => setVisible(false)}
            >
              Cancelar
            </button>
            <button
              className="bg-[#5865f2] disabled:bg-[#4f5acb] hover:bg-[#4f5acb] px-5 py-3 rounded-md text-sm"
              onClick={handleCreate}
              disabled={code.length < 1 || imageUrl.length < 1}
            >
              Criar emoji
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmojisConfig;
