import { useState } from 'react'
import './index.scss'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

const Search = () => {
  const [text, setText] = useState('')
  const [pokemon, setPokemon] = useState({})

  const handleChange = ({ target }) => setText(target.value)

  const handleClick = async () => {
    try {
      const raw = await fetch(`${BASE_URL}${text}`)
      const result = await raw.json()
      setPokemon(result)
    } catch (error) {
      console.info('> error: ', error.message)
    }
  }

  console.info('> pokemon: ', pokemon)

  return (
    <section>
      <input
        value={text}
        onChange={handleChange}
        placeholder="type some pokemon..."
      />
      <button onClick={handleClick}>Search</button>
      {pokemon.name && (
        <section className="card">
          <img src={pokemon?.sprites?.front_default} alt="pokemon pic" />
          <label>{pokemon?.name}</label>
        </section>
      )}
    </section>
  )
}

export default Search
