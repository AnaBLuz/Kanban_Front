import { useEffect, useState } from 'react';
import { getTasksByStatus } from '../service/tarefaService';
import styled from 'styled-components';



export default function Pendente(){
    const [tasks, setTasks] = useState<any[]>([]);

    useEffect(() => {
        getTasksByStatus('PENDING').then((res) => {
          setTasks(res.data);
        });
      }, []);    

    return(
    
       <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.description} - {task.status}
          </li>
        ))}
      </ul>
        
    )
}

const card = styled.div` 
width: 80px;
height: 80px;
border-radius: 24px;
background-color: orange;  

`

