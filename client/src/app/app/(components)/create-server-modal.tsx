"use client";

import useSelf from "@/hooks/useSelf";
import { createServer } from "@/utils/api";
import { X } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Server } from '@/utils/types';
import { useRouter } from "next/navigation";

const CreateServerModal = ({
  visible,
  setCreateServerModelVisible,
  onCreateServer,
}: {
  visible: boolean;
  setCreateServerModelVisible: Dispatch<SetStateAction<boolean>>;
  onCreateServer: (newServer: Server) => void;
}) => {
  const router = useRouter();

  const { self, isLoading: isLoadingSelf } = useSelf();
  const [serverName, setServerName] = useState<string>("");
  const [creatingServer, setCreatingServer] = useState<boolean>(false);

  const handleCreateServer = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateServerModelVisible(false);
    if (!self) return;

    setCreatingServer(true);
    const newServer = await createServer(serverName, "Sem descricao", self.id);
    setCreatingServer(false);

    onCreateServer(newServer);
    router.push(`/app/room/${newServer.id}/${newServer.channels[0].id}`);
    setCreateServerModelVisible(false);
  }

  return (
    <div
      className={`${visible ? "block" : "hidden"}`}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="bg-[#313338] w-[300px] rounded-lg">
          <form onSubmit={(e) => handleCreateServer(e)}>
            <div className="p-5">
              <button
                className="absolute right-2 top-2"
                onClick={() => setCreateServerModelVisible(false)}
                type="button"
              >
                <X className="text-white/30 hover:text-white transition-colors" />
              </button>
              <h1 className="text-2xl font-bold text-center">
                Crie seu servidor
              </h1>
              <p className="text-sm text-white/50 text-center">
                Adicione um nome para seu servidor. Voce pode mudar isso depois.
              </p>
              <div className="mt-3">
                <label
                  className="text-xs text-white/80 font-bold"
                  htmlFor="serverName"
                >
                  NOME DO SERVIDOR
                </label>
                <input
                  className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                  id="serverName"
                  placeholder="Meu Servidor Legal"
                  onChange={(e) => setServerName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-between bg-[#2b2d31] mt-3 px-5 py-3 rounded-b-md">
              <button
                className="text-white/80 hover:text-white/50"
                type="button"
                onClick={() => setCreateServerModelVisible(false)}
              >
                Voltar
              </button>
              <button
                className="bg-[#5865f2] py-3 px-6 text-sm rounded-md hover:bg-[#5865f2]/80"
                type="submit"
                disabled={isLoadingSelf || creatingServer}
              >
                Criar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateServerModal;
