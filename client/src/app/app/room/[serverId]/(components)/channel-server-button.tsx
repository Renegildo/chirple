"use client";

import { Server } from "@/utils/types";
import { ChevronDown } from "lucide-react";
import ChannelServerModal from "./channel-server-modal";
import { useState } from "react";
import ChannelServerButtonSkeleton from "./channel-server-button-skeleton";

const ChannelServerButton = ({
  server
}: {
  server: Server | null;
}) => {
  const [channelServerModalVisible, setChannelServerModalVisible] = useState<boolean>(false);

  if (!server) return <ChannelServerButtonSkeleton />;

  return (
    <div className="relative">
      <button
        className="border-b-black/40 border-b px-3 h-11 mb-2 shadow-black/10 shadow-md w-full text-start font-bold flex justify-between items-center hover:bg-white/10 transition-colors text-sm"
        onClick={() => setChannelServerModalVisible(true)}
      >
        <span>
          {server?.name}
        </span>
        <ChevronDown
          className="h-5 w-5"
        />
      </button>
      <ChannelServerModal
        visible={channelServerModalVisible}
        setVisible={setChannelServerModalVisible}
        server={server}
      />
    </div>
  );
}

export default ChannelServerButton;
