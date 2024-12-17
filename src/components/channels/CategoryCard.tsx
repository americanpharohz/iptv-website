import React from 'react';
import { Star } from 'lucide-react';
import { Channel } from '../../types/channel';
import { useFavorites } from '../../hooks/useFavorites';

interface CategoryCardProps {
  channel: Channel;
}

export function CategoryCard({ channel }: CategoryCardProps) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(channel.id);

  return (
    <div className="bg-gray-900/50 rounded-xl p-4 transition-transform hover:scale-105">
      <div className="relative">
        <img
          src={channel.logo}
          alt={channel.name}
          className="w-full h-32 object-contain mb-4"
        />
        <button
          onClick={() => toggleFavorite(channel.id)}
          className={`absolute top-2 right-2 p-2 rounded-full
            ${isFavorite ? 'bg-violet-600' : 'bg-gray-800'}`}
        >
          <Star
            className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`}
          />
        </button>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{channel.name}</h3>
      <p className="text-sm text-gray-400">{channel.description}</p>
    </div>
  );
}