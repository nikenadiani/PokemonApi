// src/pages/Saved.jsx
import React from 'react';
import SavedPokemon from '../components/SavedPokemon';

const Saved = ({ savedPokemon, onRemovePokemon, onAddAlias }) => {
  return (
    <div>
      <SavedPokemon 
        savedPokemon={savedPokemon} 
        onRemovePokemon={onRemovePokemon}
        onAddAlias={onAddAlias}
      />
    </div>
  );
};

export default Saved;
