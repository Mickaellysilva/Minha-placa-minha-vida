import React, { createContext, useState, useContext } from 'react';

const DiagnosticoContext = createContext();

export const DiagnosticoProvider = ({ children }) => {
  const [dadosTriagem, setDadosTriagem] = useState({
    aparelho: '',
    modelo: '',
    problema: ''
  });

  const atualizarDados = (novosDados) => {
    setDadosTriagem(prev => ({ ...prev, ...novosDados }));
  };

  return (
    <DiagnosticoContext.Provider value={{ dadosTriagem, atualizarDados }}>
      {children}
    </DiagnosticoContext.Provider>
  );
};


export const useDiagnostico = () => useContext(DiagnosticoContext);