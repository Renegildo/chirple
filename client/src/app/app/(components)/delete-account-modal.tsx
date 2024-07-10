import { User } from "@/utils/types";
import { Dispatch, SetStateAction } from "react";

const DeleteAccountModal = ({
  visible,
  setVisible,
  user,
  handleDelete
}: {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  user: User;
  handleDelete: () => void;
}) => {
  if (visible) return (
    <div>
      <div
        className="bg-black/50 fixed top-0 left-0 w-full h-full z-30"
        onClick={() => setVisible(false)}
      />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="bg-[#313338] p-5 rounded-t-md shadow-xl shadow-black/30">
          <h1 className="text-2xl font-bold">
            Deletar {user.username}
          </h1>
          <p className="text-sm text-white/50">
            Voce tem certeza que deseja deletar a sua conta?<br /> <b>ATENCAO ESSA ACAO E IRREVERSIVEL!!</b>
          </p>
        </div>

        <div className="p-5 flex justify-between bg-[#2b2d31] rounded-b-md">
          <button
            className="text-white/80 hover:text-white/50"
            onClick={() => setVisible(false)}
          >
            Cancelar
          </button>
          <button
            className="bg-[#da373c] hover:bg-[#a12828] text-sm px-5 py-3 rounded-md transition-colors"
            onClick={handleDelete}
          >
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccountModal;
