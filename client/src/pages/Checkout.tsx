
import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { ShoppingBag, ChevronLeft } from 'lucide-react';
import PaymentForm from '@/components/PaymentForm';

const Checkout = () => {
  const { items, getTotalPrice } = useCart();
  const { isAuthenticated } = useAuth();
  
  // Redirect if cart is empty
  if (items.length === 0) {
    return <Navigate to="/cart" />;
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container-custom">
          <div className="mb-6">
            <Link to="/cart" className="flex items-center text-gray-600 hover:text-brand">
              <ChevronLeft className="h-4 w-4 mr-1" />
              <span>Back to Cart</span>
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          {!isAuthenticated ? (
            <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
              <div className="flex items-center">
                <div className="mr-4 bg-brand/10 p-2 rounded-full">
                  <ShoppingBag className="h-6 w-6 text-brand" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Login to continue</h2>
                  <p className="text-gray-600">Please log in to complete your purchase</p>
                </div>
                <div className="ml-auto">
                  <Link to="/login">
                    <Button className="bg-brand hover:bg-brand-secondary">Login</Button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Summary */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-4 mb-4">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <div className="flex items-center">
                          <span className="font-medium">{item.quantity}x</span>
                          <span className="ml-2">{item.name}</span>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Delivery Fee</span>
                      <span>$2.99</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${(getTotalPrice() + 2.99).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Form */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                <PaymentForm />
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
