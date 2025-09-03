import dgram from "node:dgram"; //UDP

const socket = dgram.createSocket("udp4");

socket.on("message", (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);
  socket.close();
});

// socket.remoteAddress

socket.send("Hi from Client.js", 4000, "192.168.0.105", () => {
  console.log("Message sent");
});
