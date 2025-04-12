
import React from 'react';
import { Button } from '@/components/ui/button';
import { categories } from '@/data/foodData';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';

interface CategoryFilterProps {
  currentCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  currentCategory, 
  onCategorySelect 
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      <TooltipProvider>
        {categories.map((category) => (
          <Tooltip key={category.id}>
            <TooltipTrigger asChild>
              <Button
                variant={currentCategory === category.id ? 'default' : 'outline'}
                className={currentCategory === category.id ? 'bg-brand hover:bg-brand-secondary' : ''}
                onClick={() => onCategorySelect(category.id)}
              >
                {category.name}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Filter by {category.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default CategoryFilter;
