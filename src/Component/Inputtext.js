import React from "react";
import '../App.css';

class Inputtext extends React.Component{
    render(){
        return(
            <div>
                <input type="text" className="text" placeholder="Mensagem"></input>
            </div>
        )
    }
}

export default Inputtext;