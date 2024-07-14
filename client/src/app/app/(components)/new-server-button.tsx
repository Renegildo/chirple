"use client";

import { PlusIcon } from "lucide-react"
import { useState } from "react";
import NewServerModal from "./new-server-modal";
import { Server } from '@/utils/types';

const NewServerButton = ({
  onCreateServer,
}: {
  onCreateServer: (newServer: Server) => void;
}) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <div>
      <button
        className="bg-[#313338] hover:bg-[#23a559] hover:rounded-2xl text-[#23a559] hover:text-white transition-all h-12 w-12 rounded-3xl font-bold text-2xl flex items-center justify-center"
        onClick={() => setModalOpen(true)}
      >
        <PlusIcon size={30} />
      </button>
      <NewServerModal
        visible={isModalOpen}
        setModalOpen={setModalOpen}
        onCreateServer={onCreateServer}
      />
    </div>
  );
}

export default NewServerButton;
