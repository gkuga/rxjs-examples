const rx = require('rxjs')
const { ReplaySubject } = rx
const subject = new ReplaySubject(100, 3000 /* windowTime */)

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})

let i = 1
setInterval(() => subject.next(i++), 200)

setTimeout(() => {
  subject.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  })
}, 5000)
