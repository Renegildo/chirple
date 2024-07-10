import { Dispatch, SetStateAction, useState } from "react";
import { Server } from '@/utils/types';
import { editServer } from "@/utils/api";

const ServerConfigurationModal = ({
  setVisible,
  visible,
  server
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  server: Server | null;
}) => {
  const [name, setName] = useState<string>(server?.name || "");
  const [imageUrl, setImageUrl] = useState<string>(server?.imageUrl || "");

  const handleEdit = async () => {
    if (!server || !server.id) return;

    const updatedServer = await editServer(server.id, { name, imageUrl });
    console.log("updatedServer: ", updatedServer);
    setVisible(false);
  }
  if (visible && server) return (
    <>
      <div
        className="bg-black/50 fixed top-0 left-0 w-full h-full z-20"
        onClick={() => setVisible(false)}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="bg-[#313338] p-5 rounded-t-md shadow-xl shadow-black/30">
          <h1 className="text-2xl font-bold">
            Configuracoes de servidor
          </h1>
          <p className="text-white/50 text-sm">
            Altere as configuracoes do seu servidor
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <div>
              <label className="text-xs text-white/80 font-bold">
                NOME
              </label>
              <input
                className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                defaultValue={server.name}
                placeholder="Nome do servidor"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="text-xs text-white/80 font-bold">
                IMAGEM
              </label>
              <input
                className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                defaultValue={server.imageUrl}
                placeholder="https://imagens.com/exemplo"
                onChange={(e) => setImageUrl(e.target.value)}
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
    </>
  );
}

export default ServerConfigurationModal;
