// src/App.jsx

import React, { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import Programs from './components/Programs';
import Nutrition from './components/Nutrition';
import MyProgress from './components/MyProgress';
import Profile from './components/Profile';
import Shop from './components/Shop';
import Challenges from './components/Challenges';
import Premium from './components/Premium';
import { Home, Users, BookOpen, Leaf, TrendingUp, User, Store, Crown, Zap } from 'lucide-react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const savedUser = localStorage.getItem('fitnessUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const handleSignupComplete = (formData) => {
    const userData = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
      workouts: 0,
      streak: 0,
      isPremium: false
    };
    
    localStorage.setItem('fitnessUser', JSON.stringify(userData));
    setUser(userData);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-accent font-bold">CALISTHENX</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Signup onComplete={handleSignupComplete} />;
  }

  const renderPage = () => {
    switch(activeTab) {
      case 'home':
        return <Dashboard user={user} />;
      case 'community':
        return <Community user={user} />;
      case 'programs':
        return <Programs user={user} />;
      case 'nutrition':
        return <Nutrition user={user} />;
      case 'progress':
        return <MyProgress user={user} />;
      case 'profile':
        return <Profile user={user} setUser={setUser} />;
      case 'shop':
        return <Shop user={user} />;
      case 'premium':
        return <Premium user={user} setUser={setUser} />;
      default:
        return <Dashboard user={user} />;
    }
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', emoji: '🏠' },
    { id: 'programs', icon: BookOpen, label: 'Programs', emoji: '💪' },
    { id: 'nutrition', icon: Leaf, label: 'Nutrition', emoji: '🥗' },
    { id: 'progress', icon: TrendingUp, label: 'Progress', emoji: '📊' },
    { id: 'community', icon: Users, label: 'Community', emoji: '👥' },
    { id: 'profile', icon: User, label: 'Profile', emoji: '👤' },
    { id: 'shop', icon: Store, label: 'Shop', emoji: '🛍️' },
    { id: 'premium', icon: Crown, label: 'Premium', emoji: '⭐' }
  ];

  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-md mx-auto bg-gradient-to-b from-dark via-dark-secondary to-dark min-h-screen flex flex-col">
        {/* Content */}
        <div className="flex-1 pb-24">
          {renderPage()}
        </div>

        {/* Bottom Navigation - Horizontal Scroll */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-dark-secondary border-t border-metallic border-opacity-20 backdrop-blur-sm">
          <div className="flex overflow-x-auto gap-1 px-2 py-3 no-scrollbar">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition whitespace-nowrap ${
                  activeTab === item.id
                    ? 'bg-accent text-dark'
                    : 'text-metallic hover:text-metallic-light hover:bg-dark'
                }`}
              >
                <span className="text-lg">{item.emoji}</span>
                <span className="text-xs font-bold">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;