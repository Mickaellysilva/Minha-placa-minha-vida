import React from 'react';

export default function FeedbackCard({ nome, texto, img }) {
  return (
    <div className="bg-[#030a3d] p-10 rounded-[50px] shadow-2xl flex flex-col items-center border border-white/5 h-full">
      <div className="flex items-center gap-4 mb-8 w-full justify-start text-white">
        <img 
          src={img} 
          alt={nome} 
          className="w-16 h-16 rounded-full border-2 border-white/20 object-cover" 
        />
        <span className="text-2xl font-bold">{nome}</span>
      </div>
      <p className="text-[15px] leading-relaxed text-left font-medium text-white opacity-95">
        {texto}
      </p>
    </div>
  );
}