"use client";

import useSelf from "@/hooks/useSelf";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { useState } from "react";
import ProfileOptions from "./profile-options";
import UserProfileButtonSkeleton from "./user-profile-button-skeleton";

const UserProfileButton = () => {
  const router = useRouter();
  const { self, isLoading: isLoadingSelf } = useSelf();
  const [profileOptionsVisible, setProfileOptionsVisible] = useState<boolean>(false);

  if (!self && !isLoadingSelf) {
    router.push("/login");
  }

  if (!self) {
    return <UserProfileButtonSkeleton />
  }

  return (
    <div className="relative">
      <button
        className="group bg-[#313338] w-12 h-12 rounded-3xl hover:rounded-2xl hover:bg-[#5865f2] transition-all"
        onClick={() => setProfileOptionsVisible(!profileOptionsVisible)}
      >
        {self.imageUrl ? (
          <Image
            src={self.imageUrl}
            alt="pfp"
            width={100}
            height={100}
            className="rounded-3xl group-hover:rounded-2xl transition-all w-full h-full"
          />
        ) : (
          <span>
            {self.username[0].toUpperCase()}
            {self.username[1].toLowerCase()}
          </span>
        )}
      </button>
      <ProfileOptions
        setVisible={setProfileOptionsVisible}
        visible={profileOptionsVisible}
        user={self}
      />
    </div>
  );
}

export default UserProfileButton;
