
import { FoodItem } from '@/types/food';

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty topped with melted cheddar cheese, lettuce, tomato, and special sauce on a toasted bun.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop',
    category: 'main',
    tags: ['burger', 'beef', 'american'],
    ingredients: ['beef patty', 'cheddar cheese', 'lettuce', 'tomato', 'special sauce', 'bun'],
    nutritionalInfo: {
      calories: 650,
      protein: 35,
      carbs: 40,
      fat: 35
    },
    spicyLevel: 1,
    vegetarian: false,
    glutenFree: false,
    featured: true
  },
  {
    id: '2',
    name: 'Margherita Pizza',
    description: 'Traditional pizza with tomato sauce, fresh mozzarella, basil, and extra virgin olive oil.',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1598023696416-0193a0bcd302?q=80&w=1200&auto=format&fit=crop',
    category: 'main',
    tags: ['pizza', 'italian', 'vegetarian'],
    ingredients: ['pizza dough', 'tomato sauce', 'fresh mozzarella', 'basil', 'olive oil'],
    nutritionalInfo: {
      calories: 780,
      protein: 24,
      carbs: 86,
      fat: 26
    },
    spicyLevel: 1,
    vegetarian: true,
    glutenFree: false,
    featured: true
  },
  {
    id: '3',
    name: 'Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten chocolate center, served with vanilla ice cream.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?q=80&w=1200&auto=format&fit=crop',
    category: 'dessert',
    tags: ['chocolate', 'cake', 'dessert'],
    ingredients: ['chocolate', 'butter', 'sugar', 'eggs', 'flour', 'vanilla ice cream'],
    nutritionalInfo: {
      calories: 520,
      protein: 7,
      carbs: 62,
      fat: 28
    },
    vegetarian: true,
    glutenFree: false
  },
  {
    id: '4',
    name: 'Caesar Salad',
    description: 'Crisp romaine lettuce, parmesan cheese, croutons, and Caesar dressing.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?q=80&w=1200&auto=format&fit=crop',
    category: 'appetizer',
    tags: ['salad', 'starter', 'light'],
    ingredients: ['romaine lettuce', 'parmesan cheese', 'croutons', 'caesar dressing'],
    nutritionalInfo: {
      calories: 320,
      protein: 10,
      carbs: 15,
      fat: 22
    },
    vegetarian: true,
    glutenFree: false
  },
  {
    id: '5',
    name: 'Spicy Thai Curry',
    description: 'Aromatic curry with coconut milk, vegetables, and your choice of protein, served with jasmine rice.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1200&auto=format&fit=crop',
    category: 'main',
    tags: ['thai', 'spicy', 'curry'],
    ingredients: ['coconut milk', 'curry paste', 'vegetables', 'chicken', 'jasmine rice'],
    nutritionalInfo: {
      calories: 720,
      protein: 28,
      carbs: 65,
      fat: 38
    },
    spicyLevel: 3,
    vegetarian: false,
    glutenFree: true
  },
  {
    id: '6',
    name: 'Fresh Strawberry Smoothie',
    description: 'Blend of fresh strawberries, banana, yogurt, and honey.',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a90bb0ae?q=80&w=1200&auto=format&fit=crop',
    category: 'beverage',
    tags: ['smoothie', 'fruit', 'cold'],
    ingredients: ['strawberries', 'banana', 'yogurt', 'honey', 'ice'],
    nutritionalInfo: {
      calories: 220,
      protein: 5,
      carbs: 48,
      fat: 2
    },
    vegetarian: true,
    glutenFree: true
  },
  {
    id: '7',
    name: 'Crispy Chicken Wings',
    description: 'Crispy fried chicken wings tossed in your choice of sauce: Buffalo, BBQ, or Honey Garlic.',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1200&auto=format&fit=crop',
    category: 'appetizer',
    tags: ['chicken', 'wings', 'fried'],
    ingredients: ['chicken wings', 'flour', 'spices', 'sauce'],
    nutritionalInfo: {
      calories: 620,
      protein: 42,
      carbs: 18,
      fat: 42
    },
    spicyLevel: 2,
    vegetarian: false,
    glutenFree: true,
    featured: true
  },
  {
    id: '8',
    name: 'Veggie Stir Fry',
    description: 'Fresh vegetables stir-fried in a savory sauce, served with steamed rice.',
    price: 11.99,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop',
    category: 'main',
    tags: ['vegetarian', 'stir fry', 'healthy'],
    ingredients: ['mixed vegetables', 'tofu', 'soy sauce', 'ginger', 'garlic', 'rice'],
    nutritionalInfo: {
      calories: 380,
      protein: 12,
      carbs: 65,
      fat: 8
    },
    vegetarian: true,
    glutenFree: true
  },
  {
    id: '9',
    name: 'Apple Pie',
    description: 'Traditional apple pie with a flaky crust, served warm with vanilla ice cream.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?q=80&w=1200&auto=format&fit=crop',
    category: 'dessert',
    tags: ['pie', 'apple', 'dessert'],
    ingredients: ['apples', 'sugar', 'cinnamon', 'pie crust', 'vanilla ice cream'],
    nutritionalInfo: {
      calories: 450,
      protein: 5,
      carbs: 68,
      fat: 18
    },
    vegetarian: true,
    glutenFree: false
  },
  {
    id: '10',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon butter sauce.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1200&auto=format&fit=crop',
    category: 'main',
    tags: ['seafood', 'healthy', 'grilled'],
    ingredients: ['salmon', 'lemon', 'butter', 'herbs', 'vegetables'],
    nutritionalInfo: {
      calories: 520,
      protein: 42,
      carbs: 12,
      fat: 32
    },
    vegetarian: false,
    glutenFree: true,
    featured: true
  },
  {
    id: '11',
    name: 'Eggs Benedict',
    description: 'Poached eggs and Canadian bacon on English muffins, topped with hollandaise sauce.',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=1200&auto=format&fit=crop',
    category: 'breakfast',
    tags: ['eggs', 'breakfast', 'brunch'],
    ingredients: ['eggs', 'Canadian bacon', 'English muffins', 'hollandaise sauce'],
    nutritionalInfo: {
      calories: 650,
      protein: 28,
      carbs: 35,
      fat: 45
    },
    vegetarian: false,
    glutenFree: false
  },
  {
    id: '12',
    name: 'French Fries',
    description: 'Crispy golden fries seasoned with sea salt. Served with ketchup and aioli.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=1200&auto=format&fit=crop',
    category: 'sides',
    tags: ['potato', 'fried', 'snack'],
    ingredients: ['potatoes', 'oil', 'salt', 'ketchup', 'aioli'],
    nutritionalInfo: {
      calories: 380,
      protein: 4,
      carbs: 48,
      fat: 20
    },
    vegetarian: true,
    glutenFree: false
  }
];

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'appetizer', name: 'Appetizers' },
  { id: 'main', name: 'Main Courses' },
  { id: 'dessert', name: 'Desserts' },
  { id: 'beverage', name: 'Beverages' },
  { id: 'sides', name: 'Sides' },
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'lunch', name: 'Lunch' },
  { id: 'dinner', name: 'Dinner' }
];

