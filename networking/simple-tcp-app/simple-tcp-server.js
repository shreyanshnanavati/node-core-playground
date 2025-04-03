const net = require("net")


const server = net.createServer((socket) => {
  socket.on("data",(data) => {
    console.log(data.toString('utf-8'));
  })
})

server.listen(7878,'127.0.0.1',() => {
  console.log(`Server started ${JSON.stringify(server.address())}`);
})