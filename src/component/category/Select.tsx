import React, { useState, useEffect, useRef } from 'react';
import arrow from "../../assets/category/raphael_arrowdown.svg";

interface SelectProps {
  value: string;
  data: string[]; 
  onChange: (selectedValue: string) => void; 
}

const Select: React.FC<SelectProps> = ({ value, data, onChange }) => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedValue, setSelectedValue] = useState(value); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (item: string) => {
    setSelectedValue(item);
    onChange(item); 
    setIsOpen(false); 
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <div
        onClick={toggleDropdown} 
        className='rounded-md w-fit flex items-center gap-3 text-[#B4B4B4] text-xs sm:text-lg md:text-xl lg:text-2xl bg-white px-3 py-3 cursor-pointer'
      >
        <h4>{selectedValue}</h4>
        <img src={arrow} alt="arrow" />
      </div>
      {isOpen && (
        <div className='absolute mt-2 w-fit bg-white text-[#B4B4B4] border rounded-md shadow-lg z-10'>
          {data.map((item, index) => (
            <div 
              key={index} 
              onClick={() => handleSelect(item)}
              className='px-4 py-2 hover:bg-gray-200 cursor-pointer'
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
