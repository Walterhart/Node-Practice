// Event Emitter
// node js very Event-driven programming

const EventEmitter = require('events');

const customEmitter = new EventEmitter()

// on(EventName, (parameters)): listen to event

customEmitter.on('response', (name,id) => {
    console.log(`data recieved ${name} with id: ${id}`)
})

customEmitter.on('response', () => {
    console.log(`data recieved again`)
})

// emit : emit an event
// can have many method of event
// orders matter: emit afters on
// can pass argument when emitting event
// emit(on, argument,argument.....)
customEmitter.emit('response', 'john', 34)
