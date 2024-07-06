import styled from "styled-components"

const CajitaCategoria = styled.div`
width: 100%;
@media (min-width: 768px) {
width: 50%;
}
label{
    font-size: 20px;
  display: block;
  color: #fff;
}

select{
    width: 100%;
  background-color: #191919;
  border: 2px solid #262626;
  border-radius: 10px;
  padding: 16px 10px;
  color: #a5a5a5;
}

`

const ListaOpciones = (props) =>{
  
 

  const manejarCambio = (event) =>{
    props.actualizarEquipo(event.target.value)
  }
    return <CajitaCategoria>
        <label>Categoría</label>
        <select value={props.valor} onChange={manejarCambio}>
          <option value="" disabled defaultValue="" hidden>Seleccione una categoría</option>
            {props.equipos.map((equipo, index)=>{
              return <option key={index}>{equipo}</option>
            })}
        </select>
    </CajitaCategoria>
}

export default ListaOpciones