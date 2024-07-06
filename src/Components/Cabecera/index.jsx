import styled from "styled-components"
import CampoBotones from "../CampoBotones"


const HeaderEstilizado = styled.header`
    padding: 30px 36px;
    box-sizing: border-box;
    @media (min-width: 768px) {
    /* Estilos para pantallas a partir de 768px */
    padding: 30px 61px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
   
  }

  z-index: 10;
  position: fixed;
  bottom: 0px;
  @media (min-width: 768px) {
    top: 0;
    height: 10px;
  }
  left: 0;
  width: 100%;
    border-bottom: 2px solid #257be5;
    background-color: #262626;
    -moz-box-shadow: 0px 0px 30px #257be5;
      -webkit-box-shadow: 0px 0px 30px #257be5;
      box-shadow: 0px 0px 30px #257be5;
    img{
        display: none;
        @media (min-width: 768px) {
    /* Estilos para pantallas a partir de 768px */
    width: 112px;
    display: flex;
  }

        
    }

    


`

const Cabecera = () => {
    return <HeaderEstilizado>
        <img src="../img/logo.png" alt="logo aluraflix" />
        <CampoBotones />
            

       
        
        


    </HeaderEstilizado>
    
}

export default Cabecera