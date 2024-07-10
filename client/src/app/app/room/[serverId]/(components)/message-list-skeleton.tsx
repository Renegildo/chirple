import Skeleton from "@/app/app/(components)/skeleton";

const MessageListSkeleton = () => {
  return (
    <div>
      {[...new Array(20)].map((_, i) => (
        <div
          className="flex gap-1 my-3 items-center ml-3"
          key={i}
        >
          <Skeleton className="w-[40px] h-[40px] rounded-full" />
          <Skeleton className="w-52 h-6 rounded-md" />
        </div>
      ))}
    </div>
  );
}

export default MessageListSkeleton;
