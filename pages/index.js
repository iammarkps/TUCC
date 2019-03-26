import React from 'react'

import { Title } from '../components/Title'
import { Layout } from '../components/Layout'
import { NavBar } from '../components/NavBar'
import { Projects } from '../components/Projects'

import { Responsive } from '../design'

const menu = [
  { text: 'Home', href: '/' },
  { text: 'Project', href: '/' },
  { text: 'About', href: '/' }
]

export default () => (
  <Layout>
    <Responsive>
      <NavBar
        title="TRIAM UDOM"
        menu={menu}
        more={[{ text: 'Github', href: '/' }]}
      />
    </Responsive>
    <Title />
    <Projects />
  </Layout>
)
