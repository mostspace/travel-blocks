import React from 'react'
import cn from 'classnames'

type ButtonBaseProps = {
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
}

type ButtonAsButton = ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' }
type ButtonAsLink = ButtonBaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' }

type ButtonProps = ButtonAsButton | ButtonAsLink

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as: Component = 'button', ...props }, ref) => {
    const base = 'inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus-visible:ring-2 ring-offset-2 transition-all duration-200 cursor-pointer'
    const variants = {
      primary: 'bg-primary text-primaryText hover:opacity-90 hover:shadow-lg active:opacity-80 active:scale-95 ring-primary',
      ghost: 'bg-transparent text-text border border-border hover:bg-surface active:scale-95 ring-border'
    }
    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 text-base',
      lg: 'h-12 px-5 text-lg'
    }
    
    const classes = cn(base, variants[variant], sizes[size], className)
    
    if (Component === 'a') {
      return <a ref={ref as React.Ref<HTMLAnchorElement>} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)} />
    }
    
    return <button ref={ref as React.Ref<HTMLButtonElement>} className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)} />
  }
)

Button.displayName = 'Button'
