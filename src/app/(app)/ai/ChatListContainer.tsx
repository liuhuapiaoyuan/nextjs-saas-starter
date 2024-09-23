'use client'
import { cn } from '@/lib/utils'
import React, { useRef, useEffect, PropsWithChildren } from 'react'

const ChatListContainer = ({
  className,
  children,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const heightRef = useRef<number>(0)
  useEffect(() => {
    const container = containerRef.current
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const change = heightRef.current - entry.contentRect.height
        if (change != 0 && wrapperRef.current) {
          heightRef.current = entry.contentRect.height
          wrapperRef.current.scrollTop = 0
        }
      }
    })
    resizeObserver.observe(container!, {
      box: 'content-box',
    })

    // 初始化时滚动到底部
    if (container) {
    }

    // 清理 observer
    return () => {
      resizeObserver.unobserve(container!)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className={cn(
        'chat-list-container flex flex-col-reverse h-full overflow-y-auto',
        className
      )}
      {...props}
    >
      <div className='' ref={containerRef}>
        {children}
      </div>
    </div>
  )
}

export { ChatListContainer }
