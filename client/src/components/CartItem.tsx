
import React from 'react';
import { X, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { FoodItem } from '@/types/food';

interface CartItemProps {
  item: FoodItem & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };
  
  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };
  
  return (
    <div className="flex items-center border-b border-gray-200 py-4">
      <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden mr-4">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
        <div className="flex items-center mt-2">
          <span className="text-brand font-semibold">${item.price.toFixed(2)}</span>
          <span className="mx-2 text-gray-400">×</span>
          <span>{item.quantity}</span>
          <span className="ml-auto font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
      
      <div className="ml-4 flex-shrink-0 flex flex-col space-y-2">
        <div className="flex items-center border rounded-md">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 p-0 rounded-none"
            onClick={handleDecreaseQuantity}
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="w-8 text-center">{item.quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 p-0 rounded-none"
            onClick={handleIncreaseQuantity}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-gray-500 hover:text-red-500"
          onClick={() => removeFromCart(item.id)}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
