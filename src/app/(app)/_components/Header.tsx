import { Package2, PanelLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { QuickMenuButton } from './QuickMenuButton'
import { SlideSheetMenu } from './SlideSheetMenu'
import { ThemeSwitcher } from './ThemeSwitcher'
import { UserProfile } from './UserProfile'

export function Header(props: {
  menus: Array<{
    title: string
    href: string
    icon?: JSX.Element
    keywords?: string[]
  }>
}) {
  return (
    <header className='sticky bg-white shadow top-0 z-50 flex py-2 items-center gap-4 border-b  px-4  sm:h-auto sm:border-0 sm:px-6 sm:shadow-none border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size='icon' variant='outline' className='md:hidden '>
            <PanelLeft className='h-5 w-5' />
            <span className='sr-only'>切换菜单</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left' className='sm:max-w-xs  '>
          <SlideSheetMenu menus={props.menus} />
        </SheetContent>
      </Sheet>
      <Breadcrumb className='hidden md:flex'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='#'>仪表盘</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href='#'>产品</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>编辑产品</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='relative ml-auto flex-1 md:grow-0'>
        <QuickMenuButton />
      </div>
      <ThemeSwitcher />
      <UserProfile>
        <Button
          variant='outline'
          size='icon'
          className='overflow-hidden size-8 rounded-full'
        >
          <Image
            priority={false}
            src='/logo.png'
            width={36}
            height={36}
            alt='头像'
            className='overflow-hidden rounded-full dark:bg-foreground'
          />
        </Button>
      </UserProfile>
    </header>
  )
}
