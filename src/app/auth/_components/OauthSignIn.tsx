import { signInWithOAuth } from '@/lib/auth'
import { type Provider } from '@supabase/supabase-js'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { SubmitButton } from '@/components/app/app-button'
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
      icon: <FaGithub className='size-4' />,
    },
    {
      name: 'google',
      displayName: 'Google',
      icon: <FcGoogle className='size-4' />,
    },
  ]

  return (
    <>
      <div className='relative py-3 px-20 text-gray-400'>
        <div className='border-b border-gray-200 h-2 mb-2' />
        <div className='absolute top-0 left-0 bottom-0 flex justify-center items-center right-0'>
          <span className='bg-white text-sm px-3'>OR</span>
        </div>
      </div>
      <div className='grid gap-1'>
        {oAuthProviders.map(provider => (
          <form key={provider.name} action={signInWithOAuth}>
            <input type='hidden' name='provider' value={provider.name} />
            <SubmitButton className='w-full' icon={provider.icon}>
              <span>{provider.name}</span>
            </SubmitButton>
          </form>
        ))}
      </div>
    </>
  )
}
