import React from 'react';
import { LayoutGrid, List } from 'lucide-react';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export function ViewToggle({ viewMode, onViewModeChange }: ViewToggleProps) {
  return (
    <div className="flex items-center gap-2 bg-gray-900/50 rounded-lg p-1">
      <button
        onClick={() => onViewModeChange('grid')}
        className={`p-2 rounded-lg transition-colors
          ${viewMode === 'grid'
            ? 'bg-violet-600 text-white'
            : 'text-gray-400 hover:text-white'}`}
      >
        <LayoutGrid className="w-5 h-5" />
      </button>
      <button
        onClick={() => onViewModeChange('list')}
        className={`p-2 rounded-lg transition-colors
          ${viewMode === 'list'
            ? 'bg-violet-600 text-white'
            : 'text-gray-400 hover:text-white'}`}
      >
        <List className="w-5 h-5" />
      </button>
    </div>
  );
}