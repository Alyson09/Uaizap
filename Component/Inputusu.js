import React from 'react';
import '../App.css';

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
            <input type='text' className='usu' 
            placeholder='Usuário' 
            value={this.state.valor2} 
            onChange={this.handleInput2Change}>
            </input>
        </div>
        )
    }
}

export default Inputusu;