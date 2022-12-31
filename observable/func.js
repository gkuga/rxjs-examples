const subscribe = subscriber => {
  const intervalId = setInterval(() => {
    subscriber.next('hi')
  }, 1000)

  return function unsubscribe() {
    clearInterval(intervalId)
  }
}
const unsubscribe = subscribe({ next: (x) => console.log(x) })
setTimeout(() => unsubscribe(), 3000)
