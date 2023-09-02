import pokeball from '../../assets/pokeball.svg'

import css from './loading.module.scss'

function Loading() {
  return (
    <img className={css.loading} src={pokeball} alt='pokeball loading' />
  )
}

export default Loading
