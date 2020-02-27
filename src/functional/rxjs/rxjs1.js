import { of, Subject, combineLatest } from 'rxjs';
import { map, filter, takeWhile } from 'rxjs/operators';

let a = (x) => of(x)
const b = new Subject();

(function printData() {
  const subs = combineLatest(
    a([1, 2, 3]), b
  )
  .pipe(
    map(([a, b]) => ({a, b})),
    map(data => {
      const total = data.a.reduce( (curr, next) => curr + next, 0);
      
      return {
        comparer: data.b,
        total
      };
    }),
    takeWhile(({ comparer, total }) => total > comparer)
  );
  
  subs.subscribe(data => console.log('result -->', data.comparer));
  
  setTimeout(() => {
    console.log('OK');
    subs.subscribe(data => console.log('otra vez'))
  }, 1000);
})();

b.next(1);
b.next(2);
b.next(10);
b.next(2);
