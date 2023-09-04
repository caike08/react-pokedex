import { useState } from 'react'

import Card from './components/card/Card'
import Dialog from './components/dialog/Dialog'
import Loading from './components/loading/Loading'
import PokemonDetails from './components/pokemon-details/PokemonDetails'
import Search from './components/search/Search'

import useFetch from './hooks/use-fetch/use-fetch'
import useNetwork from './hooks/use-network/use-network'

import css from './App.module.scss'
import { POKEMON_LIST_URL } from './constants/pokeapi.const'

type PokemonDataType = {
  name: string,
  url: string,
}

type PokemonDataListType = {
  results: Array<PokemonDataType>
}

function App() {
  const [search, setSearch] = useState('')
  const isOnline = useNetwork()
  const { data, error, loading } = useFetch<PokemonDataListType>(POKEMON_LIST_URL)

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  // extract results from data if it exists or return empty array
  const { results } = data || { results: [] }

  const filteredList = results
    .filter((pokemon: PokemonDataType) => pokemon.name.includes(search.toLowerCase()))
    .map((pokemon: PokemonDataType, index) => (
      <Dialog key={index} content={<PokemonDetails name={pokemon.name} url={pokemon.url} />}>
        <Card
          id={index + 1}
          name={pokemon.name}
          url={pokemon.url}
        />
      </Dialog>
    ))


  // loading state
  if (loading) return (
    <div className={css.loading}>
      <Loading />
    </div>
  )

  // if app is offline
  if (!isOnline) return (
    <div className={css.offline}>
      <Loading />
      <p>Oops, it seems you are offline :(</p>
    </div>
  )

  // if error :(
  if (error) return (
    <div className={css.error}>
      <Loading />
      <p>Oops, something went wrong :(</p>
    </div>
  )

  // default
  return (
    <>
      <h4 className={css.title}>Pokédex (Kanto - カントー地方)</h4>

      <div className={css.content}>
        {results.length
          ? (
            <>
              <Search onChange={onSearchChange} className={css.search} />

              {filteredList.length ? (
                <div className={css.list}>
                  {filteredList}
                </div>
              ) : (
                <h5 className={css.noPokemon}>No pokémon found :(</h5>
              )}
            </>
          )
          : <h5 className={css.noPokemon}>Your pokemon list is empty :(</h5>
        }
      </div>

    </>
  )
}

export default App
