import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Buscador = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://api.escuelajs.co/api/v1/products?title=${query}`)
        .then(response => response.json())
        .then(data => setResults(data))
        .catch(error => console.error('Error al obtener los datos:', error));
    } else {
      setResults([]);
    }
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={query}
        onChange={handleInputChange}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
      <div className="resultados">
        {results.map(product => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.images[0]} alt={product.title} width="100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buscador;
