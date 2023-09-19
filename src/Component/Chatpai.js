import React from 'react';
import Inputtext from './Inputtext';
import Inputusu from './Inputusu';
import Button from './Button';

class Chatpai extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueChild: '',
      valueChild2: '',
      historicoMensagem: [],
    };
  }

  handleInput1Change = (newValue) => {
    this.setState({ valueChild: newValue });
  };

  handleInput2Change = (newValue) => {
    this.setState({ valueChild2: newValue });
  };

  enviarMensagem = () => {
    this.adicionarMensagem(this.state.valueChild);
  };

  handleEnterPress = (inputValue) => {
    this.adicionarMensagem(inputValue);
  };

  validarUsuario = (nomeUsuario) => {
    return nomeUsuario.toLowerCase() === 'eu';
  };
  
  adicionarMensagemAoHistorico = (mensagem, isUsuario) => {
    const novoHistorico = [...this.state.historicoMensagem, { mensagem, isUsuario }];
    this.props.onMensagemChange(novoHistorico);
    this.setState({ historicoMensagem: novoHistorico });
  };
  
  adicionarMensagem = () => {
    const { valueChild, valueChild2 } = this.state;
    const nomeUsuario = valueChild2.toLowerCase(); // Converta para minúsculas
    const novaMensagem = valueChild;
  
    const isUsuario = this.validarUsuario(nomeUsuario);
    
    const mensagemComNome = `${nomeUsuario}\n${novaMensagem}`;
    
    this.adicionarMensagemAoHistorico(mensagemComNome, isUsuario);
    this.setState({ valueChild: '' });
  };
  
  
  
  

  render() {
    return (
      <div style={{ display: 'flex', width: '100%', padding: '10px' }}>
        <Inputusu onInput2Change={this.handleInput2Change} />
        <Inputtext
          onInput1Change={this.handleInput1Change}
          onEnterPress={this.handleEnterPress}
        />
        <Button enviarMensagemParaApp={this.enviarMensagem} />
      </div>
    );
  }
}

export default Chatpai;
