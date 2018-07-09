import React from 'react'
import { css } from 'emotion'
// This is a test of a lazy load inside a library
console.log('The print.js module has loaded...')

// Imagine I'm pretty big with lots of dependencies and such
export default ({}) => {
  console.log('Rendering the print library')
  return (
    <p className={css({color: 'purple'})}>You printed something</p>
  )
}
