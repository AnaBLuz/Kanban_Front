import styled from 'styled-components';
import {  useState } from 'react';
import { createTask } from '../service/tarefaService';
import diskette from "../assets/diskette.png"

type NovaTarefaProps = {
  tarefaCriada: () => void;
};

export default function NovaTarefa({ tarefaCriada }: NovaTarefaProps) {
    const [valor,setValor] = useState("");


    const handleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
      setValor(event.target.value)
    };

   async function salvaTarefa(){
     await createTask({
        title: 'Nova Tarefa',
        description: valor,
        status: 'PENDING',
      })
      setValor("")
      tarefaCriada(); //dispara o reload
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