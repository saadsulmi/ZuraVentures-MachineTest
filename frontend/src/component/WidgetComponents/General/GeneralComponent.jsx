import React from 'react'

const GeneralComponent = () => {
  return (
    <div className='w-full p-3 flex flex-col'>
        <label className='mt-3 text-xl font-bold text-zinc-700' htmlFor="name">Chatbot Name</label>
        <input className='w-full h-10 rounded-lg border border-gray-400 bg-white focus:outline-none p-3 mt-1' type="text" id='name'/>
        <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
        <label className='mt-3 text-xl font-bold text-zinc-700' htmlFor="message">Welcome Message</label>
        <input className='w-full h-10 rounded-lg border border-gray-400 bg-white focus:outline-none p-3 mt-1' type="text" id='message' />
        <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>        
        <label className='mt-3 text-xl font-bold text-zinc-700' htmlFor="placeholder">Input PlaceHolder</label>
        <input className='w-full h-10 rounded-lg border border-gray-400 bg-white focus:outline-none p-3 mt-1' type="text" id='placeholder' />
        <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>        
    </div>
  )
}

export default GeneralComponent