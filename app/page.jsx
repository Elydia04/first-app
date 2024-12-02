"use client"
import React, { useState } from 'react'

const page = () => {
  const [ cat, setCat ] = useState('default')

  const handleSearch = () => {
    setvalue("adrian  ")
  }

  return (
    <>
      <div className='flex'>
      <h1 className='text-red-500 ml-10 text-2xl'>{cat}</h1>

      </div>

      <div>
    <h1>2</h1>
    <div className='flex gap-2 ml-10'>

    <input type="text" placeholder='Search anything' value={cat} onChange={(e)=> setCat(e.target.value)} className='bg-gray-500 text-white '/>
    <button className='bg-red-500 px-4 py-2 rounded-full text-white font-bold' onClick={handleSearch}>Search</button>
    </div>
      </div>
    </>
  )
}

export default page
