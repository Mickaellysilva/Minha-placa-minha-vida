import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DiagnosticoProvider } from './contexto/contextoDiagnostico';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Hero from './home/Hero';
import CardServicos from './home/CardServicos';
import PorqueNos from './home/PorqueNos';
import SecaoFeedbacks from './home/SecaoFeedbacks';
import SobreNos from './paginas/SobreNos';
import Faqs from './paginas/Faqs';
import Contatos from './paginas/Contatos';
import Diagnostico from './paginas/diagnostico';

const Home = () => (
  <>
    <Hero />
    <CardServicos />
    <PorqueNos />
    <SecaoFeedbacks />
  </>
);

function App() {
  return (
    <DiagnosticoProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre-nos" element={<SobreNos />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/contatos" element={<Contatos />} />
              <Route path="/diagnostico" element={<Diagnostico />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </DiagnosticoProvider>
  );
}

export default App;