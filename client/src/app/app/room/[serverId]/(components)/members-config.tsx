import { ServerUser } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";
import Image from 'next/image';
import { Ban } from "lucide-react";
import { banUser } from "@/utils/api";
import { socket } from "@/socket";

const MembersConfig = ({
  visible,
  setVisible,
  members: initialMembers,
  serverId
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  members: ServerUser[];
  serverId: string;
}) => {
  const [members, setMembers] = useState<ServerUser[]>(initialMembers);
  const [isBanningUserId, setIsBanningUserId] = useState<string | null>(null);

  const handleBan = async (userId: string) => {
    setIsBanningUserId(userId);
    const bannedUser = await banUser(serverId, userId);

    setMembers(prevMembers => prevMembers.filter(member => member.userId !== bannedUser.userId));
    setIsBanningUserId(null);
    socket.emit("banUser", { userId: bannedUser.userId });
  }

  if (visible) return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-20"
        onClick={() => setVisible(false)}
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="bg-[#313338] p-5 rounded-lg max-h-96 overflow-y-scroll flex flex-col justify-between">
          <div>
            <div className="mb-2">
              <h2 className="text-2xl font-bold">
                Membros
              </h2>
              <p className="text-sm text-white/50">
                Gerencie os membros do seu servidor
              </p>
            </div>

            <table className="w-full bg-[#1e1f22] rounded-md">
              <thead>
                <tr>
                  <th scope="col" className="text-xs text-white/80 font-bold text-start p-2">
                    IMAGEM
                  </th>
                  <th scope="col" className="text-xs text-white/80 font-bold text-start p-2">
                    NOME DE USUARIO
                  </th>
                  <th scope="col" className="text-xs text-white/80 font-bold text-start p-2">
                    BANIR
                  </th>
                </tr>
              </thead>
              {
                members.map((member, i) => (
                  <tbody key={i}>
                    <tr className="hover:bg-white/10 items-center transition-colors duration-75 last:rounded-b-md">
                      <th scope="row" className="p-2">
                        <Image
                          src={member.user.imageUrl || ""}
                          alt={member.user.username}
                          width={40}
                          height={40}
                          className="aspect-square"
                        />
                      </th>
                      <th scope="row" className="text-start p-2">
                        {member.user.username}
                      </th>
                      <th scope="row" className="flex items-center justify-center p-2">
                        <button
                          className="p-2 hover:bg-white/10 rounded-md transition-colors"
                          onClick={() => handleBan(member.userId)}
                          disabled={isBanningUserId === member.userId}
                        >
                          <Ban className="h-5 w-5" />
                        </button>
                      </th>
                    </tr>
                  </tbody>
                ))
              }
            </table>
          </div>

          <div className="flex justify-between mt-5">
            <button
              className="text-white/50 hover:text-white/30 transition-colors"
              onClick={() => setVisible(false)}
            >
              Cancelar
            </button>
            <button
              className="bg-[#5865f2] hover:bg-[#4f5acb] px-5 py-3 rounded-md text-sm transition-colors"
              onClick={() => alert("IRRA")}
            >
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MembersConfig;
