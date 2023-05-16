import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      {
        JSON.stringify(filters, null, 2)
      }
      {/*
      <h1>Prueba tecnica de React</h1>
      <span>Emanuel Urruzola</span>
      <h5>Shopping Cart con useContext & useReducer</h5>
      */}
    </footer >
  )
}