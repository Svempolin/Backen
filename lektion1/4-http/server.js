const http = require('http');

const server = http.createServer((req, res)=> {
   console.log('request made') 
   console.log(reg.url)

})

server.listen(9999, () => console.log('server is running on http://localhost:9999'))