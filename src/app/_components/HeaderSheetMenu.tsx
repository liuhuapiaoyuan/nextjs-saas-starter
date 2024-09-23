import { SheetClose } from '@/components/ui/sheet'

const Menus = [
  {
    path: '#feature',
    title: '特性',
  },
  {
    path: '#stack',
    title: '技术栈',
  },
  {
    path: '#pricing',
    title: '价格',
  },
  {
    title: '客户评价',
    path: '#review',
  },
]

export function HeaderSheetMenu() {
  return (
    <div className='flex-col flex gap-2'>
      <div className='flex-shrink-0 mb-3'>
        <a href='#' title='' className='flex'>
          <img
            className='w-auto h-8'
            src='https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg'
            alt=''
          />
        </a>
      </div>

      {Menus.map((menu, index) => (
        <SheetClose key={index} asChild>
          <a
            href={menu.path}
            className='text-lg font-bold hover:text-gray-500 py-5'
          >
            {menu.title}
          </a>
        </SheetClose>
      ))}
    </div>
  )
}
