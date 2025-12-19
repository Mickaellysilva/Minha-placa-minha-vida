import React from 'react';
import { ShieldCheck, Zap, Award } from 'lucide-react';

export default function PorqueNos() {
  return (

    <div className="bg-[#051066] py-20 px-4 text-white">
      <div className="container mx-auto max-w-6xl text-center">
        

        <h2 className="text-4xl font-bold mb-16">Por que nos escolher?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          

          <div className="flex flex-col items-center">
            <div className="text-[#5d946e] mb-4">
              <ShieldCheck size={50} />
            </div>
            <h3 className="text-xl font-bold mb-2">Qualidade</h3>
            <p className="text-sm opacity-80 max-w-[250px]">
              Peças de primeira linha e técnicos especializados para garantir o melhor reparo.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-[#5d946e] mb-4">
              <Zap size={50} />
            </div>
            <h3 className="text-xl font-bold mb-2">Agilidade</h3>
            <p className="text-sm opacity-80 max-w-[250px]">
              Diagnósticos rápidos e prazos curtos para você não ficar sem seu aparelho.
            </p>
          </div>


          <div className="flex flex-col items-center">
            <div className="text-[#5d946e] mb-4">
              <Award size={50} />
            </div>
            <h3 className="text-xl font-bold mb-2">Garantia</h3>
            <p className="text-sm opacity-80 max-w-[250px]">
              Segurança total com garantia em todos os serviços de micro-soldagem e reparos.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}