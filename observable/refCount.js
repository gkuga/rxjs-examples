const rx = require('rxjs')
const { interval, Subject, multicast, refCount } = rx

const source = interval(500)
const subject = new Subject()
const refCounted = source.pipe(multicast(subject), refCount())
let subscription1, subscription2

console.log(refCounted)
// This calls `connect()`, because
// it is the first subscriber to `refCounted`
console.log('observerA subscribed')
subscription1 = refCounted.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})
console.log('observerA just have subscribed')
console.log(refCounted)

setTimeout(() => {
  console.log('observerB subscribed')
  subscription2 = refCounted.subscribe({
    next: (v) => console.log(`observerB: ${v}`),
  })
  console.log('observerB just have subscribed')
}, 1500)

setTimeout(() => {
  console.log('observerA unsubscribed')
  subscription1.unsubscribe()
  console.log('observerA just have unsubscribed')
}, 2200)

// This is when the shared Observable execution will stop, because
// `refCounted` would have no more subscribers after this
setTimeout(() => {
  console.log('observerB unsubscribed')
  subscription2.unsubscribe()
  console.log('observerB just have unsubscribed')
  console.log(refCounted)
}, 5000)
