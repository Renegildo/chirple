import Skeleton from "../../(components)/skeleton";

const ServerCardSkeleton = () => {
  return (
    <div className="bg-[#232428] p-3 rounded-md w-80 shadow-xl shadow-black/20">
      <div className="flex items-center gap-2">
        <Skeleton className="w-12 h-12 rounded-full" />
        <Skeleton className="w-32 h-6 rounded-md" />
      </div>
      <Skeleton className="h-14 w-72 rounded-md my-2" />
      <Skeleton className="h-6 w-32 rounded-md" />
    </div>
  );
}

export default ServerCardSkeleton;
