import React from 'react';
import { Star } from 'lucide-react';
import { Channel } from '../../types/channel';
import { useFavorites } from '../../hooks/useFavorites';

interface ChannelListProps {
  channels: Channel[];
}

export function ChannelList({ channels }: ChannelListProps) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="space-y-2">
      {channels.map(channel => (
        <div
          key={channel.id}
          className="flex items-center gap-4 bg-gray-900/50 rounded-xl p-4"
        >
          <img
            src={channel.logo}
            alt={channel.name}
            className="w-16 h-16 object-contain"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{channel.name}</h3>
            <p className="text-sm text-gray-400">{channel.description}</p>
          </div>
          <button
            onClick={() => toggleFavorite(channel.id)}
            className={`p-2 rounded-full
              ${favorites.includes(channel.id) ? 'bg-violet-600' : 'bg-gray-800'}`}
          >
            <Star
              className={`w-5 h-5 ${favorites.includes(channel.id) ? 'fill-current' : ''}`}
            />
          </button>
        </div>
      ))}
    </div>
  );
}