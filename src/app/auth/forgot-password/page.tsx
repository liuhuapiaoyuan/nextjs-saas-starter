import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signInWithPassword } from '@/lib/auth'
import OauthSignIn from '../_components/OauthSignIn'
import { AppButton } from '@/components/app/app-button'

export default function AuthSigninPage() {
  return (
    <div className='w-full lg:grid h-[100vh] lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]'>
      <div className='flex items-center justify-center py-12'>
        <div className='mx-auto grid w-[350px] gap-6'>
          <div className='grid gap-2 text-center'>
            <h1 className='text-3xl font-bold'>找回密码</h1>
            <p className='text-balance text-muted-foreground'>
              输入您的电子邮件以找回您的密码
            </p>
          </div>
          <form action={signInWithPassword} className='grid gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>电子邮件</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <AppButton type='submit' className='w-full'>
              发送到邮箱
            </AppButton>
          </form>
          <div className='grid gap-4'>
            <OauthSignIn />
          </div>
          <div className='mt-4 text-center text-sm'>
            返回
            <Link href='signup' className='underline'>
              登录
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
