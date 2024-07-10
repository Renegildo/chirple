"use client";

import useSelf from "@/hooks/useSelf";
import NewServerButton from "./new-server-button";
import ServerButton from "./server-button";
import { Server } from '@/utils/types';
import { useEffect, useState } from "react";
import ServerButtonSkeleton from "./server-button-skeleton";

const ServerList = () => {
  const { self, isLoading: isLoadingSelf } = useSelf();
  const [servers, setServers] = useState<Server[] | null>(null);

  const handleCreateServer = (newServer: Server) => {
    setServers(prevServers => {
      if (!prevServers) return null;

      return [...prevServers, newServer];
    });
  }

  useEffect(() => {
    let newServers: Server[] = [];
    self?.servers.map(serverUser => {
      newServers.push(serverUser.server);
    });

    setServers(newServers)
  }, [self]);

  return (
    <>
      {!isLoadingSelf ? (
        <ul className="flex gap-2 flex-col items-center">
          {
            servers?.map(server => (
              <ServerButton
                key={server.id}
                server={server}
              />
            ))
          }
          <NewServerButton
            onCreateServer={handleCreateServer}
          />
        </ul>) : (
        <div className="flex flex-col gap-2 items-center">
          {
            [...new Array(5)].map((_, i) => (
              <ServerButtonSkeleton
                key={i}
              />
            ))
          }
        </div>
      )}
    </>
  );
}

export default ServerList;
