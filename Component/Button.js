import React from "react";
import '../App.css';

class Button extends React.Component{
    constructor(props){
    super(props);
    this.state={
            mensagem: '',
        };
    }

    onClickbutton = () =>{
        const novaMensagem = "Mensagem enviada!";
        this.setState({mensagem: novaMensagem});
        this.props.enviarMensagemParaApp (novaMensagem);
    }
    render(){
        return(
            <div>
                <button onClick={this.onClickbutton} className="Button">Enviar</button>
            </div>
        )
    }
}

export default Button;