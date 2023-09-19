import React, { useState, useRef, useEffect } from 'react';
import Chatpai from './Component/Chatpai';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: black;
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
  overflow-y: auto;
  padding: 20px;
  background-color: #f5f5f5;
  max-height: 400px;
`;

const MessageBubble = styled.div`
  background-color: #0078FF;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  align-self: flex-start;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: white;
`;

function App() {
  const [historicoMensagem, setHistoricoMensagem] = useState([]);
  const messageContainerRef = useRef(null);

  const atualizaMensagem = (historicoFormatado) => {
    setHistoricoMensagem([...historicoFormatado]);
  };

  // Função para apagar uma mensagem com base no índice
  const apagarMensagem = (index) => {
    const novoHistorico = [...historicoMensagem];
    novoHistorico.splice(index, 1);
    setHistoricoMensagem(novoHistorico);
  };

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  }, [historicoMensagem]);

  return (
    <AppContainer>
      <ChatContainer>
        <MessageContainer ref={messageContainerRef}>
          {historicoMensagem.map((mensagem, index) => (
            <MessageBubble
              key={index}
              isUsuario={mensagem.isUsuario}
              style={mensagem.isUsuario ? { alignSelf: 'flex-end', backgroundColor: 'lightblue', color: 'black' } : {}}
              onDoubleClick={() => apagarMensagem(index)} // Chama a função apagarMensagem com o índice
              data-id={index}
            >
              {mensagem.mensagem}
            </MessageBubble>
          ))}
        </MessageContainer>

        <InputContainer>
          <Chatpai onMensagemChange={atualizaMensagem} />
        </InputContainer>
      </ChatContainer>
    </AppContainer>
  );
}

export default App;
