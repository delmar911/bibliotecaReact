import React, { useState, useEffect } from 'react';
import logoBlack from "../assets/img/logoBlack.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
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
    <div className="w-1/2 flex p-4 justify-start ">
      <form className="relative mb-4">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 dark:text-gray-400 w-4 h-4" />
        </div>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={query}
          onChange={handleInputChange}
          className="p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buscar
        </button>
      </form>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {results.map(product => (
            <div
            key={product.id}
            className="p-4 border rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
            style={{ maxHeight: '400px', overflowY: 'auto' }}
            >
            <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-32 object-cover mb-2 rounded"
            />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {product.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3">
                {product.description}
            </p>
            </div>
        ))}
        </div>
        <div className="w-60">

        <img src={logoBlack} alt="logo" />
        </div>

    </div>
  );
};

export default Header;
