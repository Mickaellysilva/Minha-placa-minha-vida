import React from 'react';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#5d946e] text-white py-12 px-4 mt-auto">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-center md:text-left">
          
          {/* 1. Nome da Marca */}
          <div className="flex flex-col justify-center md:justify-start">
            <h2 className="text-2xl font-bold leading-tight">Minha placa<br/>minha vida</h2>
          </div>

          {/* 2. WhatsApp */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
            <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <MessageCircle size={20} /> (XX) XXXXX-XXXX
            </a>
          </div>

          {/* 3. E-mail */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-bold text-lg mb-1">E-mail</h4>
            <a href="mailto:contato@minhaplaca.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail size={20} /> contato@minhaplaca.com
            </a>
          </div>

          {/* 4. Localização */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <h4 className="font-bold text-lg mb-1">Localização</h4>
            <div className="flex items-center gap-2">
              <MapPin size={20} /> Rua Exemplo, 123 - Cidade/UF
            </div>
          </div>
        </div>

        {/* Linha Inferior */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center text-xs opacity-80">
          <p>© 2025 Minha placa minha vida - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}