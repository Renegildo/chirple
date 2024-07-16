"use client";

import Skeleton from "@/app/app/(components)/skeleton";
import { getInviteById, joinServer } from "@/utils/api";
import { Invite } from "@/utils/types";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const InvitePage = () => {
  const [invite, setInvite] = useState<Invite | null>(null);
  const { inviteId } = useParams() as { inviteId: string };
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    const fetchInvite = async () => {
      const newInvite = await getInviteById(inviteId);

      setInvite(newInvite);
      setIsLoading(false);
    }

    fetchInvite();
  }, []);

  const handleAcceptInvite = async () => {
    if (!invite?.id) return router.push("/app");

    try {
      await joinServer(invite.id);
      const firstChannelUrl = `/app/room/${invite.server.id}/${invite.server.channels[0].id}`;
      router.push(firstChannelUrl);
    } catch (error: any) {
      if (error.response.status === 409) {
        const firstChannelUrl = `/app/room/${invite.server.id}/${invite.server.channels[0].id}`;
        router.push(firstChannelUrl);
      }
    }
  }

  return (
    <div className="w-full h-screen bg-[#313338] flex items-center justify-center">
      <div className="bg-[#1e1f22] min-w-0 max-w-screen-sm rounded-lg shadow-lg shadow-black/40 p-10 flex flex-col items-center">
        <h2 className="text-white/70 text-sm">
          {isLoading ? (
            <Skeleton className="h-6 w-52 rounded-md" />
          ) : "Alguem te convidou para entrar"}
        </h2>
        <h1 className="text-2xl font-bold my-5">
          {isLoading ? (
            <Skeleton className="h-10 w-60 rounded-md" />
          ) : !invite || invite.uses <= 0 ? "Convite invalido" : invite.server.name}
        </h1>
        <button
          className="bg-[#5865f2] hover:bg-[#4752c4] transition-colors py-3 px-4 rounded-md"
          onClick={handleAcceptInvite}
          disabled={isLoading}
        >
          {!isLoading && !invite ? "Voltar" : "Aceitar convite"}
        </button>
      </div>
    </div>
  );
}

export default InvitePage;
