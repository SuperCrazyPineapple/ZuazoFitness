// src/components/Profile.jsx

import React, { useState } from 'react';
import { Camera, Edit2, LogOut, Bell, Shield, HelpCircle, Trash2, Save, X, TrendingUp, Target, ChevronRight, Settings, Share2, Mail, Phone, MapPin } from 'lucide-react';

export default function Profile({ user, setUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || 'Athlete',
    weight: user?.weight || 75,
    height: user?.height || 180,
    age: user?.age || 25,
    experience: user?.experience || 'Intermediate',
    gender: user?.gender || 'Male',
    email: user?.email || 'athlete@fitness.com',
    phone: user?.phone || '+1 (555) 123-4567',
    location: user?.location || 'San Francisco, CA',
    goals: user?.goals || ['Strength', 'Muscle']
  });

  const calculateBMI = () => {
    const heightInMeters = formData.height / 100;
    return (formData.weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { category: 'Underweight', color: 'text-blue-400' };
    if (bmi < 25) return { category: 'Normal', color: 'text-green-400' };
    if (bmi < 30) return { category: 'Overweight', color: 'text-yellow-400' };
    return { category: 'Obese', color: 'text-red-400' };
  };

  const bmi = calculateBMI();
  const bmiInfo = getBMICategory(bmi);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      ...formData
    };
    setUser(updatedUser);
    localStorage.setItem('fitnessUser', JSON.stringify(updatedUser));
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleGoalToggle = (goal) => {
    const currentGoals = formData.goals || [];
    if (currentGoals.includes(goal)) {
      setFormData({
        ...formData,
        goals: currentGoals.filter(g => g !== goal)
      });
    } else {
      setFormData({
        ...formData,
        goals: [...currentGoals, goal]
      });
    }
  };

  const progressHistory = [
    { date: '2 weeks ago', weight: 78, bmi: 24.1 },
    { date: '1 week ago', weight: 76.5, bmi: 23.6 },
    { date: 'Today', weight: 75, bmi: 23.1 }
  ];

  const achievements = [
    { icon: '🔥', name: '7-Day Warrior', unlocked: true, description: '7-day streak' },
    { icon: '💯', name: 'Century', unlocked: true, description: '100 push-ups' },
    { icon: '👑', name: 'Consistency', unlocked: false, description: '30-day streak' },
    { icon: '🏆', name: 'Elite', unlocked: false, description: '1000 total workouts' },
    { icon: '⭐', name: 'Star', unlocked: true, description: '100 followers' },
    { icon: '🚀', name: 'Rocketeer', unlocked: false, description: '10 programs done' }
  ];

  const goalOptions = ['Strength', 'Muscle', 'Fat Loss', 'Endurance', 'Flexibility', 'Stamina'];

  const experienceOptions = ['Beginner', 'Intermediate', 'Advanced', 'Elite'];

  const genderOptions = ['Male', 'Female', 'Other'];

  const settings = [
    { icon: Bell, label: 'Notifications', value: true, id: 'notifications' },
    { icon: Shield, label: 'Privacy', value: false, id: 'privacy' },
    { icon: Mail, label: 'Email Updates', value: true, id: 'email' },
    { icon: HelpCircle, label: 'Help & Support', value: null, id: 'help' }
  ];

  const personalStats = [
    { label: 'Member Since', value: '6 months', icon: '📅' },
    { label: 'Total Workouts', value: '24', icon: '💪' },
    { label: 'Followers', value: '145', icon: '👥' },
    { label: 'Following', value: '89', icon: '⭐' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-poppins text-white pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark-secondary border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Profile</h1>
          <button
            onClick={() => {
              if (isEditing) {
                setFormData({
                  name: user?.name || 'Athlete',
                  weight: user?.weight || 75,
                  height: user?.height || 180,
                  age: user?.age || 25,
                  experience: user?.experience || 'Intermediate',
                  gender: user?.gender || 'Male'
                });
              }
              setIsEditing(!isEditing);
            }}
            className="p-2 hover:bg-dark rounded-lg transition"
          >
            {isEditing ? <X size={20} /> : <Edit2 size={20} />}
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        {/* Profile Header Card */}
        <div className="mt-6 bg-gradient-to-br from-dark-secondary to-dark border border-metallic border-opacity-30 rounded-2xl p-6 text-center">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-accent to-green-400 flex items-center justify-center text-5xl border-4 border-dark">
              {formData.name.charAt(0).toUpperCase()}
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-accent text-dark p-2 rounded-full hover:bg-green-400 transition shadow-lg">
                <Camera size={16} />
              </button>
            )}
          </div>

          {isEditing ? (
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="bg-dark-secondary border border-accent rounded px-3 py-2 text-white w-full text-center text-2xl font-bold mb-1"
            />
          ) : (
            <h2 className="text-2xl font-bold mb-1">{formData.name}</h2>
          )}

          <p className="text-metallic text-sm mb-3">{formData.experience} • {(formData.goals || []).slice(0, 2).join(', ')}</p>

          {!isEditing && (
            <div className="flex items-center justify-center gap-6 text-xs">
              <div>
                <p className="text-metallic">Age</p>
                <p className="font-bold">{formData.age}</p>
              </div>
              <div className="h-8 w-px bg-metallic bg-opacity-20"></div>
              <div>
                <p className="text-metallic">Gender</p>
                <p className="font-bold">{formData.gender}</p>
              </div>
              <div className="h-8 w-px bg-metallic bg-opacity-20"></div>
              <div>
                <p className="text-metallic">Experience</p>
                <p className="font-bold">{formData.experience}</p>
              </div>
            </div>
          )}
        </div>

        {/* Personal Stats */}
        <div className="grid grid-cols-4 gap-2 mt-6 mb-6">
          {personalStats.map((stat, idx) => (
            <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-2 text-center">
              <p className="text-lg mb-1">{stat.icon}</p>
              <p className="text-accent text-sm font-bold">{stat.value}</p>
              <p className="text-metallic text-xs line-clamp-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Body Measurements */}
        <div className="mb-6">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Target size={18} className="text-accent" />
            Body Measurements
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 text-center">
              <p className="text-metallic text-xs mb-2 font-bold">WEIGHT</p>
              {isEditing ? (
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', parseFloat(e.target.value))}
                  className="bg-dark border border-accent rounded px-2 py-1 w-full text-white text-center font-bold text-lg"
                />
              ) : (
                <p className="text-2xl font-bold text-accent">{formData.weight}</p>
              )}
              <p className="text-metallic text-xs mt-1">kg</p>
            </div>

            <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 text-center">
              <p className="text-metallic text-xs mb-2 font-bold">HEIGHT</p>
              {isEditing ? (
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', parseFloat(e.target.value))}
                  className="bg-dark border border-accent rounded px-2 py-1 w-full text-white text-center font-bold text-lg"
                />
              ) : (
                <p className="text-2xl font-bold">{formData.height}</p>
              )}
              <p className="text-metallic text-xs mt-1">cm</p>
            </div>

            <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 text-center">
              <p className="text-metallic text-xs mb-2 font-bold">BMI</p>
              <p className={`text-2xl font-bold ${bmiInfo.color}`}>{bmi}</p>
              <p className={`text-metallic text-xs mt-1 ${bmiInfo.color}`}>{bmiInfo.category}</p>
            </div>
          </div>
        </div>

        {/* Age & Experience (Edit Mode) */}
        {isEditing && (
          <div className="mb-6">
            <h3 className="font-bold mb-3">Additional Info</h3>
            <div className="space-y-3">
              <div>
                <label className="text-metallic text-xs font-bold block mb-1">AGE</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', parseInt(e.target.value))}
                  className="bg-dark border border-metallic border-opacity-30 rounded px-3 py-2 w-full text-white focus:border-accent focus:border-opacity-50 outline-none"
                />
              </div>
              <div>
                <label className="text-metallic text-xs font-bold block mb-1">GENDER</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="bg-dark border border-metallic border-opacity-30 rounded px-3 py-2 w-full text-white focus:border-accent focus:border-opacity-50 outline-none"
                >
                  {genderOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-metallic text-xs font-bold block mb-1">EXPERIENCE LEVEL</label>
                <select
                  value={formData.experience}
                  onChange={(e) => handleInputChange('experience', e.target.value)}
                  className="bg-dark border border-metallic border-opacity-30 rounded px-3 py-2 w-full text-white focus:border-accent focus:border-opacity-50 outline-none"
                >
                  {experienceOptions.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Contact Info (View Mode) */}
        {!isEditing && (
          <div className="mb-6">
            <h3 className="font-bold mb-3">Contact Information</h3>
            <div className="space-y-2">
              <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <div className="flex-1 truncate">
                  <p className="text-metallic text-xs">Email</p>
                  <p className="font-bold text-sm truncate">{formData.email}</p>
                </div>
              </div>
              <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <div className="flex-1 truncate">
                  <p className="text-metallic text-xs">Phone</p>
                  <p className="font-bold text-sm">{formData.phone}</p>
                </div>
              </div>
              <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 flex items-center gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0" />
                <div className="flex-1 truncate">
                  <p className="text-metallic text-xs">Location</p>
                  <p className="font-bold text-sm">{formData.location}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress History */}
        <div className="mb-6">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <TrendingUp size={18} className="text-accent" />
            Progress History
          </h3>
          <div className="space-y-2">
            {progressHistory.map((item, idx) => (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">{item.date}</p>
                  <p className="text-metallic text-xs">Weight: {item.weight} kg • BMI: {item.bmi}</p>
                </div>
                {idx === progressHistory.length - 1 && (
                  <span className="text-accent font-bold text-xs px-2 py-1 bg-accent bg-opacity-20 rounded">Current</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold">Your Goals</h3>
            {!isEditing && <span className="text-accent text-xs font-bold">{(formData.goals || []).length} goals</span>}
          </div>
          {isEditing ? (
            <div className="grid grid-cols-2 gap-2">
              {goalOptions.map(goal => (
                <button
                  key={goal}
                  onClick={() => handleGoalToggle(goal)}
                  className={`px-3 py-2 rounded-lg font-bold text-sm transition border ${
                    (formData.goals || []).includes(goal)
                      ? 'bg-accent text-dark border-accent'
                      : 'bg-dark-secondary border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
                  }`}
                >
                  {goal}
                </button>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {(formData.goals || []).map(goal => (
                <div key={goal} className="bg-accent bg-opacity-20 border border-accent border-opacity-50 rounded-lg p-3 text-center">
                  <p className="font-bold text-sm">{goal}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="font-bold mb-3">Badges & Achievements</h3>
          <div className="grid grid-cols-3 gap-2">
            {achievements.map((badge, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center gap-1 p-3 rounded-lg border transition ${
                  badge.unlocked
                    ? 'bg-dark-secondary border-accent border-opacity-50 cursor-pointer hover:border-opacity-100'
                    : 'bg-dark border-metallic border-opacity-30 opacity-50'
                }`}
              >
                <span className="text-3xl">{badge.icon}</span>
                <p className="text-xs text-center font-bold line-clamp-1">{badge.name}</p>
                <p className="text-metallic text-xs text-center line-clamp-1">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="mb-6">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <Settings size={18} className="text-accent" />
            Settings
          </h3>
          <div className="space-y-2">
            {settings.map((setting, idx) => {
              const Icon = setting.icon;
              return (
                <div
                  key={idx}
                  className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 flex items-center justify-between hover:border-metallic hover:border-opacity-50 transition cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-accent" />
                    <span className="font-bold text-sm">{setting.label}</span>
                  </div>
                  {setting.value !== null && (
                    <div className={`w-8 h-5 rounded-full transition ${setting.value ? 'bg-accent' : 'bg-metallic'}`}></div>
                  )}
                  {setting.value === null && (
                    <ChevronRight size={18} className="text-metallic-light" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Edit/Save Buttons */}
        {isEditing && (
          <div className="space-y-2 mb-6">
            <button
              onClick={handleSave}
              className="w-full bg-accent hover:bg-green-400 text-dark font-bold py-4 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Save size={18} />
              Save Changes
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="w-full bg-dark-secondary border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50 font-bold py-4 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        )}

        {/* Share Profile */}
        {!isEditing && (
          <div className="mb-6">
            <button className="w-full bg-dark-secondary hover:bg-dark border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50 font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
              <Share2 size={18} />
              Share Profile
            </button>
          </div>
        )}

        {/* Danger Zone */}
        <div className="mb-6">
          <h3 className="font-bold text-red-400 mb-3 flex items-center gap-2">
            ⚠️ Danger Zone
          </h3>
          <div className="space-y-2">
            <button className="w-full bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 hover:bg-opacity-30 font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
              <LogOut size={18} />
              Logout
            </button>
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 hover:bg-opacity-20 font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 text-red-400"
            >
              <Trash2 size={18} />
              Delete Account
            </button>
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
            <div className="bg-dark-secondary rounded-lg p-6 max-w-sm w-full border border-metallic border-opacity-30">
              <p className="text-2xl mb-2">⚠️</p>
              <h3 className="text-xl font-bold mb-2">Delete Account?</h3>
              <p className="text-metallic text-sm mb-6">This action cannot be undone. All your data will be permanently deleted.</p>
              <div className="space-y-2">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="w-full bg-dark hover:bg-dark-secondary border border-metallic border-opacity-30 font-bold py-3 rounded-lg transition"
                >
                  Cancel
                </button>
                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}