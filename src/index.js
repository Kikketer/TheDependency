export function getPrint () {
  return import(/*webpackChunkName: "print"*/ './print.js')
}

export function vanilla() {
  console.log('You ran Vanilla')
}

// getPrint().then(component => {
//   console.log('Got the print component')
// })