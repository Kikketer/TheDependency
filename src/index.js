export function getPrint (root = '../') {
  console.log(`Attempting to dynamically import Print.js from the-dep: ${root}Print.js`)
  // This is an option to have the library itself do the import instead of the consumer
  // This doesn't work because the consumer then simply tries to grab `/print.js`
  // ... the only way this may work is if the consumer would copy/paste the print.js file from this project
  return import(/*webpackChunkName: "print"*/ `./print.js`)
}

export function vanilla() {
  console.log('You ran Vanilla')
}