import { useState, useEffect } from 'react';
import { Channel } from '../types/channel';

export function useChannels(selectedCountry: string | null) {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    // In a real app, fetch channels from an API
    // This is mock data for demonstration
    const mockChannels: Channel[] = [
      {
        id: '1',
        name: 'Sports Plus',
        description: 'Premium sports coverage 24/7',
        logo: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=200',
        category: 'Sports',
        country: 'United States'
      },
      // Add more mock channels here
    ];

    const filteredChannels = selectedCountry
      ? mockChannels.filter(channel => channel.country === selectedCountry)
      : mockChannels;

    setChannels(filteredChannels);
    setCategories([...new Set(filteredChannels.map(channel => channel.category))]);
  }, [selectedCountry]);

  return { channels, categories };
}