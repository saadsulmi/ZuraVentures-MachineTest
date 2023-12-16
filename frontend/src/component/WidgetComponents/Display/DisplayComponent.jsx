import { useState } from 'react'
const DisplayComponent = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [primaryColor, setPrimaryColor] = useState('#4CAF50');
    const [fontcolor, setFontColor] = useState('#2c3f2d');
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
      const handlePrimaryColorChange = (color) => {
            setPrimaryColor(color);
        };
     const handleFontColorChange = (color) => {
        console.log(color);
            setFontColor(color);
        };  
  return (
    <div className='w-full max-h-[500px] overflow-auto p-3 flex flex-col myscroll'>
        <div className='w-full h-2/3 flex flex-wrap'>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-zinc-700 mb-2'>Primary color</h1>
                <div className='flex'>
                    <input className='w-4/5 h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3 text-zinc-500 font-medium' type="text" value={primaryColor} disabled/>
                    <input
                    className={`w-10 h-10 border-transparent rounded-md`}
                    type="color"
                    value={primaryColor}
                    onChange={(e) => handlePrimaryColorChange(e.target.value)}
                    />
                </div>
                <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
            </div>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-zinc-700 mb-2'>Font Color</h1>
                <div className='flex'>
                    <input className='w-4/5 h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3 text-zinc-500 font-medium' value={fontcolor} type="text" disabled/>
                    <input
                    className={`w-10 h-10 border-transparent rounded-md`}
                    type="color"
                    value={fontcolor}
                    onChange={(e) => handleFontColorChange(e.target.value)}
                    />
                </div>
                <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
            </div>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-zinc-700 mb-2'>Font Size (in px)</h1>
                <div className='flex pr-10'>
                    <input className='w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3' type="text" />
                </div>
                <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
            </div>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-zinc-700 mb-2'>Chat Height (in % of total screen)</h1>
                <div className='flex pr-10'>
                    <input className='w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3' type="text" />
                </div>
                <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
            </div>
        </div>
        <div className='flex w-11/12 justify-between items-center mt-2'>
            <div>
                <h1 className='text-xl font-bold text-zinc-700'>Show Sources</h1>
                <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
            </div>
            <div>
                <div className={`toggle-switch ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
                <div className={`switch-inner ${isChecked ? 'checked' : ''}`} />
            </div>
        </div>
        </div>
        <hr className='w-full border-2 border-zinc-300 mt-4 mb-8'/>
        <div className='w-full '>
            <h1 className='text-xl font-bold text-blue-800 mb-10'>Chat Icon</h1>
            <div className='w-full h-2/3 flex flex-wrap'>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-zinc-700 mb-2'>Chat Icon Size</h1>
                <div className='flex pr-10'>
                    <input className='w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3' type="text" />
                </div>
                <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
            </div>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-zinc-700 mb-2'>Position on Screen</h1>
                <div className='flex pr-10'>
                    <input className='w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3' type="text" />
                </div>
                <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
            </div>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-zinc-700 mb-2'>Distance from Bottom (in px)</h1>
                <div className='flex pr-10'>
                    <input className='w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3' type="text" />
                </div>
                <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
            </div>
            <div className='w-1/2'>
                <h1 className='text-xl font-bold text-zinc-700 mb-2'>Horizontal Distance (in px)</h1>
                <div className='flex pr-10'>
                    <input className='w-full h-10 mr-2 rounded-md border-1 outline-1 bg-slate-300 focus:outline-none px-3' type="text" />
                </div>
                <h1 className='text-[10px] mt-1 text-gray-600 mb-2'>Lorem ipsuim dolor sit Lorem ipsuim dolor sit</h1>
            </div>
        </div>
            <h1 className='text-xl font-bold text-zinc-700 mb-2'>Bot Icon</h1>
            <div className='w-full flex items-center'>
                <div className='w-[70px] h-[70px] bg-zinc-300 rounded-full mr-4'></div>
                <div className='flex w-1/2 flex-col justify-center pt-4'>
                    <button className='w-1/3 h-10 bg-blue-600 rounded-lg text-white'>Upload Image</button>
                    <h1 className='text-[10px] text-gray-600'>Recommended Size: 48x48px</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DisplayComponent