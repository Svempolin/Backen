const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res)=> {

    // omm du försöker hämta detta ksit i det
if(req.url === '/favicon.ico') return  

let fileName;

    switch(req.url){
        case'/':
        fileName = 'index.html'
        res.statusCode = 200
        res.setHeader('Content-type', 'text/html')
         break;
         case '/about':
        fileName = 'about.html'
            break;
            default:
                fileName = 'notfound.html'
                res.statusCode = 404
                break;
    }

const filePath = path.join(__dirname,'scr', fileName)

fs.readFile(filePath, (err, data)=> {
    if(err){
        console.log(err)
        return
    }

    res.end(data)
})



//    console.log('request made') 
//    console.log(req.url)
// res.write('<h1>HELLO </h1>')
// res.end()
})

server.listen(9999, () => console.log('server is running on http://localhost:9999'))