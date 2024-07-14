"use client";

import Image from 'next/image';
import { Server } from "@/utils/types";
import { Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { joinPublicServer } from '@/utils/api';
import { useState } from 'react';

const ServerCard = ({
  server,
}: {
  server: Server
}) => {
  const router = useRouter();
  const [isJoining, setIsJoining] = useState<boolean>(false);

  const handleClick = async () => {
    setIsJoining(true);
    try {
      const newMember = await joinPublicServer(server.id);
      router.push(`/app/room/${server.id}/${server.channels[0].id}`);
    } catch (error: any) {
      if (error.response.status === 409) {
        router.push(`/app/room/${server.id}/${server.channels[0].id}`);
      }
    } finally {
      setIsJoining(false);
    }
  }

  return (
    <button
      style={{
        backgroundColor: !isJoining ? "#232428" : "#3d3e44",
      }}
      className="bg-[#232428] p-3 rounded-md w-80 shadow-xl shadow-black/20 hover:-translate-y-2 transition-transform hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className='flex items-center gap-2'>
        <Image
          src={server.imageUrl || ""}
          alt={server.name}
          width={100}
          height={100}
          className='w-12 h-12 rounded-full'
        />
        <h2 className='text-xl font-semibold'>
          {server.name}
        </h2>
      </div>
      <p className='text-start text-white/80 mt-2'>
        {server.description}
      </p>
      <div className='flex gap-1 mt-5 text-white/50'>
        <Users className='w-5 h-5' />
        {server._count.members} {server._count.members === 1 ? "Membro" : "Membros"}
      </div>
    </button>
  );
}

export default ServerCard;
