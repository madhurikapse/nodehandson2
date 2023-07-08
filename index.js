const http = require("http")

const app = http.createServer((req,res) =>{
    if(req.url=='/html'){
    res.write("<h1>node defination</h1>")
    res.write("<p>It uses the V8 JavaScript engine, developed by Google, which is known for its fast and efficient execution of JavaScript code. Node.js is built on an event-driven, non-blocking I/O model, making it particularly suitable for building scalable and high-performance network applications.</p>")
    res.end()
    }

    else if(req.url=='/json'){
        const node ={
            "<h1>What is Node.JS?</h1>": "<p>Node.js is an open-source, cross-platform runtime environment that allows you to run JavaScript code on the server-side. It uses the V8 JavaScript engine, developed by Google, which is known for its fast and efficient execution of JavaScript code. Node.js is built on an event-driven, non-blocking I/O model, making it particularly suitable for building scalable and high-performance network applications.</p>"
        }
        res.write(JSON.stringify(node));
        res.end()
    }
    else{
        res.write('<h1>404 Not Found</h1>');
        res.end();
    }
})

app.listen(6000,()=>{
    console.log("server is running on port 6000");
})