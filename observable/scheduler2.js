const rx = require('rxjs')
const { Observable, observeOn, asyncScheduler } = rx

const observable = new Observable((proxyObserver) => {
  proxyObserver.next(1);
  proxyObserver.next(2);
  proxyObserver.next(3);
  proxyObserver.complete();
}).pipe(
  observeOn(asyncScheduler)
);

const finalObserver = {
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
};

console.log('just before subscribe');
observable.subscribe(finalObserver);
console.log('just after subscribe');

// The async Scheduler operates with a setTimeout or setInterval, even if the given delay was zero. As usual, in JavaScript, setTimeout(fn, 0) is known to run the function fn earliest on the next event loop iteration. This explains why got value 1 is delivered to the finalObserver after just after subscribe happened
