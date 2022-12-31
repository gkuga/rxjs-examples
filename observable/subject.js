const rx = require('rxjs')

const subject = new rx.Subject()

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

subject.next(1)
subject.next(2)

console.log('From observable...')

const observable = rx.from([1, 2, 3])

subject.next(0)

console.log('Before subscribe')
console.log(subject)
observable.subscribe(subject)
console.log('After subscribe')
console.log(subject)

console.log('From multicasted...')

const subject2 = new rx.Subject()

const observable2 = rx.from([1, 2, 3])

const multicasted = observable2.pipe(rx.multicast(subject2))

console.log('Before subscribe...')
console.log(subject2)

multicasted.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})

multicasted.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

console.log('After subscribe...')
console.log(subject2)

// This is, under the hood, `subject2.subscribe(subject2)`:
multicasted.connect()
