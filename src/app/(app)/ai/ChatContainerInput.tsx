'use client'

import { Button } from '@/components/ui/button'
import { Mic } from 'lucide-react'
import { submit } from './actions'
import { useFormStatus } from 'react-dom'
import { Textarea } from '@/components/ui/textarea'

function SubmitButton() {
  const { pending } = useFormStatus()
  return <Button>{pending ? '发送...' : '发送'}</Button>
}

export function ChatContainerInput() {
  return (
    <form
      action={async formData => {
        const content = formData.get('chat-input')?.toString()
        content && (await submit(content))
        return ''
      }}
    >
      <label htmlFor='chat-input' className='sr-only'>
        prompt
      </label>
      <div className='relative w-full  items-end  rounded-xl border border-transparent  bg-slate-200 p-2  text-sm text-slate-900  focus-within:border-slate-500    dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-500 sm:text-base flex'>
        <Button variant='ghost' className=' group hover:bg-transparent  px-2  '>
          <Mic className='text-muted-foreground group-hover:text-foreground' />
        </Button>
        <Textarea
          id='chat-input'
          name='chat-input'
          className='block flex-1 w-1 resize-none border-0 focus-visible:ring-0 focus-visible:shadow-none  shadow-none'
          placeholder='给“ChatGPT”发送消息'
          rows={1}
          required
        />
        <SubmitButton />
      </div>
    </form>
  )
}
