const net = require("net");

const server = net.createServer()

const clients = []
server.on("connection",(socket) => {
  console.log("Connected");
  clients.push(socket)

  socket.on("data",(data)=>{
    // socket.write(data) // we assume that this will send the messages to all the connections, but didnt work why? When a client connects to this server, it's always a new socket connection, independent of who is going to join, so we manage a state of all the socket connections and we will then have to broadcast the message through those sockets, and then the rest of the clients will receive the messages
    
    clients.map((client) => client.write(data))

  })

})

server.listen(8999,"127.0.0.1",() => {
  console.log("Server is open for connections")
})