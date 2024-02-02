import Auth from '@/components/auth';
import React, { use } from 'react'

function Page() {
  const user = false;

  if(!user) return <div className='container h-screen mx-auto max-w-7xl'><Auth/></div>
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Page
