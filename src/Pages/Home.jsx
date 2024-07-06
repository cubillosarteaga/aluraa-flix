import { useState } from "react"
import { v4 as uuid} from "uuid"
import Banner from "../Components/Banner"
import Equipo from "../Components/Equipo"
import Modal from "../Components/Modal"

const Home = ()=>{

  const [colaboradores, actualizarColaboradores] = useState([{

    id: uuid(),
    "nombre": "Cuando usar var, let...",
    
    "imagen": "https://i.ibb.co/GtXvrz1/foto-1.png",
    "equipo": "Front End",
    
  },

  {
    id: uuid(),
    "nombre": "¿Qué es Javascript?",
    
    "imagen": "https://i.ibb.co/SBZ8qPR/foto-2.png",
    "equipo": "Front End",
    
  },

  {
    id: uuid(),
    "nombre": "Equipo Frontend",
    
    "imagen": "https://i.ibb.co/30hrfj3/foto-3.png",
    "equipo": "Front End",
    
  },

  {
    id: uuid(),
    "nombre": "Spring Framework",
    
    "imagen": "https://i.ibb.co/31z1W6M/foto-4.png",
    "equipo": "Back End",
  
  },

  {
    id: uuid(),
    "nombre": "¿Qué es SQL y NOSQL?",
    
    "imagen": "https://i.ibb.co/f2tf8qM/foto-5.png",
    "equipo": "Back End",
  
  },

  {
    id: uuid(),
    "nombre": "Conoce los ENUM",
    
    "imagen": "https://i.ibb.co/gDd2q0b/foto-6.png",
    "equipo": "Back End",
  
  },

  {
    id: uuid(),
    "nombre": "¿Qué son las soft skills?",
    
    "imagen": "https://i.ibb.co/bmrdzbP/foto-7.png",
    "equipo": "Innovación y Gestión",
    
  },

  {
    id: uuid(),
    "nombre": "Las 7 soft skills más deseadas",
    
    "imagen": "https://i.ibb.co/XZmM7dr/foto-8.png",
    "equipo": "Innovación y Gestión",
    
  },

  {
    id: uuid(),
    "nombre": "Metodolías agiles",
    
    "imagen": "https://i.ibb.co/dtFG2GC/foto-9.png",
    "equipo": "Innovación y Gestión",
    
  }

])
    //registrar

    const registrarColaborador = (colaborador) =>{
       console.log("nuevo colaborador:", colaborador);
        //SPREAD OPERATOR
        actualizarColaboradores([...colaboradores, colaborador])
    
      }

      //eliminar

      const eliminarColaborador= (id) => {
        console.log("eliminar colaborador");
        const nuevosColaboradores= colaboradores.filter((colaborador) => colaborador.id !== id)
        actualizarColaboradores(nuevosColaboradores)
      } 
      

    const equipos = [
        {
          id: uuid(),
          titulo:"Front End",
          colorPrimario:"#6BD1FF"
        },
    
        {
          id: uuid(),
          titulo:"Back End",
          colorPrimario:"#00C86F"
        },
    
        {
          id: uuid(),
          titulo:"Innovación y Gestión",
          colorPrimario:"#FFBA05"
        }
        
        
        
      ]

      //modal

      //const [isModalOpen, setisModalOpen] = false
      
    return <>
    
    <Banner />
    

    {
        equipos.map((equipo) => {
          
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
          registrarColaborador={registrarColaborador}
          eliminarColaborador={eliminarColaborador}
          
          
          />
        })
      }
      
    
    </>
   
}

export default Home