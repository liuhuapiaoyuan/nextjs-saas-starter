'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { PanelRightClose, PanelRightOpen } from 'lucide-react'
import { PropsWithChildren, useState } from 'react'
import { Button } from '@/components/ui/button'

export function Aside(props: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <aside
      data-slide-state={isOpen ? 'open' : 'closed'}
      className={cn(
        'relative',
        'inset-y-0 group left-0 transition-all z-10 hidden w-16 flex-col border-r bg-background md:flex',
        isOpen && 'w-[260px]'
      )}
    >
      {props.children}
      <div className='absolute right-0 translate-x-[50%] z-10 top-20'>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className='flex  items-center justify-center w-10 h-10 p-0 rounded-full bg-background border text-muted-foreground transition-colors  hover:bg-accent hover:text-accent-foreground  '
            >
              {isOpen ? (
                <PanelRightOpen className='h-5 w-5' />
              ) : (
                <PanelRightClose className='h-5 w-5' />
              )}
              <span className='sr-only'>切换</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent side='right'>切换菜单</TooltipContent>
        </Tooltip>
        {/* <SlideUserProfile simple={!isOpen} /> */}
      </div>
    </aside>
  )
}
