const fs = require('fs');

//läsa filer

fs.readFile('./mapp/text.txt','utf8', (err, data) => {

    if(err){
        console.log(err)
        return
    }
    // console.log(data.toString())
    console.log(data)
})

console.log('detta ligger efter read file')


//fs.readFileSync läser uppe från och ner synkron 

// fs.writeFile('./mapp/text.txt', 'Ny text', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('skrev till filen')
// })

// LÄGGA TILL I SLUTET

// fs.appendFile('./mapp/text.txt', '\n denna text är tilllagd', () => {
//     console.log('appended text')
// })



//Döpa om en fil
// fs.writeFile('./mapp/text3.txt', 'Ny text', (err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('skrev till filen')
// })

// fs.rename('./mapp/text3.txt', './mapp/text2.txt', (err)=> {
//     if (err){
//         console.log(err)
//         return
//     }
//     console.log("bytte namn")
// })

// Mapar 


// KOLLA om mappar finns 

// if(!fs.existsSync('./NyMapp')){
// // skapa ny map
//     fs.mkdir('./NyMapp', (err)=> {
//         if(err){
//             return
//         }
    
//         console.log('mapp skapd')
//     })

// } else {
//     fs.rmdir('./NyMapp', (err)=> {
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log('tog bort mappen')
//     })
// }

// ta bort en fil

// if(fs.existsSync('./mapp/text2.txt')) {
//     fs.unlink('./mapp/text2.txt')
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('jag tog bort en fil')
// }
const pathName = (path.join(__dirname, 'mapp', 'text.txt'))

const path = require('path')
fs.appendFile( pathName, '\nNu lägger jag till text igen', () => {
    console.log ('done')
})