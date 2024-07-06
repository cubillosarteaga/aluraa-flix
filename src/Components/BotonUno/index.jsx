import { styled } from "styled-components"
import { Link } from "react-router-dom"

const BotonUno = styled.button`
    padding: 9px 46px;
    border-radius: 6px;
    
    background-color: black;
    border: 3px solid #257be5;
    cursor: pointer;
    font-size: 14px;
    -moz-box-shadow: 0px 0px 7px #257be5;
      -webkit-box-shadow: 0px 0px 7px #257be5;
      box-shadow: 0px 0px 7px #257be5;
      .menu-item{
        color: #257be5;
        font-weight: bold;
      }
`
const LinkUno = ()=>{
    return <BotonUno>
         <Link className="menu-item" to="/">HOME</Link>
    </BotonUno>
}

export default LinkUno