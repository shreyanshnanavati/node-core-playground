const net = require("net")


const client = net.createConnection({port:7878,host:'127.0.0.1'},() => {
  client.write("Hello world ")
})