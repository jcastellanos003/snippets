import { of, from } from 'rxjs'; 
import { map, delay, switchMap } from 'rxjs/operators';

const log = type => val => console.log(type, val)

const getData = param => of(`Result with param ${param}`)
.pipe(delay(1000))

// using map
from(['spain','italy','france','england']).pipe(
  map(getData)
)
  .subscribe(val => val.subscribe(log('map')));

// using switchMap
from(['spain','italy','france','england']).pipe(
  switchMap(getData)
).subscribe(log('switch'));
