import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const IndexPage = () => {
  const router = useRouter()

  useEffect(() => {
    window.addEventListener('message', (event:any) => {
      if (event.origin === 'http://localhost:2000') {
        const token = event.data;
        console.log("I got the token",token)
        localStorage.setItem('sessionId', token);
      }
    });
  },[])

  useEffect(() => {
    if(localStorage.getItem('sessionId')){
      router.push('/dashboard')
    }
    else{
      router.push('/')
    }
  },[])
  return (
    <div className='h-[80vh] flex items-center justify-center bg-white border w-[200px]'>
      <div className='text-center'>
        <h1 className='text-xl mb-10'>Selfcare Login</h1>
        <button className='border px-4 py-2 rounded-md bg-gray-700 text-white' onClick={() => router.push('/dashboard')}>Login to Selfcare</button>
      </div>
    </div>
  );
};

export default IndexPage;
