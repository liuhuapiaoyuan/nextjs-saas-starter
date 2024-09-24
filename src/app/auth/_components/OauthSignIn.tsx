'use client'

import { Button } from '@/components/ui/button'
import { signInWithOAuth } from '@/lib/auth'
import { type Provider } from '@supabase/supabase-js'
import { Github } from 'lucide-react'
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
      {oAuthProviders.map(provider => (
        <form key={provider.name} className='pb-2' action={handleSubmit}>
          <input type='hidden' name='provider' value={provider.name} />
          <Button type='submit' className='w-full'>
            <span className='mr-2'>{provider.icon}</span>
            <span>{provider.displayName}</span>
          </Button>
        </form>
      ))}
    </>
  )
}
