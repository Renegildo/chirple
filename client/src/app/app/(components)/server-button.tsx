"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Server } from '@/utils/types';
import Image from 'next/image';

const ServerButton = ({
  server
}: {
  server: Server;
}) => {
  const [hover, setHover] = useState<boolean>(false);
  const { serverId } = useParams();

  if (!server || !server.channels) {
    return (<pre>{JSON.stringify(server)}</pre>);
  }

  return (
    <div className="relative">
      <div className={`group-hover:bg-red-400 w-2 h-5 rounded-full bg-blue-50 absolute right-14 top-3 ${hover || serverId === server.id ? "scale-100" : "scale-0"} transition-all duration-200`} />
      <Link
        className={`group hover:bg-[#5865f2] hover:rounded-2xl h-12 w-12 flex items-center justify-center font-bold transition-all ${serverId === server.id ? "bg-[#5865f2] rounded-2xl" : "bg-[#313338] rounded-3xl"}`}
        href={`/app/room/${server.id}/${server.channels[0].id}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {server.imageUrl ? (
          <Image
            src={server.imageUrl}
            alt={server.name[0] + server.name[1]}
            width={48}
            height={48}
            className={`object-fill h-full w-full group-hover:rounded-2xl transition-all ${serverId === server.id ? "rounded-2xl" : "rounded-3xl"}`}
          />
        ) : (
          <>
            {server.name[0]}
            {server.name[1]}
          </>
        )}
      </Link>
    </div>
  );
}

export default ServerButton
