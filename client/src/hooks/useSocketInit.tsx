import { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { createSocket, destroySocket } from "../socket";

export const useSocketInit = () => {
  const { isAuthenticated, user } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isAuthenticated && user?.id) {
      createSocket(user.id);
    } else {
      destroySocket();
    }

    return () => destroySocket();
  }, [isAuthenticated, user?.id]);
};
