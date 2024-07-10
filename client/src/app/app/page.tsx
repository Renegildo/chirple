import { MessageSquareWarning } from "lucide-react";

const NoRoomPage = () => {
  return (
    <div className="bg-[#313338] w-full flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <MessageSquareWarning className="w-10 h-10" />
        <p className="text-center">
          Entre em um servidor <br /> para comecar
        </p>
      </div>
    </div>
  );
}

export default NoRoomPage;
