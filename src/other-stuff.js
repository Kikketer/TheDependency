// This is a test of a lazy load inside a library
console.log('The other-stuff.js module has loaded')

export default () => {
  console.log('wow the other stuff does stuff!')
}
