"use client";

import { DoorOpen, Sparkles, X } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import CreateServerModal from "./create-server-modal";
import JoinServerModal from "./join-server-modal";
import { Server } from '@/utils/types';

const NewServerModal = ({
  visible,
  setModalOpen,
  onCreateServer,
}: {
  visible: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  onCreateServer: (newServer: Server) => void;
}) => {
  const [createServerModelVisible, setCreateServerModelVisible] = useState<boolean>(false);
  const [joinServerModalVisible, setJoinServerModalVisible] = useState<boolean>(false);

  return (
    <div className="z-20">
      <div className={`${visible ? "block" : "hidden"}`}>
        <div
          className="bg-black/80 w-screen h-screen left-0 top-0 absolute"
          onClick={() => setModalOpen(false)}
        />

        <div
          className={`
          ${visible ? "block" : "hidden"}
          absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2
        `}
        >
          <div className="bg-[#313338] w-[300px] rounded-lg p-5 shadow shadow-black/80">
            <button
              className="absolute right-2 top-2"
              onClick={() => setModalOpen(false)}
            >
              <X className="text-white/30 hover:text-white transition-colors" />
            </button>
            <h1 className="text-2xl font-bold text-center">
              Novo Servidor
            </h1>
            <p className="text-sm text-white/50 text-center">
              O servidor e onde voce e seus amigos conversam. Crie ou entre em um.
            </p>
            <div className="flex flex-col mt-4 gap-2">
              <button
                className="flex gap-2 items-center border-white/10 border rounded-md px-3 py-5 font-bold hover:bg-white/10 transition-colors"
                onClick={() => setCreateServerModelVisible(true)}
              >
                <Sparkles />
                <p>Criar novo servidor</p>
              </button>
              <button
                className="flex gap-2 items-center border-white/10 border rounded-md px-3 py-5 font-bold hover:bg-white/10 transition-colors"
                onClick={() => setJoinServerModalVisible(true)}
              >
                <DoorOpen />
                <p>Entrar em um servidor</p>
              </button>
            </div>
          </div>
        </div>

        <CreateServerModal
          visible={createServerModelVisible}
          setCreateServerModelVisible={setCreateServerModelVisible}
          onCreateServer={onCreateServer}
        />

        <JoinServerModal
          visible={joinServerModalVisible}
          setJoinServerModalVisible={setJoinServerModalVisible}
        />
      </div>
    </div>
  );
}

export default NewServerModal;
