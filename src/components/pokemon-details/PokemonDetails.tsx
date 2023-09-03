import {useEffect, useState} from 'react'

import { POKEMON_TYPES } from '../../constants/pokemon-types.const'
import ImageResolver from '../image-resolver/ImageResolver'
import Loading from '../loading/Loading'
import PokemonTypeBadge from '../pokemon-type-badge/PokemonTypeBadge'

import css from './pokemon-details.module.scss'

type PokemonDetailsType = {
  name: string
  url: string
}

type PokemonDetailType = {
  abilities: Array<{
    ability: {
      name: string,
    }
  }>,
  base_experience: number,
  height: number, // in decimeters
  id: number,
  types: Array<{
    slot: number,
    type: {
      name: POKEMON_TYPES
    }
  }>,
  sprites: {
    front_default: string,
  },
  weight: number, // in hectograms
}

function PokemonDetails({ name, url }: PokemonDetailsType) {
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState<PokemonDetailType>({
    abilities: [{
      ability: {
        name: '',
      },
    }],
    base_experience: 0,
    height: 0,
    id: 0,
    types: [],
    sprites: {
      front_default: '',
    },
    weight: 0
  })
  
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

  if (loading) return <Loading />

  const { abilities, base_experience, height, id, types, sprites, weight } = pokemonData

  return (
    <div className={css.details}>
      <h4 className={css.title}>{name}</h4>

      <div className={css.imageContainer}>
        <ImageResolver className={css.pokemon} src={sprites.front_default} alt={name} />
      </div>

      <div className={css.row}>
        <div className={css.cell}>
          <h5 className={css.subtitle}>ID</h5>
          <p className={css.description}>#{id}</p>
        </div>
        <div className={css.cell}>
          <h5 className={css.subtitle}>Base experience</h5>
          <p className={css.description}>{base_experience}</p>
        </div>
      </div>
      <div className={css.row}>
        <div className={css.cell}>
          <h5 className={css.subtitle}>Weight</h5>
          <p className={css.description}>{weight / 10} kg</p>
        </div>
        <div className={css.cell}>
          <h5 className={css.subtitle}>Height</h5>
          <p className={css.description}>{height / 10} m</p>
        </div>
      </div>

      <div className={css.row}>
        {abilities.length > 0 && (
          <div className={css.cell}>
            <h5 className={css.subtitle}>Abilities</h5>
            <ul>
              {abilities.map((ability, index) => (
                <li key={index} className={css.description}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        )}

        {types.length > 0 && (
          <div className={css.cell}>
            <h5 className={css.subtitle}>Type</h5>
            <div className={css.badges}>
              {types.map((type, index) => (
                <PokemonTypeBadge key={index} badge={type.type.name} />
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default PokemonDetails
