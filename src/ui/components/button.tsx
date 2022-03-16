import React from 'react'

export type ButtonProps = {
  className?: string
  href?: string
  onClick?: (ev: React.MouseEvent) => void
}

export const Button: React.FC<ButtonProps> = ({ className, href, onClick, children }) => {
  if (href) {
    return (
      <a className={className} href={href} onMouseDown={(ev) => ev.preventDefault()}>
        {children}
      </a>
    )
  } else {
    return (
      <button type="button" className={className} onClick={onClick} onMouseDown={(ev) => ev.preventDefault()}>
        {children}
      </button>
    )
  }
}
