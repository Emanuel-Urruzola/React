import { Filters } from './Filters.jsx'
import { CartIcon } from './Icons.jsx'

export function Header () {
  return (
    <header>
      <div>React Shop {CartIcon()}</div>
      <Filters />
    </header>
  )
}
