import Skeleton from "@/app/app/(components)/skeleton";

const ChannelServerButtonSkeleton = () => {
  return (
    <div className="flex justify-between items-center h-11 px-3 border-b-black shadow-md shadow-black/10">
      <Skeleton className="h-6 w-32 rounded-md" />
      <Skeleton className="h-6 w-6 rounded-md" />
    </div>
  );
}

export default ChannelServerButtonSkeleton;
