import { styled } from "styled-components"
import BotonUno from "../BotonUno";
import LinkDos from "../BotonDos";

const ContainerEstilizado = styled.div`
    display: flex;
    gap: 20px;

`;

const CampoBotones = () => {
    
    return (
        <ContainerEstilizado>
         <BotonUno>HOME</BotonUno>
         <LinkDos>NUEVO VIDEO</LinkDos>
        </ContainerEstilizado>
    )
}

export default CampoBotones;