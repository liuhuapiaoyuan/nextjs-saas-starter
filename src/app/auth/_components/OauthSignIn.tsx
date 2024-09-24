'use client'

import { Button } from '@/components/ui/button'
import { signInWithOAuth } from '@/lib/auth'
import { type Provider } from '@supabase/supabase-js'
import { Github, Loader, SplineIcon } from 'lucide-react'
import { useState, useTransition } from 'react'

type OAuthProviders = {
  name: Provider
  displayName: string
  icon: JSX.Element
}

export default function OauthSignIn() {
  const oAuthProviders: OAuthProviders[] = [
    {
      name: 'github',
      displayName: 'GitHub',
      icon: <Github className='h-5 w-5' />,
    },
  ]

  const [pending, startTransition] = useTransition()
  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        await signInWithOAuth(formData.get('provider') as 'github')
      } catch (error) {
        if (error instanceof Error) {
          alert(error.message)
        }
      }
    })
  }

  return (
    <>
      <div className='relative py-5 px-20 text-gray-400'>
        <div className='border-b border-gray-200 h-2 mb-2' />
        <div className='absolute top-0 left-0 bottom-0 flex justify-center items-center right-0'>
          <span className='bg-white text-sm px-3'>OR</span>
        </div>
      </div>
      {oAuthProviders.map(provider => (
        <form key={provider.name} className='pb-2' action={handleSubmit}>
          <input type='hidden' name='provider' value={provider.name} />
          <Button
            data-loading={pending}
            type='submit'
            className='w-full data-[loading=true]:bg-primary/50'
          >
            <span className='mr-2'>
              {pending ? (
                <Loader className='size-4 animate-spin' />
              ) : (
                provider.icon
              )}
            </span>

            <span>{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </>
  )
}
