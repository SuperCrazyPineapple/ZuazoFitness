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
      <div className="h-screen w-screen bg-gradient-to-b from-dark via-dark-secondary to-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-accent font-bold font-playfair">CALISTHENX</p>
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
    { id: 'home', label: 'Home' },
    { id: 'programs', label: 'Programs' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'progress', label: 'Progress' },
    { id: 'community', label: 'Community' },
    { id: 'profile', label: 'Profile' },
    { id: 'shop', label: 'Shop' },
    { id: 'premium', label: 'Premium' }
  ];

  return (
    <div className="h-screen w-screen flex flex-col bg-dark text-white">
      {/* Content Area - Scrollable */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="bg-gradient-to-b from-dark via-dark-secondary to-dark">
          {renderPage()}
        </div>
      </div>

      {/* Bottom Tab Navigation - Fixed Height */}
      <nav className="fixed bottom-0 left-0 right-0 h-28 bg-dark-secondary border-t border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="h-full flex items-center justify-around px-2">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex-1 flex flex-col items-center justify-center py-4 px-2 font-playfair transition duration-200 ease-out ${
                activeTab === item.id
                  ? 'bg-green-600 text-black rounded-lg mx-1'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              aria-current={activeTab === item.id ? 'page' : undefined}
            >
              <span className="text-base font-bold">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default App;