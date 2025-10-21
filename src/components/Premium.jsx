// src/components/Premium.jsx

import React, { useState } from 'react';
import { Check, Star, Zap, Users, BookOpen, Award, Settings, LogOut } from 'lucide-react';

export default function Premium({ user, setUser }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  const features = [
    { icon: '🎥', title: 'Unlimited Videos', desc: 'Access all workout tutorials' },
    { icon: '📊', title: 'Advanced Analytics', desc: 'Detailed progress tracking' },
    { icon: '🎯', title: 'Custom Workouts', desc: 'AI-powered personalized plans' },
    { icon: '👥', title: 'Private Community', desc: 'Connect with premium members' },
    { icon: '⚡', title: 'Priority Support', desc: '24/7 premium support team' },
    { icon: '🏆', title: 'Exclusive Challenges', desc: 'Premium member challenges' }
  ];

  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$9.99',
      period: '/month',
      description: 'Perfect for trying premium features',
      features: [
        'Unlimited videos access',
        'Advanced analytics',
        'AI custom workouts',
        'Ad-free experience',
        'Cancel anytime'
      ],
      popular: false
    },
    {
      id: 'yearly',
      name: 'Yearly',
      price: '$79.99',
      period: '/year',
      description: 'Best value - 33% off',
      features: [
        'All monthly features',
        'Priority customer support',
        'Exclusive challenges',
        'Private community access',
        'Monthly bonus content',
        'Early access to new features'
      ],
      popular: true,
      savings: 'Save $40'
    },
    {
      id: 'lifetime',
      name: 'Lifetime',
      price: '$199.99',
      period: 'one-time',
      description: 'Lifetime access',
      features: [
        'All features included',
        'Lifetime updates',
        'Priority support',
        'VIP badge',
        'Custom coaching',
        'Community moderator status'
      ],
      popular: false
    }
  ];

  const handlePurchase = (planId) => {
    setSelectedPlan(planId);
    // Simulate purchase
    setTimeout(() => {
      setUser(prev => ({
        ...prev,
        isPremium: true,
        premiumPlan: planId,
        premiumExpiry: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      }));
      localStorage.setItem('fitnessUser', JSON.stringify({
        ...user,
        isPremium: true,
        premiumPlan: planId
      }));
      setSelectedPlan(null);
    }, 1000);
  };

  const handleLogout = () => {
    localStorage.removeItem('fitnessUser');
    setUser(null);
  };

  if (showSettings) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white pb-20">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-dark border-b border-metallic border-opacity-20 backdrop-blur-sm px-6 py-4 flex items-center">
          <button
            onClick={() => setShowSettings(false)}
            className="text-metallic-light hover:text-white"
          >
            ← Back
          </button>
          <h1 className="flex-1 text-2xl font-bold ml-4">Settings</h1>
        </div>

        <div className="max-w-md mx-auto px-6 py-6">
          <div className="space-y-4">
            {/* Profile Section */}
            <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4">
              <h3 className="font-bold mb-4">Profile Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-metallic text-sm mb-1">Name</p>
                  <input type="text" defaultValue={user?.name} className="w-full bg-dark border border-metallic border-opacity-30 rounded-lg p-2 text-white" disabled />
                </div>
                <div>
                  <p className="text-metallic text-sm mb-1">Email</p>
                  <input type="email" defaultValue="user@example.com" className="w-full bg-dark border border-metallic border-opacity-30 rounded-lg p-2 text-white" disabled />
                </div>
                <div>
                  <p className="text-metallic text-sm mb-1">Experience Level</p>
                  <input type="text" defaultValue={user?.experience} className="w-full bg-dark border border-metallic border-opacity-30 rounded-lg p-2 text-white" disabled />
                </div>
              </div>
            </div>

            {/* Account Section */}
            <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4">
              <h3 className="font-bold mb-4">Account Settings</h3>
              <div className="space-y-2">
                <button className="w-full text-left px-3 py-2 hover:bg-dark rounded-lg transition">Notification Settings</button>
                <button className="w-full text-left px-3 py-2 hover:bg-dark rounded-lg transition">Privacy & Security</button>
                <button className="w-full text-left px-3 py-2 hover:bg-dark rounded-lg transition">Data & Storage</button>
              </div>
            </div>

            {/* Subscription */}
            <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4">
              <h3 className="font-bold mb-2">Subscription</h3>
              {user?.isPremium ? (
                <div className="text-accent">
                  <p className="text-sm">Status: Active ✓</p>
                  <p className="text-sm mt-2">Plan: {user?.premiumPlan}</p>
                </div>
              ) : (
                <p className="text-metallic text-sm">No active subscription</p>
              )}
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="w-full bg-red-900 hover:bg-red-800 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <LogOut size={20} />
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-wider">Premium</h1>
          <button
            onClick={() => setShowSettings(true)}
            className="p-2 hover:bg-dark-secondary rounded-lg transition"
          >
            <Settings size={20} className="text-metallic-light" />
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-6">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-accent from-10% via-dark-secondary to-dark border-2 border-accent border-opacity-50 rounded-2xl p-6 mb-8 text-center">
          <Star size={48} className="mx-auto mb-4 text-dark" />
          <h2 className="text-3xl font-bold text-dark mb-2">Go Premium</h2>
          <p className="text-dark font-semibold">Unlock unlimited potential</p>
        </div>

        {/* Premium Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 hover:border-metallic hover:border-opacity-50 transition-colors">
              <p className="text-2xl mb-2">{feature.icon}</p>
              <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
              <p className="text-metallic text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Current Status */}
        {user?.isPremium && (
          <div className="bg-accent bg-opacity-10 border border-accent border-opacity-50 rounded-lg p-4 mb-8">
            <p className="text-accent font-bold mb-2">✓ Premium Member</p>
            <p className="text-metallic-light text-sm">You're currently enjoying all premium benefits!</p>
          </div>
        )}

        {/* Pricing Plans */}
        <div className="mb-8">
          <h3 className="font-bold mb-4">Choose Your Plan</h3>
          <div className="space-y-3">
            {plans.map(plan => (
              <div
                key={plan.id}
                className={`rounded-xl p-4 border-2 transition-all cursor-pointer ${
                  plan.popular
                    ? 'border-accent bg-accent bg-opacity-10'
                    : 'border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
                }`}
              >
                {plan.popular && (
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-accent text-dark px-3 py-1 rounded-full text-xs font-bold">Most Popular</span>
                    <span className="text-accent font-bold text-xs">{plan.savings}</span>
                  </div>
                )}

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-accent">{plan.price}</span>
                  <span className="text-metallic text-sm">{plan.period}</span>
                </div>

                <p className="text-metallic-light text-sm mb-4">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check size={16} className="text-accent" />
                      <span className="text-metallic-light">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handlePurchase(plan.id)}
                  disabled={selectedPlan === plan.id}
                  className={`w-full py-3 rounded-lg font-bold transition-all ${
                    user?.isPremium && user?.premiumPlan === plan.id
                      ? 'bg-accent text-dark'
                      : plan.popular
                      ? 'bg-accent hover:bg-green-400 text-dark'
                      : 'border-2 border-metallic text-metallic hover:border-accent hover:text-accent'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Processing...' : user?.isPremium && user?.premiumPlan === plan.id ? '✓ Current Plan' : 'Subscribe Now'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-6">
          <h3 className="font-bold mb-4">FAQ</h3>
          <div className="space-y-3">
            {[
              { q: 'Can I cancel anytime?', a: 'Yes, cancel subscription anytime without penalties' },
              { q: 'Is there a free trial?', a: '7-day free trial available for new members' },
              { q: 'What payment methods?', a: 'Credit card, PayPal, Apple Pay, Google Pay' }
            ].map((item, idx) => (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3">
                <p className="font-bold text-sm mb-1">{item.q}</p>
                <p className="text-metallic-light text-xs">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support */}
        <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 text-center">
          <p className="text-metallic-light text-sm mb-3">Need help?</p>
          <button className="w-full bg-accent hover:bg-green-400 text-dark py-2 rounded-lg font-bold transition-colors text-sm">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}