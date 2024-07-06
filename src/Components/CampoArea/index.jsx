import styled from "styled-components"

const ContainerArea = styled.div`
margin: 24px 0px;
label{
    font-size: 20px;
    
    display: block;
    color: #fff;
}

textarea{
    width: 100%;
@media (min-width: 768px) {
width: 50%;
}
    background-color: #191919;
    border: 2px solid #262626;
    border-radius: 10px;
    padding: 16px 10px;
    color: #a5a5a5;
    resize: none;
}

`

const CampoArea = () =>{
    
    return <ContainerArea>
    <label>Descripción</label>
    <textarea placeholder="¿de qué se trata este vídeo?"></textarea>
    </ContainerArea>
}

export default CampoArea