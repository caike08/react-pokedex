import { useState, useEffect } from 'react'

import ImageResolver from '../image-resolver/ImageResolver'
import Loading from '../loading/Loading'

import css from './card.module.scss'

type CardProps = {
  id: string | number,
  name: string
  url: string
}

type PokemonDataType = {
  sprites: {
    front_default: string
  }
}

function Card({id, name, url}: CardProps) {
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState<PokemonDataType>({ sprites: { front_default: '' }})

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setPokemonData(data)
      setLoading(false)
    }
    
    fetchData()
  }, [url]);

  const { sprites: { front_default } } = pokemonData

  return (<div className={css.card}>
    {loading
      ? <Loading />
      : (
        <>      
          <ImageResolver className={css.pokemon} src={front_default} alt={name} />
          <small className={css.name}>#{id} {name}</small>
        </>
      )
    }
  </div>)
}

export default Card
