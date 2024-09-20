'use client'
import * as React from 'react'

import { cn } from '@/lib/utils'
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const textAreaRef = React.useRef<HTMLTextAreaElement>(null)
    React.useImperativeHandle(ref, () => textAreaRef.current!)
    React.useEffect(() => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto'
      }
    }, [props.value])
    const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = 'auto'
      }
      const scrollHeight = event.target.scrollHeight // 获取内容高度
      event.target.style.height = `${scrollHeight}px` // 设置内容高度

      props.onInput?.(event)
    }

    return (
      <textarea
        ref={textAreaRef}
        className={cn(
          'flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        onInput={handleInput} // 添加事件处理
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
