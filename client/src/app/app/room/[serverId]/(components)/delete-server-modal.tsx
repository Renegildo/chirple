"use client";

import { deleteServer } from "@/utils/api";
import { Server } from "@/utils/types";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

const DeleteServerModal = ({
  server,
  visible,
  setVisible
}: {
  server: Server | null,
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>
}) => {
  const [serverName, setServerName] = useState<string>("");
  const router = useRouter();

  const handleDelete = async () => {
    if (!server || !server.id) return;
    if (serverName !== server.name) return;

    const deletedServer = await deleteServer(server.id);
    router.replace("/app");

    setVisible(false);
  }

  if (server && visible) return (
    <div className="z-30">
      <div
        className="fixed w-full h-full top-0 left-0 bg-black/50 z-30"
        onClick={() => setVisible(false)}
      />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="bg-[#313338] p-5 rounded-t-md shadow-xl shadow-black/50">
          <h1 className="text-2xl font-bold">
            Deletar servidor
          </h1>
          <p className="text-white/50 text-sm">
            Cuidado! Essa acao e irreversivel! <br /> Para confirmar digite o nome do servidor.
          </p>
          <div className="mt-4">
            <label className="text-xs text-white/80 font-bold">
              NOME DO SERVIDOR
            </label>
            <input
              type="text"
              placeholder={server.name}
              className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
              onChange={(e) => setServerName(e.target.value)}
            />
          </div>
        </div>
        <div className="bg-[#2b2d31] p-5 flex justify-between rounded-b-md">
          <button
            className="text-white/80 hover:text-white/50"
            onClick={() => setVisible(false)}
          >
            Cancelar
          </button>
          <button
            className="text-sm px-5 py-3 rounded-md transition-colors hover:bg-[#a12828] bg-[#da373c] disabled:bg-[#b52d31]"
            onClick={handleDelete}
            disabled={serverName !== server.name}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteServerModal;
