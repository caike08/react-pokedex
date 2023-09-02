import { useState, useEffect } from 'react'

import Card from './components/card/Card'
import Dialog from './components/dialog/Dialog'
import Loading from './components/loading/Loading'
import PokemonDetails from './components/pokemon-details/PokemonDetails'
import Search from './components/search/Search'

import css from './App.module.scss'

type PokemonDataType = {
  name: string,
  url: string,
}

function App() {
  const [loading, setLoading] = useState(true)
  const [pokemonData, setPokemonData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    const fetchData = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      const data = await response.json()
      setPokemonData(data.results)
      setLoading(false)
    }
    
    fetchData()
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  if (loading) return <Loading />

  return (
    <>
      <h4 className={css.title}>Pokédex (Kanto - カントー地方)</h4>

      <div className={css.content}>
        {pokemonData.length > 0
          ? (
            <>
              <Search onChange={onSearchChange} className={css.search} />

              <div className={css.list}>
                {pokemonData
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
                }
              </div>
            </>
          )
          : <h5 className={css.noPokemon}>No pokémon found</h5>
          }
      </div>

    </>
  )
}

export default App
