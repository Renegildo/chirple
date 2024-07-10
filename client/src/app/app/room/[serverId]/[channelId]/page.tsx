"use client";

import { useState } from "react";
import MembersList from "../(components)/members-list";
import MessageInput from "../(components)/message-input";
import MessageList from "../(components)/message-list";

const Chat = () => {
  const [membersListOpen, setMembersListOpen] = useState<boolean>(false);

  return (
    <div className="h-screen w-full flex">
      <div className="flex flex-col max-h-screen w-full">
        <MessageList
          setMembersListOpen={setMembersListOpen}
          membersListOpen={membersListOpen}
        />
        <MessageInput />
      </div>
      <MembersList
        membersListOpen={membersListOpen}
      />
    </div>
  );
}

export default Chat;
