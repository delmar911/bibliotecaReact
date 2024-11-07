import React from 'react';
import toast from 'react-hot-toast';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus } from 'lucide-react';


export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const navigate = useNavigate();
    const notify = () => toast('Here is your toast.');
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-slate-100">Tu carrito está vacío</h2>
          <button
            onClick={() => navigate('/productos')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Ir a productos
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 w-full">
      <h2 className="text-2xl font-bold mb-6 text-slate-100">Carrito de Compras</h2>
      
      <div className="bg-slate-200 rounded-lg shadow-md p-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center border-b py-4 space-y-4 md:space-y-0 md:space-x-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600">${item.price}</p>
            </div>
            
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Minus className="w-4 h-4" />
              </button>
              
              <span className="mx-2 font-medium">{item.quantity}</span>
              
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-lg font-semibold mt-2 md:mt-0">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-2 text-red-500 hover:text-red-700"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
        
        <div className="mt-6 flex justify-between items-center">
          <div className="text-2xl font-bold">
            Total: ${getCartTotal().toFixed(2)}
          </div>
          
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600"
            onClick={() => {
                toast.success('¡Gracias por tu compra!', {
                    duration: 4000, // Duración en milisegundos
                    position: 'top-center' // Posición del toast
                  });
            }}
          >
            Proceder al pago
          </button>
        </div>
      </div>
    </div>
  );
};

