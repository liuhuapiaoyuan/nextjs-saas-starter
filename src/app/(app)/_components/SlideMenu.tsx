'use client'

import { usePathname } from 'next/navigation'
import { MenuGroup, MenuItem, MenuItemProps } from '@/components/app/menus'

export default function SlideMenu(props: {
  menus: Array<Omit<MenuItemProps, 'label'> & { title: string }>
}) {
  const { menus } = props
  const pathname = usePathname()

  return (
    <div
      className='flex
    gap-2
  group-data-[slide-state=closed]:gap-4
  group-data-[slide-state=closed]:p-2
  flex-1 flex-col overflow-y-auto p-4 [&>[data-slot=section]+[data-slot=section]]:mt-8'
    >
      <MenuGroup title='应用' />
      {menus.map((menu, index) => (
        <MenuItem
          key={index}
          href={menu.href}
          icon={menu.icon}
          label={menu.title}
          className={
            menu.href === pathname ? 'bg-accent text-accent-foreground' : ''
          }
        />
      ))}
    </div>
  )
}
