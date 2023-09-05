import React from "react";
import '../App.css';

class Button extends React.Component{
    onClickbutton= () =>{
        alert("Enviado!")
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