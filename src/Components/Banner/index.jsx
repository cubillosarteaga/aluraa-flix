import styled from "styled-components"

const FigureEstilizada = styled.section`

background-repeat: no-repeat;
  display: flex;
  min-height: 739px;
  margin: 0;
  max-width: 100%;
  background-size: cover;
  background-image: url("./src/assets/banner.png");
  align-content: revert;
  align-items: end;
`

const TituloEstilizadoUno = styled.h1`
font-weight: 400;
  font-size: 37px;
  line-height: 28px;
  color: #ffff;
  max-width: 180px;
  padding: 11px 24px;
  border-radius: 10px;
  background-color: #6BD1FF;
`
const TituloEstilizadoDos = styled.h2`
font-weight: 400;
  font-size: 39px;
  line-height: 1px;
  color: #ffff;
  max-width: 583px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #6BD1FF;
`
const TituloEstilizado = styled.p`
font-weight: lighter;
  font-size: 18px;
  line-height: 20px;
  color: #ffff;
  max-width: 583px;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #6BD1FF;
  
`

const ContainerEstilizado = styled.div`

flex-direction: column;
padding: 0 20px;
width: 100%;
box-sizing: border-box;
display: flex;

align-items: center;
margin-bottom: 6px;
@media (min-width: 768px) {
width: 100%;
box-sizing: border-box;
display: flex;
justify-content: space-around;
align-items: center;
margin-bottom: 136px;
flex-direction: row;
}
`

const SeccionUno = styled.div`
display: flex;
flex-direction: column;

`
const SeccionDos = styled.div`
display: flex;


img{
  width: 100%;
}
@media (min-width: 768px) {
img{
    width: 500px;
}
}

`


const Banner = () => {
    return (
    <FigureEstilizada>
        <ContainerEstilizado>
            <SeccionUno>
        <TituloEstilizadoUno>Front end</TituloEstilizadoUno>
        <TituloEstilizadoDos>Challenge React</TituloEstilizadoDos>
        <TituloEstilizado>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.</TituloEstilizado>
            </SeccionUno>
            <SeccionDos>
                <img src="./src/assets/player.png" alt="player" />
            </SeccionDos>
            </ContainerEstilizado>
    </FigureEstilizada>
    )
}

export default Banner