import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useCountries } from '../../hooks/useCountries';

interface CountriesSidebarProps {
  selectedCountry: string | null;
  onCountrySelect: (country: string) => void;
}

export function CountriesSidebar({ selectedCountry, onCountrySelect }: CountriesSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const { countries, isLoading } = useCountries();

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-900/50 rounded-xl p-4">
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search countries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-500 focus:outline-none"
        />
      </div>

      <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
        {isLoading ? (
          <div className="text-gray-400">Loading countries...</div>
        ) : (
          filteredCountries.map(country => (
            <button
              key={country.code}
              onClick={() => onCountrySelect(country.name)}
              className={`flex items-center w-full p-3 rounded-lg transition-colors
                ${selectedCountry === country.name
                  ? 'bg-violet-600 text-white'
                  : 'hover:bg-gray-800 text-gray-300'}`}
            >
              <img
                src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                alt={country.name}
                className="w-6 h-4 mr-3"
              />
              <span>{country.name}</span>
              <span className="ml-auto text-sm text-gray-400">
                {country.channelCount}
              </span>
            </button>
          ))
        )}
      </div>
    </div>
  );
}