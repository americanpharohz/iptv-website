import React from 'react';
import { Activity } from 'lucide-react';

export function NetworkStatus() {
  return (
    <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-full">
      <Activity className="w-4 h-4 text-green-500" />
      <span className="text-sm text-green-500">All Systems Operational</span>
    </div>
  );
}