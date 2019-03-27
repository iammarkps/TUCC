import React from 'react'

export const Divider = ({ horizontal, vertical }) => {
  if (horizontal) {
    return (
      <div
        css={{
          maxWidth: '100%',
          height: '1px',
          background: 'rgba(0, 0, 0, 0.1)',
          margin: '0 5.5rem'
        }}
      />
    )
  } else if (vertical) {
    return (
      <div
        css={{
          width: '1px',
          maxHeight: '100%',
          background: 'rgba(0, 0, 0, 0.1)',
          margin: '0 5.5rem'
        }}
      />
    )
  }
}
