import React from 'react'

export const Tag: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className = '', children, ...props }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-border px-2 py-0.5 text-xs text-textMuted bg-surface/60 ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
