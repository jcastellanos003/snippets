// creational operators

import { range } from 'rxjs'
import { filter } from 'rxjs/operators'

const log = x => console.log(`--> ${x}`)

const greaterThan = y => x => y > x

const obs1 = range(1, 4)

obs1.pipe(filter(greaterThan(3))).subscribe(log)

