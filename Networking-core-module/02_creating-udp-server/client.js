import dgram from "node:dgram"; //UDP

const socket = dgram.createSocket("udp4");

socket.on("message", (message, remoteAddress) => {
  console.log(message.toString());
  console.log(remoteAddress);
  socket.close();
});

socket.send("Hi from Client.js", 4000, "192.168.1.101", () => {
  console.log("Message sent");
});
