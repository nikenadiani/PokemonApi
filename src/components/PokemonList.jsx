// src/components/PokemonList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PokemonList = ({ onSavePokemon }) => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const pokemonDetails = await Promise.all(result.data.results.map(async (pokemon) => {
          const pokemonDetail = await axios.get(pokemon.url);
          return {
            name: pokemon.name,
            image: pokemonDetail.data.sprites.front_default,
            weight: pokemonDetail.data.weight,
            height: pokemonDetail.data.height,
            types: pokemonDetail.data.types.map(typeInfo => typeInfo.type.name).join(', '),
          };
        }));
        setPokemonList(pokemonDetails);
        setFilteredPokemonList(pokemonDetails);
      } catch (error) {
        console.error('Error fetching the Pokemon data', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredPokemonList(
      pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, pokemonList]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Pokemon List</h2>
      <input 
        type="text"
        placeholder="Search by name Pokemon"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemonList.map((pokemon, index) => (
          <div key={index} className="border border-gray-300 rounded shadow-md p-4 flex flex-col items-center bg-white">
            <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mb-4" />
            <Link to={`/pokemon/${pokemon.name}`} className="capitalize text-lg font-bold mb-2">{pokemon.name}</Link>
            <p className="text-sm">Weight: {pokemon.weight}</p>
            <p className="text-sm">Height: {pokemon.height}</p>
            <p className="text-sm">Types: {pokemon.types}</p>
            <button 
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => onSavePokemon(pokemon)}
            >
              Save
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
