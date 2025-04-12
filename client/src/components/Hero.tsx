
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1770&auto=format&fit=crop)', 
          opacity: 0.6 
        }}
      />
      
      {/* Content */}
      <div className="container-custom relative h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight">
            Delicious Food Delivered to Your Door
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Discover a world of flavors with FoodMore. From comforting classics to exotic cuisines,
            we have something for everyone.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/menu">
              <Button size="lg" className="bg-brand hover:bg-brand-secondary">
                Explore Menu
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-gray-900">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
