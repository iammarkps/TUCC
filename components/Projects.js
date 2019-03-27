import React from 'react'

import { media, DESKTOP_MIN_WIDTH } from '../design'
import { Paragraph } from './Paragraph'
import { Section } from './Section'

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  marginTop: '20px',

  [media(DESKTOP_MIN_WIDTH, 'min')]: {
    flexDirection: 'row'
  }
}

export const Projects = () => {
  return (
    <Section title="Projects" THTitle="ผลงานชมรมคอมพิวเตอร์">
      <div css={containerStyle}>
        <Paragraph title="openhouse.triamudom.ac.th">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          dignissim massa sed arcu euismod molestie. Sed quis massa vulputate,
          gravida lectus sed, maximus quam. In vel tellus at nulla rhoncus
          suscipit quis sit amet neque. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nam sem ipsum, pulvinar
          ac maximus et, volutpat non eros. Nullam enim risus.
        </Paragraph>
        <Paragraph title="clubs.triamudom.ac.th">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          dignissim massa sed arcu euismod molestie. Sed quis massa vulputate,
          gravida lectus sed, maximus quam. In vel tellus at nulla rhoncus
          suscipit quis sit amet neque. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nam sem ipsum, pulvinar
          ac maximus et, volutpat non eros. Nullam enim risus.
        </Paragraph>
        <Paragraph title="ระบบลงทะเบียนชมรม" THTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          dignissim massa sed arcu euismod molestie. Sed quis massa vulputate,
          gravida lectus sed, maximus quam. In vel tellus at nulla rhoncus
          suscipit quis sit amet neque. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Nam sem ipsum, pulvinar
          ac maximus et, volutpat non eros. Nullam enim risus.
        </Paragraph>
      </div>
    </Section>
  )
}
