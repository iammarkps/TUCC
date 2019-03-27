import React from 'react'

import { media, DESKTOP_MIN_WIDTH } from '../design'
import { Section } from './Section'
import { Paragraph } from './Paragraph'

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  flexDirection: 'column',
  marginTop: '20px',

  [media(DESKTOP_MIN_WIDTH, 'min')]: {
    flexDirection: 'row'
  }
}

export const About = () => {
  return (
    <Section title="About" THTitle="เกี่ยวกับชมรมคอมพิวเตอร์">
      <div css={containerStyle}>
        <Paragraph title="คอมพิวเตอร์ทั่วไป" icon={<i class="fas fa-laptop" />}>
          สำหรับนักเรียนที่มีความสนใจในการทำงานของคอมพิวเตอร์ ระบบเครือข่าย
          การเขียนโปรแกรมทั่วไป การทำงานของระบบสมัยใหม่ เช่น Blockchain, Machine
          Learning ภาษาเขียนโปรแกรมต่าง ๆ รวมถึงการพัฒนาเว็บแอพพลิเคชั่น
        </Paragraph>
        <div
          css={{
            width: '1px',
            maxHeight: '100%',
            background: 'rgba(0, 0, 0, 0.1)',
            margin: '0 5.5rem'
          }}
        />
        <Paragraph
          icon={<i class="fas fa-graduation-cap" />}
          title="คอมพิวเตอร์โอลิมปิค"
          THTitle
        >
          สำหรับนักเรียนที่ต้องการเรียนรู้การเขียนโปรแกรมด้วยภาษา C
          อัลกอริทึ่มต่าง ๆ และการประยุกต์ใช้ในการแข่งขัน
          เหมาะสำหรับคนที่มีความสนใจที่จะเข้าค่าย สอวน. หรือ เป็นผู้แทนอยู่แล้ว
        </Paragraph>
      </div>
    </Section>
  )
}
