import styled from 'styled-components';
import { useState } from 'react';

export default function Tarefa() {
    const [valor,setValor] = useState("");

    const handleChange = (event) => setValor(event.target.value)
    

    return (
        <TarefaContainer>
             
             <input type="text" 
             placeholder="Nova Tarefa"
             onChange={handleChange}
             />
        </TarefaContainer>
      
    );
  }

const TarefaContainer = styled.div`
width: 500px;
height: 100px;
border-radius: 24px;
background-color: orange;  
margin: 30px;
   input{
    width:100%;
    height: 100%;
    border-radius: 24px;
    background-color: orange;
   }
`