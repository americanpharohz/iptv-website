import React, { useState } from 'react';
import { Tv, Wifi, Globe2, MessageSquare, Download, Shield } from 'lucide-react';
import { PricingCard } from './components/PricingCard';
import { NetworkStatus } from './components/NetworkStatus';
import { FAQ } from './components/FAQ';

const tiers = [
  {
    name: 'Basic',
    price: { monthly: 16.99, yearly: 49.99 },
    channels: 21000,
    quality: '4k',
    streams: 1,
    features: ['Unlimited replay', 'EPG guide', 'Basic support']
  },
  {
    name: 'Premium',
    price: { monthly: 19.99, yearly: 59.99 },
    channels: 51000,
    quality: '8K',
    streams: 1,
    features: ['Unlimited replay', 'EPG guide', 'Priority support', 'PPV events'],
    highlight: true
  },
  {
    name: 'Ultimate',
    price: { monthly: 29.99, yearly: 69.99 },
    channels: 81000,
    quality: '8K',
    streams: 1,
    features: ['Unlimited replay', 'EPG guide', '24/7 VIP support', 'PPV events', 'Anti Freezing']
    
  }
];

function App() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          poster="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-city-2888-large.mp4" type="video/mp4" />
        </video>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <NetworkStatus />
          <h1 className="mt-8 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-indigo-500">
            Next-Gen IPTV Experience
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Stream thousands of channels in crystal clear quality with our cutting-edge IPTV service.
            Experience entertainment without limits.
          </p>
          
          <div className="mt-8 flex items-center gap-4">
            <button className="px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-8 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
              View Channels
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-gray-800/50">
              <Tv className="w-12 h-12 text-violet-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Content</h3>
              <p className="text-gray-300">Access thousands of channels including sports, movies, and exclusive content.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50">
              <Wifi className="w-12 h-12 text-violet-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reliable Streaming</h3>
              <p className="text-gray-300">99.9% uptime with servers optimized for minimal buffering.</p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800/50">
              <Globe2 className="w-12 h-12 text-violet-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Access</h3>
              <p className="text-gray-300">Watch from anywhere with our worldwide server network.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <div className="flex items-center justify-center gap-4 mt-6">
              <span className={`text-lg ${!isYearly ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-16 h-8 rounded-full bg-violet-600"
              >
                <div
                  className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-all duration-300
                    ${isYearly ? 'left-9' : 'left-1'}`}
                />
              </button>
              <span className={`text-lg ${isYearly ? 'text-white' : 'text-gray-400'}`}>
                Yearly <span className="text-violet-500">(Save 20%)</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <PricingCard key={tier.name} tier={tier} isYearly={isYearly} />
            ))}
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">24/7 Expert Support</h2>
              <p className="text-gray-300 mb-8">
                Our technical team is always ready to help you with any questions or issues.
                Get assistance through live chat, email, or phone support.
              </p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-700">
                  <MessageSquare className="w-5 h-5" />
                  Live Chat
                </button>
                
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gray-800/50">
                <Shield className="w-8 h-8 text-violet-500 mb-2" />
                <h3 className="font-semibold mb-1">Secure Streaming</h3>
                <p className="text-sm text-gray-300">SSL encrypted connections</p>
              </div>
              <div className="p-4 rounded-lg bg-gray-800/50">
                <Globe2 className="w-8 h-8 text-violet-500 mb-2" />
                <h3 className="font-semibold mb-1">Global CDN</h3>
                <p className="text-sm text-gray-300">Fast streaming worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQ />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 IPTV Service. All rights reserved.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-violet-500">Terms</a>
              <a href="#" className="text-gray-400 hover:text-violet-500">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-violet-500">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;