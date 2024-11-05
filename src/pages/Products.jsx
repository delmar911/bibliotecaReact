import React, { useState, useEffect } from 'react';

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // Estados para paginación
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 15;

  // Categorías predefinidas
  const categories = [
    { id: null, name: 'Todos' },
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Electronics' },
    { id: 3, name: 'Shoes' },
    { id: 5, name: 'Miscellaneous' }
  ];

  useEffect(() => {
    const baseUrl = selectedCategory
      ? `https://api.escuelajs.co/api/v1/categories/${selectedCategory}/products`
      : 'https://api.escuelajs.co/api/v1/products';
    
    const offset = (currentPage - 1) * productsPerPage;
    const url = `${baseUrl}?limit=${productsPerPage}&offset=${offset}`;

    setLoading(true);

    // Primero obtenemos el total de productos
    fetch(baseUrl)
      .then(response => response.json())
      .then(allProducts => {
        setTotalProducts(allProducts.length);
        
        // Luego obtenemos la página actual
        return fetch(url);
      })
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error al cargar los productos');
        setLoading(false);
      });
  }, [selectedCategory, currentPage]);

  // Calcular total de páginas
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  // Función para cambiar de página
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Generar array de números de página para mostrar
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; // Número máximo de páginas a mostrar

    if (totalPages <= maxPagesToShow) {
      // Si hay menos páginas que el máximo, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Si estamos cerca del inicio
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
      // Si estamos cerca del final
      else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }
      // Si estamos en medio
      else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-gray-600">Cargando productos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Category Filter */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentPage(1); // Reset to first page when changing category
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Products Counter */}
      <div className="mb-4 text-gray-900">
        Mostrando {products.length} de {totalProducts} productos
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="relative h-48 overflow-hidden">
              <img 
                className="rounded-t-lg w-full h-full object-cover"
                src={product.images[0] || '/api/placeholder/400/320'} 
                alt={product.title}
                onError={(e) => {
                  e.target.src = '/api/placeholder/400/320';
                }}
              />
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {product.category.name}
                </span>
              </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {product.description}
              </p>
              <p className="mb-3 text-lg font-bold text-blue-600 dark:text-blue-400">
                ${product.price}
              </p>
              <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ver detalles
                <svg 
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 14 10"
                >
                  <path 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg ${
              currentPage === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Anterior
          </button>
          
          {getPageNumbers().map((pageNum, index) => (
            <button
              key={index}
              onClick={() => typeof pageNum === 'number' && handlePageChange(pageNum)}
              className={`px-3 py-1 rounded-lg ${
                pageNum === currentPage
                  ? 'bg-blue-600 text-white'
                  : pageNum === '...'
                  ? 'bg-transparent cursor-default'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {pageNum}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-lg ${
              currentPage === totalPages
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};