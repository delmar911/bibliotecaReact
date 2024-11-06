import React, { useState, useEffect } from "react";
import axios from "axios";
import imgReplace from "../assets/img/Image-folder.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { useSearch } from '../context/SearchContext';

export const Products = () => {
  const navigate = useNavigate();
  const { searchTerm, isSearching, setIsSearching, filteredProducts, setFilteredProducts } = useSearch();
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { id: null, name: "Todos" },
    { id: 1, name: "Clothes" },
    { id: 2, name: "Electronics" },
    { id: 3, name: "Shoes" },
    { id: 5, name: "Miscellaneous" },
  ];

  useEffect(() => {
    fetchData();
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, [selectedCategory]);

  useEffect(() => {
    if (isSearching && allProducts.length > 0) {
      const filtered = allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
      setIsSearching(false);
    }
  }, [isSearching, allProducts, searchTerm]);

  const fetchData = async () => {
    const baseUrl = selectedCategory
      ? `https://api.escuelajs.co/api/v1/categories/${selectedCategory}/products`
      : "https://api.escuelajs.co/api/v1/products";

    setLoading(true);

    try {
      const response = await axios.get(baseUrl);
      setAllProducts(response.data);
      if (searchTerm) {
        const filtered = response.data.filter(product =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    } catch (err) {
      setError("Error al cargar los productos");
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (categoryId) => {
    if (selectedCategory !== categoryId) {
      setSelectedCategory(categoryId);
      setFilteredProducts([]);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/productos/${productId}`);
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

  const displayProducts = filteredProducts.length > 0 ? filteredProducts : allProducts;

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handleCategoryChange(category.id)}
              data-aos="fade-up"
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4 text-gray-900">
        {searchTerm && filteredProducts.length > 0 ? (
          <p>Mostrando {filteredProducts.length} resultados para "{searchTerm}"</p>
        ) : searchTerm ? (
          <p>No se encontraron resultados para "{searchTerm}"</p>
        ) : (
          <p>Mostrando {allProducts.length} productos</p>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer transform transition-transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
            onClick={() => handleProductClick(product.id)}
          >
            <div className="relative h-80 overflow-hidden">
              <img
                className="rounded-t-lg w-full h-full object-cover"
                src={product.images[0] || imgReplace}
                alt={product.title}
                onError={(e) => {
                  e.target.src = imgReplace;
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
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                {product.description}
              </p>
              <p className="mb-3 text-lg font-bold text-blue-600 dark:text-blue-400">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;