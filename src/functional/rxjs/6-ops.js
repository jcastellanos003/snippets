import {
  Subject,
  zip,
  combineLatest,
  forkJoin
} from 'rxjs'
import { withLatestFrom } from 'rxjs/operators'

const country$ = new Subject()
const food$ = new Subject()

const logger = ([country, food]) => console.log(`${country}: ${food}`)

// operators: zip
// zip(country$, food$).subscribe(logger)
// combineLatest(country$, food$).subscribe(logger)

// country$
  // .pipe(withLatestFrom(food$))
  // .subscribe(logger)

// forkJoin(country$, food$)
  // .subscribe(logger)

// dispatchers
country$.next('spain')
food$.next('tapas')

country$.next('italy')
food$.next('fettuccine')

country$.next('england')
food$.next('chicken tikka masala')

country$.next('france')

// country$.complete()
// food$.complete()
