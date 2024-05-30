// src/components/SavedPokemon.jsx
import React, { useState } from 'react';

const SavedPokemon = ({ savedPokemon, onRemovePokemon, onAddAlias }) => {
  const [alias, setAlias] = useState('');

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Saved Pokemon</h2>
      <ul className="space-y-2">
        {savedPokemon.map((pokemon, index) => (
          <li key={index} className="flex justify-between items-center">
            <img src={pokemon.image} alt="" />
            <span>{pokemon.name} {pokemon.alias ? `(${pokemon.alias})` : ''}</span>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                className="border px-2 py-1"
                placeholder="Add alias"
                value={alias}
                onChange={(e) => setAlias(e.target.value)}
              />
              <button 
                className="bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => {
                  onAddAlias(pokemon, alias);
                  setAlias('');
                }}
              >
                Add Alias
              </button>
              <button 
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => onRemovePokemon(pokemon)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedPokemon;
