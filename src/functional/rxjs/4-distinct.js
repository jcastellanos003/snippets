
import { of } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

const log = x => console.log(x)
const distinctCountry = (x, y) => x.country === y.country

const numbers = of(1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 6, 6)

numbers
  .pipe(distinctUntilChanged())
  .subscribe(log)

const countries = of(
  { country: 'spain', food: 'tapas' },
  { country: 'spain', food: 'patatas bravas' },
  { country: 'england', food: 'chicken tikka masala' },
  { country: 'italy', food: 'penne' },
  { country: 'italy', food: 'fettuccine alfredo' },
)
  
countries
  .pipe(distinctUntilChanged(distinctCountry))
  .subscribe(log)
