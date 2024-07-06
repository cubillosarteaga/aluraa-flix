import { useState } from 'react'
import { v4 as uuid} from "uuid"
import Home from "./Pages/Home"
import FormularioCarga from './Pages/FormularioCarga'
import Cabecera from './Components/Cabecera'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer'


function App() {

  const [colaboradores, actualizarColaboradores] = useState([{
  
    "nombre": "Harland Lohora",
    
    "imagen": "https://github.com/harlandlohora.png",
    "equipo": "Frontend",
    
  },

  {
    
    "nombre": "Genesys Rondón",
    
    "imagen": "https://i.pinimg.com/736x/ec/5f/b8/ec5fb8e2d1269aad90d12a951f5d3efc.jpg",
    "equipo": "Innovación y Gestión",
    
  },

  {
    
    "nombre": "JeanMarie Quijada",
    
    "imagen": "https://github.com/JeanmarieAluraLatam.png",
    "equipo": "Innovación y Gestión",
    
  },

  {
    
    "nombre": "Christian Velasco",
    
    "imagen": "https://github.com/JeanmarieAluraLatam.png",
    "equipo": "Backend",
  
  },

  {
    
    "nombre": "José González",
    
    "imagen": "https://github.com/JoseDarioGonzalezCha.png",
    "equipo": "Frontend",
    
  }])

  const registrarColaborador = (colaborador)=>{
    console.log("nuevo colab:", colaborador);
    actualizarColaboradores([...colaboradores, colaborador])
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

  

  return (
    <Router>
      <Cabecera />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='FormularioCarga' element={<FormularioCarga 
        equipos={equipos.map((equipo)=> equipo.titulo)}
        registrarColaborador={registrarColaborador}
        />}/>
      </Routes>
      <Footer />
     
    </Router>

   
  )
}

export default App
