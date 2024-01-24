import React from 'react'
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom'
import { useApi } from './useApi'
import LoadingSpinner from './LoadingSpinner'
import ErrorMessage from './ErrorMessage'
import PokemonPage from './PokemonPage'
import PokemonList from './PokemonList'

const mapResults = ({ results }) => results.map(({ url, name }) => ({
  url,
  name,
  id: parseInt(url.match(/\/(\d+)\//)[1])
}))

const App = () => {
  const { name } = useParams()
  const { data: pokemonList, error, isLoading } = useApi('https://pokeapi.co/api/v2/pokemon/?limit=50', mapResults)

  if (isLoading) {
    return <LoadingSpinner />
  }
  if (error) {
    return <ErrorMessage error={error} />
  }

  let next = null
  let previous = null

  if (name) {
    const pokemonId = pokemonList.find(({ name: pokemonName }) => pokemonName === name).id
    previous = pokemonList.find(({ id }) => id === pokemonId - 1)
    next = pokemonList.find(({ id }) => id === pokemonId + 1)
  }

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<PokemonList pokemonList={pokemonList} />} />
        <Route exact path="/pokemon/:name" element={<PokemonPage pokemonList={pokemonList} previous={previous} next={next} />} />
      </Routes>
    </Router>
  )
}

export default App
