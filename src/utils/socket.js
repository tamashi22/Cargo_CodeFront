import { io } from "socket.io-client";

export const client = new io('ws://localhost:3000', { transports: ['websocket'] });