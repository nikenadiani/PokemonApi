// src/pages/Home.jsx
import React from 'react';
import PokemonList from '../components/PokemonList';

const Home = ({ onSavePokemon }) => {
  return (
    <div>
      <PokemonList onSavePokemon={onSavePokemon} />
    </div>
  );
};

export default Home;
