import { Link } from 'react-router-dom';
import CardServico from '../components/CardServico';

export default function Home() {
  return (
    <div className="bg-[#001f3f] text-white font-sans">

      <section className="py-20 text-center px-4 bg-gradient-to-b from-[#001f3f] to-[#003366]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Está tendo problemas com o seu eletrônico?</h1>
        <p className="text-xl mb-10 opacity-90">Identificamos a causa do problema antes de qualquer reparo.</p>
        <Link to="/diagnostico" className="bg-[#508e63] hover:bg-[#407a52] px-10 py-5 rounded-full font-bold text-lg transition-all">
          Faça o seu diagnóstico
        </Link>
      </section>

      <section className="py-16 grid md:grid-cols-3 gap-8 px-10 bg-[#003366]">
        <div className="bg-[#004080] p-8 rounded-xl text-center shadow-lg">
          <h3 className="text-xl font-bold mb-4">Garantia nos serviços</h3>
          <p className="text-sm opacity-80">Asseguramos que seu dispositivo receba o tratamento premium que merece.</p>
        </div>
        <div className="bg-[#004080] p-8 rounded-xl text-center shadow-lg">
          <h3 className="text-xl font-bold mb-4">Orçamento rápido</h3>
          <p className="text-sm opacity-80">Transformamos seu problema em solução rapidamente através do WhatsApp.</p>
        </div>
        <div className="bg-[#004080] p-8 rounded-xl text-center shadow-lg">
          <h3 className="text-xl font-bold mb-4">Diagnósticos precisos</h3>
          <p className="text-sm opacity-80">Tecnologia avançada para identificar a falha exata na placa.</p>
        </div>
      </section>

      <section className="py-16 px-10 bg-[#001f3f]">
        <h2 className="text-3xl font-bold text-center mb-12">Feedbacks recebidos</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/40 p-6 rounded-2xl border border-blue-800">
            <p className="italic text-sm mb-4">"Meu notebook não ligava... Atendimento profissional e transparente."</p>
            <span className="font-bold">- Marcia Silva</span>
          </div>
        </div>
      </section>
    </div>
  );
}
