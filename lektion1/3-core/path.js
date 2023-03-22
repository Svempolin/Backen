const path = require('path')

console.log(path.extname(__filename))


const pathName = path.join(__dirname, 'mapp', 'index.html')

console.log(pathName)