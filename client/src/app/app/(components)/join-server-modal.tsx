"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

const JoinServerModal = ({
  visible,
  setJoinServerModalVisible,
}: {
  visible: boolean;
  setJoinServerModalVisible: Dispatch<SetStateAction<boolean>>
}) => {
  const [inviteCode, setInviteCode] = useState<string>("");
  const router = useRouter();

  const handleJoin = () => {
    router.push(`/invite/${inviteCode}`);
  }

  return (
    <div
      className={`${visible ? "block" : "hidden"}`}
    >
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="bg-[#313338] w-[300px] rounded-lg">
          <div className="p-5">
            <button
              className="absolute right-2 top-2"
              onClick={() => setJoinServerModalVisible(false)}
            >
              <X className="text-white/30 hover:text-white transition-colors" />
            </button>
            <h1 className="text-2xl font-bold text-center">
              Entre em um servidor
            </h1>
            <p className="text-sm text-white/50 text-center">
              Adicione o codigo de convite para entrar em um servidor
            </p>
            <form className="mt-3">
              <label
                className="text-xs text-white/80 font-bold"
                htmlFor="serverName"
              >
                CODIGO DE CONVITE
              </label>
              <input
                className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                placeholder="34f4d7bc-35ea-4412-8246-d7f74c36017d"
                id="serverName"
                onChange={(e) => setInviteCode(e.target.value)}
              />
            </form>
          </div>
          <div className="flex justify-between bg-[#2b2d31] mt-3 px-5 py-3 rounded-b-md">
            <button
              className="text-white/80 hover:text-white/50"
              onClick={() => setJoinServerModalVisible(false)}
            >
              Voltar
            </button>
            <button
              className="bg-[#5865f2] py-3 px-6 text-sm rounded-md hover:bg-[#5865f2]/80"
              onClick={handleJoin}
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinServerModal;
