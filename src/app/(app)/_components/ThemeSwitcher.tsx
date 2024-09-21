'use client'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Loader, Moon, Sun } from 'lucide-react'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

const ThemeList = [
  {
    value: 'light',
    icon: <Sun width={15} />,
    label: 'Light Mode',
  },
  {
    value: 'dark',
    icon: <Moon width={15} />,
    label: 'Dark Mode',
  },
]
function ThemeContent() {
  const { theme } = useTheme()
  return ThemeList.find(item => item.value === theme)?.icon
}
const ThemeContentDynamic = dynamic(() => Promise.resolve(ThemeContent), {
  ssr: false,
  loading: () => <Loader width={15} className='animate animate-spin' />,
})

function ThemeSwitcher() {
  const { setTheme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-8'
        >
          <ThemeContentDynamic />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {ThemeList.map(item => (
          <DropdownMenuItem key={item.value}>
            <div
              className='flex  items-center gap-1'
              onClick={() => setTheme(item.value)}
            >
              {item.icon}
              {item.label}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export { ThemeSwitcher }
