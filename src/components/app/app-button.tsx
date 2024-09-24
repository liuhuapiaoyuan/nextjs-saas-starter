'use client'
import React from 'react'
import { Button, ButtonProps } from '../ui/button'
import { Loader } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AppButtonProps extends ButtonProps {
  /**
   * Whether the button is loading or not.
   * @default false
   */
  loading?: boolean
  /**
   * The icon to display on the button.
   *
   * @default null
   */
  icon?: React.ReactNode
}

/**
 *
 */
const AppButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ loading, className, children, onClick, icon, ...props }, ref) => {
    return (
      <Button
        onClick={e => {
          if (loading) return
          onClick?.(e)
        }}
        data-loading={!!loading}
        ref={ref}
        className={cn('data-[loading=true]:bg-primary/50', className)}
        {...props}
      >
        <span className='mr-2'>
          {loading ? <Loader className='size-4 animate-spin' /> : icon}
        </span>
        {children}
      </Button>
    )
  }
)
AppButton.displayName = 'AppButton'

export { AppButton }
