// export function getPrint () {
//   // This is an option to have the library itself do the import instead of the consumer
//   return import(/*webpackChunkName: "print"*/ './print.js')
// }

import { otherDep } from 'the-other-dep'

export function vanilla() {
  console.log('You ran Vanilla')
}

export function withTheOtherDep() {
  console.log('I have the other dep:')
  otherDep()
}