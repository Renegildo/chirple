"use client";

import { deleteInvite, getInvitesByServerId } from "@/utils/api";
import { Invite } from "@/utils/types";
import { MailX, Trash } from "lucide-react";
import { useParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const InvitesModal = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}) => {
  const [invites, setInvites] = useState<Invite[]>([]);
  const { serverId } = useParams() as { serverId: string };
  const [deletingInvite, setDeletingInvite] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvites = async () => {
      try {
        const newInvites = await getInvitesByServerId(serverId);

        setInvites(newInvites);
      } catch (error) {
        console.log(error);
      }

    }

    fetchInvites();
  }, []);

  const handleDeleteInvite = async (inviteId: string) => {
    setDeletingInvite(inviteId);
    await deleteInvite(inviteId);
    setInvites(prevInvites => prevInvites.filter(invite => invite.id !== inviteId));
  }

  if (visible) return (
    <>
      <div
        className="fixed bg-black/50 h-full w-full left-0 top-0 z-20"
        onClick={() => setVisible(false)}
      />

      <div className="bg-[#313338] p-5 rounded-lg max-h-96 overflow-y-scroll fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div>
          <div className="mb-2">
            <h2 className="text-2xl font-bold">
              Convites
            </h2>
            <p className="text-white/50 text-sm">
              Gerencie os convites criados anteriormente
            </p>
          </div>

          <table className="w-full bg-[#1E1F22] rounded-md border-spacing-5">
            <thead>
              <tr>
                <th scope="col" className="text-start p-2">Usos</th>
                <th scope="col" className="text-start p-2">Data expiracao</th>
                <th scope="col" className="text-start p-2">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {invites.length > 0 ? invites.map(invite => (
                <tr key={invite.id} className="p-2">
                  <th className="text-start p-2">
                    {invite.uses}
                  </th>
                  <th className="text-start p-2">
                    {new Date(invite.expiresIn).getDay()}/
                    {new Date(invite.expiresIn).getMonth()}/
                    {new Date(invite.expiresIn).getFullYear()}
                  </th>
                  <th className="flex justify-start p-2">
                    <button
                      className="p-2 hover:bg-white/10 rounded-md transition-colors"
                      onClick={() => handleDeleteInvite(invite.id)}
                      disabled={deletingInvite === invite.id}
                    >
                      <Trash className="w-5 h-5" />
                    </button>
                  </th>
                </tr>
              )) : (
                <div className="flex flex-col items-center justify-center w-full">
                  <MailX />
                  <p className="text-center text-white/50 text-sm">
                    Nenhum convite encontrado
                  </p>
                </div>
              )}
            </tbody>
          </table>

          <button
            className="bg-[#5865f2] hover:bg-[#4f5acb] py-3 rounded-md text-sm transition-colors w-full mt-2"
            onClick={() => setVisible(false)}
          >
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}

export default InvitesModal;
