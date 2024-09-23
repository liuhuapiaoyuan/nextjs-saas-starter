import { Package2 } from 'lucide-react'
import Link from 'next/link'
import { AppMenus } from './Menus'
import { SheetClose } from '@/components/ui/sheet'

export async function SlideSheetMenu(props: {
  menus: Array<{
    title: string
    href: string
    icon?: JSX.Element
    keywords?: string[]
  }>
}) {
  const { menus } = props
  return (
    <nav className='grid gap-1 text-lg font-medium'>
      <SheetClose asChild>
        <div className='mb-5'>
          <Link
            href='/dashboard'
            className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
          >
            <Package2 className='h-5 w-5 transition-all group-hover:scale-110' />
            <span className='sr-only'>Dashboard</span>
          </Link>
        </div>
      </SheetClose>
      {menus.map((menu, index) => {
        return (
          <SheetClose asChild key={index}>
            <Link
              href={menu.href}
              className='hover:bg-accent p-3  hover:text-accent-foreground'
            >
              {menu.title}
            </Link>
          </SheetClose>
        )
      })}
    </nav>
  )
}
