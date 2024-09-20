import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { InputPassword } from '@/components/ui/input-password'

export default async function ProfileSecurityPage() {
  return (
    <div className='grid gap-5'>
      <Card>
        <CardHeader>
          <CardTitle>密码修改</CardTitle>
          <CardDescription>修改您的账号密码</CardDescription>
        </CardHeader>
        <CardContent>
          <form className='grid gap-2'>
            <InputPassword placeholder='原始密码' />
            <InputPassword placeholder='新密码' />
            <InputPassword placeholder='新密码(重复)' />
          </form>
        </CardContent>
        <CardFooter className='border-t px-6 py-4'>
          <Button>更新密码</Button>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>绑定账号</CardTitle>
          <CardDescription>绑定的账号信息</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid gap-2'>
            <div className='flex items-center border-b border-sky-50 py-4'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='/providers/github.png' alt='Avatar' />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>Github</p>
                <p className='text-sm text-muted-foreground'>已绑定</p>
              </div>
              <div className='ml-auto '>
                <Button variant='outline'>解除绑定</Button>
              </div>
            </div>
            <div className='flex items-center py-4'>
              <Avatar className='h-9 w-9'>
                <AvatarImage src='/providers/wechat.svg' alt='Avatar' />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div className='ml-4 space-y-1'>
                <p className='text-sm font-medium leading-none'>微信公众号</p>
                <p className='text-sm text-muted-foreground'>未绑定</p>
              </div>
              <div className='ml-auto '>
                <Button variant='outline'>绑定</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>账户删除</CardTitle>
          <CardDescription>删除账户后无法恢复，请您谨慎处理！</CardDescription>
        </CardHeader>
        <CardContent>
          <form className='flex flex-col gap-4'>
            <Input placeholder='输入操作密码' />
          </form>
        </CardContent>
        <CardFooter className='border-t px-6 py-4'>
          <Button className='bg-red-800'>删除账户</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
