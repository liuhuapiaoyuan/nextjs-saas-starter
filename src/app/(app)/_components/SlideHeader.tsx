import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'

export function SlideHeader() {
  return (
    <div className='flex group/slideheader group-data-[slide-state=closed]:p-2 items-center justify-center flex-col p-4 [&>[data-slot=section]+[data-slot=section]]:mt-2.5'>
      <Link
        className='flex w-full p-2 h-auto gap-3 items-center justify-center '
        href='/'
      >
        <Avatar className='h-10 group-hover/slideheader:scale-110  transition-transform w-10'>
          <AvatarImage
            src='/logo.png'
            alt='Avatar'
            className='border rounded-full overflow-hidden'
          />
          <AvatarFallback>OM</AvatarFallback>
        </Avatar>

        <div className='min-w-0  text-left  flex flex-col justify-start  group-data-[slide-state=closed]:sr-only'>
          <span className='block truncate text-xl font-bold text-zinc-950 dark:text-white'>
            灵感笔记
          </span>
        </div>
        {/* <ChevronDown className='text-zinc-500 size-5  group-data-[slide-state=closed]:sr-only' /> */}
      </Link>
    </div>
  )
}
