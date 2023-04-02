const { zip, from } = require('rxjs')

const zip$ = zip(from('01234'), from('abcde'))

zip$.subscribe((value) => console.log(value))
