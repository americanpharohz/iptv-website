import React from 'react';
import { X } from 'lucide-react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { PaymentForm } from './PaymentForm';

// Initialize Stripe
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: {
    name: string;
    price: { monthly: number; yearly: number };
  };
  isYearly: boolean;
}

export function PaymentModal({ isOpen, onClose, tier, isYearly }: PaymentModalProps) {
  if (!isOpen) return null;

  const price = isYearly ? tier.price.yearly : tier.price.monthly;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative z-10 w-full max-w-md bg-gray-900 rounded-2xl p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          Subscribe to {tier.name} Plan
        </h2>

        <div className="mb-6">
          <p className="text-gray-300">
            {isYearly ? 'Yearly' : 'Monthly'} subscription
          </p>
          <p className="text-2xl font-bold">
            ${price.toFixed(2)} / {isYearly ? 'year' : 'month'}
          </p>
        </div>

        <Elements stripe={stripePromise}>
          <PaymentForm
            price={price}
            isYearly={isYearly}
            planName={tier.name}
          />
        </Elements>
      </div>
    </div>
  );
}