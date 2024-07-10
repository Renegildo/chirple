"use client";

import { Invite } from "@/utils/types";
import { Copy, X } from "lucide-react";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import QRCode from "react-qr-code";

const CreateInviteModal = ({
  visible,
  setVisible,
  invite,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  invite: Invite | null;
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const inviteLinkRef = useRef<HTMLInputElement>(null);

  const copyLink = () => {
    if (!invite?.id || !inviteLinkRef.current) return;

    navigator.clipboard.writeText(inviteLinkRef.current.value);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
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
            Copie o link abaixo e envie para seus amigos!
          </p>
          <div className="mt-4">
            <input
              className="bg-[#1e1f22] p-2 rounded-t-md w-full"
              value={invite?.id ? `http://localhost:3000/invite/${invite.id}` : "Gerando convite..."}
              ref={inviteLinkRef}
              disabled
            />
            <button
              style={{ background: copied ? "#248046" : "#5865f2" }}
              className="flex gap-2 w-full rounded-b-md hover:bg-[#4752c4] transition-colors items-center text-center justify-center py-2"
              onClick={copyLink}
            >
              <span>
                {copied ? "Copiado" : "Copiar"}
              </span>
              <Copy className="h-4 w-4" />
            </button>
          </div>
          <p className="text-white/50 text-sm text-center mt-2">
            Ou use o qr code abaixo
          </p>
          <div className="p-3 bg-[#1e1f22] rounded-md w-min mx-auto">
            <QRCode
              value={`http://localhost:3000/invite/${invite?.id}`}
              className="rounded-md"
              size={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateInviteModal;
