import { useState } from 'react'

function Formulario(props) {
  const [deporte, setDeporte] = useState('')
  const [dni, setDni] = useState('')

  const [error, setError] = useState('')

  function hasErrors() {
      if (deporte.length < 3 || dni.length < 6) {
      setError('Por favor chequea que la información sea correcta.')
      return true
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (hasErrors()) return
    props.onSubmit({ deporte, dni })
    setDeporte('')
    setDni('')
    setError('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='deporte'>Ingrese su deporte</label>
      <br />
      <input
        type='text'
        placeholder='Deporte (Ej: Hockey, Fútbol)'
        name='deporte'
        value={deporte}
        onChange={(e) => setDeporte(e.target.value)}
      />
      <br />
      <label htmlFor='dni'>Ingrese su DNI</label>
      <br />
      <input
        type='text'
        placeholder='DNI (Ej: 42438016)'
        name='dni'
        value={dni}
        onChange={(e) => setDni(e.target.value)}
      />
      <br />
      <button type='submit'>Ingresar</button>

      {error && <p style={{ color: 'white' }}>{error}</p>}
      
    </form>
  )
}
export default Formulario
