import React from 'react'
import { getEmotional } from './custom-emotion'

export default () => {
  // console.log('the CSS: ', getEmotional())
  const { css } = getEmotional()
  return <p className={css({ backgroundColor: 'orange' })}>Hey there</p>
}
