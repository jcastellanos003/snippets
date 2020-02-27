// 1. Two values combined must return a third value of the same set -- OK

// 2. The operation must be associative

// 3. The set must possess a neutral element, when combined a value with the neutral e it should not modify the value

const first = 1 + 2 === 3

first

const second = (1 + 2) + 3 === 1 + (2 + 3)

second

const third = 1 + 0 === 1

third

// rock it baby, we've got a monoid :)