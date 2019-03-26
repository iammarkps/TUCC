import React from 'react'

import { media, DESKTOP_MIN_WIDTH, fontSize, Fonts } from '../design'
import { Divider } from './Divider'

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  marginTop: '40px',

  [media(DESKTOP_MIN_WIDTH, 'min')]: {
    flexDirection: 'row'
  }
}

export const Projects = () => {
  return (
    <React.Fragment>
      <Divider />
      <div css={{ padding: '20px' }}>
        <div css={{ textAlign: 'center' }}>
          <h1 css={{ fontSize: fontSize(8) }}>Projects</h1>
          <p
            css={{
              fontSize: fontSize(0),
              color: '#737373',
              fontFamily: Fonts.display,
              fontWeight: 400
            }}
          >
            ผลงานชมรมคอมพิวเตอร์
          </p>
        </div>

        <div css={containerStyle}>
          <div css={{ maxWidth: '350px' }}>
            <h1>openhouse.triamudom.ac.th</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dignissim massa sed arcu euismod molestie. Sed quis massa
              vulputate, gravida lectus sed, maximus quam. In vel tellus at
              nulla rhoncus suscipit quis sit amet neque. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Nam sem ipsum, pulvinar ac maximus et, volutpat non eros. Nullam
              enim risus.
            </p>
          </div>
          <div css={{ maxWidth: '350px' }}>
            <h1>clubs.triamudom.ac.th</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dignissim massa sed arcu euismod molestie. Sed quis massa
              vulputate, gravida lectus sed, maximus quam. In vel tellus at
              nulla rhoncus suscipit quis sit amet neque. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Nam sem ipsum, pulvinar ac maximus et, volutpat non eros. Nullam
              enim risus.
            </p>
          </div>
          <div css={{ maxWidth: '350px' }}>
            <h1 css={{ fontWeight: 500 }}>ระบบลงทะเบียนชมรม</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              dignissim massa sed arcu euismod molestie. Sed quis massa
              vulputate, gravida lectus sed, maximus quam. In vel tellus at
              nulla rhoncus suscipit quis sit amet neque. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Nam sem ipsum, pulvinar ac maximus et, volutpat non eros. Nullam
              enim risus.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
