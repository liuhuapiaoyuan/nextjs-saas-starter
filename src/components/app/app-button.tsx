'use client'
import React from 'react'
import { Button, ButtonProps } from '../ui/button'
import { Loader } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useFormStatus } from 'react-dom'

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

const SubmitButton = React.forwardRef<HTMLButtonElement, AppButtonProps>(
  ({ type = 'submit', ...props }, ref) => {
    const { pending } = useFormStatus()
    return <AppButton type={type} loading={pending} ref={ref} {...props} />
  }
)
SubmitButton.displayName = 'SubmitButton'

export { AppButton, SubmitButton }
