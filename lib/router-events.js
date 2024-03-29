import mitt from 'mitt'
import Router from 'next/router'

export const emitter = mitt()

Router.onRouteChangeStart = (...args) => {
  emitter.emit('routeChangeStart', ...args)
}

Router.onRouteChangeComplete = (...args) => {
  emitter.emit('routeChangeComplete', ...args)
}

Router.onRouteChangeError = (...args) => {
  emitter.emit('routeChangeError', ...args)
}
