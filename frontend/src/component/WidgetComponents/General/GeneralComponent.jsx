
const GeneralComponent = ({setConfigData,configData,error}) => {
  const handleBotName=(e)=>{
      setConfigData(prev=>({...prev,chatbotname:e.target.value}))
  }
  const handleMessage=(e)=>{
    setConfigData(prev=>({...prev,message:e.target.value}))
  }
  const handlePlaceholder=(e)=>{
    setConfigData(prev=>({...prev,placeholder:e.target.value}))
  }
  return (
    <div className='w-full p-3 flex flex-col'>
        <label className='mt-3 text-xl font-bold text-zinc-700' htmlFor="name">Chatbot Name</label>
        <input className='w-full h-10 rounded-lg border border-gray-400 bg-white focus:outline-none p-3 mt-1' type="text" id='name' placeholder={configData.chatbotname?configData.chatbotname:'Enter a name'} onChange={handleBotName}/>
        {error.chatbotname&&<h1 className='text-[10px] mt-1 text-red-600 mb-2'>Please Enter a Name for Chatbot</h1>}
        <label className='mt-5 text-xl font-bold text-zinc-700' htmlFor="message">Welcome Message</label>
        <input className='w-full h-10 rounded-lg border border-gray-400 bg-white focus:outline-none p-3 mt-1' type="text" id='message' placeholder={configData.message?configData.message:'Enter a message'} onChange={handleMessage}/>
        {error.message&&<h1 className='text-[10px] mt-1 text-red-600 mb-2'>Please Enter a Welcome Message</h1>}        
        <label className='mt-5 text-xl font-bold text-zinc-700' htmlFor="placeholder">Input PlaceHolder</label>
        <input className='w-full h-10 rounded-lg border border-gray-400 bg-white focus:outline-none p-3 mt-1' type="text" id='placeholder' placeholder={configData.placeholder?configData.placeholder:'Enter a placeholder'} onChange={handlePlaceholder}/>
        {error.placeholder&&<h1 className='text-[10px] mt-1 text-red-600 mb-2'>Please Enter a Placeholder</h1>}        
    </div>
  )
}

export default GeneralComponent