import React from "react";
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: green;
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

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
                <StyledButton onClick={this.onClickbutton}>Enviar</StyledButton>
            </div>
        )
    }
}

export default Button;