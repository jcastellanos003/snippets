import { Subject } from 'rxjs'
import { switchMap, map } from 'rxjs/operators'

const country$ = new Subject()
const food$ = new Subject()

const getData = country => food$.pipe(map(food => ({
  country,
  food
})))

country$
  .pipe(switchMap(getData))
  .subscribe(console.log)

country$.next('spain')
food$.next('tapas')

