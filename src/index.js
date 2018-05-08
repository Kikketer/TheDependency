export function getPrint () {
  // This is an option to have the library itself do the import instead of the consumer
  return import(/*webpackChunkName: "print"*/ './print.js')
}

export function vanilla() {
  console.log('You ran Vanilla')
}