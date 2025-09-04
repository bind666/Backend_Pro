import dgram from "node:dgram"; //UDP
import { createReadStream } from "node:fs";
import { readFile } from "node:fs/promises";

const socket = dgram.createSocket("udp4");

socket.on("message", (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);
  socket.close();
});

const readStream = createReadStream(
  "C:\\Users\\Sachi\\OneDrive\\Pictures\\Saved Pictures\\mahadev.jpg",
  // "C:\Users\Sachi\OneDrive\Desktop\Vite + React - Google Chrome 2025-06-24 12-50-20.mp4",
  // c:\Users\Sachi\OneDrive\Pictures\Saved Pictures\mahadev.jpg

  { highWaterMark: 1000 }
);

readStream.on("data", (chunk) => {
  socket.send(chunk, 4000, "192.168.0.243");
  console.log("Message Sent");
  
});

readStream.on("end", () => {
  socket.send("EOF", 4000, "192.168.0.243", () => {
    console.log("Message sent");
  });
});
