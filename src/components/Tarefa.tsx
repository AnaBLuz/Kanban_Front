import styled from 'styled-components';
import { useState } from 'react';
import diskette from "../assets/diskette.png"

export default function Tarefa() {
    const [valor,setValor] = useState("");

    const handleChange = (event) => {
      setValor(event.target.value)
    };

    function salvaTarefa(){
      
      setValor("")
    }
    

    return (
        <TarefaContainer>       
             <input 
             type="text" 
             placeholder="Nova Tarefa"
             onChange={handleChange}
             value={valor}
             />
             <img src={diskette}  
                height="30px" 
                width="30px"
                onClick={salvaTarefa}
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
display:flex;
align-items:center;

   input{
    width:80%;
    height: 50%;
    border-radius: 24px;
    background-color: orange;
    margin:10px;
   }
  img{
    cursor:pointer;
  }
`