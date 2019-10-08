import React from 'react'
import App, { Container } from 'next/app'
import smoothscroll from 'smoothscroll-polyfill'
import * as Sentry from '@sentry/browser'

Sentry.init({
  dsn: 'https://7d26e74fb9a143adb0c50a00c4a810d2@sentry.io/1422443'
})

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  componentDidMount() {
    smoothscroll.polyfill()
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key])
      })
      Sentry.captureException(error)
    })
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
