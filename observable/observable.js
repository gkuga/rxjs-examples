var rxjs = require('rxjs')

const observable = new rxjs.Observable(subscriber => {
	const intervalId = setInterval(() => {
		subscriber.next('hi')
	}, 1000)

	return {
		unsubscribe: () => clearInterval(intervalId)
	}
})
const subscription = observable.subscribe((x) => console.log(x))
setTimeout(() => subscription.unsubscribe(), 3000)
