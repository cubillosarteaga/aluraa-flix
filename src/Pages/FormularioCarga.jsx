import { useState } from "react"
import styled from "styled-components"
import CampoTexto from "../Components/CampoTexto"
import ListaOpciones from "../Components/ListaOpciones"
import CampoArea from "../Components/CampoArea"
import BotonGuardar from "../Components/BotonGuardar"
import BotonLimpiar from "../Components/BotonLimpiar"

const SeccionForm = styled.section`
padding: 99px 60px 30px 60px;


`

const TituloNuevoVideo = styled.h2`
color: #fff;
margin-bottom: 20px;
font-weight: bold;
font-size: 36px;
text-align: center;


`

const SubTituloNuevoVideo = styled.h3`
color: #fff;
text-align: center;
font-weight: lighter;
font-size: 20px;
text-transform: uppercase;


`

const Tarjeta = styled.p`
color: #fff;
font-size: 28px;
font-weight: normal;
padding: 16px 10px 16px 10px;
border-bottom: 2px solid #262626;
border-top: 2px solid #262626;
margin-bottom: 64px;

`

const ContainerCat = styled.div`
display: flex;

`
const CajaTitulo = styled.div`
margin: 24px 0px;
width: 100%;
@media (min-width: 768px) {
width: 50%;
}
`

const ContainerCate = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0;
@media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 140px;
    justify-content: space-between;
}
`

const FormularioCarga = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [imagen, actualizarImagen] = useState("")
    const [video, actualizarVideo] = useState("")
    const [descripcion, actualizarDescripción] = useState("")
    const [equipo, actualizarEquipo]= useState("")

    const {registrarColaborador} = props
    
    
  const manejarEnvio = (evento)=> {
    evento.preventDefault()
    //console.log("manejar el envio")
    let datosAEnviar = {
        nombre:nombre,
        imagen:imagen,
        video:video,
        descripcion:descripcion,
        equipo:equipo

    }
    registrarColaborador(datosAEnviar);
  }



    return <SeccionForm>
        <TituloNuevoVideo>NUEVO VIDEO</TituloNuevoVideo>
            <SubTituloNuevoVideo>Complete el formulario para crear una nueva tarjeta de video</SubTituloNuevoVideo>
            <Tarjeta>Crear Tarjeta</Tarjeta>
        <form onSubmit={manejarEnvio}>
            
            <ContainerCate>
                <CajaTitulo>
                    <CampoTexto titulo="Titulo" 
                    placeholder="ingrese el título" 
                    valor={nombre} 
                    actualizarValor={actualizarNombre} />
                </CajaTitulo>
                <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
                />
                
            </ContainerCate>
            
                
                    <CampoTexto titulo="Imagen" placeholder="ingrese el enlace de la imagen" valor={imagen} actualizarValor={actualizarImagen}/>
                    
                    <CampoTexto titulo="Video" placeholder="ingrese el enlace del video" valor={video} actualizarValor={actualizarVideo} />
                    <CampoArea titulo="Descripción"  valor={descripcion} actualizarValor={actualizarDescripción} />
                    <BotonGuardar />
                    <BotonLimpiar/>
                    
            
        </form>
    </SeccionForm>
}

export default FormularioCarga