'use server'

import { redirect } from 'next/navigation'
import { createClient } from './supabase/server'
import { Provider } from '@supabase/supabase-js'
import { getURL } from './helpers'

/**
 *  signs up the user and redirects to the sign in page
 * @param formData
 */
export async function signInWithPassword(formData: FormData) {
  const email = String(formData.get('email')).trim()
  const password = String(formData.get('password')).trim()
  const supabase = createClient()
  const { error, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    console.log('登录失败', error)
    throw new Error(error.message)
  }
  redirect('/')
}
/**
 *  signs up the user and redirects to the sign in page
 * @param formData
 */
export async function signUpWithPassword(formData: FormData) {
  const email = String(formData.get('email')).trim()
  const password = String(formData.get('password')).trim()
  const supabase = createClient()
  const { error } = await supabase.auth.signUp({
    email,
    password,
  })

  if (error) {
    console.log('注册失败', error)
    throw new Error(error.message)
  }
  redirect('/auth/signin')
}
/**
 *  signs out the user and redirects to the sign in page
 */
export async function signOut() {
  const supabase = createClient()
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log('登出失败', error)
    throw new Error(error.message)
  }
  redirect('/')
}

export async function getUser() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error) {
    return redirect('/auth/signin')
  }
  if (data.user) {
    return data.user
  }
  redirect('/auth/signin')
}

/**
 * 第三方登录
 */
export async function signInWithOAuth(provider: Provider) {
  const supabase = createClient()
  const redirectTo = getURL('/auth/callback')
  const res = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
      scopes: 'email',
    },
  })
  if (res.data?.url) {
    return redirect(res.data.url)
  }
  throw new Error('登录失败:' + (res.error ?? ''))
}
