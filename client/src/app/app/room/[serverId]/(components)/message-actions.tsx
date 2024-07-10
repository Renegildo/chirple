import { Edit, Trash } from "lucide-react";

const MessageActions = ({
  handleDelete,
  handleEdit,
  isDeleted,
}: {
  handleDelete: () => void;
  handleEdit: () => void;
  isDeleted: boolean;
}) => {
  return (
    <div
      className='group-hover:scale-100 scale-0 transition-all absolute right-4 -top-3 border border-black/20 rounded-md'
      style={{ display: isDeleted ? "none" : "block" }}
    >
      <button
        className='bg-[#313338] hover:bg-[#383a40] p-2 transition-colors'
        onClick={handleEdit}
      >
        <Edit className='h-4 w-4' />
      </button>
      <button
        className='bg-[#313338] hover:bg-[#383a40] p-2 transition-colors'
        onClick={handleDelete}
      >
        <Trash className='h-4 w-4' />
      </button>
    </div>
  );
}

export default MessageActions;
