'use server'

import { redirect } from 'next/navigation'
import { createClient } from './supabase/server'
import { Provider } from '@supabase/supabase-js'
import {
  getErrorRedirect,
  getStatusRedirect,
  getURL,
  isValidEmail,
} from './helpers'

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
export async function signInWithOAuth(formData: FormData) {
  const provider = String(formData.get('provider')).trim() as Provider
  const supabase = createClient()
  const redirectTo = getURL('/auth/callback')
  const res = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
    },
  })
  if (res.data?.url) {
    return redirect(res.data.url)
  }
  throw new Error('登录失败:' + (res.error ?? ''))
}

/**
 * @description 更新密码
 * @param formData
 * @returns
 */
export async function updatePassword(formData: FormData) {
  const password = String(formData.get('password')).trim()
  const passwordConfirm = String(formData.get('passwordConfirm')).trim()
  let redirectPath: string

  // Check that the password and confirmation match
  if (password !== passwordConfirm) {
    redirectPath = getErrorRedirect(
      '/signin/update_password',
      'Your password could not be updated.',
      'Passwords do not match.'
    )
  }

  const supabase = createClient()
  const { error, data } = await supabase.auth.updateUser({
    password,
  })

  if (error) {
    redirectPath = getErrorRedirect(
      '/signin/update_password',
      'Your password could not be updated.',
      error.message
    )
  } else if (data.user) {
    redirectPath = getStatusRedirect(
      '/',
      'Success!',
      'Your password has been updated.'
    )
  } else {
    redirectPath = getErrorRedirect(
      '/signin/update_password',
      'Hmm... Something went wrong.',
      'Your password could not be updated.'
    )
  }

  return redirectPath
}

export async function resetPasswordForEmail(formData: FormData) {
  const callbackURL = getURL('/auth/callback/reset_password')

  // Get form data
  const email = String(formData.get('email')).trim()
  let redirectPath: string

  if (!isValidEmail(email)) {
    redirectPath = getErrorRedirect(
      '/auth/forgot_password',
      'Invalid email address.',
      'Please try again.'
    )
  }

  const supabase = createClient()

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: callbackURL,
  })

  if (error) {
    redirectPath = getErrorRedirect(
      '/auth/forgot_password',
      error.message,
      'Please try again.'
    )
  } else if (data) {
    redirectPath = getStatusRedirect(
      '/auth/forgot_password',
      'Success!',
      'Please check your email for a password reset link. You may now close this tab.',
      true
    )
  } else {
    redirectPath = getErrorRedirect(
      '/auth/forgot_password',
      'Hmm... Something went wrong.',
      'Password reset email could not be sent.'
    )
  }

  return redirectPath
}
