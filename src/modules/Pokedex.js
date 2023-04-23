import React, { useState, useEffect, useRef } from 'react';
import PokemonModal from './PokemonModal';

function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [offset, setOffset] = useState(10);
  const [limit, setLimit] = useState(10);
  const loadMoreButtonRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {

    const getPokemonData = async () => {
     
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await response.json();
        setPokemonData(prevState => [...prevState, ...data.results]);
      } catch (error) {
        
      }
      
    };

    getPokemonData();
  }, [offset, limit]);

  const loadMore = () => {
    setOffset(offset + limit);
  };


  const handlePokemonClick = async (pokemon) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
      const data = await response.json();
      setSelectedPokemon(data);
    } catch (error) {
      console.error(error);
    }
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedPokemon(null);
  };


  return (
    <div>
      <h1>Pokedex</h1>
      
      <ul>
        {pokemonData.map((pokemon, index) => (
          <button key={index+1} onClick={() => handlePokemonClick({id: index + 1, name: pokemon.name})}>
            <p> # {index +1 }</p>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </button>
        ))}
      </ul>
      <button ref={loadMoreButtonRef} onClick={loadMore}>Load More</button>
      <PokemonModal show={showModal} onClose={handleModalClose} pokemon={selectedPokemon} />
    </div>
  );
}

export default Pokedex;
