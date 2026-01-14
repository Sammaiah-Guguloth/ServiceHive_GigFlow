import { Server, Socket } from "socket.io";

// In-memory map: userId -> socketId
const userSocketMap = new Map<string, string>();

const registerSocketEvents = (io: Server, socket: Socket) => {

  // Client sends userId after login or register
  socket.on("register", (userId: string) => {
    userSocketMap.set(userId, socket.id);
    console.log(`User ${userId} connected with socket ${socket.id}`);
  });

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
