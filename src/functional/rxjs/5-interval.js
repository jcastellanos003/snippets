import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
 
const numbers = interval(1000);
 
numbers
  .pipe(take(4))
  .subscribe(log);
