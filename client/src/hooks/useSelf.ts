import { useEffect, useRef, useState } from "react";
import { getSelf } from "@/utils/api";
import { User } from "@/utils/types";

const useSelf = () => {
  const [self, setSelf] = useState<null | User>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const selfRef = useRef<User | null>(null);

  useEffect(() => {
    const fetchSelf = async () => {
      try {
        const selfResponse = await getSelf();
        setSelf(selfResponse);
        selfRef.current = selfResponse;
      } catch (error) {
        console.log("Error on useSelf hook: ", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchSelf();
  }, []);

  return { self, isLoading, selfRef };
}

export default useSelf;
