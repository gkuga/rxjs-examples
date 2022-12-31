var rxjs = require('rxjs')

rxjs.of(1, 2, 3)
	.pipe(rxjs.map((x) => x * x))
	.subscribe((v) => console.log(`value: ${v}`));

[1, 2, 3].map(x => x * x).map(v => console.log(`value: ${v}`))
