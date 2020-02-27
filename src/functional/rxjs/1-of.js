// creational operators

import { of, range } from 'rxjs'
import { map } from 'rxjs/operators'

const obs1 = of(1, 2, 3)

const log = x => console.log(`--> ${x}`)

const sumArray = arr => arr.reduce(
  (curr, acc) => curr + acc, 0
)

obs1.subscribe(log)

const obs2 = of([1, 2, 3])

obs2.pipe(map(sumArray)).subscribe(log)
