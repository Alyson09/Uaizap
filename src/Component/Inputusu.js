import React from 'react';
import '../App.css';

class Inputusu extends React.Component{
    state ={
        valor: ''
    };

    handleInputChange = (event) => {
        this.setState({valor: event.target.value});
    }; 
    render(){
    return(
        <div>
            <input type='text' className='usu' 
            placeholder='Usuário' value={this.state.valor} 
            onChange={this.handleInputChange}>
            </input>
        </div>
        )
    }
}

export default Inputusu;