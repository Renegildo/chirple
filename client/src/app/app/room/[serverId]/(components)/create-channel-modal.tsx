import { createChannel } from "@/utils/api";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { Channel } from '@/utils/types';

const CreateChannelModal = ({
  visible,
  setVisible,
  serverId,
  onCreateChannel
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  serverId: string | undefined;
  onCreateChannel: (newChannel: Channel) => void;
}) => {
  const router = useRouter();
  const [channelName, setChannelName] = useState<string>("");

  const handleCreateChannel = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!serverId) return;

    const newChannel = await createChannel(channelName, serverId);
    onCreateChannel(newChannel);
    router.push(`/app/room/${newChannel.serverId}/${newChannel.id}`);
    setVisible(false);
  }

  return (
    <div className={`${visible ? "block" : "hidden"}`}>
      <div
        className="bg-black/80 w-screen h-screen left-0 top-0 absolute z-20"
        onClick={() => setVisible(false)}
      />

      <form
        className={`
          ${visible ? "block" : "hidden"}
          absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30
        `}
        onSubmit={handleCreateChannel}
      >
        <div className="bg-[#313338] w-[300px] rounded-t-lg p-5 shadow shadow-black/80">
          <h1 className="text-2xl font-bold">
            Criar Canal
          </h1>
          <p className="text-sm text-white/50">
            Organize seu servidor com os canais.
          </p>
          <div className="mt-3">
            <label className="text-xs text-white/80 font-bold">
              NOME DO CANAL
            </label>
            <input
              className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
              id="serverName"
              placeholder="Canal Legal"
              onChange={(e) => setChannelName(e.target.value)}
            />
          </div>
        </div>
        <div className="rounded-b-lg bg-[#2b2d31] p-5">
          <div className="flex justify-between">
            <button
              className="hover:text-white/50 text-white/80 transition-colors"
              onClick={() => setVisible(false)}
            >
              Cancelar
            </button>
            <button
              className="bg-[#5865f2] px-5 py-3 text-sm rounded-md hover:bg-[#4752c4] transition-colors"
              type="submit"
            >
              Criar Canal
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateChannelModal;
