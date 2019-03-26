import React from 'react'
import Link from 'next/link'

import { Fonts, fontSize } from '../design'

const headerStyle = {
  maxWidth: '100%',
  position: 'sticky',
  top: 0,
  zIndex: 1,
  backgroundColor: '#FFF',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 6px 20px'
}

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
        <a>{text}</a>
      </Link>
    )
  })
}

export const NavBar = ({ title, menu, more }) => {
  return (
    <header css={headerStyle}>
      <div css={nav}>
        <div css={{ flex: 1 }}>{title}</div>
        <div css={{ flex: 1 }}>{linkMapper(menu)}</div>
        <div css={{ flex: 1 }}>{linkMapper(more)}</div>
      </div>
    </header>
  )
}
