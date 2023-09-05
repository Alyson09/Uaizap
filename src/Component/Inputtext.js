import React from "react";
import '../App.css';

class Inputtext extends React.Component{
    state = {
        valor:''
    };

    handleInputChange = (event) =>{
        this.setState({valor: event.target.value});
    };
    render(){
        return(
            <div>
                <input type="text" className="text" placeholder="Mensagem" 
                value={this.state.valor} onChange={this.handleInputChange}>
                </input>
            </div>
        )
    }
}

export default Inputtext;