const rx = require('rxjs')
const { BehaviorSubject } = rx
const subject = new BehaviorSubject(0) // 0 is the initial value

console.log('Before subscribe')

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})

console.log('After subscribe')

console.log('Stream 1..')
subject.next(1)
console.log('Stream 2..')
subject.next(2)

subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

subject.next(3)
