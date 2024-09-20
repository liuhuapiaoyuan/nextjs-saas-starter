import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, addonAfter, addonBefore, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex gap-2 h-9 w-full items-center rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors  file:font-medium   focus-within:ring-1 focus-within:ring-ring ',
          className
        )}
      >
        {addonBefore}
        <input
          type={type}
          className='flex-1 focus-visible:outline-none file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50'
          ref={ref}
          {...props}
        />
        {addonAfter}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
