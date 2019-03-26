import React from 'react'

export const Card = ({ width, height, children }) => {
  return (
    <div
      css={{
        backgroundColor: '#FFF',
        borderRadius: '30px',
        borderColor: 'grey',
        width,
        height,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 20px'
      }}
    >
      {children}
    </div>
  )
}
