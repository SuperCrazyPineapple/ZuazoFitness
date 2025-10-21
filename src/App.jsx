// src/App.jsx

import React, { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import Exercises from './components/Exercises';
import MyProgress from './components/MyProgress';
import Premium from './components/Premium';
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
          <p className="text-accent font-bold">Loading...</p>
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
      case 'exercises':
        return <Exercises user={user} />;
      case 'progress':
        return <MyProgress user={user} />;
      case 'premium':
        return <Premium user={user} setUser={setUser} />;
      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-md mx-auto bg-gradient-to-b from-dark via-dark-secondary to-dark min-h-screen flex flex-col">
        {/* Content */}
        <div className="flex-1 pb-24">
          {renderPage()}
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-dark-secondary border-t border-metallic border-opacity-20 backdrop-blur-sm">
          <div className="grid grid-cols-5 divide-x divide-metallic divide-opacity-20">
            {[
              { icon: '🏠', label: 'Home', id: 'home' },
              { icon: '👥', label: 'Community', id: 'community' },
              { icon: '💪', label: 'Exercises', id: 'exercises' },
              { icon: '📊', label: 'Progress', id: 'progress' },
              { icon: '⭐', label: 'Premium', id: 'premium' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`py-3 px-2 flex flex-col items-center gap-1 transition-colors ${
                  activeTab === item.id
                    ? 'text-accent'
                    : 'text-metallic hover:text-metallic-light'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs font-semibold hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;