import http from "http";
import fs from "fs";

const PORT = 5505

const responses = {
    "/":"./pages/index.html",
    "/about":"./pages/about.html",
    "/contact":"./pages/contact.html",
}

const server = http.createServer( (req, res)=>{
    const templatePath = responses[req.url]
    console.log(req.url)
    if(req.url === "/contact-us"){
        res.statusCode = 301
        res.setHeader("Location","/contact")
        res.end()
        return;
    }
    if(templatePath) {
        fs.readFile(templatePath, (err, data) => {
            const template = data.toString()
            res.end(template)
        })
        return
    }
    fs.readFile("./pages/404.html", (err, data) => {
        const template = data.toString()
        res.end(template)
    })
})

server.listen(PORT,()=>{
    console.log(`Server started at ${PORT} \nurl: http://localhost:${PORT}`)
})



