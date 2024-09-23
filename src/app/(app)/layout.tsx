import type { PropsWithChildren } from 'react'
import { Header } from './_components/Header'
import { getMenus } from '@/service/menu.service'
import { SvgComponent } from '@/components/app/svg-component'
import { Aside } from './_components/Aside'
import { UserCard } from './_components/UserCard'
import SlideMenu from './_components/SlideMenu'
import { SlideHeader } from './_components/SlideHeader'

export default function AppLayout(props: PropsWithChildren) {
  const { children } = props
  const menus = getMenus()
  const showMenus = menus.map(z => ({
    title: z.title,
    href: z.href,
    keywords: z.keywords,
    icon: z.svg ? (
      <SvgComponent className='size-5' content={z.svg} />
    ) : undefined,
  }))
  return (
    <div className='flex h-screen w-full '>
      <Aside>
        <SlideHeader />
        <SlideMenu menus={showMenus} />
        <div className='px-2 md:py-2   group-data-[slide-state=closed]:hidden  '>
          <UserCard />
        </div>
      </Aside>
      <div className='flex flex-1 w-1 relative  overflow-auto  flex-col '>
        <Header menus={showMenus} />
        <main className='grid  flex-1 items-start gap-4 p-4 sm:px-6 md:gap-8'>
          {children}
        </main>
        <footer>
          <div className='flex justify-center items-center h-16'>
            <div className='text-center text-xs'>© 2022 NextAuth.js</div>
          </div>
        </footer>
      </div>
    </div>
  )
}
