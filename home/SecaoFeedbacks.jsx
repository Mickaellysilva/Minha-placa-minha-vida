import React from 'react';
import FeedbackCard from './FeedbackCard';

export default function SecaoFeedbacks() {
  const depoimentos = [
    {
      nome: "Marcia Silva",
      texto: "Meu notebook não ligava e perdia arquivos. Diagnosticaram placa e SSD rapidamente, explicaram tudo, trocaram peças originais e entregaram no prazo. Atendimento profissional e transparente, resolveu completamente, sem custos extras.",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      nome: "Renato Freitas",
      texto: "Celular com tela quebrada e bateria viciada. Fizeram orçamento claro, trocaram componentes no mesmo dia, testaram funções e devolveram impecável. Preço justo e confiança total, desde o primeiro contato atendimento.",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      nome: "Solange Almeida",
      texto: "PC travando e superaquecendo durante trabalho. Limpeza interna, troca de pasta térmica e ajustes de software resolveram falhas. Desempenho voltou ao normal rapidamente, excelente suporte técnico, com clareza e garantia.",
      img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  return (
    <section className="bg-[#051066] py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-20 text-center text-white">Feedbacks recebidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((f, i) => (
            <FeedbackCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}