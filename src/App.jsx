import React, { useState } from 'react'
import './App.css'
import CardContent from './components/Card'
import Buscador from './components/Buscador'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import MiApi from './components/MiApi'

const App = () => {
  // Gestión de los datos de API con State y Callback
  const [datosApi, setDatosApi] = useState([])
  const handleDatosApi = (datos) => {
    setDatosApi(datos)
  }
  // Gestión de la caja de búsqueda
  const [valorBuscador, setValorBuscador] = useState('')
  const handleBuscar = (valor) => {
    setValorBuscador(valor)
  }
  // Filtrar datos según caja de búsqueda
  const datosFiltrados = datosApi.filter((dato) =>
    dato.title.toLowerCase().includes(valorBuscador.toLowerCase())
  )

  return (
    <Container fluid>
      <h1>Feriados de Chile (2024)</h1>
      <MiApi dataFechas={handleDatosApi} />
      <Buscador onBuscar={handleBuscar} />
      <Row className='g-4'>
        {datosFiltrados.map((dato) => (
          <CardContent
            key={dato.date}
            nombre={dato.title}
            fecha={dato.date}
            tipo={dato.type}
            inalienable={dato.inalienable}
            extra={dato.extra}
          />
        ))}
      </Row>
    </Container>
  )
}

export default App
