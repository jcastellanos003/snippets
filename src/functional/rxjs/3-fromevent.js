// creational operators

import { fromEvent } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

document.body.innerHTML = 
  '<button id="test">Something</button>'

const button = document.getElementById('test')

const clicks = fromEvent(button, 'click')

clicks
  .pipe(debounceTime(3000))
  .subscribe(() => console.log('triggered'))

button.click()
