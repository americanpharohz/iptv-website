import React from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the streaming quality compare to cable TV?',
    answer: 'Our streams are delivered in pristine quality, with support for up to 8K resolution (Ultimate plan) and adaptive bitrate streaming to ensure smooth playback regardless of your connection speed.'
  },
  {
    question: 'What devices are supported?',
    answer: 'Our service works on all major platforms including Smart TVs, Android, iOS, Windows, Mac, and streaming devices like Roku, Fire TV, and Apple TV.'
  },
  {
    question: 'How reliable are your servers?',
    answer: 'We maintain a 99.9% uptime guarantee with servers strategically located worldwide for optimal performance and minimal buffering.'
  },
  {
    question: 'How I will receive my subscription?',
    answer: 'After paying, you will receive your subscription on your Whatsapp or Email that you entered in the payment page. Please make sure you entered your correct information.'
  }
];

export function FAQ() {
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <details key={index} className="group bg-gray-900/50 rounded-lg">
          <summary className="flex items-center justify-between p-4 cursor-pointer">
            <h3 className="text-lg font-medium text-white">{faq.question}</h3>
            <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
          </summary>
          <div className="px-4 pb-4 text-gray-300">
            <p>{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}