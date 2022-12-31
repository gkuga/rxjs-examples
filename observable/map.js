const {
  Subject,
  concatMap,
  mergeMap,
  map,
  of,
  range,
  interval,
  zipWith,
} = require('rxjs')

const observable = of(5)
  .pipe(
    mergeMap(value => {
      return range(1, value)
        .pipe(
          zipWith(interval(500))
        )
    }),
    map(values => {
      console.log(values)
      return values[0]
    })
  )
console.log(observable)
console.log('Before subscribe')
observable.subscribe(value => {
  console.log(value)
})

const observable2 = of(5)
  .pipe(
    mergeMap(value => {
      return Promise.resolve(value)
    })
  )
observable2.subscribe(value => {
  console.log(value)
})

const subject = new Subject()

subject
  .pipe(
    concatMap(obj => { // concatMap, mergeMap, switchMap で結果が変わる
      return httpGet(obj.url, obj.delay)
    }),
    map(res => JSON.parse(res).ResultData)
  )
  .subscribe(value => {
    console.log(value)
  })

subject.next({ url: 'http://foo', delay: 3500 })
subject.next({ url: 'http://bar', delay: 300 })
subject.next({ url: 'http://baz', delay: 100 })


function httpGet(url, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      const obj = { ResultData: url + ' -> resolved' }
      resolve(JSON.stringify(obj))
    }, delay)
  })
}
