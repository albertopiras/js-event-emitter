# JS Event Emitter


Simple Event Emitter  to use events without necessary DOM interactions or complex external libraries.


## Example


var myEventEmitter = new EventEmitter();

myEventEmitter.on('build', ()=>{console.log('building 1')});
myEventEmitter.on('build', ()=>{console.log('building 2')});

myEventEmitter.emit('build');


// building 1
// building 2


## License

MIT





