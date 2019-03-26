import React from 'react'
import Head from 'next/head'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { GlobalStyle } from '../design'

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
      </Head>
      <GlobalStyle />
      {children}
    </React.Fragment>
  )
}
