// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Saved from './pages/Saved';
import Navbar from './components/Navbar';
import PokemonDetail from './components/PokemonDetail';
import AliasModal from './components/AliasModal';

const App = () => {
  const [savedPokemon, setSavedPokemon] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [alias, setAlias] = useState('');

  const savePokemon = (pokemon) => {
    setShowModal(true);
    setCurrentPokemon(pokemon);
  };

  const handleSaveAlias = () => {
    setSavedPokemon([...savedPokemon, { ...currentPokemon, alias }]);
    setShowModal(false);
    setAlias('');
  };

  const removePokemon = (pokemon) => {
    setSavedPokemon(savedPokemon.filter(p => p.name !== pokemon.name));
  };

  const addAlias = (pokemon, alias) => {
    setSavedPokemon(savedPokemon.map(p => 
      p.name === pokemon.name ? { ...p, alias } : p
    ));
  };

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home onSavePokemon={savePokemon} />} />
          <Route path="/saved" element={<Saved 
            savedPokemon={savedPokemon} 
            onRemovePokemon={removePokemon}
            onAddAlias={addAlias}
          />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
      </div>
      {showModal && (
        <AliasModal 
          alias={alias}
          setAlias={setAlias}
          onSaveAlias={handleSaveAlias}
          onClose={() => setShowModal(false)}
        />
      )}
    </Router>
  );
};

export default App;
