import styled from 'styled-components';
import Tarefa from './Tarefa';

export default function FullScreen() {
    return (
      
      <ScreenContainer>
         <Tarefa />
         <CardContainer>
           <ToDo><h3>Pendente</h3></ToDo>
           <ToDo><h3>Em Andamento</h3></ToDo>
           <ToDo><h3>Em Teste</h3></ToDo>
           <ToDo><h3>Finalizado</h3></ToDo>
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
    height: 500px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 100px;
    background-color: green;
    border-radius: 24px;
    color: white;
    font-weight: bold;
    display:flex;
    flex-direction:column;
    align-items:center;
`
