'use client'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { PropsWithChildren } from 'react'
import { UserCard } from './_components/UserCard'
import { cn } from '@/lib/utils'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
export default function ProfileLayout(props: PropsWithChildren) {
  const pathname = usePathname()
  const router = useRouter()
  const menus = [
    { name: '基本', href: '/profile' },
    { name: '活动', href: '/profile/activity' },
    { name: '订阅', href: '/profile/subscript' },
    { name: '安全', href: '/profile/security' },
    { name: '偏好', href: '/profile/setting' },
  ]

  const currentMenu = menus.find(menu => menu.href === pathname)
  return (
    <AnimatePresence>
      <div className='w-full h-full flex flex-col gap-5'>
        <div className=''>
          <h1 className='text-2xl '>{currentMenu?.name}</h1>
        </div>

        <div className='flex gap-5'>
          <nav className=' flex-col w-56 gap-4 text-sm text-muted-foreground hidden md:flex'>
            <UserCard />
            {menus.map(menu => (
              <Link
                key={menu.href}
                href={menu.href}
                className={cn(
                  'group/profile-menu-item',
                  `font-semibold ${
                    pathname === menu.href ? 'text-primary' : ''
                  }`
                )}
              >
                <span className='group-hover/profile-menu-item:translate-x-4 transition-transform'>
                  {menu.name}
                </span>
              </Link>
            ))}
          </nav>
          <div className='flex-1 w-1'>
            <Tabs
              value={pathname}
              defaultValue={pathname}
              className='w-full mb-2 md:hidden'
              onValueChange={link => router.push(link)}
            >
              <TabsList>
                {menus.map(menu => (
                  <TabsTrigger key={menu.href} value={menu.href}>
                    {menu.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {props.children}
          </div>
        </div>
      </div>
    </AnimatePresence>
  )
}
