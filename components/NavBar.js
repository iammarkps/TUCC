import React, { useState } from 'react'
import Link from 'next/link'

import { Fonts, fontSize } from '../design'

const nav = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: 'auto',
  padding: '20px',
  textAlign: 'center',
  fontFamily: Fonts.display,
  fontWeight: 'bold',
  fontSize: fontSize(2)
}

/**
 *
 * @param {Object[]} list
 * @param {string} list[].text
 * @param {string} list[].text
 */
function linkMapper(list) {
  return list.map(l => {
    const { text, href } = l
    return (
      <Link href={href}>
        <a
          css={{
            color: '#000',
            marginRight: '20px',
            textDecoration: 'none',
            transition: 'border .2s ease',

            '&:hover': {
              borderBottom: '2px solid #000'
            }
          }}
        >
          {text}
        </a>
      </Link>
    )
  })
}

export class NavBar extends React.Component {
  state = {
    top: true
  }

  checkScrollPosition = () => {
    const { pageYOffset } = window
    if (pageYOffset > 100) {
      this.setState({ top: false })
    } else if (pageYOffset === 0) {
      this.setState({ top: true })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollPosition)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition)
  }

  render() {
    const { title, menu, more } = this.props
    const { top } = this.state
    return (
      <header
        css={{
          maxWidth: '100%',
          position: 'sticky',
          top: 0,
          zIndex: 1,
          backgroundColor: '#FFF',
          boxShadow: top ? '' : 'rgba(0, 0, 0, 0.1) 0px 6px 20px'
        }}
      >
        <div css={nav}>
          <div css={{ flex: 1 }}>{title}</div>
          <div css={{ flex: 1 }}>{linkMapper(menu)}</div>
          <div css={{ flex: 1 }}>{linkMapper(more)}</div>
        </div>
      </header>
    )
  }
}
