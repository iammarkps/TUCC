import React from 'react'
import Head from 'next/head'
import { keyframes, css } from '@emotion/core'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { GlobalStyle } from '../design'
import { NavBar } from './NavBar'
import { DesktopOnly } from './Responsive'

const menu = [
  { text: 'Home', href: 'title' },
  { text: 'About', href: 'about' },
  { text: 'Project', href: 'projects' }
]

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

/**
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content
 */
export const Layout = props => {
  const { children } = props
  return (
    <React.Fragment>
      <Head>
        <title>Triam Udom Computer Club</title>
        <link rel="stylesheet" href="https://use.typekit.net/gtb6mip.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Kanit:400,500,700"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <GlobalStyle />
      <div
        css={css`
          animation: ${fadein} 3s;
        `}
      >
        <DesktopOnly>
          <NavBar title="TRIAM UDOM" menu={menu} />
        </DesktopOnly>
        {children}
      </div>
    </React.Fragment>
  )
}
