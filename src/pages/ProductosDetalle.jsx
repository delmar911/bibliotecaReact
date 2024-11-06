import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import toast from 'react-hot-toast';

export const ProductosDetalle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleAddToCart = () => {
    addToCart(product);
    // Opcional: Muestra una notificación de éxito
    toast.success('Producto agregado al carrito de compras', {
        duration: 4000, // Duración en milisegundos
        position: 'top-right' // Posición del toast
      });
  };

  if (loading) {
    return (
      <section className="p-4">
        <h2 className="text-xl font-bold">Cargando...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="p-4">
        <h2 className="text-xl font-bold text-red-600">Error: {error}</h2>
        <button
          onClick={handleNavigateBack}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Regresar
        </button>
      </section>
    );
  }

  return (
    <section className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-slate-100">Detalle del producto:</h1>
      <div className="bg-slate-200 rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Columna de la imagen */}
          <div className="md:w-1/2">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Columna de los detalles */}
          <div className="md:w-1/2 flex flex-col">
            <h2 className="text-2xl font-semibold mb-4">{product.title}</h2>
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <h3 className="text-3xl font-bold text-blue-600 mb-2">
                $ {product.price}
              </h3>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full inline-block">
                Categoría: {product.category?.name}
              </span>
            </div>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2">Descripción:</h4>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <div className="flex gap-4 mt-auto">
              <button
                onClick={handleNavigateBack}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex-1"
              >
                Regresar
              </button>
              
              <button
                onClick={handleAddToCart}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};