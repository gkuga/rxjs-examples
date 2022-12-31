var rxjs = require('rxjs')

rxjs.interval(1000).subscribe((v => console.log(`value: ${v}`)))
