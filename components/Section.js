import React from 'react'

import { fontSize, Fonts } from '../design'
import { Divider } from './Divider'

export const Section = ({ title, THTitle, children }) => {
  return (
    <React.Fragment>
      <Divider horizontal />
      <section css={{ padding: '20px' }}>
        <div css={{ textAlign: 'center' }}>
          <h1 css={{ fontSize: fontSize(8) }}>{title}</h1>
          <p
            css={{
              fontSize: fontSize(0),
              color: '#737373',
              fontFamily: Fonts.display,
              fontWeight: 400
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
