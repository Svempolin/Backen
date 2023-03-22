const { copyFileSync } = require('fs')
const os = require('os')

// console.log(os)

console.log(os.platform())
console.log(os.arch())
console.log(os.cpus())
console.log(os.totalmem())
console.log(os.homedir())

