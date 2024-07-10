import { User } from "@/utils/types";
import { Dispatch, SetStateAction, useState } from "react";
import Image from 'next/image';
import { updateUser } from "@/utils/api";

const CustomizeProfileModal = ({
  visible,
  setVisible,
  user,
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  user: User;
}) => {
  const [username, setUsername] = useState<string>(user.username);
  const [imageUrl, setImageUrl] = useState<string>(user.imageUrl || "");
  const [aboutMe, setAboutMe] = useState<string>(user.aboutMe || "");

  const handleConfirm = async () => {
    const updatedUser = await updateUser(user.id, { username, imageUrl, aboutMe });
    console.log(updatedUser);
    setVisible(false);
  }

  if (visible && user) return (
    <>
      <div
        className="fixed top-0 left-0 w-full h-full bg-black/50 z-30"
        onClick={() => setVisible(false)}
      />

      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 shadow-xl shadow-black/30">
        <div className="flex">
          <div className="bg-[#313338] p-5 rounded-tl-md">
            <h1 className="text-2xl font-bold">
              Personalize o perfil
            </h1>
            <p className="text-white/50 text-sm">
              Deixe o seu perfil redondinho
            </p>
            <div className="flex flex-col mt-4 gap-4">
              <div>
                <label className="text-xs text-white/80 font-bold">
                  NOME
                </label>
                <input
                  type="text"
                  className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                  defaultValue={user.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="text-xs text-white/80 font-bold">
                  IMAGEM DE PERFIL
                </label>
                <input
                  type="text"
                  className="text-white bg-[#1e1f22] rounded-sm w-full p-2"
                  defaultValue={user.imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
            </div>

          </div>

          <div className="w-96 bg-[#313338] border-l border-white/10 rounded-tr-md p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full">
                <Image
                  src={user.imageUrl || ""}
                  alt="pfp"
                  width={100}
                  height={100}
                  className="object-fill w-12 h-12 rounded-full"
                />
              </div>
              <h1 className="text-lg font-bold">
                {username}
              </h1>
            </div>
            <div>
              <label className="text-xs text-white/80 font-bold">
                SOBRE MIM
              </label>
              <textarea
                className="bg-[#1e1f22] rounded-sm resize-none w-full h-32 p-2"
                placeholder="Sou uma pessoa bacana"
                onChange={(e) => setAboutMe(e.target.value)}
                defaultValue={user.aboutMe}
              >
              </textarea>
            </div>
          </div>
        </div>
        <div className="p-5 flex justify-between bg-[#2b2d31] rounded-bl-md">
          <button
            className="text-white/50 hover:text-white/30 transition-colors"
            onClick={() => setVisible(false)}
          >
            Cancelar
          </button>
          <button
            className="bg-[#5865f2] hover:bg-[#4f5acb] text-sm px-5 py-3 rounded-md transition-colors"
            onClick={handleConfirm}
          >
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}

export default CustomizeProfileModal;
