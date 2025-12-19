import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#5d946e] text-white py-4 px-6 flex justify-between items-center shadow-md">

      <Link to="/" className="text-lg font-bold hover:opacity-90 transition-opacity">
        Minha placa minha vida
      </Link>


      <div className="flex gap-8 font-medium">
        <Link to="/sobre-nos" className="hover:underline transition-all underline-offset-4">
          Sobre nós
        </Link>
        <Link to="/faqs" className="hover:underline transition-all underline-offset-4">
          FAQs
        </Link>
        <Link to="/contatos" className="hover:underline transition-all underline-offset-4">
          Contatos
        </Link>
      </div>
    </nav>
  );
}