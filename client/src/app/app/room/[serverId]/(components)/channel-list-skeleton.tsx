import Skeleton from "@/app/app/(components)/skeleton";

const ChannelListSkeleton = () => {
  return (
    <div className="mt-3">
      <div className="flex justify-between items-center">
        <Skeleton className="h-4 w-32 rounded-md" />
        <Skeleton className="h-4 w-4 rounded-md" />
      </div>
      <div className="flex flex-col gap-3 mt-3">
        {[...new Array(10)].map((_, i) => (
          <Skeleton
            className="h-8 w-full rounded-md"
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default ChannelListSkeleton;
