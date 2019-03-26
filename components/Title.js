import React from 'react'
import { Fonts, fontSize, media, DESKTOP_MIN_WIDTH, Colors } from '../design'

const titleStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontSize: fontSize(7),
  fontWeight: 'bold',
  fontFamily: Fonts.display,

  [media(DESKTOP_MIN_WIDTH, 'min')]: {
    height: 'calc(100vh - 69.25px)',
    fontSize: fontSize(14)
  }
}

const triamPink = { color: Colors.triamPink }

export const Title = () => {
  return (
    <div css={titleStyle}>
      <div>
        <div>
          <span>
            <span css={triamPink}>T</span>RIAM <span css={triamPink}>U</span>
            DOM
          </span>
        </div>
        <div>COMPUTER CLUB</div>
        <div
          css={{
            fontSize: fontSize(0),

            [media(DESKTOP_MIN_WIDTH, 'min')]: {
              fontSize: fontSize(7)
            }
          }}
        >
          ชมรมคอมพิวเตอร์ โรงเรียนเตรียมอุดมศึกษา
        </div>
      </div>
    </div>
  )
}
