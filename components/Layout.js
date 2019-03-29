import React from 'react'
import Head from 'next/head'
import 'normalize.css'
import '@fortawesome/fontawesome-free/js/all.js'

import { GlobalStyle } from '../design'
import { NavBar } from './NavBar'
import { DesktopOnly } from './Responsive'

const menu = [
  { text: 'Home', href: '/' },
  { text: 'Project', href: '/' },
  { text: 'About', href: '/' }
]

const more = [{ text: 'Github', href: '/' }]

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
      <DesktopOnly>
        <NavBar title="TRIAM UDOM" menu={menu} more={more} />
      </DesktopOnly>
      {children}
    </React.Fragment>
  )
}
