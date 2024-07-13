"use client";

import { updateServer } from "@/utils/api";
import { Dispatch, SetStateAction, useState } from "react";

const VisibilityModal = ({
  isVisible,
  setIsVisible,
  serverId,
  isPublic: initialIsPublic,
}: {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  serverId: string;
  isPublic: boolean;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPublic, setIsPublic] = useState<boolean>(initialIsPublic);

  const handleConfirm = async () => {
    setIsLoading(true);

    const updatedServer = await updateServer(serverId, {
      isPublic: !isPublic,
    });

    setIsLoading(false);
    setIsVisible(false);
    setIsPublic(!isPublic);
  }

  if (isVisible) return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-30"
        onClick={() => setIsVisible(false)}
      />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="bg-[#303237] p-5 rounded-t-md shadow-xl shadow-black/50">
          <h1 className="text-2xl font-bold">
            Mudar Visibilidade
          </h1>
          <p className="text-sm text-white/50">
            Ao confirmar essa alteracao, o seu servidor se tornara {isPublic ? "privado" : "publico"}!
          </p>
        </div>
        <div className="bg-[#2B2D31] p-5 flex justify-between rounded-b-md">
          <button
            className="text-white/80 hover:text-white/50"
            onClick={() => setIsVisible(false)}
          >
            Cancelar
          </button>
          <button
            className="text-sm px-5 py-3 rounded-md transition-colors hover:bg-[#a12828] bg-[#da373c]"
            onClick={handleConfirm}
            disabled={isLoading}
          >
            Tornar {isPublic ? "Privado" : "Publico"}
          </button>
        </div>
      </div>
    </>
  );
}

export default VisibilityModal;
