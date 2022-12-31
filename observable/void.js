const rx = require('rxjs')

const subject = new rx.Subject()
setTimeout(() => subject.next('dummy'), 1000)

const subject2 = new rx.Subject()
setTimeout(() => subject2.next(), 1000)

const subject3 = new rx.Subject()

subject3.subscribe({
  next: () => console.log('One second has passed'),
})

setTimeout(() => subject3.next(), 1000)
