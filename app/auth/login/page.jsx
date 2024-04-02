import { UserAuthForm } from '@/components/forms/login-form'
import React from 'react'

function Login() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <UserAuthForm className={"w-3/12"} />
    </div>
  )
}

export default Login