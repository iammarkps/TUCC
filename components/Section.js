import React from 'react'

import { fontSize, Fonts } from '../design'
import { Divider } from './Divider'

export const Section = ({ title, THTitle, children }) => {
  return (
    <React.Fragment>
      <Divider horizontal />
      <section css={{ padding: '20px' }} id={title.toLowerCase()}>
        <div css={{ textAlign: 'center' }}>
          <h1 css={{ fontSize: fontSize(8), marginBottom: '5px' }}>{title}</h1>
          <p
            css={{
              fontSize: fontSize(0),
              color: '#737373',
              fontFamily: Fonts.display,
              fontWeight: 400,
              marginTop: '0px'
            }}
          >
            {THTitle}
          </p>
        </div>
        {children}
      </section>
    </React.Fragment>
  )
}
