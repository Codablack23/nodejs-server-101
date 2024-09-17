import http from "http";

const PORT = 5505

const server = http.createServer( (req, res)=>{
    res.end("Welcome to my Server")
})
server.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})



