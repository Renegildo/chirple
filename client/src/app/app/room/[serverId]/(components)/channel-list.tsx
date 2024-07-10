import { Channel } from "@/utils/types";
import ChannelButton from "./channel-button";
import { Plus } from "lucide-react";
import CreateChannelModal from "./create-channel-modal";
import { useState } from "react";
import ChannelListSkeleton from "./channel-list-skeleton";

const ChannelList = ({
  channels,
  onCreateChannel,
}: {
  channels: Channel[] | undefined;
  onCreateChannel: (newChannel: Channel) => void;
}) => {
  const [createChannelModalVisible, setCreateChannelModalVisible] = useState<boolean>(false);

  if (!channels) {
    return <ChannelListSkeleton />;
  }

  return (
    <div>
      <div className="flex justify-between items-center text-[#80848e]">
        <h2 className="text-xs font-bold">
          CANAIS DE TEXTO
        </h2>
        <button>
          <Plus
            className="w-4 h-4"
            onClick={() => setCreateChannelModalVisible(true)}
          />
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {channels.map(channel => (
          <ChannelButton
            key={channel.id}
            channel={channel}
          />
        ))}
      </div>

      <CreateChannelModal
        visible={createChannelModalVisible}
        setVisible={setCreateChannelModalVisible}
        serverId={channels[0].server.id}
        onCreateChannel={onCreateChannel}
      />
    </div>
  );
}

export default ChannelList;
