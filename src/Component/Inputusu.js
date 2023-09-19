import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 13px;
    font-size: 12px;
    width: 30%; 
    border-radius: 10px;
`

class Inputusu extends React.Component{
    constructor(props){
        super(props);
            this.state={
                valor2:'',
            };
    }

    handleInput2Change = (e) => {
        const newValue = e.target.value;
        this.setState({valor2: newValue});
        this.props.onInput2Change(newValue);
    }; 
    
    render(){
    return(
        <div>
            <StyledInput type='text' className='usu' 
            placeholder='Usuário' 
            value={this.state.valor2} 
            onChange={this.handleInput2Change} 
            />
        </div>
        )
    }
}

export default Inputusu;