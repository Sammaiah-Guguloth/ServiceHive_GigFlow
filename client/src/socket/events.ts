import { Socket } from "socket.io-client";

export const registerSocketEvents = (socket: Socket) => {
  socket.on("connect", () => {
    console.log("Socket connected:", socket.id);
  });

  socket.on("hired", (data) => {
    console.log("Hired event:", data);
    alert("Congrats !! You have been hired!");
  });

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
};
