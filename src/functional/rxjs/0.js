// RxJS

// it's functional
// code more organised
// is full of operators to transform data / manage subscriptions
// is reactive
// everything is a stream --> observable

class Subject {
  constructor() {
    this.callbacks = [];
  }
  
  subscribe(fn) {
    this.callbacks.push(fn)
  }
  
  unsubscribe(fn) {
    this.callbacks.pop(fn)
  }
  
  publish(data) {
    this.callbacks.forEach(fn => fn(data))
  }
}

// usage
const subject = new Subject()
const log = x => console.log(x)

subject.subscribe(log) // n times

// API-like
setTimeout(() => {
  subject.publish([
    {
      country: 'spain'
    },
    {
      country: 'italy'
    },
    {
      country: 'england'
    }
  ])
}, 1000)

// iterator

const numbers = [3, 6, 9]

const iterator = numbers[Symbol.iterator]()
iterator.next().value
iterator.next().value
iterator.next().value
