import clsx from 'clsx'

import { POKEMON_TYPES, POKEMON_TYPE_BADGES } from '../../constants/pokemon-types.const'
import errorImage from '../../assets/error.svg'
import Tooltip from '../tooltip/Tooltip'

import css from './pokemon-type-badge.module.scss'

type PokemonTypeBadgeProps = {
  badge: POKEMON_TYPES
}

function PokemonTypeBadge({ badge }: PokemonTypeBadgeProps) {
  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.src = errorImage
  }

  const badgeClassNames = clsx(css.badge, css[badge])

  return (
    <Tooltip content={badge}>
      <img
        className={badgeClassNames}
        src={POKEMON_TYPE_BADGES[badge]}
        alt={badge}
        onError={handleError}
      />
    </Tooltip>
  )
}

export default PokemonTypeBadge
