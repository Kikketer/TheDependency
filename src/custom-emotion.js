import * as React from 'react'
import createEmotion from 'create-emotion'

let emotion = {}
let theDoc
export function getEmotional(doc) {
  if (doc) {
    theDoc = doc
  } else if(theDoc) {
    doc = theDoc
  } else {
    throw Error('Custom Emotions have not been created')
  }
  emotion = createEmotion({}, { container: doc.getElementsByTagName('head')[0] })
  return emotion
}

const { css, cx, injectGlobal, keyframes } = emotion
export { css, cx, injectGlobal, keyframes }
