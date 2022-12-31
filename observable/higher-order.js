const rxjs = require('rxjs')

const a = rxjs.interval(500).pipe(rxjs.map((v) => 'a' + v), rxjs.take(3))
const b = rxjs.interval(500).pipe(rxjs.map((v) => 'b' + v), rxjs.take(3))
const higherOrderObservable = rxjs.of(a, b, [1])

// This will just print Observable instances
higherOrderObservable.subscribe((value) => console.log(value))

// This perform all Observable instances
higherOrderObservable.pipe(rxjs.concatAll()).subscribe((value) => console.log(value))
