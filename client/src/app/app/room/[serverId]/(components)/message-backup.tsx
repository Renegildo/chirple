import Image from 'next/image';
import { Message } from "@/utils/types";
import { formatDateString } from '@/utils/utils';
import { deleteMessage, editMessage } from '@/utils/api';
import MessageActions from './message-actions';
import { socket } from '@/socket';
import { useState } from 'react';
import UserCard from './user-card';
import { Check } from 'lucide-react';
import useSelf from '@/hooks/useSelf';
import { Emoji } from 'emoji-mart';

const MessageComponent = ({
  message,
  showUser
}: {
  message: Message,
  showUser: boolean,
}) => {
  const emojis = [
    {
      id: "1",
      code: "sob",
    },
    {
      id: "2",
      code: "sunglasses",
    },
  ];
  const { self } = useSelf();

  const [showDeleteModal, setDeleteModal] = useState<boolean>(false);
  const [userCardOpen, setUserCardOpen] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);
  const [editedMessage, setEditedMessage] = useState<string>(message.message);

  const handleDelete = async () => {
    const removedMessage = await deleteMessage(message.id);

    socket.emit("deleteMessage", { messageId: message.id });
  }

  const handleEdit = async () => {
    const updatedMessage = await editMessage(message.id, { message: editedMessage });

    socket.emit("editMessage", {
      messageId: message.id,
      newMessage: editedMessage,
    });

    setEditing(false);
  }

  const renderMessageWithEmojis = ({ message }: { message: string }) => {
    const messageParts = message.split(/(:[a-zA-Z0-9_+-]+:)/);

    return (
      <div>
        {messageParts.map((part, index) => {
          // Verifique se a parte atual é um emoji
          const emoji = emojis.find(e => e.code === part.replace(/:/g, ''));
          if (emoji) {
            // Se for um emoji, renderize-o usando o componente Emoji do emoji-mart
            return <p>emoji</p>
          } else {
            // Caso contrário, apenas renderize o texto normal
            return part;
          }
        })}
      </div>
    );
  }

  return (
    <div className='relative'>
      {userCardOpen && (
        <>
          <div className='fixed top-0 left-0 w-full h-full z-30' onClick={() => setUserCardOpen(false)} />
          <UserCard left={false} user={message.owner} />
        </>
      )}
      {showDeleteModal && (
        <>
          <div
            className='bg-black/50 fixed top-0 left-0 w-full h-full z-20'
            onClick={() => setDeleteModal(false)}
          />
          <div className='z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#313338] rounded-lg'>
            <div className='p-5 rounded-t-lg'>
              <h1 className='font-bold text-2xl'>Deletar mensagem</h1>
              <p className='text-sm text-white/50'>
                Voce tem certeza que deseja deletar a mensagem?
              </p>
              <div className='bg-[#2b2d31] p-1 mt-2'>
                {renderMessageWithEmojis(message)}
              </div>
            </div>
            <div className='flex p-5 justify-between bg-[#2b2d31] rounded-b-lg'>
              <button
                className='text-white/50 hover:text-white/40'
                onClick={() => setDeleteModal(false)}>
                Cancelar
              </button>
              <button
                className='bg-[#da373c] px-4 py-2 text-sm rounded-md hover:bg-[#a12828] transition-colors'
                onClick={handleDelete}
              >
                Deletar
              </button>
            </div>
          </div>
        </>
      )}
      {showUser ? (
        <div
          className="group flex items-start px-5 gap-2 hover:bg-black/10 mt-2 relative"
        >
          {self?.id === message.ownerId && <MessageActions
            handleDelete={() => setDeleteModal(true)}
            handleEdit={() => setEditing(!editing)}
            isDeleted={message.isDeleted}
          />}
          <div
            className="h-10 min-w-10 mt-1.5 rounded-full bg-[#1e1f22] flex items-center justify-center cursor-pointer"
            onClick={() => setUserCardOpen(true)}
          >
            {message.owner?.imageUrl ? (
              <Image
                width={40}
                height={40}
                src={message.owner.imageUrl}
                alt={message.owner.username[0].toUpperCase()}
                className='rounded-full h-10 w-10 object-fill'
              />
            ) : (
              <span>
                {message.owner?.username[0].toUpperCase() || "U"}
              </span>
            )}
          </div>
          <div className="flex flex-col py-1">
            <div className='flex gap-1 items-center'>
              <span
                className="text-sm font-bold hover:underline cursor-pointer"
                onClick={() => setUserCardOpen(true)}
              >
                {message.owner?.username || "USUARIO DELETADO"}
              </span>
              <span className='text-xs font-semibold text-white/50'>
                {formatDateString(message.createdAt)}
              </span>
            </div>
            {!editing ? (
              <span className='flex items-end gap-1'>
                <p
                  className={`break-words break-all ${message.isDeleted ? "text-sm text-white/50" : ""}`}
                >
                  {message.message}
                </p>
                {message.isEdited && !message.isDeleted && (
                  <p className='text-white/50 text-xs'>
                    (editado)
                  </p>
                )}
              </span>
            ) : (
              <div className='flex items-center'>
                <input
                  value={editedMessage}
                  className='bg-[#383a40] p-2 rounded-l-md'
                  onChange={(e) => setEditedMessage(e.target.value)}
                />
                <button
                  className='bg-[#5865f2] rounded-r-md p-2 hover:bg-[#4f5acb] transition-colors'
                  onClick={handleEdit}
                >
                  <Check />
                </button>
              </div>
            )}
            {message.imageUrl && (
              <Image
                src={message.imageUrl}
                width={200}
                height={200}
                alt='image'
                className='rounded-md py-1'
              />
            )}
          </div>
        </div>
      ) : (
        <div
          className='hover:bg-black/10 relative group'
        >
          {self?.id == message.ownerId && <MessageActions
            handleDelete={() => setDeleteModal(true)}
            isDeleted={message.isDeleted}
            handleEdit={() => setEditing(!editing)}
          />}
          {!editing ? (
            <span className='flex items-end gap-1 pl-[68px]'>
              <p
                className={`break-words break-all ${message.isDeleted ? "text-sm text-white/50" : ""}`}
              >
                {message.message}
              </p>
              {message.isEdited && !message.isDeleted && (
                <p className='text-white/50 text-xs'>
                  (editado)
                </p>
              )}
            </span>
          ) : (
            <div className='flex items-center pl-[68px]'>
              <input
                value={editedMessage}
                className='bg-[#383a40] p-2 rounded-l-md'
                onChange={(e) => setEditedMessage(e.target.value)}
              />
              <button
                className='bg-[#5865f2] rounded-r-md p-2 hover:bg-[#4f5acb] transition-colors'
                onClick={handleEdit}
              >
                <Check />
              </button>
            </div>
          )}
          {message.imageUrl && (
            <Image
              src={message.imageUrl}
              width={200}
              height={200}
              alt='image'
              className='rounded-md py-1 pl-[68px]'
            />
          )}
        </div>
      )}
    </div>
  );
}

export default MessageComponent;
