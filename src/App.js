import React from 'react';
import Inputusu from './Component/Inputusu';
import Inputtext from './Component/Inputtext';
import Button from './Component/Button';
import styled from 'styled-components';
import './App.css';

const Corpo = styled.div`
  background-color: black;
  display: flex;
  align-items: center;
  height: 100%; 
  width: 40%;
  margin-left: 30%;
  margin-right: 15%;
` ;


function App() {
  return (
    <Corpo >
      <div className='Inputs'>
        <Inputusu />  
        <Inputtext />
        <Button /> 
      </div>  
    </Corpo>
  );
}

export default App;
