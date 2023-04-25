import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&colore+red&json=true`

export function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact
      </button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Image extracted using the first words for ${fact}`} />}
    </main>
  )
} // Devuelve el imgURL con la imagen
