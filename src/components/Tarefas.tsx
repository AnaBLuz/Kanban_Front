import { useEffect, useState } from 'react';
import { getTasksByStatus, deleteTask, updateTask } from '../service/tarefaService';
import styled from 'styled-components';
import del from "../assets/del.png"
import edit from "../assets/edit.png"
import update from "../assets/update.png"

type TarefasProps = {
  status: string;
  reload: boolean;
  onChange: () => void;
};


export default function Tarefas({ status, reload, onChange }: TarefasProps){
    const [tasks, setTasks] = useState<any[]>([]);

    const carregaTarefas = async () => {
      const res = await getTasksByStatus(status);
      setTasks(res.data);
    };
  
    useEffect(() => {
      carregaTarefas();
    }, [status,reload]);   

    const deletaTarefa = async (id: number) => {
      await deleteTask(id);
      carregaTarefas();
      onChange();
    };

    const atualizaStatus = async (task: any) => {
      const proxStatus = carregaProxStatus(task.status);
      if (proxStatus !== task.status) {
        await updateTask(task.id, { ...task, status: proxStatus });
        carregaTarefas();
        onChange();
      }
    };
  
    const carregaProxStatus = (atual: string) => {
      const statusOrder = ['PENDING', 'IN_PROGRESS', 'TESTING', 'DONE'];
      const idx = statusOrder.indexOf(atual);
      return idx < statusOrder.length - 1 ? statusOrder[idx + 1] : atual;
    };

    const [idTarefa, setIdtarefa] = useState<number | null>(null);
    const [newDescription, setNewDescription] = useState("");
    
    const editar = (task: any) => {
      setIdtarefa(task.id);
      setNewDescription(task.description);
    };
    
    const cancelaEdit = () => {
      setIdtarefa(null);
      setNewDescription("");
    };
    
    const salvaEdit = async (task: any) => {
      await updateTask(task.id, { ...task, description: newDescription });
      setIdtarefa(null);
      setNewDescription("");
      carregaTarefas(); 
    };




    return(
    
       <ul>
        {tasks.map((task) => (
          <Card key={task.id}>
    {idTarefa === task.id ? (
      <>
       <input
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
           />
      <Buttons>
        <button onClick={() => salvaEdit(task)}>Salvar</button>
        <button onClick={cancelaEdit}>Cancelar</button>
      </Buttons>
      </>
) : ( <p>{task.description}</p>)}
          <Acoes>
          <img src={del}  onClick={() => deletaTarefa(task.id)} />
          <img src={edit} onClick={() => editar(task)} />
          <img src={update} onClick={() => atualizaStatus(task)} />
          </Acoes>
        </Card>
        ))}
      </ul>
        
    )
}

const Card = styled.div` 
width: 200px;
height: 100px;
border-radius: 24px;
background-color: orange;
display:flex;
flex-direction:column;
align-items:center;
margin-bottom: 30px;
input{
    width:80%;
    height: 50%;
    border-radius: 24px;
    background-color: orange;
    
}
  
`
const Buttons = styled.div`
  width:70%;
  display:flex;
  justify-content:space-between;
  button{
    border-radius: 24px;
    background-color: orange;
  }
`

const Acoes = styled.div`
  width: 80%;
  display:flex;
  justify-content:space-between;
  img{
    height: 20px;
    width:20px;
    cursor:pointer;
  }
`

