import http from "http";

const PORT = 5505

const responses = {
    "/":"This is is the home page",
    "/about":"This is is the about page",
    "/contact":"This is is the contact-us page",
}

const server = http.createServer( (req, res)=>{
    const responseText = responses[req.url]
    console.log(responseText)
    if(responseText) {
        return res.end(responseText)
    }
    res.end("This page does not exist")
})
server.listen(PORT,()=>{
    console.log(`Server started at ${PORT} url: http://localhost:${PORT}`)
})



