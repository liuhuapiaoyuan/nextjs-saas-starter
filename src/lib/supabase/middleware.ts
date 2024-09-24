import { createServerClient } from '@supabase/ssr'
import { redirect } from 'next/navigation'
import { type NextRequest, NextResponse } from 'next/server'
import { getUser } from '../auth'

export const createClient = (request: NextRequest) => {
  // Create an unmodified response
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })
  const cookieStore = request.cookies
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookies) {
          cookieStore.clear()
          cookies.map(cookie => {
            cookieStore.set(cookie)
          })
        },
      },
    }
  )

  return { supabase, response }
}

export const updateSession = async (request: NextRequest) => {
  try {
    // This `try/catch` block is only here for the interactive tutorial.
    // Feel free to remove once you have Supabase connected.
    const { supabase, response } = createClient(request)

    // This will refresh session if expired - required for Server Components
    // https://supabase.com/docs/guides/auth/server-side/nextjs
    const user = await getUser()
    if (!user) {
      return NextResponse.redirect(new URL('/auth/signin', request.nextUrl))
    }
    return response
  } catch (e) {
    // If you are here, a Supabase client could not be created!
    // This is likely because you have not set up environment variables.
    // Check out http://localhost:3000 for Next Steps.
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}
