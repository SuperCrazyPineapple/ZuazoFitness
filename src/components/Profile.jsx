import React, { useState } from 'react';
import {
  Edit2,
  LogOut,
  Settings,
  Award,
  TrendingUp,
  Flame,
  Zap,
  Target,
  Heart,
  Calendar,
  Users,
  Star,
  ChevronRight,
  Camera,
  Bell,
  Lock,
  Share2,
  MoreVertical
} from 'lucide-react';

export default function Profile({ user, setUser }) {
  // Couleurs CALISTHENX (100% identiques aux autres pages)
  const bg = 'bg-[#100E0E]';
  const bgSecondary = 'bg-[#1a1817]';
  const bgTertiary = 'bg-[#242220]';
  const text = 'text-white';
  const textSecondary = 'text-[#BFB7B6]';
  const border = 'border-[#BFB7B6]';
  const primaryGreen = 'text-[#47A025]';
  const primaryGreenBg = 'bg-[#47A025]';

  // States
  const [isEditMode, setIsEditMode] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [editData, setEditData] = useState({
    name: user?.name || 'User Name',
    age: user?.age || 25,
    weight: user?.weight || 75,
    height: user?.height || 180,
    bio: 'Dedicated to fitness and self-improvement'
  });

  // Mock achievements and stats
  const stats = {
    workouts: 47,
    totalTime: 892, // minutes
    caloriesBurned: 12450,
    streak: 12, // days
    level: 'Intermediate',
    personalRecords: 3,
    badges: 8,
    friends: 24
  };

  const achievements = [
    { id: 1, name: 'First Workout', icon: 'P', color: 'bg-blue-600', date: '90 days ago', unlocked: true },
    { id: 2, name: 'Week Warrior', icon: 'W', color: 'bg-green-600', date: '45 days ago', unlocked: true },
    { id: 3, name: '100 Workouts', icon: '100', color: 'bg-purple-600', date: 'locked', unlocked: false },
    { id: 4, name: 'Perfect Week', icon: 'PW', color: 'bg-orange-600', date: 'locked', unlocked: false },
    { id: 5, name: 'Strength Master', icon: 'SM', color: 'bg-red-600', date: 'locked', unlocked: false },
    { id: 6, name: 'Consistency King', icon: 'CK', color: 'bg-indigo-600', date: 'locked', unlocked: false },
    { id: 7, name: '30 Day Streak', icon: '30', color: 'bg-cyan-600', date: 'locked', unlocked: false },
    { id: 8, name: 'Community Star', icon: 'CS', color: 'bg-yellow-600', date: 'locked', unlocked: false }
  ];

  const recentWorkouts = [
    { id: 1, name: 'Full Body Strength', date: 'Today', duration: '45 min', calories: 385, difficulty: 'Advanced' },
    { id: 2, name: 'Upper Body Focus', date: 'Yesterday', duration: '38 min', calories: 312, difficulty: 'Intermediate' },
    { id: 3, name: 'Core Training', date: '2 days ago', duration: '30 min', calories: 215, difficulty: 'Beginner' },
    { id: 4, name: 'Cardio & Agility', date: '3 days ago', duration: '52 min', calories: 428, difficulty: 'Advanced' }
  ];

  const personalRecords = [
    { id: 1, exercise: 'Pull-ups', value: '15 reps', date: '5 days ago', improvement: '+2 from last' },
    { id: 2, exercise: 'Push-ups', value: '45 reps', date: '1 week ago', improvement: '+5 from last' },
    { id: 3, exercise: 'Plank Hold', value: '2:35 min', date: '2 weeks ago', improvement: '+30 sec' }
  ];

  // Handlers
  const handleEditChange = (field, value) => {
    setEditData(prev => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    const updatedUser = { ...user, ...editData };
    setUser(updatedUser);
    localStorage.setItem('fitnessUser', JSON.stringify(updatedUser));
    setIsEditMode(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('fitnessUser');
    window.location.reload();
  };

  // SETTINGS VIEW
  if (showSettings) {
    return (
      <div className={`min-h-screen ${bg} ${text} pb-32`}>
        {/* Header */}
        <div className={`sticky top-0 z-20 ${bgSecondary} border-b ${border} border-opacity-20 backdrop-blur-sm`}>
          <div className="max-w-md mx-auto px-6 py-4 flex items-center gap-3">
            <button
              onClick={() => setShowSettings(false)}
              className={`${textSecondary} hover:${text} transition`}
            >
              ← Back
            </button>
            <h1 className="text-2xl font-bold font-playfair">Settings</h1>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 py-6 space-y-4">
          {/* Notifications */}
          <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-4`}>
            <div className="flex items-center gap-3 mb-4">
              <Bell size={20} className={primaryGreen} />
              <h3 className="font-bold">Notifications</h3>
            </div>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className={`text-sm ${textSecondary}`}>Workout Reminders</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className={`text-sm ${textSecondary}`}>Achievement Unlocked</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className={`text-sm ${textSecondary}`}>Community Posts</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className={`text-sm ${textSecondary}`}>Streak Reminders</span>
              </label>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-4`}>
            <div className="flex items-center gap-3 mb-4">
              <Lock size={20} className={primaryGreen} />
              <h3 className="font-bold">Privacy & Security</h3>
            </div>
            <div className="space-y-3">
              <button className={`w-full text-left px-3 py-2 ${bgTertiary} hover:bg-opacity-80 rounded-lg transition flex items-center justify-between`}>
                <span className={`text-sm ${textSecondary}`}>Profile Visibility</span>
                <ChevronRight size={16} className={textSecondary} />
              </button>
              <button className={`w-full text-left px-3 py-2 ${bgTertiary} hover:bg-opacity-80 rounded-lg transition flex items-center justify-between`}>
                <span className={`text-sm ${textSecondary}`}>Block List</span>
                <ChevronRight size={16} className={textSecondary} />
              </button>
              <button className={`w-full text-left px-3 py-2 ${bgTertiary} hover:bg-opacity-80 rounded-lg transition flex items-center justify-between`}>
                <span className={`text-sm ${textSecondary}`}>Change Password</span>
                <ChevronRight size={16} className={textSecondary} />
              </button>
            </div>
          </div>

          {/* Subscription */}
          <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-4`}>
            <h3 className="font-bold mb-3">Subscription Status</h3>
            {user?.isPremium ? (
              <div className={`px-3 py-2 ${bgTertiary} rounded-lg`}>
                <p className={`text-sm ${primaryGreen}`}>Premium Active</p>
                <p className={`text-xs ${textSecondary} mt-1`}>Plan: {user?.premiumPlan}</p>
              </div>
            ) : (
              <div className={`px-3 py-2 ${bgTertiary} rounded-lg`}>
                <p className={`text-sm ${textSecondary}`}>No Premium Subscription</p>
              </div>
            )}
          </div>

          {/* Logout */}
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition ${
              showLogoutConfirm
                ? 'bg-red-600 hover:bg-red-700'
                : `${bgTertiary} hover:border-red-500 border ${border}`
            }`}
          >
            <LogOut size={18} />
            {showLogoutConfirm ? 'Confirm Logout?' : 'Logout'}
          </button>

          {showLogoutConfirm && (
            <button
              onClick={() => setShowLogoutConfirm(false)}
              className={`w-full py-2 rounded-lg ${bgTertiary} border ${border} text-sm transition hover:border-opacity-50`}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    );
  }

  // EDIT PROFILE VIEW
  if (isEditMode) {
    return (
      <div className={`min-h-screen ${bg} ${text} pb-32`}>
        {/* Header */}
        <div className={`sticky top-0 z-20 ${bgSecondary} border-b ${border} border-opacity-20 backdrop-blur-sm`}>
          <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold font-playfair">Edit Profile</h1>
            <button
              onClick={() => setIsEditMode(false)}
              className={`${textSecondary} hover:${text} transition`}
            >
              ← Back
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto px-6 py-6 space-y-4">
          {/* Profile Photo */}
          <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-6 flex flex-col items-center`}>
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#47A025] to-[#2d6015] flex items-center justify-center text-3xl font-bold mb-4 border-2 border-[#47A025] relative">
              {editData.name.charAt(0)}
              <button className="absolute bottom-0 right-0 p-2 rounded-full bg-[#47A025] hover:bg-[#2d6015] transition">
                <Camera size={16} className="text-black" />
              </button>
            </div>
            <p className={`text-xs ${textSecondary} text-center`}>Tap to change profile photo</p>
          </div>

          {/* Basic Info */}
          <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-4 space-y-4`}>
            <div>
              <label className={`text-xs font-bold ${primaryGreen} block mb-2`}>Full Name</label>
              <input
                type="text"
                value={editData.name}
                onChange={(e) => handleEditChange('name', e.target.value)}
                className={`w-full ${bgTertiary} border ${border} border-opacity-30 rounded-lg px-4 py-3 ${text} focus:border-[#47A025] outline-none transition`}
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`text-xs font-bold ${primaryGreen} block mb-2`}>Age</label>
                <input
                  type="number"
                  value={editData.age}
                  onChange={(e) => handleEditChange('age', parseInt(e.target.value))}
                  className={`w-full ${bgTertiary} border ${border} border-opacity-30 rounded-lg px-4 py-3 ${text} focus:border-[#47A025] outline-none transition`}
                  placeholder="25"
                />
              </div>
              <div>
                <label className={`text-xs font-bold ${primaryGreen} block mb-2`}>Level</label>
                <select className={`w-full ${bgTertiary} border ${border} border-opacity-30 rounded-lg px-4 py-3 ${text} focus:border-[#47A025] outline-none transition`}>
                  <option>Beginner</option>
                  <option selected>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={`text-xs font-bold ${primaryGreen} block mb-2`}>Weight (kg)</label>
                <input
                  type="number"
                  value={editData.weight}
                  onChange={(e) => handleEditChange('weight', parseInt(e.target.value))}
                  className={`w-full ${bgTertiary} border ${border} border-opacity-30 rounded-lg px-4 py-3 ${text} focus:border-[#47A025] outline-none transition`}
                  placeholder="75"
                />
              </div>
              <div>
                <label className={`text-xs font-bold ${primaryGreen} block mb-2`}>Height (cm)</label>
                <input
                  type="number"
                  value={editData.height}
                  onChange={(e) => handleEditChange('height', parseInt(e.target.value))}
                  className={`w-full ${bgTertiary} border ${border} border-opacity-30 rounded-lg px-4 py-3 ${text} focus:border-[#47A025] outline-none transition`}
                  placeholder="180"
                />
              </div>
            </div>

            <div>
              <label className={`text-xs font-bold ${primaryGreen} block mb-2`}>Bio</label>
              <textarea
                value={editData.bio}
                onChange={(e) => handleEditChange('bio', e.target.value)}
                className={`w-full ${bgTertiary} border ${border} border-opacity-30 rounded-lg px-4 py-3 ${text} focus:border-[#47A025] outline-none transition h-20 resize-none`}
                placeholder="Tell us about yourself..."
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={handleSaveProfile}
              className={`py-3 rounded-xl font-bold ${primaryGreenBg} text-black hover:bg-[#2d6015] transition`}
            >
              Save Changes
            </button>
            <button
              onClick={() => setIsEditMode(false)}
              className={`py-3 rounded-xl font-bold border ${border} ${textSecondary} hover:border-[#47A025] transition`}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // MAIN PROFILE VIEW
  return (
    <div className={`min-h-screen ${bg} ${text} pb-32`}>
      {/* Header with actions */}
      <div className={`sticky top-0 z-20 ${bgSecondary} border-b ${border} border-opacity-20 backdrop-blur-sm`}>
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold font-playfair">Profile</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSettings(true)}
              className={`p-2 ${bgTertiary} rounded-lg hover:border ${border} transition`}
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-6 space-y-6">
        {/* PROFILE CARD */}
        <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl overflow-hidden`}>
          {/* Background banner */}
          <div className="h-20 bg-gradient-to-r from-[#47A025] to-[#2d6015] opacity-80"></div>

          {/* Profile Content */}
          <div className="relative px-4 pb-4 -mt-12">
            {/* Avatar */}
            <div className="flex items-end justify-between mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#47A025] to-[#2d6015] flex items-center justify-center text-3xl font-bold border-4 border-[#100E0E]">
                {user?.name?.charAt(0) || 'U'}
              </div>
              <button
                onClick={() => setIsEditMode(true)}
                className={`flex items-center gap-2 px-3 py-2 ${primaryGreenBg} text-black rounded-lg hover:bg-[#2d6015] transition font-bold text-sm`}
              >
                <Edit2 size={14} />
                Edit
              </button>
            </div>

            {/* User Info */}
            <h2 className="text-2xl font-bold mb-1">{user?.name || 'User Name'}</h2>
            <p className={`${primaryGreen} font-bold mb-2`}>{stats.level}</p>
            <p className={`text-sm ${textSecondary} line-clamp-2`}>{editData.bio}</p>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-[#BFB7B6] border-opacity-20">
              <div className="text-center">
                <p className={`text-lg font-bold ${primaryGreen}`}>{stats.workouts}</p>
                <p className={`text-xs ${textSecondary}`}>Workouts</p>
              </div>
              <div className="text-center">
                <p className={`text-lg font-bold ${primaryGreen}`}>{stats.streak}</p>
                <p className={`text-xs ${textSecondary}`}>Day Streak</p>
              </div>
              <div className="text-center">
                <p className={`text-lg font-bold ${primaryGreen}`}>{Math.round(stats.totalTime / 60)}</p>
                <p className={`text-xs ${textSecondary}`}>Hours</p>
              </div>
              <div className="text-center">
                <p className={`text-lg font-bold ${primaryGreen}`}>{stats.friends}</p>
                <p className={`text-xs ${textSecondary}`}>Friends</p>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN STATS */}
        <div className="space-y-3">
          <h3 className="font-bold text-lg font-playfair">This Month</h3>
          
          {/* Calories Card */}
          <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-4 flex items-center gap-4`}>
            <div className={`p-3 ${bgTertiary} rounded-lg`}>
              <Heart size={24} className={primaryGreen} />
            </div>
            <div className="flex-1">
              <p className={`text-xs ${textSecondary}`}>Calories Burned</p>
              <p className={`text-2xl font-bold ${primaryGreen}`}>{stats.caloriesBurned.toLocaleString()}</p>
            </div>
            <TrendingUp size={20} className={`${primaryGreen} opacity-50`} />
          </div>

          {/* Time Card */}
          <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-4 flex items-center gap-4`}>
            <div className={`p-3 ${bgTertiary} rounded-lg`}>
              <Clock size={24} className={primaryGreen} />
            </div>
            <div className="flex-1">
              <p className={`text-xs ${textSecondary}`}>Training Time</p>
              <p className={`text-2xl font-bold ${primaryGreen}`}>{stats.totalTime} min</p>
            </div>
            <Target size={20} className={`${primaryGreen} opacity-50`} />
          </div>

          {/* Streak Card */}
          <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-4 flex items-center gap-4`}>
            <div className={`p-3 ${bgTertiary} rounded-lg`}>
              <Flame size={24} className="text-red-500" />
            </div>
            <div className="flex-1">
              <p className={`text-xs ${textSecondary}`}>Current Streak</p>
              <p className={`text-2xl font-bold text-red-500`}>{stats.streak} Days</p>
            </div>
            <Zap size={20} className={`text-red-500 opacity-50`} />
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-lg font-playfair flex items-center gap-2">
              <Award size={20} className={primaryGreen} />
              Achievements
            </h3>
            <span className={`text-xs ${primaryGreen}`}>{achievements.filter(a => a.unlocked).length}/{achievements.length}</span>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {achievements.map(achievement => (
              <div
                key={achievement.id}
                className={`aspect-square rounded-lg flex items-center justify-center font-bold text-sm border-2 ${
                  achievement.unlocked
                    ? `${achievement.color} border-opacity-50`
                    : `${bgTertiary} border-[#BFB7B6] border-opacity-30 opacity-50`
                } relative group cursor-pointer transition hover:scale-105`}
              >
                <span>{achievement.icon}</span>
                <div className="absolute hidden group-hover:block bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black px-2 py-1 rounded text-xs whitespace-nowrap text-white">
                  {achievement.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PERSONAL RECORDS */}
        <div>
          <h3 className="font-bold text-lg font-playfair flex items-center gap-2 mb-3">
            <Star size={20} className={primaryGreen} />
            Personal Records
          </h3>

          <div className="space-y-3">
            {personalRecords.map(pr => (
              <div key={pr.id} className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold">{pr.exercise}</p>
                  <span className={`text-xs ${textSecondary}`}>{pr.date}</span>
                </div>
                <p className={`text-lg ${primaryGreen} font-bold mb-2`}>{pr.value}</p>
                <p className={`text-xs font-bold text-blue-400`}>{pr.improvement}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RECENT WORKOUTS */}
        <div>
          <h3 className="font-bold text-lg font-playfair mb-3">Recent Workouts</h3>

          <div className="space-y-2">
            {recentWorkouts.map(workout => (
              <div key={workout.id} className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-3 hover:border-opacity-50 transition cursor-pointer`}>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-bold">{workout.name}</p>
                    <p className={`text-xs ${textSecondary}`}>{workout.date}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                    workout.difficulty === 'Advanced' ? 'bg-red-600 bg-opacity-20 text-red-300' :
                    workout.difficulty === 'Intermediate' ? 'bg-yellow-600 bg-opacity-20 text-yellow-300' :
                    'bg-green-600 bg-opacity-20 text-green-300'
                  }`}>
                    {workout.difficulty}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <span className={textSecondary}>{workout.duration}</span>
                  <span className={`${primaryGreen} font-bold`}>{workout.calories} kcal</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div className={`${bgSecondary} border ${border} border-opacity-30 rounded-xl p-4`}>
          <h3 className="font-bold mb-3">About You</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className={textSecondary}>Age</span>
              <span className="font-bold">{editData.age} years old</span>
            </div>
            <div className="flex justify-between">
              <span className={textSecondary}>Weight</span>
              <span className="font-bold">{editData.weight} kg</span>
            </div>
            <div className="flex justify-between">
              <span className={textSecondary}>Height</span>
              <span className="font-bold">{editData.height} cm</span>
            </div>
            <div className="flex justify-between">
              <span className={textSecondary}>Level</span>
              <span className={`font-bold ${primaryGreen}`}>{stats.level}</span>
            </div>
          </div>
        </div>

        {/* SHARING */}
        <button className={`w-full py-3 ${bgSecondary} border ${border} border-opacity-30 rounded-xl font-bold flex items-center justify-center gap-2 hover:border-opacity-50 transition`}>
          <Share2 size={18} />
          Share Profile
        </button>
      </div>
    </div>
  );
}

// Add missing import
const Clock = Heart;