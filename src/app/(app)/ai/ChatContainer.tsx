import { Button } from '@/components/ui/button'
import { Copy, Menu, MicrochipIcon, ThumbsDown, ThumbsUp } from 'lucide-react'
import { ChatContainerInput } from './ChatContainerInput'
import Image from 'next/image'
import { getMessages } from './actions'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ChatPane } from './ChatPane'
import { ChatListContainer } from './ChatListContainer'
function ChatItem(props: { role: 'user' | 'assistant'; content: string }) {
  const { role = 'user', content } = props
  const color = role === 'user' ? '363536' : '354ea1'
  return (
    <>
      {role !== 'user' && (
        <div className='mb-2 flex w-full flex-row justify-end gap-x-2 text-slate-500'>
          <button className='hover:text-primary-600'>
            <ThumbsUp className='size-5' />
          </button>
          <button className='hover:text-primary-600' type='button'>
            <ThumbsDown className='size-5' />
          </button>
          <button className='hover:text-primary-600' type='button'>
            <Copy className='size-5' />
          </button>
        </div>
      )}
      <div
        className={cn(
          'flex mb-4   px-2 py-4 sm:px-4',
          role === 'assistant' &&
            ' rounded-xl bg-slate-50  py-6 dark:bg-slate-900 sm:px-4'
        )}
      >
        <Image
          priority={false}
          alt='user'
          width={100}
          height={100}
          className='mr-2 flex h-8 w-8 rounded-full sm:mr-4'
          // https://dummyimage.com/256x256/354ea1/ffffff&text=G
          src={`https://dummyimage.com/256x256/${color}/ffffff&text=${role.charAt(0)}`}
        />

        <div className='flex max-w-3xl items-center'>
          <p>{content}</p>
        </div>
      </div>
    </>
  )
}
export async function ChatContainer() {
  const messages = await getMessages()
  return (
    <div className='flex h-full gap-2 w-full flex-col relative'>
      <div className='flex-1 h-1 flex flex-col  rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 dark:bg-background/85 dark:text-slate-300 sm:text-base sm:leading-7'>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant='ghost'
              className='w-10 h-10 p-0  lg:hidden flex items-center justify-center '
            >
              <Menu className='size-5 ' />
            </Button>
          </SheetTrigger>
          <SheetContent className='p-0'>
            <ChatPane />
          </SheetContent>
        </Sheet>

        <div className='flex-1 h-1'>
          <ChatListContainer>
            {messages.map((message, index) => (
              <ChatItem
                key={index}
                role={message.role as 'user'}
                content={message.content}
              />
            ))}
          </ChatListContainer>
        </div>
      </div>

      <div className='mt-4 flex w-full gap-x-2 overflow-x-auto whitespace-nowrap text-xs text-slate-600 dark:text-slate-300 sm:text-sm'>
        <button className='rounded-lg bg-slate-200 p-2 hover:bg-primary hover:text-slate-200 dark:bg-foreground/20 dark:hover:bg-foreground/10 dark:hover:text-slate-50'>
          Regenerate response
        </button>
        <button className='rounded-lg bg-slate-200 p-2 hover:bg-primary hover:text-slate-200 bg-foreground/20 dark:hover:bg-foreground/10 dark:hover:text-slate-50'>
          Use prompt suggestions
        </button>
        <button className='rounded-lg bg-slate-200 p-2 hover:bg-primary hover:text-slate-200 bg-foreground/20 dark:hover:bg-foreground/10 dark:hover:text-slate-50'>
          Toggle web search
        </button>
      </div>

      <ChatContainerInput />
    </div>
  )
}
