import React, { useState, useRef, useEffect } from 'react';
import Chatpai from './Component/Chatpai';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #B0C4DE;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: #B0C4DE;
  color: white;
  flex-grow: 1;
  padding: 20px;
  position: relative;
  height: 100%;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 20px; 
  background-color: #fff;
  height: 75vh;
`;

const MessageBubble = styled.div`
  background-color: #0078FF;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
`;

const Inputpai = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: #0000CD;
`;

function App() {
  const [historicoMensagem, setHistoricoMensagem] = useState([]);
  const [mensagensApagadas, setMensagensApagadas] = useState([]);
  const messageContainerRef = useRef(null);

  const atualizaMensagem = (historicoFormatado) => {
    setHistoricoMensagem([...historicoFormatado]);
  };

  const apagarMensagem = (index) => {
    const mensagemApagada = historicoMensagem[index];
    const novoHistorico = [...historicoMensagem];
    novoHistorico.splice(index, 1);
    setHistoricoMensagem(novoHistorico);
    setMensagensApagadas([...mensagensApagadas, mensagemApagada]);
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [historicoMensagem]);

  const mensagensExibidas = historicoMensagem.filter((mensagem, index) => !mensagensApagadas.includes(mensagem));

  return (
    <AppContainer>
      <ChatContainer>
        <MessageContainer ref={messageContainerRef}>
          {mensagensExibidas.map((mensagem, index) => (
            <MessageBubble
              key={index}
              isUsuario={mensagem.isUsuario}
              style={mensagem.isUsuario ? { alignSelf: 'flex-end', backgroundColor: 'lightblue', color: 'black' } : {}}
              onDoubleClick={() => apagarMensagem(index)}
              data-id={index}
            >
              {mensagem.mensagem}
            </MessageBubble>
          ))}
        </MessageContainer>

        <Inputpai>
          <Chatpai onMensagemChange={atualizaMensagem} />
        </Inputpai>
      </ChatContainer>
    </AppContainer>
  );
}

export default App;
