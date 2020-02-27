/*
** disclaimer: 
** i'll be live coding, aaaand you know ~sh**t happens~
*/


"================== FP ===================="

// Rules

// 1. pure functions

const sum = (a, b) => a + b

sum(1, 2)
sum(1, 2)

// 1.1 impure function

const sumImpure = (a, b) => Math.random(a, b)

sumImpure(1, 2)
sumImpure(1, 2)

// 2. avoid shared state / intermediate state

let myVar = {}

const foo = () => myVar = { a: true }
const bar = () => myVar = { a: false }

myVar
foo()
bar()

// 3. immutable data

let rawRobot = { heartBeat: true, a: () => console.log('something') }

let firstRobot = {
  ...rawRobot,
  arms: { left: true }
}

firstRobot
rawRobot

// 4. avoid side-effects

function some() {
  setTimeout(() => console.log('something'), 2000)
}

some()

"================== CLOSURES ===================="

function sayHi() {
  let _name = 'Julian'
  
  function salute() {
    return _name
  }
  
  return salute
}

const sayJulian = sayHi()

sayJulian()

function makeCounter(counter, step) {
  function next() {
    return counter += step
  }
  
  return next
}

const counter2 = makeCounter(10, 2)
const counter10 = makeCounter(10, 10)

counter2()
counter2()
counter2()
counter10()
counter10()

"================== CURRYING ===================="

// curried function
const concatNames = firstName => lastName => `${firstName} ${lastName}`

const fullName = concatNames('Julian')('Castellanos')

fullName

// why use curried functions anyways?
// interface
const divisible = mod => num => num % mod

const div2 = divisible(2)
const div3 = divisible(3)
const isEven = num => div2(num) === 0

div2(8)
div2(9)
div3(9)
div3(8)

isEven(8)
isEven(9)


// is cool, how can i use this thing in a more realistic example

// interfaces
const pipe = (...fns) => x => fns.reduce((f, g) => g(f), x)
const compose = (f, g) => x => g(f(x))
const add = x => y => x + y
const mult = x => y => x * y
const greaterThan = x => y => y > x
const map = fn => arr => arr.map(fn)
const join = term => arr => arr.join(term)
const split = term => arr => arr.split(term)
const first = arr => arr[0]
const fromNumber = x => +x
const fromArray = x => [x]
const log = label => value => (console.log(`${label}: ${value}`), value)

// implementations
const add10 = add(10)
const mult10 = mult(10)
const greaterThan2 = greaterThan(2)
const toNumber = map(fromNumber)
const splitEmpty = split('')
const joinEmpty = join('')

// HOFs
const addAndMult = compose(
  compose(add10, add10),
  compose(mult10, mult10)
)

const mathFlow = pipe(
  add10,
  log('add step'),
  mult10,
  log('multiply step'),
  fromArray,
  joinEmpty,
  splitEmpty,
  log('split empty'),
  first,
  fromNumber,
  greaterThan2
)

"compose ===============>"

addAndMult(1)
addAndMult(2)

"pipe ===============>"

mathFlow(1)






