export const getFeaturedItems = (): FoodItem[] => {
  return foodItems.filter(item => item.featured);
};

export const getItemsByCategory = (category: string): FoodItem[] => {
  if (category === 'all') return foodItems;
  return foodItems.filter(item => item.category === category);
};

export const searchItems = (query: string): FoodItem[] => {
  const lowercasedQuery = query.toLowerCase();
  return foodItems.filter(
    item => 
      item.name.toLowerCase().includes(lowercasedQuery) || 
      item.description.toLowerCase().includes(lowercasedQuery) ||
      item.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
  );
};

export const getItemById = (id: string): FoodItem | undefined => {
  return foodItems.find(item => item.id === id);
};

export const filterItems = (filters: {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  vegetarian?: boolean;
  glutenFree?: boolean;
  search?: string;
}): FoodItem[] => {
  return foodItems.filter(item => {
    // Filter by category
    if (filters.category && filters.category !== 'all' && item.category !== filters.category) {
      return false;
    }
    
    // Filter by price range
    if (filters.minPrice !== undefined && item.price < filters.minPrice) {
      return false;
    }
    if (filters.maxPrice !== undefined && item.price > filters.maxPrice) {
      return false;
    }
    
    // Filter by dietary preferences
    if (filters.vegetarian && !item.vegetarian) {
      return false;
    }
    if (filters.glutenFree && !item.glutenFree) {
      return false;
    }
    
    // Filter by search term
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const nameMatch = item.name.toLowerCase().includes(searchLower);
      const descMatch = item.description.toLowerCase().includes(searchLower);
      const tagMatch = item.tags.some(tag => tag.toLowerCase().includes(searchLower));
      
      if (!nameMatch && !descMatch && !tagMatch) {
        return false;
      }
    }
    
    return true;
  });
};
