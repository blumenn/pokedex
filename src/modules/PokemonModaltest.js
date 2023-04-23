import React from 'react';
import './PokemonModal.css';

const PokemonModal = ({ show, onClose, pokemon }) => {
  if (!show || !pokemon) {
    return null;
  }

  const { types, abilities } = pokemon;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{pokemon.name}</h2>
          <button onClick={onClose}>X</button>
        </div>
        <div className="modal-body">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <div className="modal-body-info">
            <p><strong>Height:</strong> {pokemon.height}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
            <p><strong>Types:</strong> {types.map((type, index) => (
              <span key={index}>{type.type.name} </span>
            ))}</p>
            <p><strong>Abilities:</strong> {abilities.map((ability, index) => (
              <span key={index}>{ability.ability.name} </span>
            ))}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
