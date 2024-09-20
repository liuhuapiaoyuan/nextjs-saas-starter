'use client'
import * as React from 'react'

import { cn } from '@/lib/utils'
import { Input } from './input'
import { Eye, EyeOff, Lock } from 'lucide-react'
import { useControllableValue } from '@/app/hooks/useControllableValue'

export interface InputPasswordProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  addonBefore?: React.ReactNode
  addonAfter?: React.ReactNode
  showContent?: boolean
}

const InputPassword = React.forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ className, addonAfter, addonBefore, showContent, ...props }, ref) => {
    const [state, setState] = useControllableValue<boolean>(showContent, false)

    return (
      <Input
        ref={ref}
        type={state ? 'text' : 'password'}
        className={className}
        addonBefore={
          <>
            {addonBefore}
            <Lock size={15} />
          </>
        }
        addonAfter={
          <>
            {state ? (
              <EyeOff
                className='cursor-pointer'
                onClick={() => setState(a => !a)}
                size={15}
              />
            ) : (
              <Eye
                className='cursor-pointer'
                onClick={() => setState(a => !a)}
                size={15}
              />
            )}
            {addonAfter}
          </>
        }
        {...props}
      />
    )
  }
)
InputPassword.displayName = 'InputPassword'

export { InputPassword }
