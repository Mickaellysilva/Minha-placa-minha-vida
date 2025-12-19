import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../fotos/logo.png';

export default function Hero() {
  return (
    <section className="min-h-screen bg-linear-to-br from-[#0a1a8b] via-[#051066] to-[#0a1a8b] text-white py-20 px-8 flex items-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
        

        <div className="w-full max-w-md lg:max-w-lg">
          <img 
            src={logo} 
            alt="Minha Placa Minha Vida" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            onError={(e) => e.target.src = "https://via.placeholder.com/400x400/030a3d/ffffff?text=Logo+Aqui"}
          />
        </div>

        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Está tendo problemas <br /> com o seu eletrônico?
          </h1>
          
          <div className="space-y-2 mb-10">
            <p className="text-xl font-medium opacity-95">Identificamos a causa do problema</p>
            <p className="text-xl font-medium opacity-95">antes de qualquer reparo.</p>
            <p className="text-xl font-medium opacity-95">Inicie o contato e preencha o</p>
            <p className="text-xl font-medium opacity-95">diagnóstico para uma avaliação</p>
            <p className="text-xl font-medium opacity-95">especializada.</p>
          </div>

          <Link 
            to="/diagnostico" 
            className="inline-block bg-[#5d946e] hover:bg-[#4d7a5b] text-white px-12 py-4 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl transform hover:scale-105"
          >
            Faça o seu diagnóstico
          </Link>
        </div>
      </div>
    </section>
  );
}