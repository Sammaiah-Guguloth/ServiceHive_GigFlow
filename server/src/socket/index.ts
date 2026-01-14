
import { Server } from "socket.io";
import http from "http";
import registerSocketEvents from "./events.js";

let io : Server;

export const initSocket = (server : http.Server) => {
     io = new Server( server , {
        cors : {
            origin : process.env.CLIENT_URL,
            credentials : true,
        }
    });

    io.on("connection" , (socket) => {
        console.log("Socket connected:", socket.id);

        registerSocketEvents(io , socket);

        socket.on("disconnect", () => {
            console.log("Socket disconnected:", socket.id);
          });
    });

    return io;

    
};


export const getIO = (): Server => {
    if (!io) {
      throw new Error("Socket.io not initialized");
    }
    return io;
  };