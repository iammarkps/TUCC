import React from 'react'

import { Title } from '../components/Title'
import { Layout } from '../components/Layout'
import { NavBar } from '../components/NavBar'
import { Projects } from '../components/Projects'
import { About } from '../components/About'
import { Footer } from '../components/Footer'

import { DesktopOnly } from '../components/Responsive'

const menu = [
  { text: 'Home', href: '/' },
  { text: 'Project', href: '/' },
  { text: 'About', href: '/' }
]

const more = [{ text: 'Github', href: '/' }]

export default () => (
  <Layout>
    <DesktopOnly>
      <NavBar title="TRIAM UDOM" menu={menu} more={more} />
    </DesktopOnly>
    <Title />
    <Projects />
    <About />
    <Footer />
  </Layout>
)
