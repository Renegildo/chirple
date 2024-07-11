import UserPicture from "@/app/app/(components)/user-picture";
import { User } from "@/utils/types";

const UserCard = ({
  user,
  left
}: {
  user: User | undefined,
  left: boolean,
}) => {
  return (
    <div
      className={`top-20 bg-[#232428] rounded-md shadow-lg shadow-black/50 p-5 z-30
      ${left ? "fixed right-56" : "absolute left-16 -top-20"}`}
    >
      <div className="bg-[#111214] p-4 rounded-md mt-8 w-72">
        <div className="w-20 h-20 rounded-full object-fill absolute -top-10 border-4 border-[#232428] flex items-center justify-center bg-[#313338]">
          <UserPicture
            username={user?.username}
            imageUrl={user?.imageUrl}
            className="rounded-full"
          />
        </div>
        <h1 className="text-lg font-bold">
          {user?.username || "USUARIO DELETADO"}
        </h1>
        <hr className="border-white/20 my-2" />
        <div>
          <h2 className="text-sm font-bold">
            SOBRE MIM
          </h2>
          <p className="text-sm">
            {user?.aboutMe || "Usuario nao tem sobre mim"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
