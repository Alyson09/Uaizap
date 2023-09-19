import React from "react";
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 13px;
    font-size: 12px;
    width: 60%; 
    border-radius: 10px;
`;

class Inputtext extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            valor : '',
        };
    }

    handleInput1Change = (e) =>{
        const newValue  = e.target.value;
        this.setState({valor: newValue});
        this.props.onInput1Change(newValue);
    };

    handleKeyDown = (e) =>{
        if(e.key === 'Enter'){  
            this.props.onEnterPress(this.state.valor);
            this.setState({ valor: '' });
        }
    };

    render(){
        return(
            <div>
                <StyledInput
                    type="text"
                    className="text"
                    placeholder="Mensagem"
                    onChange={this.handleInput1Change}
                    onKeyDown={this.handleKeyDown}
                />
            </div>
        )
    }
}

export default Inputtext;