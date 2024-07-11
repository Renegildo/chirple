"use client";

import Image from 'next/image';
import { getMembers } from "@/utils/api";
import { ServerUser, User } from "@/utils/types";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import UserCard from './user-card';
import UserPicture from '@/app/app/(components)/user-picture';

const MembersList = ({
  membersListOpen,
}: {
  membersListOpen: boolean;
}) => {
  const [members, setMembers] = useState<ServerUser[]>([]);
  const { serverId } = useParams() as { serverId: string };
  const [userCardOpen, setUserCardOpen] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      const newMembers = await getMembers(serverId);

      setMembers(newMembers);
    }

    fetchMembers();
  }, []);

  const handleUserClick = (member: User) => {
    setUserCardOpen(true);
    setSelectedUser(member);
  }

  return (
    <div
      className="bg-[#2b2d31] w-60 overflow-y-scroll flex-col gap-2 p-2 relative mt-11"
      style={{ display: membersListOpen ? "flex" : "none" }}
    >
      {userCardOpen && (
        <>
          <div className='fixed top-0 left-0 w-full h-full' onClick={() => setUserCardOpen(false)} />
          <UserCard left user={selectedUser!} />
        </>
      )}
      <h1 className='pl-2 text-xs font-bold text-[#949ba4]'>
        MEMBROS - {members.length}
      </h1>
      <div className='flex flex-col gap-0.5'>
        {members.map(member => (
          <button
            className='flex items-center gap-2 px-2 py-1 hover:bg-white/10 rounded-md'
            key={member.userId}
            onClick={() => handleUserClick(member.user)}
          >
            <div className='w-9 h-9 bg-[#26282E] rounded-full flex items-center justify-center'>
              <UserPicture
                username={member.user.username}
                imageUrl={member.user.imageUrl}
              />
            </div>
            <p className='text-white/80 font-medium'>
              {member.user.username}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default MembersList;
