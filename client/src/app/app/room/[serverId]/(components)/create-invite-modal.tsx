"use client";

import { createInvite } from "@/utils/api";
import { Invite } from "@/utils/types";
import { Copy, X } from "lucide-react";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useRef, useState } from "react";

const CreateInviteModal = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const inviteLinkRef = useRef<HTMLInputElement>(null);
  const [uses, setUses] = useState<number>(20);
  const [invite, setInvite] = useState<Invite | null>(null);
  const [expiresIn, setExpiresIn] = useState<string>(new Date(new Date().getTime() + 1000 * 60 * 60 * 24).toISOString());
  const { serverId } = useParams() as { serverId: string };
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const copyLink = () => {
    if (!invite?.id || !inviteLinkRef.current) return;

    navigator.clipboard.writeText(inviteLinkRef.current.value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  const generateInvite = async () => {
    setIsLoading(true);
    const newInvite = await createInvite(serverId, new Date(expiresIn).toISOString(), uses);

    setInvite(newInvite);
    setIsLoading(false);
  }

  return (
    <div
      className="absolute z-20"
      style={{ display: visible ? "block" : "none" }}
    >
      <div
        className="fixed left-0 top-0 bg-black/50 w-screen h-screen"
        onClick={() => setVisible(false)}
      />

      <div className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        <div className="bg-[#313338] p-5 relative rounded-md shadow-xl shadow-black/30">
          <button className="absolute right-5 top-5" onClick={() => setVisible(false)}>
            <X />
          </button>
          <h1 className="text-2xl font-bold">
            Convide seus amigos
          </h1>
          <p className="text-white/50 text-sm">
            Crie um link e divulgue com seus amigos ou sua comunidade!
          </p>
          <div className="flex flex-col mt-4 gap-4">
            <div className="flex flex-col">
              <label className="text-xs text-white/80 font-bold">
                NUMERO DE USOS
              </label>
              <input
                type="number"
                min={1}
                max={1000000}
                value={uses}
                className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                onChange={(e) => setUses(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-white/80 font-bold">
                DATA DE EXPIRACAO
              </label>
              <input
                type="date"
                value={expiresIn}
                className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                onChange={(e) => setExpiresIn(e.target.value)}
              />
            </div>
            <button
              className="w-full rounded-md hover:bg-[#4752c4] bg-[#5865f2] transition-colors text-center py-2"
              onClick={generateInvite}
              disabled={isLoading}
            >
              Gerar convite
            </button>
          </div>
          <div className="mt-4">
            <input
              className="bg-[#1e1f22] p-2 rounded-t-md w-full"
              value={invite?.id ? `http://localhost:3000/invite/${invite.id}` : isLoading ? "Gerando convite..." : "Gere um convite primeiro"}
              ref={inviteLinkRef}
              disabled
            />
            <button
              style={{ background: copied ? "#248046" : "#5865f2" }}
              className="flex gap-2 w-full rounded-b-md hover:bg-[#4752c4] disabled:bg-[#4F5ACB] transition-colors items-center text-center justify-center py-2"
              onClick={copyLink}
              disabled={!invite?.id}
            >
              <span>
                {copied ? "Copiado" : "Copiar"}
              </span>
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateInviteModal;
