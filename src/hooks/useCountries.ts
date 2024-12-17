import { useState, useEffect } from 'react';

interface Country {
  name: string;
  code: string;
  channelCount: number;
}

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, fetch countries from an API
    // This is mock data for demonstration
    const mockCountries: Country[] = [
      { name: 'United States', code: 'US', channelCount: 1250 },
      { name: 'United Kingdom', code: 'GB', channelCount: 850 },
      { name: 'Canada', code: 'CA', channelCount: 650 },
      // Add more countries here
    ];

    setCountries(mockCountries);
    setIsLoading(false);
  }, []);

  return { countries, isLoading };
}