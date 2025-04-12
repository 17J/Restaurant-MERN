
import React from 'react';
import { Link } from 'react-router-dom';
import { FoodItem } from '@/types/food';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Plus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface FoodCardProps {
  food: FoodItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(food);
  };
  
  return (
    <div className="food-card group">
      <div className="relative overflow-hidden">
        <img
          src={food.image}
          alt={food.name}
          className="food-image group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <Badge 
            className="bg-white/80 text-gray-800 backdrop-blur-sm hover:bg-white/90 capitalize"
          >
            {food.category}
          </Badge>
        </div>
        
        {/* Featured Badge */}
        {food.featured && (
          <div className="absolute top-3 right-3">
            <Badge 
              className="bg-brand text-white capitalize hover:bg-brand-secondary"
            >
              Featured
            </Badge>
          </div>
        )}
        
        {/* Quick add button */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="icon" 
            className="rounded-full bg-white text-brand hover:bg-brand hover:text-white"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Link to={`/food/${food.id}`} className="block">
        <div className="food-card-content">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-brand transition-colors">{food.name}</h3>
            <p className="font-bold text-brand">${food.price.toFixed(2)}</p>
          </div>
          
          <p className="text-gray-600 mt-1 text-sm line-clamp-2">{food.description}</p>
          
          <div className="flex space-x-2 mt-2">
            {food.vegetarian && (
              <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">
                Vegetarian
              </Badge>
            )}
            {food.glutenFree && (
              <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                Gluten-Free
              </Badge>
            )}
            {food.spicyLevel && (
              <Badge variant="outline" className="text-xs bg-red-50 text-red-700 border-red-200">
                {food.spicyLevel === 1 ? 'Mild' : food.spicyLevel === 2 ? 'Medium' : 'Hot'}
              </Badge>
            )}
          </div>
          
          <div className="mt-4">
            <Button 
              className="w-full bg-brand hover:bg-brand-secondary flex items-center justify-center"
              onClick={handleAddToCart}
            >
              <Plus className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FoodCard;
