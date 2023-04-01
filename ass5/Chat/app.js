const express=require("express");
const app=express();

const http=require("http").createServer(app)
const io=require("socket.io")(http)


io.on('connect', function(client){
    
     client.emit('connected')
  
    client.on('join', function(name){
      	client.username = name;
      console.log(client.username)
      })

    client.on('message', function(data){
        io.emit('msg', client.username + ': ' + data)

    })
  })

app.get('/', function(req, res){
    res.sendFile(__dirname+'/Chat.html')
  })

http.listen(5000)