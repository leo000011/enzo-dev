import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/HomeC';
import EbookSalesPage from './page/vendaPage/VendaPage1';


function App() {
  return (
<<<<<<< HEAD
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<EbookSalesPage />} />
        </Routes>
      </BrowserRouter>
    </>
=======
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
>>>>>>> ba431ab46cb3211b4ca2956f541500337a47fef1
  )
}

export default App
