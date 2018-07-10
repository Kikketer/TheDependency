import React from 'react'
import { getEmotional } from './custom-emotion'
import PrintDep from './print-dep'
// import { css } from 'emotion'
// This is a test of a lazy load inside a library
console.log('The print.js module has loaded...')

// Imagine I'm pretty big with lots of dependencies and such
export default ({ document }) => {
  // This would be handled in the root of the dependency (but that's exactly this)
  const { css } = getEmotional(document)

  console.log('Rendering the print library')
  return (
    <div className={css({ color: 'purple' })}>
      <PrintDep />
      <p>You printed something</p>
    </div>
  )
}
