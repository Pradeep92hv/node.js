const logEvents =require('./logEvents')

const EventEmitter= require('events')
class MyEmitter extends EventEmitter {};

//initialise obj

const myEmitter =new MyEmitter();


// add listener for the log evnet

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() =>{

    // emit event
    myEmitter.emit('log','Log Event emitted');
},2000);