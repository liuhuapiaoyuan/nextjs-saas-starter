import { ChatContainer } from './ChatContainer'
import { ChatPane } from './ChatPane'

export default function AIChage() {
  return (
    <div className='flex w-full h-[calc(100vh-48px-64px-3rem)] gap-5 '>
      <div className='hidden lg:block'>
        <ChatPane />
      </div>
      <div className='flex-1 lg:w-1 '>
        <ChatContainer />
      </div>
    </div>
  )
}
