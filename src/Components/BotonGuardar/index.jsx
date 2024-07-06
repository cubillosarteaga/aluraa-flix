import styled from "styled-components"

const Guardar = styled.button`
background-color: #191919;
border: 1px solid #2271D1;
border-radius: 10px;
color: #fff;
font-size: 16px;
text-transform: uppercase;
padding: 10px 40px;
font-weight: bold;

`


const BotonGuardar = (props) =>{
    return <Guardar>Guardar</Guardar>
}

export default BotonGuardar