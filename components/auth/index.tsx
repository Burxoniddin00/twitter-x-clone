import Image from 'next/image'
import React from 'react'
import Button from '../ui/button'
import { FcGoogle } from 'react-icons/fc'
import { AiFillGithub } from 'react-icons/ai'
const Auth = () => {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center h-screen'>
        <Image src={'/images/x.svg'} alt='x'
          width={450}
          height={450}
          className='justify-self-center hidden md:block' />
        <div className='block md:hidden'>
          <Image src={'/images/x.svg'} alt='x'
            width={50}
            height={50}
            className='justify-self-center hidden md:block' />
        </div>
        <div className='flex flex-col justify-center gap-6 md:justify-between h-full md:h-[70vh] '>
          <h1 className='text-6xl font-bold'>Happening now</h1>
          <div className='w-full md:w-[60%]'>
            <h2 className='font-bold text-3xl mb-4'>Join today</h2>
            <div className='flex flex-col space-y-2'>
              <Button label={
                <div className='flex gap-2 items-center justify-center'>
                  <FcGoogle />
                  <p>Signup with Google</p>
                </div>
              } fullWidth secondary />
              <Button label={
                <div className='flex gap-2 items-center justify-center'>
                  <AiFillGithub />
                  <p>Signup with Github</p>
                </div>
              } fullWidth secondary />
              <div className='flex justify-center items-center'>
                <div className='h-px bg-gray-700 w-1/2' />
                <p className='mx-4'>or</p>
                <div className='h-px bg-gray-700 w-1/2' />
              </div>
              <Button label='Create account' fullWidth />
              <div>
                By signing up, you agree to the
                <span className='text-sky-500'>Terms of Service</span> and
                <span className='text-sky-500'> Privacy Policy</span>, including
                <span className='text-sky-500'> Cookie Use</span>
              </div>
            </div>
          </div>
          <div className='w-full md:w-[60%] pb-5'>
            <h3 className='font-medium text-xl mb-4'> Already have an accoubt?</h3>
            <Button label='Sign in' fullWidth outline />
          </div>
        </div>


      </div>
    </>
  )
}

export default Auth
