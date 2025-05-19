import { useState } from 'react';
import styled from 'styled-components';
import NovaTarefa from './NovaTarefa';
import Tarefas from './Tarefas';

export default function FullScreen() {

  const [reload, setReload] = useState(false);
  const triggerReload = () => setReload(!reload);

    return (     
      <ScreenContainer>
         <NovaTarefa tarefaCriada={triggerReload}/>
         <CardContainer>
           <ToDo>
             <h3>Pendente</h3>
             <Tarefas status="PENDING" reload={reload} onChange={triggerReload}/>
           </ToDo>
           <ToDo>
             <h3>Em Andamento</h3>
             <Tarefas status="IN_PROGRESS" reload={reload} onChange={triggerReload}/>
           </ToDo>
           <ToDo>
             <h3>Em Teste</h3>
             <Tarefas status="TESTING" reload={reload} onChange={triggerReload}/>
          </ToDo>
           <ToDo>
            <h3>Finalizado</h3>
            <Tarefas status="DONE" reload={reload} onChange={triggerReload}/>
           </ToDo>
         </CardContainer>
      </ScreenContainer>
      
    );
  }
  
  const ScreenContainer = styled.div`
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  
`
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-between;
  
`



const ToDo = styled.div`
    width: 300px;
    height: 800px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 100px;
    background-color: green;
    border-radius: 25px;
    color: white;
    font-weight: bold;
    display:flex;
    flex-direction:column;
    align-items:center;
`
