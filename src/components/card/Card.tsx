import ImageResolver from '../image-resolver/ImageResolver'
import Loading from '../loading/Loading'

import css from './card.module.scss'
import useFetch from '../../hooks/use-fetch/use-fetch'

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
  const { data, error, loading } = useFetch<PokemonDataType>(url)

  // extract front_default from data if it exists or return default with empty string
  const { sprites: { front_default }} = data || { sprites: { front_default: '' } }

  if(error) return (<div>Error</div>)

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
