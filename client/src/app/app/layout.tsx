import { ReactNode } from "react";
import UserProfileButton from "./(components)/user-profile-button";
import ServerList from "./(components)/server-list";

const Layout = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <div className="flex">
      <aside className="px-3 py-3 h-screen bg-[#1e1f22] flex flex-col justify-between overflow-y-scroll scrollbar-hide">
        <ServerList />
        <UserProfileButton />
      </aside>
      {children}
    </div>
  );
}

export default Layout;
