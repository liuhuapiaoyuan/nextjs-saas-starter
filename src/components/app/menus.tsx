import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ReactNode } from 'react'
import { SvgComponent, SvgComponentProps } from './svg-component'
import Image from 'next/image'

export interface MenuItemProps {
  href: string
  icon: ReactNode
  label: string
  className?: string
}
/**
 * 菜单
 * @param param0
 * @returns
 */
export function MenuItem({ href, icon, label, className }: MenuItemProps) {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            'group/item',
            'group-data-[slide-state=closed]:aspect-square',
            'group-data-[slide-state=closed]:justify-center',
            'hover:bg-accent hover:text-accent-foreground  ',
            'flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left text-base/6 font-medium text-zinc-950 sm:py-2 sm:text-sm/5 data-[slot=icon]:*:size-6 data-[slot=icon]:*:shrink-0 data-[slot=icon]:*:fill-zinc-500 sm:data-[slot=icon]:*:size-5 data-[slot=icon]:last:*:ml-auto data-[slot=icon]:last:*:size-5 sm:data-[slot=icon]:last:*:size-4 data-[slot=avatar]:*:-m-0.5 data-[slot=avatar]:*:size-7 data-[slot=avatar]:*:[--ring-opacity:10%] sm:data-[slot=avatar]:*:size-6 data-[hover]:bg-zinc-950/5 data-[slot=icon]:*:data-[hover]:fill-zinc-950 data-[active]:bg-zinc-950/5 data-[slot=icon]:*:data-[active]:fill-zinc-950 data-[slot=icon]:*:data-[current]:fill-zinc-950 dark:text-white dark:data-[slot=icon]:*:fill-zinc-400 dark:data-[hover]:bg-white/5 dark:data-[slot=icon]:*:data-[hover]:fill-white dark:data-[active]:bg-white/5 dark:data-[slot=icon]:*:data-[active]:fill-white dark:data-[slot=icon]:*:data-[current]:fill-white',
            className
          )}
        >
          {icon}
          <span className='group-data-[slide-state=closed]:sr-only group-hover/item:translate-x-3  transition-transform text-xs'>
            {label}
          </span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side='right'>{label}</TooltipContent>
    </Tooltip>
  )
}

/**
 * 菜单分组
 * @param props
 * @returns
 */
export function MenuGroup(props: { title: string }) {
  return (
    <div className='group flex items-center justify-between px-container space-x-2.5 py-2.5'>
      <span className='text-xs font-semibold uppercase text-muted-foreground'>
        {props.title}
      </span>
    </div>
  )
}

const isSVG = (url: string) => {
  return url && url.startsWith('<svg')
}

/**
 *  菜单图标
 * @param src 图标地址，兼容图片url，兼容svg/xml
 * @returns
 */
export function MenuIcon(
  props: { src: string } & {
    width?: number
    height?: number
    alt?: string
  } & Omit<SvgComponentProps, 'content'>
) {
  const { src, width = 24, height = 24, alt, ...reset } = props
  return (
    <div>
      {isSVG(src) ? (
        <SvgComponent content={src} {...reset} />
      ) : (
        <Image
          src={src}
          alt={alt ?? ''}
          width={width}
          height={height}
          {...reset}
        />
      )}
    </div>
  )
}
