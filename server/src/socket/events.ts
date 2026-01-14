import { Server, Socket } from "socket.io";

// In-memory map: userId -> socketId
const userSocketMap = new Map<string, string>();

const registerSocketEvents = (io: Server, socket: Socket) => {

  // Map userId from auth on connection
  const userId = socket.handshake.auth?.userId;
  if (userId) {
    userSocketMap.set(userId, socket.id);
    console.log(`User ${userId} connected with socket ${socket.id}`);
  }

  socket.on("disconnect", () => {
    // Remove disconnected socket
    for (const [userId, socketId] of userSocketMap.entries()) {
      if (socketId === socket.id) {
        userSocketMap.delete(userId);
        console.log(`User ${userId} disconnected`);
        break;
      }
    }
  });
};

// Helper to get socketId by userId
export const getSocketIdByUserId = (userId: string): string | undefined => {
  return userSocketMap.get(userId);
};

export default registerSocketEvents;
