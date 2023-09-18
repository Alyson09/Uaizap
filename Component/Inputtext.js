import React from "react";
import '../App.css';

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
                <input type="text" className="text" placeholder="Mensagem" 
                onChange={this.handleInput1Change}
                onKeyDown={this.handleKeyDown}>
                </input>
            </div>
        )
    }
}

export default Inputtext;