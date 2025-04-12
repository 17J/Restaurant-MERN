
import React from 'react';
import { FoodItem } from '@/types/food';
import FoodCard from './FoodCard';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface FeaturedItemsProps {
  items: FoodItem[];
}

const FeaturedItems: React.FC<FeaturedItemsProps> = ({ items }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Dishes</h2>
          <Link to="/menu">
            <Button variant="outline" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <FoodCard key={item.id} food={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;
