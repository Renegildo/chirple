"use client";

import { getPublicServers } from "@/utils/api";
import { Server } from "@/utils/types";
import { useEffect, useState } from "react";
import ServerCard from "./server-card";

const ServerList = () => {
  const [servers, setServers] = useState<Server[]>([]);

  useEffect(() => {
    const fetchServers = async () => {
      const newServers = await getPublicServers();

      setServers(newServers);
    }

    fetchServers();
  }, []);

  if (servers.length > 0) return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-2">
      {servers.map(server => (
        <ServerCard key={server.id} server={server} />
      ))}
    </div>
  );
}

export default ServerList;
