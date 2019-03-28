import React from 'react'
import { Global } from '@emotion/core'

export const DESKTOP_MIN_WIDTH = 960
export const BASE_FONT_SIZE = '16px'
export const BASE_FONT_SIZE_SM = '14px'

export const Colors = {
  triamPink: '#F06292'
}

export function media(width, type) {
  if (type === 'max') {
    return `@media (max-width: ${width}px)`
  } else {
    return `@media (min-width: ${width}px)`
  }
}

export function getSystemFonts() {
  return [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Oxygen',
    'Ubuntu',
    'Cantarell',
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    'sans-serif'
  ]
}

export const Fonts = {
  display: ['proxima-nova', 'Kanit', ...getSystemFonts()].join(', '),
  body: ['Kanit', ...getSystemFonts()].join(', ')
}

/**
 * Computes the absolute font size for
 * [typographic scale](http://spencermortensen.com/articles/typographic-scale/).
 *
 * We use [7 tone equal temperament](https://en.wikipedia.org/wiki/Equal_temperament#5_and_7_tone_temperaments_in_ethnomusicology)
 * which is the [tuning of Thai traditional instruments](https://en.wikipedia.org/wiki/Ranat_ek#Tuning).
 *
 * @param {number} n The font size, where
 *
 *   - `-14` = 0.25x normal font size.
 *   - `-7` = 0.5x normal font size.
 *   - `0` = normal font size.
 *   - `7` = 2x normal font size.
 *   - `14` = 4x normal font size.
 */
export function fontSize(n) {
  return `${(2 ** (n / 7)).toFixed(3)}rem`
}

export const GlobalStyle = () => (
  <Global
    styles={{
      body: {
        background: '#fff',
        fontFamily: Fonts.body,
        color: '#212121',
        fontSize: BASE_FONT_SIZE_SM,
        lineHeight: '1.5'
      },
      a: {
        color: '#fff',
        marginRight: '20px',
        textDecoration: 'none'
      },
      h1: {
        fontFamily: Fonts.display
      },

      [media(DESKTOP_MIN_WIDTH, 'min')]: {
        body: { fontSize: BASE_FONT_SIZE }
      }
    }}
  />
)
