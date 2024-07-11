import { Channel } from '@/utils/types';
import { Bolt, Delete, Hash, Settings, Trash } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import ChannelConfigurationModal from './channel-configuration-modal';
import { useState } from 'react';
import DeleteChannelModal from './delete-channel-modal';

const ChannelButton = ({
  channel
}: {
  channel: Channel;
}) => {
  const { channelId } = useParams();
  const [channelConfig, setChannelConfig] = useState<boolean>(false);
  const [channelDelete, setChannelDelete] = useState<boolean>(false);

  return (
    <div>
      <Link
        className={`hover:bg-white/10 rounded-md px-1 py-2 flex items-center transition-colors justify-between group
      ${channelId === channel.id ? "bg-white/10" : "bg-transparent"} flex`}
        href={`/app/room/${channel.serverId}/${channel.id}`}
      >
        <div className='flex gap-1'>
          <Hash className='w-5 h-5 text-[#80848e]' />
          <span className='text-sm'>
            {channel.name}
          </span>
        </div>
        <div className='flex gap-2 group-hover:scale-100 scale-0 transition-all'>
          <button
            onClick={() => setChannelDelete(true)}
            className='hover:bg-white/10 p-0.5 rounded-md'
          >
            <Trash className='h-4 w-4' />
          </button>
          <button
            onClick={() => setChannelConfig(true)}
            className='hover:bg-white/10 p-0.5 rounded-md'
          >
            <Bolt className='h-4 w-4' />
          </button>
        </div>
      </Link>

      <ChannelConfigurationModal
        visible={channelConfig}
        setVisible={setChannelConfig}
        channel={channel}
      />

      <DeleteChannelModal
        channel={channel}
        setVisible={setChannelDelete}
        visible={channelDelete}
      />
    </div>
  );
}

export default ChannelButton;
