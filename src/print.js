import React from 'react'
// This is a test of a lazy load inside a library
console.log('The print.js module has loaded...')

// Imagine I'm pretty big with lots of dependencies and such
export default ({}) => {
  return (
    <p>You printed something</p>
  )
}
