function say() {
  let name = 'Julian'
  
  function sayName() {
    console.log(name)
  }
  
  return sayName
}

const sayJulian = say()

sayJulian()

function makeCounter(counter, step) {
  
  function next() {
    return counter += step;
  }
  
  return next;
}

const counter2 = makeCounter(0, 2)

counter2()
counter2()
counter2()

console.log('======================================')

function useState(initialValue) {
  let _val = initialValue

  function state() {
    return _val
  }
  function setState(newVal) {
    _val = newVal
  }

  return [state, setState]
}
var [foo, setFoo] = useState(0)
foo()
setFoo(1)
foo()