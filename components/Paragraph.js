import React from 'react'

export const Paragraph = ({
  children,
  title,
  maxWidth = '350px',
  THTitle,
  icon
}) => {
  if (THTitle) {
    if (icon) {
      return (
        <div css={{ maxWidth: `${maxWidth}` }}>
          <h1 css={{ fontWeight: 500 }}>
            {icon} {title}
          </h1>
          <p>{children}</p>
        </div>
      )
    }
    return (
      <div css={{ maxWidth: `${maxWidth}` }}>
        <h1 css={{ fontWeight: 500 }}>{title}</h1>
        <p>{children}</p>
      </div>
    )
  } else {
    return (
      <div css={{ maxWidth: `${maxWidth}` }}>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    )
  }
}
