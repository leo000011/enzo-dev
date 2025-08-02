import React, { useEffect, useState } from 'react'
import Button from '../components/button';
import imagem from '../assets/photo_5147934955194658460_x.jpg';
import { Instagram } from 'lucide-react';
import axios from "axios"


const Home = () => {
  const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios.get(`https://api-rest-9jb0.onrender.com/products`)
    .then((response) => {
      console.log('Usuários recebidos:', response.data.get1)
      setUsers(response.data.get1)
              setLoading(false);

    }).catch((error) => {
        console.error('Erro ao buscar usuários:', error);
        setLoading(false);
      });
  }, [])

    if (loading) return <p>Carregando...</p>;


    return (
        <>
        <div className='bg-gray-500 h-screen p-5 flex justify-center items-center flex-col gap-3'>
      <div className='w-[200px] md:w-[700px] '>
        <div className='flex flex-col gap-6 mb-6'>

        <div className='flex flex-col gap-2 items-center bg-white p-6 rounded-2xl hover:bg-yellow-400'>
          <img src={imagem} alt="enzo" className=' h-[80px] w-[80px] md:h-[100px] md:w-[100px] rounded-full  border-solid border-white border-2' />
          <h2 className='text-black font-medium'>@_enzo.dev</h2>
        </div>

        <div>
          <div className='bg-white/70 inline-block p-1 rounded-full'>
            
          <Instagram className='text- black'/>
         <div className='bg-yellow-500 text-white font-bold'>
          {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
         </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-2'>

        <Button text="Instagram" link="https://www.instagram.com/_enzo.dev/" />

        <Button text="TikTok" link="https://www.tiktok.com/@_enzo.dev0?_t=ZM-8xsKbIRvCGE&_r=1" />

      </div>
      </div>
    </div>
        
        </>
    )
}


export default Home