// src/components/PokemonDetail.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PokemonDetail = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        setPokemon(result.data);
      } catch (error) {
        console.error('Error fetching the Pokemon data', error);
      }
    };
    fetchPokemon();
  }, [name]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">{pokemon.name}</h2>
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
        className="mb-4"
      />
      <p><strong>Weight:</strong> {pokemon.weight}</p>
      <p><strong>Height:</strong> {pokemon.height}</p>
      <p><strong>Types:</strong> {pokemon.types.map(type => type.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetail;
