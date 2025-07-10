import { useState } from 'react'
import imagem from './assets/photo_5147934955194658460_x.jpg';
import Button from './components/button';



function App() {

  return (
    <div className='bg-gray-800 h-screen p-5 flex justify-center items-center flex-col gap-3'>
        <div className='flex gap-2 items-center bg-white p-2 rounded hover:bg-yellow-400'>
             <img src={imagem} alt="enzo" className=' h-[60px] w-[60px] rounded-full  border-solid border-white border-2' />
            <h2 className='text-black font-medium'>@_enzo.dev</h2>
        </div>
        <div className='flex flex-col gap-2'>
             
             <Button text='Instagram' link="https://www.instagram.com/_enzo.dev/" />

             <Button text="TikTok" link="https://www.tiktok.com/@_enzo.dev0?_t=ZM-8xsKbIRvCGE&_r=1" />

        </div>
      
    </div>
  )
}

export default App
