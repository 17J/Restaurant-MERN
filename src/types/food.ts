
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: FoodCategory;
  tags: string[];
  ingredients?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  spicyLevel?: 1 | 2 | 3; // 1: Mild, 2: Medium, 3: Hot
  vegetarian: boolean;
  glutenFree: boolean;
  featured?: boolean;
}

export type FoodCategory = 
  | 'appetizer'
  | 'main'
  | 'dessert'
  | 'beverage'
  | 'sides'
  | 'breakfast'
  | 'lunch'
  | 'dinner';

export interface FoodFilter {
  category?: FoodCategory | 'all';
  priceRange?: {
    min: number;
    max: number;
  };
  dietary?: {
    vegetarian?: boolean;
    glutenFree?: boolean;
  };
  search?: string;
}
