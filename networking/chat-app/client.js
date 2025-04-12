const net = require("net");
const readline = require("readline/promises")

const rl = readline.createInterface({
  "input": process.stdin,
  "output": process.stdout
})

const socket = net.createConnection({ host: "127.0.0.1", port: 8999 }, async () => {
  console.log("connected to the server");

  const message = await rl.question("Enter message >")

  socket.write(message)

});

socket.on("data",(data) => {
  console.log(data.toString("utf-8"));
})

socket.on("end", () => {
  console.log("Connection Ended");
});
