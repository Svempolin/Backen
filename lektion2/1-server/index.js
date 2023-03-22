const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{

    const readFileAndRespond = (path) => {
        fs.readFile( path, (err, data) => {
            if(err){
                console.log(err)
                res.statusCode = 500
            return res.end('<h1>ERROR</h1>')
            }
            res.end(data)
        })
    }

 console.log(req.url)//talar om för oss vart vi förösker ansluta

 switch(req.url) {
    case'/':
    readFileAndRespond('./views/index.html')
    return res.statusCode= 200
    break
    case'/about':
    readFileAndRespond('./views/about.html')
    return res.statusCode = 200
    break
    case '/about-us':
        res.statusCode = 301
        res.setHeader('Location','/about')
    default:
    readFileAndRespond('./views/404.html')
    return res.statusCode = 404

 }


})


const PORT = process.env.PORT || 9999;

server.listen(PORT, 'localhost', () => {
    console.log('server is running on http://localhost:' + PORT)

})