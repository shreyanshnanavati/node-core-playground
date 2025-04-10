const net = require("net");

const server = net.createServer()

server.on("connection",(socket) => {
  console.log("Connected");

  socket.on("data",(data)=>{
    console.log(data.toString("utf-8"));
  })

})

server.listen(8999,"127.0.0.1",() => {
  console.log("Server is open for connections")
})