'use server'

import { redirect } from 'next/navigation'
import { createClient } from './supabase/server'

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
    console.log('获取用户信息失败', error)
    redirect('/auth/sign')
  }
  if (data.user) {
    return data.user
  }
  redirect('/auth/sign')
}
