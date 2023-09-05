import React from 'react';
import Inputusu from './Component/Inputusu';
import Inputtext from './Component/Inputtext';
import Button from './Component/Button';
import styled from 'styled-components';
import './App.css';

const Corpo = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center; 
  width: 40%;
  margin-left: 30%;
  margin-right: 15%;
  min-height: 100vh;
` ;


function App() {
  return (
    <Corpo >
      <div>oi</div>
      <div>{this.Inputusu.valor}</div>
      <div className='Inputs'> 
        <Inputusu />  
        <Inputtext />
        <Button /> 
      </div>   
    </Corpo>
  );
}

export default App;
