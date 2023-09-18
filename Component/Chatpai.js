import React from 'react';
import Inputtext from './Inputtext';
import Inputusu from './Inputusu';
import Button from './Button';

class Chatpai extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valueChild : '',
            valueChild2: '',
            historicoMensagem:[],
        };
    }

    handleInput1Change = (newValue) =>{
        this.setState({valueChild: newValue});
    };

    handleInput2Change = (newValue) =>{
        this.setState({valueChild2: newValue});
    };

    enviarMensagem = () => {
        const novaMensagem =  this.state.valueChild;
        const novoHistorico = [...this.state.historicoMensagem, novaMensagem];
        this.props.onMensagemChange(novoHistorico);
        this.setState({ valueChild: '', historicoMensagem: novoHistorico });
    };

    handleEnterPress = (inputValue) => {
        const novaMensagem = inputValue;
        const novoHistorico = [...this.state.historicoMensagem, novaMensagem];
        this.props.onMensagemChange(novoHistorico);
        this.setState({ valueChild: '', historicoMensagem: novoHistorico });
    };

    render(){
        return(
            <div>
                <Inputusu onInput2Change={this.handleInput2Change} />
                <Inputtext
                    onInput1Change={this.handleInput1Change}
                    onEnterPress={this.handleEnterPress}
                />
                <Button enviarMensagemParaApp={this.enviarMensagem}/>
            </div>
        )
    }
}

export default Chatpai;