import { styled } from "styled-components"
import { Link } from "react-router-dom"

const BotonDos = styled.button`
    padding: 9px 28px;
    border-radius: 6px;
    color: #ffffff;
    background-color: black;
    border: 3px solid #ffffff;
    cursor: pointer;
    font-size: 14px;
    .menu-item-2{
        color: #ffffff;
        font-weight: bold;
    }
`

const LinkDos = ()=>{
    return <BotonDos>
         <Link className="menu-item-2" to="/FormularioCarga">NUEVO VIDEO</Link>
    </BotonDos>
}

export default LinkDos