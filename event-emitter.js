const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', () => {
    console.log('Data received.');
})
customEmitter.on('response', (name, id) => {
    console.log(`Name: ${name}, id: ${id}`);
})

customEmitter.emit('response', 'Jefferson', 237883)