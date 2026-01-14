import { Socket, io } from "socket.io-client";

let socket: Socket | null = null;

export const createSocket = (userId: string) => {
  if (!socket) {
    socket = io(import.meta.env.VITE_SOCKET_URL, {
      withCredentials: true,
      auth: { userId },
    });
  }
  return socket;
};

export const getSocket = () => socket;

export const destroySocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
