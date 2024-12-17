import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { PaymentModal } from './PaymentModal';

interface PricingCardProps {
  tier: {
    name: string;
    price: { monthly: number; yearly: number };
    channels: number;
    quality: string;
    streams: number;
    features: string[];
    highlight?: boolean;
  };
  isYearly: boolean;
}

export function PricingCard({ tier, isYearly }: PricingCardProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const price = isYearly ? tier.price.yearly : tier.price.monthly;
  
  return (
    <>
      <div className={`relative p-8 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:scale-105
        ${tier.highlight 
          ? 'bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/20' 
          : 'bg-gray-900/50 border border-gray-800'}`}>
        {tier.highlight && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1 rounded-full text-xs font-semibold bg-violet-500 text-white">
              Most Popular
            </span>
          </div>
        )}
        
        <h3 className="text-2xl font-bold text-white mb-4">{tier.name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-gray-400">/{isYearly ? 'year' : 'month'}</span>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center text-gray-300">
            <span className="mr-2">{tier.channels.toLocaleString()}+ Channels</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">{tier.quality} Quality</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="mr-2">{tier.streams} Simultaneous Streams</span>
          </div>
          
          {tier.features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-300">
              <Check className="w-5 h-5 mr-2 text-violet-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => setIsPaymentModalOpen(true)}
          className={`w-full mt-8 py-3 px-6 rounded-lg font-semibold transition-all duration-300
            ${tier.highlight 
              ? 'bg-violet-600 hover:bg-violet-700 text-white' 
              : 'bg-gray-800 hover:bg-gray-700 text-white'}`}
        >
          Subscribe Now
        </button>
      </div>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        tier={tier}
        isYearly={isYearly}
      />
    </>
  );
}