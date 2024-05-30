// src/components/AliasModal.jsx
import React from 'react';

const AliasModal = ({ alias, setAlias, onSaveAlias, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-4">Set Alias for Pokemon</h2>
        <input 
          type="text"
          placeholder="Name alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <div className="flex justify-end">
          <button 
            className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={onSaveAlias}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AliasModal;
