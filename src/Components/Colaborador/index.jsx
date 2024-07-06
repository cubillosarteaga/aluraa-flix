import { styled } from "styled-components"
import BotonIcono from "../BotonIcono"
import { useState } from "react"
import Modal from "../Modal"
const Figure = styled.figure`
    width: 100%;
    @media (min-width: 768px) {
    /* Estilos para pantallas a partir de 768px */
    width: ${props => props.$expandida ? '90%' : '370px'};
  }

    max-width: 100%;
    margin: 0;
    display: flex;
    -moz-box-shadow: 0px 0px 7px #07111d;
  -webkit-box-shadow: 0px 0px 7px #257be5;
  box-shadow: 0px 0px 24px #257be5;
  border: 5px solid colorPrimario; 
  border-radius: 27px;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #000;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 1px;
        border-top: 4px solid #257be5;
        h3 {
            
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Pie = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    gap: 30px;
`

const Colaborador = (props)=>{
 
    const {imagen, id} = props.datos

    const {colorPrimario, eliminarColaborador} = props

    const [isModalOpen, setIsModalOpen] = useState(false)
    
    return <Figure style={{border: colorPrimario}}>
    <img src={imagen} alt="video"/>
    <figcaption>

        <Pie>

            <BotonIcono onClick={() => eliminarColaborador(id)}>
                <img src="../iconos/borrar.png" alt="Icono borrar" /><p>Borrar</p>
            </BotonIcono>
            <BotonIcono onClick={() => setIsModalOpen(true)}>
                <img src="../iconos/editar.png" alt="Icono editar" /><p>Editar</p>
            </BotonIcono>
        </Pie>
    </figcaption>
    <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)}/>
</Figure>
}

export default Colaborador