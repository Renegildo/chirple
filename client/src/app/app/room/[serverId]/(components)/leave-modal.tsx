"use client";

import useSelf from "@/hooks/useSelf";
import { leaveServer } from "@/utils/api";
import { Server } from "@/utils/types";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

const LeaveModal = ({
  server,
  visible,
  setVisible
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  server: Server;
}) => {
  const { self } = useSelf();
  const router = useRouter();

  const handleLeave = async () => {
    if (!self?.id) return;

    await leaveServer(server.id);

    router.push("/app");
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
            Sair do servidor
          </h1>
          <p className="text-white/50 text-sm">
            Cuidado! Voce quer realmente sair do servidor?
          </p>
        </div>
        <div className="bg-[#2b2d31] p-5 flex justify-between rounded-b-md">
          <button
            className="text-white/80 hover:text-white/50"
            onClick={() => setVisible(false)}
          >
            Cancelar
          </button>
          <button
            className="text-sm px-5 py-3 rounded-md transition-colors hover:bg-[#a12828] bg-[#da373c]"
            onClick={handleLeave}
          >
            Sair
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeaveModal;
