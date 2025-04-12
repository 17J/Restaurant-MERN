
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gray-900">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=1770&auto=format&fit=crop)', 
              opacity: 0.3 
            }}
          />
          <div className="container-custom relative">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About FoodMore</h1>
              <p className="text-xl text-white/90">
                Bringing the best culinary experiences to your doorstep since 2020.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  FoodMore began with a simple mission: to connect people with the best local restaurants and provide 
                  an exceptional food delivery experience. Founded in 2020, we've grown from a small operation to 
                  serving thousands of customers daily.
                </p>
                <p className="text-gray-600 mb-4">
                  Our team of food enthusiasts is dedicated to curating a diverse menu that caters to all tastes 
                  and dietary preferences. We work closely with top chefs and restaurants to ensure that every 
                  dish delivered is of the highest quality.
                </p>
                <p className="text-gray-600">
                  We believe that good food brings people together, and our goal is to make every meal a memorable 
                  experience for our customers.
                </p>
              </div>
              <div className="lg:order-last order-first">
                <img 
                  src="https://images.unsplash.com/photo-1556911220-bda9f7f7597b?q=80&w=1170&auto=format&fit=crop" 
                  alt="Restaurant kitchen" 
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Value 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-brand-light w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We never compromise on the quality of our food. Every dish is prepared with the freshest ingredients 
                  and delivered promptly to ensure the best dining experience.
                </p>
              </div>
              
              {/* Value 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-brand-light w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We strive to provide exceptional service 
                  and create memorable experiences with every order.
                </p>
              </div>
              
              {/* Value 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="bg-brand-light w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  We believe in giving back to the community. We partner with local suppliers and support 
                  initiatives that promote sustainable food practices.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-4 relative">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="John Smith" 
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">John Smith</h3>
                <p className="text-brand mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years in the food industry, John leads our vision for connecting people with great food.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Maria Rodriguez" 
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Maria Rodriguez</h3>
                <p className="text-brand mb-2">Head Chef</p>
                <p className="text-gray-600 text-sm">
                  Maria brings her culinary expertise to ensure every dish on our menu meets the highest standards.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/68.jpg" 
                    alt="David Kim" 
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">David Kim</h3>
                <p className="text-brand mb-2">Operations Manager</p>
                <p className="text-gray-600 text-sm">
                  David ensures our delivery process runs smoothly, from order placement to food delivery.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/65.jpg" 
                    alt="Sarah Johnson" 
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-brand mb-2">Customer Experience</p>
                <p className="text-gray-600 text-sm">
                  Sarah works tirelessly to ensure every customer has an exceptional experience with FoodMore.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-brand">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience FoodMore?</h2>
            <p className="text-white/90 text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who enjoy delicious meals delivered to their doorstep.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/menu">
                <Button size="lg" className="bg-white text-brand hover:bg-gray-100">
                  Explore Our Menu
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
