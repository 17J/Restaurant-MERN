
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getItemById } from '@/data/foodData';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Minus, ChevronLeft } from 'lucide-react';
import { FoodItem } from '@/types/food';

const FoodDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [food, setFood] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  useEffect(() => {
    if (id) {
      const item = getItemById(id);
      if (item) {
        setFood(item);
      }
    }
  }, [id]);
  
  if (!food) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow bg-gray-50 py-8 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
            <p className="text-gray-600 mb-4">The food item you're looking for doesn't exist.</p>
            <Link to="/menu">
              <Button>Back to Menu</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    addToCart(food, quantity);
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          <div className="mb-6">
            <Link to="/menu" className="flex items-center text-gray-600 hover:text-brand">
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>Back to Menu</span>
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Food Image */}
              <div className="h-[400px] overflow-hidden">
                <img 
                  src={food.image} 
                  alt={food.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Food Details */}
              <div className="p-8">
                <div className="mb-2 flex flex-wrap gap-2">
                  <Badge className="capitalize">{food.category}</Badge>
                  {food.vegetarian && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Vegetarian
                    </Badge>
                  )}
                  {food.glutenFree && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      Gluten-Free
                    </Badge>
                  )}
                  {food.spicyLevel && (
                    <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                      {food.spicyLevel === 1 ? 'Mild' : food.spicyLevel === 2 ? 'Medium' : 'Hot'}
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-3xl font-bold mb-2">{food.name}</h1>
                <p className="text-xl font-semibold text-brand mb-4">${food.price.toFixed(2)}</p>
                
                <p className="text-gray-600 mb-6">{food.description}</p>
                
                {food.ingredients && (
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Ingredients</h3>
                    <div className="flex flex-wrap gap-2">
                      {food.ingredients.map((ingredient, index) => (
                        <Badge key={index} variant="outline" className="capitalize">
                          {ingredient}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {food.nutritionalInfo && (
                  <div className="mb-6">
                    <h3 className="font-semibold mb-2">Nutritional Information</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <p className="text-sm text-gray-600">Calories</p>
                        <p className="font-semibold">{food.nutritionalInfo.calories}</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <p className="text-sm text-gray-600">Protein</p>
                        <p className="font-semibold">{food.nutritionalInfo.protein}g</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <p className="text-sm text-gray-600">Carbs</p>
                        <p className="font-semibold">{food.nutritionalInfo.carbs}g</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md text-center">
                        <p className="text-sm text-gray-600">Fat</p>
                        <p className="font-semibold">{food.nutritionalInfo.fat}g</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center space-x-6 mt-8">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-r-none"
                      onClick={decreaseQuantity}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-10 text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-10 w-10 rounded-l-none"
                      onClick={increaseQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    className="flex-1 bg-brand hover:bg-brand-secondary"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FoodDetail;
