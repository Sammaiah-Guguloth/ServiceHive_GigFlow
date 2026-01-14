import { getIO } from "./index.js";
import { getSocketIdByUserId } from "./events.js";

export const notifyUserHired = (
  userId: string,
  gigId: string
) => {
  try {
    const io = getIO();
    const socketId = getSocketIdByUserId(userId);

    if (socketId) {
      io.to(socketId).emit("hired", {
        message: "You have been hired!",
        gigId
      });
    }
  } catch (error) {
    console.error("Socket hire notification failed:", error);
  }
};
