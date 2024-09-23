'use client'

import { startTransition, useState } from 'react'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'
import { Loader } from 'lucide-react'

type ErrorFallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}

export default function ErrorFallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  const router = useRouter()
  const [isResetting, setIsResetting] = useState(false)
  function retry() {
    setIsResetting(true)
    startTransition(() => {
      router.refresh()
      resetErrorBoundary()
      setIsResetting(false)
    })
  }

  return (
    <div className='border border-orange-700 p-4 text-orange-700'>
      <p className='m-0 mb-2 p-0'>Something went wrong: {error.message}</p>
      <Button onClick={() => retry()} disabled={isResetting} className=''>
        {isResetting ? <Loader className='size-4 animate-spin' /> : null}
        Retry
      </Button>
    </div>
  )
}
