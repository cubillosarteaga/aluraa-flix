import styled from "styled-components";
import Colaborador from "../Colaborador";

const Titulo = styled.h2`
  font-weight: 400;
  font-size: 32px;
  line-height: 28px;
  color: #ffff;
  
  padding: 23px 24px;
  border-radius: 10px;
  font-weight: bolder;
  
  display: inline-block;
  
  @media (min-width: 768px) {
    /* Estilos para pantallas a partir de 768px */
    margin: 40px 0;
  }
  text-align: center;

`

const ContainerEquipos = styled.div`
width: 100%;
box-sizing: border-box;
padding: 0;
text-align: center;
@media (min-width: 768px) {
  padding: 19px 57px;
  text-align: left;

    }


`
const ContainerColaborador = styled.div`
display: flex;
    flex-direction: row;
    @media (min-width: 768px) {
        flex-wrap: wrap;

    }
  overflow-y: scroll;
  width: 85%;
  gap: 24px;
  padding: 27px;
    @media (min-width: 768px) {
    /* Estilos para pantallas a partir de 768px */
    display: flex;
    gap: 34px;
    box-sizing: border-box;
    width: 100%;
  }

`

const Equipo = (props)=>{

  const {colaboradores, eliminarColaborador, colorPrimario} = props


   //<>//{ colaboradores.length > 0 &&
   return<ContainerEquipos>
    <Titulo style={{backgroundColor: props.datos.colorPrimario}}>{props.datos.titulo}</Titulo>
    <ContainerColaborador>
      
      {
        colaboradores.map((colaborador, index) => <Colaborador datos={colaborador} 
        key={index}
        colorPrimario={colorPrimario}
        eliminarColaborador={eliminarColaborador} 
      
      
        />
      )
      }


    </ContainerColaborador>
  </ContainerEquipos>
//}</>

}



export default Equipo