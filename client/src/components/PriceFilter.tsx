
import React from 'react';
import { Slider } from '@/components/ui/slider';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
  step?: number;
}

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  value,
  onChange,
  step = 1
}) => {
  const handleValueChange = (newValue: number[]) => {
    onChange([newValue[0], newValue[1]]);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-medium">Price Range</h3>
      
      <Slider
        defaultValue={value}
        max={maxPrice}
        min={minPrice}
        step={step}
        onValueChange={handleValueChange}
      />
      
      <div className="flex justify-between text-sm">
        <span>${value[0].toFixed(2)}</span>
        <span>${value[1].toFixed(2)}</span>
      </div>
    </div>
  );
};

export default PriceFilter;
