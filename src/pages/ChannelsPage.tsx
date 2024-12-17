import React, { useState } from 'react';
import { ArrowLeft, LayoutGrid, List } from 'lucide-react';
import { CountriesSidebar } from '../components/channels/CountriesSidebar';
import { CategoryGrid } from '../components/channels/CategoryGrid';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ViewToggle } from '../components/common/ViewToggle';
import { useChannels } from '../hooks/useChannels';

export function ChannelsPage() {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { channels, categories } = useChannels(selectedCountry);

  return (
    <div className="min-h-screen bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => window.history.back()}
              className="flex items-center text-gray-400 hover:text-white mb-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Channels', href: '/channels' },
                selectedCountry && { label: selectedCountry, href: '#' }
              ].filter(Boolean)}
            />
          </div>
          <ViewToggle
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <CountriesSidebar
              selectedCountry={selectedCountry}
              onCountrySelect={setSelectedCountry}
            />
          </div>
          <div className="lg:w-3/4">
            <CategoryGrid
              categories={categories}
              channels={channels}
              viewMode={viewMode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}