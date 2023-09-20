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
      mensagensApagadas: [], 
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
    const nomeUsuario = valueChild2.toLowerCase(); 
    const novaMensagem = valueChild;

    const isUsuario = this.validarUsuario(nomeUsuario);
    const mensagemComNome = `${nomeUsuario}: ${novaMensagem}`;

    this.adicionarMensagemAoHistorico(mensagemComNome, isUsuario);
    this.setState({ valueChild: '' });
  };

  apagarMensagem = (index) => {
    const mensagemApagada = this.state.historicoMensagem[index];
    const novoHistorico = [...this.state.historicoMensagem];
    novoHistorico.splice(index, 1);

    this.setState((prevState) => ({
      historicoMensagem: novoHistorico,
      mensagensApagadas: [...prevState.mensagensApagadas, mensagemApagada],
    }));
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
