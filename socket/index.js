// import express from 'express'
// import morgan from 'morgan'
// import path from 'path'
// import SocketIO from 'socket.io'

// const app = express()

// app.set('views',path.resolve(__dirname,'views'))
// app.set('view engine','ejs')

// app.use(morgan('dev'))

// app.get('/',(request,response) => {
//     response.render('index')
// })

// let server = app.listen(8000,() => {
//     console.log('6666666')
// })

// let io = SocketIO(server)
// io.on('connection',(socket) => {
//     console.log('connected')
//     socket.on('disconnect',() => {
//         console.log('disconnected')
//     })
//     socket.on('message',(msg) => {
//         io.emit('message', msg)
//         console.log(msg)
//     })

// })


var http = require('http')
http.createServer(function(request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'})
    response.end('hello world')
}).listen(8080)

console.log('6666')
