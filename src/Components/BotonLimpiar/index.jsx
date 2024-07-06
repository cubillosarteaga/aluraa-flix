import styled from "styled-components"

const Limpiar = styled.button`
background-color: #191919;
border: 1px solid #fff;
border-radius: 10px;
color: #fff;
font-size: 16px;
text-transform: uppercase;
padding: 10px 40px;
font-weight: bold;
margin-left: 0px;
margin-top: 20px;
@media (min-width: 768px) {
    margin-left: 30px;
    margin-top: 0px;
}


`


const BotonLimpiar = () =>{
    return <Limpiar>Limpiar</Limpiar>
}

export default BotonLimpiar