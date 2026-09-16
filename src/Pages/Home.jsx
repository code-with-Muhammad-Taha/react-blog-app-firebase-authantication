import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-950 px-4'>
      <div className='w-full max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center shadow-2xl'>
        <h1 className='text-3xl font-bold text-white'>
          This is a main page
        </h1>
        <p className='mt-3 text-slate-400'>
          Welcome to your blog project
        </p>
      </div>
    </div>
  )
}

export default Home