import React, { useEffect, useState } from 'react'
import Button from '../components/button';
import { Instagram } from 'lucide-react';
import axios from "axios"


const Home = () => {
  const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true);


const handlerClick = () => {
    window.location = "https://pay.kiwify.com.br/yHaXeuq"
  }

    return (
       <div className="min-h-screen bg-black text-white px-4 py-10 font-sans">
      {/* Seção 1 - Atenção */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Destravando a Programação
        </h1>
        <p className="text-xl md:text-2xl text-white">
          Guia Prático para Iniciantes 🚀
        </p>
      </section>

      {/* Seção 2 - Interesse */}
      <section className="max-w-3xl mx-auto text-center mb-10 font-bold">
        <p className="text-lg text-blue-400 mb-6">
          Já imaginou aprender a programar do zero sem complicações?
        </p>
        <p className="text-white">
          Com este eBook direto ao ponto, você vai entender os principais conceitos da programação e da lógica de forma fácil, rápida e prática. Ideal para quem quer dar os primeiros passos na tecnologia.
        </p>
      </section>

      {/* Seção 3 - Desejo */}
      <section className="max-w-3xl mx-auto text-black bg-gray-400 p-6 rounded-2xl shadow-lg mb-10">
        <h2 className="text-2xl font-bold mb-4 text-center">
          O que você vai ganhar com este eBook:
        </h2>
        <ul className="space-y-2 text-lg">
          <li>💡 Aprenda lógica e programação do zero</li>
          <li>🚀 Comece sua jornada como programador</li>
          <li>🧠 Desenvolva raciocínio lógico</li>
          <li>💻 Entenda variáveis, laços e condições</li>
          <li>💰 Economize tempo e dinheiro com conteúdo direto</li>
        </ul>
      </section>

      {/* Seção 4 - Ação */}
      <section className="text-center">
        <h3 className="text-xl md:text-2xl mb-4 text-white">
          📥 Adquira agora por apenas <span className="text-yellow-400 font-bold">R$ 12,99</span>
        </h3>
        <button onClick={handlerClick} className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300">
          Quero o meu eBook!
        </button>
        <p className="text-sm text-gray-400 mt-4">
          Acesso imediato por download. Sem complicações.
        </p>
      </section>
    </div>
    )
}


export default Home