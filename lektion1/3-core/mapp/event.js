const EventEmitter = require('events');

// class Emitter extends EventEmitter {

//     lunch(course){
//     this.emit('lunch', course)
//     }
//     greet(name){
//     this.emit('greet', name)
//     }
// }

// const myEmitter = new Emitter()

// myEmitter.on('lunch', (value) => {

// console.log('nu är det lunch och jag åt ' + value)

// })

// myEmitter.lunch('noodles')

// myEmitter.on('greet', (value) => {
//     console.log('hej' + value)
// })
// myEmitter.greet('Lotta')
// myEmitter.greet('Tova')
// myEmitter.greet('Lea')
// myEmitter.greet('Pim')
// myEmitter.on('lunch', () => {
//     console.log('det var gott med mat')
// })

// myEmitter.emit('lunch')

const minEmitter = new EventEmitter()

minEmitter.on('test', (data) => {
    console.log('det var det här du skrev ut:' + data)
})

minEmitter.emit('test', 'haj 111')