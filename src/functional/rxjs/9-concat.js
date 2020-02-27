import { of, from } from 'rxjs'; 
import { map, delay, concatMap } from 'rxjs/operators';

const log = type => val => console.log(type, val)

const getData = (param) => {
  const delayTime = Math.floor(Math.random() * 10000) + 1;

  return of(
    `Result with params: ${param} and delay: ${delayTime}`
  ).pipe(
    delay(delayTime)
  )
}

// using map
from(['spain','italy','france','england']).pipe(
  map(getData)
)
  .subscribe(val => val.subscribe(log('map')));

// using concatMap
from(['spain','italy','france','england']).pipe(
  concatMap(getData)
).subscribe(log('switch'));
