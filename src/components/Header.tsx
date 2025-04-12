
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  User, 
  Menu, 
  Search, 
  X,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { Badge } from '@/components/ui/badge';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const { getTotalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand">FoodMore</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-brand font-medium">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-brand font-medium">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-brand font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brand font-medium">Contact</Link>
          </nav>

          {/* Search, Cart, and Auth Buttons for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={toggleSearch} className="text-gray-700 hover:text-brand">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/cart" className="text-gray-700 hover:text-brand relative">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-brand hover:bg-brand">
                  {getTotalItems()}
                </Badge>
              )}
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-2">
                <Link to="/profile" className="text-gray-700 hover:text-brand">
                  <User className="h-5 w-5" />
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={logout}
                  className="text-gray-700 hover:text-destructive flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-brand relative">
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-brand hover:bg-brand">
                  {getTotalItems()}
                </Badge>
              )}
            </Link>
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar - Conditional Render */}
        {isSearchOpen && (
          <div className="py-3 border-t mt-4 animate-fade-in">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Search for food..."
                className="w-full pr-10"
              />
              <button 
                onClick={toggleSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu - Conditional Render */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 animate-fade-in">
          <div className="container-custom">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-brand font-medium py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/menu" className="text-gray-700 hover:text-brand font-medium py-2" onClick={toggleMenu}>Menu</Link>
              <Link to="/about" className="text-gray-700 hover:text-brand font-medium py-2" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="text-gray-700 hover:text-brand font-medium py-2" onClick={toggleMenu}>Contact</Link>
              
              <div className="pt-2 border-t">
                <button onClick={toggleSearch} className="flex items-center text-gray-700 hover:text-brand font-medium py-2">
                  <Search className="h-5 w-5 mr-2" />
                  <span>Search</span>
                </button>
              </div>
              
              {isAuthenticated ? (
                <div className="pt-2 border-t flex flex-col space-y-4">
                  <Link to="/profile" className="flex items-center text-gray-700 hover:text-brand font-medium py-2" onClick={toggleMenu}>
                    <User className="h-5 w-5 mr-2" />
                    <span>Profile</span>
                  </Link>
                  <button onClick={logout} className="flex items-center text-gray-700 hover:text-destructive font-medium py-2">
                    <LogOut className="h-5 w-5 mr-2" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="pt-2 border-t">
                  <Link to="/login" className="block py-2" onClick={toggleMenu}>
                    <Button className="w-full">Login / Register</Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
