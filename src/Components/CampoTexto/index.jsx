import { useState } from "react"
import styled from "styled-components"

const ContainerLabel = styled.div`
margin: 24px 0px;
label{
    font-size: 20px;
    
    display: block;
    color: #fff;
}

input{
    width: 100%;
    background-color: #191919;
    border: 2px solid #262626;
    border-radius: 10px;
    padding: 16px 10px;
    color: #a5a5a5;
}


`

const CampoTexto = (props)=>{

    const manejarCambio = (event)=>{
        
        props.actualizarValor(event.target.value)
    }
    return <ContainerLabel>

        <label>{props.titulo}</label>
        <input type="text" 
        placeholder={props.placeholder} 
        required 
        value={props.valor}
        onChange={manejarCambio}
        />




    </ContainerLabel>
}

export default CampoTexto