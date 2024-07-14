import { Telescope } from "lucide-react";
import Link from 'next/link';

const PublicServersButton = () => {
  return (
    <Link
      href={"/app/discover"}
      className="bg-[#313338] hover:bg-[#23a559] hover:rounded-2xl text-[#23a559] hover:text-white transition-all h-12 w-12 rounded-3xl font-bold text-2xl flex items-center justify-center"
    >
      <Telescope />
    </Link >
  )
}

export default PublicServersButton;
