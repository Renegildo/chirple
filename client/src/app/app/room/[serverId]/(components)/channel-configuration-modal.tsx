import { Dispatch, SetStateAction, useState } from "react";
import { Channel } from '@/utils/types';
import { updateChannel } from "@/utils/api";

const ChannelConfigurationModal = ({
  visible,
  setVisible,
  channel,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  channel: Channel;
}) => {
  const [name, setName] = useState<string>(channel.name);
  const [description, setDescription] = useState<string>(channel.description);

  const handleEdit = async () => {
    const updatedChannel = await updateChannel(channel.id, { name, description });

    console.log(updatedChannel);

    setVisible(false);
  }

  if (visible && channel) return (
    <div>
      <div
        className="bg-black/50 fixed top-0 left-0 w-full h-full z-30"
        onClick={() => setVisible(false)}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">

        <div className="bg-[#313338] p-5 rounded-t-md shadow-xl shadow-black/30">
          <h1 className="text-2xl font-bold">
            Configuracoes de canal
          </h1>
          <p className="text-white/50 text-sm">
            Altere as configuracoes do canal
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <div>
              <label className="text-xs text-white/80 font-bold">
                NOME
              </label>
              <input
                className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                defaultValue={channel.name}
                placeholder="Nome do canal"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="text-xs text-white/80 font-bold">
                DESCRICAO
              </label>
              <input
                className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                defaultValue={channel.description}
                placeholder="Descricao do canal"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="p-5 flex justify-between bg-[#2b2d31] rounded-b-md">
          <button
            className="text-white/80 hover:text-white/50"
            onClick={() => setVisible(false)}
          >
            Cancelar
          </button>
          <button
            className="bg-[#5865f2] hover:bg-[#4f5acb] text-sm px-5 py-3 rounded-md transition-colors"
            onClick={handleEdit}
          >
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChannelConfigurationModal;
