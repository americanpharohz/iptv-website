import React from 'react';
import { Channel } from '../../types/channel';
import { CategoryCard } from './CategoryCard';
import { ChannelList } from './ChannelList';

interface CategoryGridProps {
  categories: string[];
  channels: Channel[];
  viewMode: 'grid' | 'list';
}

export function CategoryGrid({ categories, channels, viewMode }: CategoryGridProps) {
  return (
    <div className="space-y-8">
      {categories.map(category => (
        <div key={category}>
          <h2 className="text-2xl font-bold text-white mb-4">{category}</h2>
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {channels
                .filter(channel => channel.category === category)
                .map(channel => (
                  <CategoryCard key={channel.id} channel={channel} />
                ))}
            </div>
          ) : (
            <ChannelList
              channels={channels.filter(channel => channel.category === category)}
            />
          )}
        </div>
      ))}
    </div>
  );
}