import test from 'ava';
import condit from './index';

test('#1', t => {
  
  t.is(
    'one',
    condit(1)
    .when(1, 'one')
    .when(2, 'two')
    .do()
  )

})

test('#2', t => {
  
  t.is(
    'nooooo',
    condit(3)
    .when(1, 'one')
    .when(2, 'two')
    .otherwise('nooooo')
    .do()
  )

})

test('#3', t => {
  
  t.is(
    'default',
    condit(3, 'default')
    .when(1, 'one')
    .when(2, 'two')
    .do()
  )

})
