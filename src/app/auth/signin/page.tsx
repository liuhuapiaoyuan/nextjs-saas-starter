import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AuthSigninPage() {
  return (
    <div className='w-full lg:grid h-[100vh] lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>登录</h1>
            <p className='text-balance text-muted-foreground'>
              输入您的电子邮件以登录您的账户
            </p>
          </div>
          <div className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>电子邮件</Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>密码</Label>
                <Link
                  href='/forgot-password'
                  className='ml-auto inline-block text-sm underline'
                >
                  忘记密码？
                </Link>
              </div>
              <Input id='password' type='password' required />
            </div>
            <Button type='submit' className='w-full'>
              登录
            </Button>
            <Button variant='outline' className='w-full'>
              使用 Google 登录
            </Button>
          </div>
          <div className='mt-4 text-center text-sm'>
            没有账户？{' '}
            <Link href='signup' className='underline'>
              注册
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden bg-muted lg:block'>
        <Image
          priority={false}
          src='/placeholder.svg'
          alt='图片'
          width='1920'
          height='1080'
          className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
        />
      </div>
    </div>
  )
}
