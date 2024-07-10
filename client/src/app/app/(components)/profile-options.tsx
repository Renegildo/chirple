"use client";

import { deleteUser, logout } from "@/utils/api";
import { User } from "@/utils/types";
import { DoorClosed, DoorOpen, Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import CustomizeProfileModal from "./customize-profile-modal";
import DeleteAccountModal from "./delete-account-modal";

const ProfileOptions = ({
  visible,
  setVisible,
  user
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  user: User;
}) => {
  const router = useRouter();

  const [customizeModalVisible, setCustomizeModalVisible] = useState<boolean>(false);
  const [deleteUserModalVisible, setDeleteUserModalVisible] = useState<boolean>(false);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  }

  const handleDelete = async () => {
    const deletedUser = await deleteUser(user.id);
    router.push("/login")
  }

  if (visible && user) return (
    <div className="z-30">
      <div
        className="fixed w-full h-full left-0 top-0"
        onClick={() => setVisible(false)}
      />

      <div className="fixed bottom-16 bg-[#111214] p-2 shadow-xl shadow-black/50 w-56 rounded-md z-30">
        <div className="flex flex-col gap-2">
          <button
            className="flex items-center justify-between p-2 hover:bg-[#da373c] transition-colors rounded-md"
            onClick={() => setDeleteUserModalVisible(true)}
          >
            <span>
              Deletar conta
            </span>
            <Trash className="w-4 h-4" />
          </button>
          <button
            className="flex items-center justify-between p-2 hover:bg-[#da373c] transition-colors rounded-md"
            onClick={handleLogout}
          >
            <span>
              Sair
            </span>
            <DoorOpen className="w-4 h-4" />
          </button>
          <button
            className="flex items-center justify-between p-2 hover:bg-[#5865f2] transition-colors rounded-md"
            onClick={() => setCustomizeModalVisible(true)}
          >
            <span>
              Personalizar
            </span>
            <Edit className="w-4 h-4" />
          </button>
        </div>
      </div>

      <CustomizeProfileModal
        visible={customizeModalVisible}
        setVisible={setCustomizeModalVisible}
        user={user}
      />

      <DeleteAccountModal
        visible={deleteUserModalVisible}
        setVisible={setDeleteUserModalVisible}
        user={user}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default ProfileOptions;
