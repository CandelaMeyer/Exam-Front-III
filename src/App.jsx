import { useState } from 'react'
import Card from './Components/Card'
import Formulario from './Components/Formulario'

function App() {
  const [submittedValues, setSubmittedValues] = useState('')

  function handleSubmit(values) {
    setSubmittedValues({
      deporte: values.deporte,
      dni: values.dni
    })
  }

  return (
    <>
      <h1>RIVER ID</h1>
      <h2>INGRESO PARA DEPORTISTAS</h2>
      <h3>Sección reservada para federados del Club Atlético River Plate</h3>
      <p>A continuación, indique el deporte que practica y su número de DNI.</p>
      <hr />
      <Formulario onSubmit={handleSubmit} />
      <br />
      {submittedValues && <Card values={submittedValues} />}
    </>
  )
}
export default App
