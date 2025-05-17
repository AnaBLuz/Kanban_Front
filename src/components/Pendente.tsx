import { useEffect, useState } from 'react';
import { getTasksByStatus } from '../service/tarefaService';
import styled from 'styled-components';
import del from "../assets/del.png"
import edit from "../assets/edit.png"
import update from "../assets/update.png"

export default function Pendente(){
    const [tasks, setTasks] = useState<any[]>([]);

    useEffect(() => {
        getTasksByStatus('PENDING').then((res) => {
          console.log("Dados recebidos:", res.data);
          setTasks(res.data);
        });
      }, []);    

    return(
    
       <ul>
        {tasks.map((task) => (
          <Card key={task.id}>
          <p>{task.description}</p>
          <Acoes>
          <img src={del}  />
          <img src={edit}  />
          <img src={update}  />
          </Acoes>
        </Card>
        ))}
      </ul>
        
    )
}

const Card = styled.div` 
width: 90%;
height: 100px;
border-radius: 24px;
background-color: orange;
display:flex;
flex-direction:column;
align-items:center;
margin-bottom: 30px

`
const Acoes = styled.div`
  width: 80%;
  display:flex;
  justify-content:space-between;
  img{
    height: 20px;
    width:20px;
  }
`

