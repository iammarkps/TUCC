import React from 'react'

import { Title } from '../components/Title'
import { Layout } from '../components/Layout'
import { Projects } from '../components/Projects'
import { About } from '../components/About'
import { Footer } from '../components/Footer'

export default () => (
  <Layout>
    <Title />
    <About />
    <Projects />
    <Footer />
  </Layout>
)
