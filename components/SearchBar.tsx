
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { SEARCH_PLACEHOLDERS } from '../constants';

export const SearchBar: React.FC = () => {
  const [placeholder, setPlaceholder] = useState(SEARCH_PLACEHOLDERS[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const random = SEARCH_PLACEHOLDERS[Math.floor(Math.random() * SEARCH_PLACEHOLDERS.length)];
      setPlaceholder(random);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <form 
      action="https://www.google.com/search" 
      method="GET" 
      target="_blank" 
      className="w-full mx-auto relative group"
    >
      <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
        <Search className="h-6 w-6 text-stone-500 group-focus-within:text-stone-900 transition-colors" strokeWidth={3} />
      </div>
      <input
        type="text"
        name="q"
        autoComplete="off"
        className="w-full pl-14 pr-4 py-5 text-xl font-hand font-bold bg-white border-[3px] border-stone-900 shadow-[8px_8px_0px_rgba(41,37,36,0.2)] focus:shadow-[4px_4px_0px_rgba(41,37,36,0.2)] focus:translate-x-[2px] focus:translate-y-[2px] focus:outline-none transition-all placeholder-stone-400 rounded-lg transform -rotate-1 focus:rotate-0"
        placeholder={placeholder}
      />
    </form>
  );
};
