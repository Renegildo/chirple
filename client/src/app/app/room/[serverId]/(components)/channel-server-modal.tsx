import { Bolt, DoorOpen, Mails, SmilePlus, Trash, UserRoundPlus, Users } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import CreateInviteModal from "./create-invite-modal";
import { Server } from "@/utils/types";
import ServerConfigurationModal from "./server-configuration-modal";
import DeleteServerModal from "./delete-server-modal";
import EmojisConfig from "./emojis-config";
import MembersConfig from "./members-config";
import useSelf from "@/hooks/useSelf";
import LeaveModal from "./leave-modal";
import InvitesModal from "./invites-modal";

const ChannelServerModal = ({
  visible,
  setVisible,
  server
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  server: Server | null;
}) => {
  const { self } = useSelf();

  const [createInviteModalVisible, setCreateInviteModalVisible] = useState<boolean>(false);
  const [configurationModalVisible, setConfigurationModalVisible] = useState<boolean>(false);
  const [deleteServerModalVisible, setDeleteServerModalVisible] = useState<boolean>(false);
  const [emojisConfigVisible, setEmojisConfigVisible] = useState<boolean>(false);
  const [membersConfigVisible, setMembersConfigVisible] = useState<boolean>(false);
  const [leaveModalVisible, setLeaveModalVisible] = useState<boolean>(false);
  const [inviteModalVisible, setInviteModalVisible] = useState<boolean>(false);

  const isOwner = self?.id === server?.ownerId;

  if (server) return (
    <div style={{ display: visible ? "block" : "none" }}>
      <div
        className="absolute w-full h-screen left-0 top-0"
        onClick={() => setVisible(false)}
      />
      <div className="absolute top-12 bg-[#111214] left-1 p-2 rounded-md w-56 shadow-xl shadow-black/50">
        <div className="flex flex-col gap-2 text-sm font-semibold">
          <button
            className="hover:bg-[#5865f2] text-white/80 hover:text-white transition-colors w-full text-start rounded-md p-2 flex justify-between items-center"
            onClick={() => setCreateInviteModalVisible(true)}
          >
            <span>
              Criar convite
            </span>
            <UserRoundPlus
              className="h-4 w-4"
            />
          </button>
          {
            isOwner && <button
              className="hover:bg-[#5865f2] text-white/80 hover:text-white transition-colors w-full text-start rounded-md p-2 flex justify-between items-center"
              onClick={() => setConfigurationModalVisible(true)}
            >
              <span>
                Configuracoes
              </span>
              <Bolt
                className="h-4 w-4"
              />
            </button>
          }
          {
            isOwner && <button
              className="hover:bg-[#5865f2] text-white/80 hover:text-white transition-colors w-full text-start rounded-md p-2 flex justify-between items-center"
              onClick={() => setEmojisConfigVisible(true)}
            >
              <span>
                Emojis
              </span>
              <SmilePlus
                className="h-4 w-4"
              />
            </button>
          }
          {isOwner &&
            <button
              className="hover:bg-[#5865f2] text-white/80 hover:text-white transition-colors w-full text-start rounded-md p-2 flex justify-between items-center"
              onClick={() => setMembersConfigVisible(true)}
            >
              <span>
                Membros
              </span>
              <Users
                className="h-4 w-4"
              />
            </button>
          }
          {isOwner &&
            <button
              className="hover:bg-[#5865f2] text-white/80 hover:text-white transition-colors w-full text-start rounded-md p-2 flex justify-between items-center"
              onClick={() => setInviteModalVisible(true)}
            >
              <span>
                Convites
              </span>
              <Mails
                className="h-4 w-4"
              />
            </button>
          }
          {!isOwner &&
            <button
              className="hover:bg-[#da373c] text-white/80 hover:text-white transition-colors w-full text-start rounded-md p-2 flex justify-between items-center"
              onClick={() => setLeaveModalVisible(true)}
            >
              <span>
                Sair
              </span>
              <DoorOpen
                className="h-4 w-4"
              />
            </button>
          }
          {isOwner &&
            <button
              className="hover:bg-[#da373c] text-white/80 hover:text-white transition-colors w-full text-start rounded-md p-2 flex justify-between items-center"
              onClick={() => setDeleteServerModalVisible(true)}
            >
              <span>
                Deletar
              </span>
              <Trash
                className="h-4 w-4"
              />
            </button>
          }
        </div>
      </div>
      <CreateInviteModal
        visible={createInviteModalVisible}
        setVisible={setCreateInviteModalVisible}
      />

      <ServerConfigurationModal
        visible={configurationModalVisible}
        setVisible={setConfigurationModalVisible}
        server={server}
      />

      <DeleteServerModal
        visible={deleteServerModalVisible}
        setVisible={setDeleteServerModalVisible}
        server={server}
      />

      <EmojisConfig
        visible={emojisConfigVisible}
        setVisible={setEmojisConfigVisible}
        emojis={server?.emojis}
        serverId={server?.id}
      />

      <MembersConfig
        visible={membersConfigVisible}
        setVisible={setMembersConfigVisible}
        members={server.members}
        serverId={server.id}
      />

      <LeaveModal
        setVisible={setLeaveModalVisible}
        visible={leaveModalVisible}
        server={server}
      />

      <InvitesModal
        visible={inviteModalVisible}
        setVisible={setInviteModalVisible}
      />
    </div>
  );
}

export default ChannelServerModal;
