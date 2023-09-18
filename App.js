import React, {useState} from 'react';
import Chatpai from './Component/Chatpai';
import styled from 'styled-components';
import './App.css';

const Corpo = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center; 
  width: 40%;
  margin-left: 30%;
  margin-right: 15%;
  min-height: 100vh;
` ;


function App() {
  const [historicoMensagem, setHistoricoMensagem] = useState([]);

    const atualizaMensagem = (historicoFormatado) => {
        setHistoricoMensagem([...historicoFormatado]);
    };
  
  return (
    <Corpo >
      <div>
      {historicoMensagem.map((mensagem, index) => (
                    <p key={index}>Mensagem: {mensagem}</p>
                ))}
      </div>
      <div className='Inputs'>   
        < Chatpai  onMensagemChange={atualizaMensagem}/> 
      </div>   
    </Corpo>
  );
}

export default App;