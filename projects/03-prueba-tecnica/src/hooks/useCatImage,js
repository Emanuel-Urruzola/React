import { useEffect, useState } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageURL, setImageURL] = useState()

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const threeFistWords = fact.split(' ', 3).join(' ')
    console.log(threeFistWords)

    fetch(`https://cataas.com/cat/says/${threeFistWords}?size=50&colore+red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageURL(url)
      })
  }, [fact])
  return { imageURL: `${CAT_PREFIX_IMAGE_URL}${imageURL}` }
}
