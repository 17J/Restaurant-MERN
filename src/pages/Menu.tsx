
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FoodCard from '@/components/FoodCard';
import { FoodItem } from '@/types/food';
import { filterItems } from '@/data/foodData';
import CategoryFilter from '@/components/CategoryFilter';
import PriceFilter from '@/components/PriceFilter';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Search, FilterX } from 'lucide-react';

const Menu = () => {
  const [filteredItems, setFilteredItems] = useState<FoodItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 30]);
  const [dietaryOptions, setDietaryOptions] = useState({
    vegetarian: false,
    glutenFree: false
  });
  
  // Apply filters
  useEffect(() => {
    const filtered = filterItems({
      category: selectedCategory,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      vegetarian: dietaryOptions.vegetarian,
      glutenFree: dietaryOptions.glutenFree,
      search: searchTerm
    });
    
    setFilteredItems(filtered);
  }, [selectedCategory, priceRange, dietaryOptions, searchTerm]);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleDietaryChange = (option: 'vegetarian' | 'glutenFree') => {
    setDietaryOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 30]);
    setDietaryOptions({
      vegetarian: false,
      glutenFree: false
    });
    setSearchTerm('');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Our Menu</h1>
            <div className="relative w-full max-w-sm">
              <Input
                type="text"
                placeholder="Search our menu..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Filters</h2>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={resetFilters}
                    className="flex items-center space-x-1 text-gray-500 hover:text-brand"
                  >
                    <FilterX className="h-4 w-4" />
                    <span>Reset</span>
                  </Button>
                </div>
                
                {/* Category Filter */}
                <div className="space-y-3">
                  <h3 className="font-medium">Categories</h3>
                  <CategoryFilter 
                    currentCategory={selectedCategory} 
                    onCategorySelect={handleCategorySelect}
                  />
                </div>
                
                {/* Price Filter */}
                <PriceFilter
                  minPrice={0}
                  maxPrice={30}
                  value={priceRange}
                  onChange={setPriceRange}
                  step={0.5}
                />
                
                {/* Dietary Filter */}
                <div className="space-y-3">
                  <h3 className="font-medium">Dietary Preferences</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="vegetarian" 
                        checked={dietaryOptions.vegetarian}
                        onCheckedChange={() => handleDietaryChange('vegetarian')}
                      />
                      <Label htmlFor="vegetarian">Vegetarian</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="glutenFree" 
                        checked={dietaryOptions.glutenFree}
                        onCheckedChange={() => handleDietaryChange('glutenFree')}
                      />
                      <Label htmlFor="glutenFree">Gluten Free</Label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Food items grid */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">{filteredItems.length} items found</p>
              </div>
              
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems.map(item => (
                    <FoodCard key={item.id} food={item} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No items found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search query to find what you're looking for.
                  </p>
                  <Button onClick={resetFilters}>Reset Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
