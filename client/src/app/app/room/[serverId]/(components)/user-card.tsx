import { User } from "@/utils/types";
import Image from 'next/image';

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
        <Image
          width={100}
          height={100}
          src={user?.imageUrl || ''}
          alt="pfp"
          className="rounded-full w-20 h-20 object-fill absolute -top-10 border-4 border-[#232428]"
        />
        <h1 className="text-lg font-bold">
          {user?.username || "USUARIO DELETADO"}
        </h1>
        <hr className="border-white/20 my-2" />
        <div>
          <h2 className="text-sm font-bold">
            SOBRE MIM
          </h2>
          <p className="text-sm">
            {user?.aboutMe || "USUARIO DELETADO"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
