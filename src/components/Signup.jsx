// src/components/Signup.jsx

import React, { useState } from 'react';
import { ChevronRight, Zap, Heart, Flame, TrendingUp } from 'lucide-react';

export default function Signup({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    goals: [],
    gender: '',
    height: '',
    weight: '',
    age: '',
    experience: '',
    equipment: [],
    name: ''
  });

  const goals = [
    { id: 'strength', label: 'Build Strength', icon: Zap, description: 'Increase power & performance' },
    { id: 'muscle', label: 'Build Muscle', icon: Heart, description: 'Gain mass & definition' },
    { id: 'endurance', label: 'Build Endurance', icon: TrendingUp, description: 'Improve stamina' },
    { id: 'fat-loss', label: 'Lose Fat', icon: Flame, description: 'Fat burning workouts' }
  ];

  const experience = [
    { id: 'beginner', label: 'Beginner', desc: 'Just starting my fitness journey' },
    { id: 'intermediate', label: 'Intermediate', desc: 'Training for 6-12 months' },
    { id: 'advanced', label: 'Advanced', desc: 'Training for 2+ years' }
  ];

  const equipmentOptions = [
    { id: 'bodyweight', label: 'Bodyweight Only' },
    { id: 'dumbbells', label: 'Dumbbells' },
    { id: 'barbell', label: 'Barbell' },
    { id: 'gym', label: 'Full Gym' }
  ];

  const handleGoalToggle = (id) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(id)
        ? prev.goals.filter(g => g !== id)
        : [...prev.goals, id]
    }));
  };

  const handleEquipmentToggle = (id) => {
    setFormData(prev => ({
      ...prev,
      equipment: prev.equipment.includes(id)
        ? prev.equipment.filter(e => e !== id)
        : [...prev.equipment, id]
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep === 1 && formData.goals.length === 0) {
      alert('Please select at least one goal');
      return;
    }
    if (currentStep === 2 && (!formData.name || !formData.gender || !formData.age)) {
      alert('Please complete all fields');
      return;
    }
    if (currentStep === 3 && (!formData.height || !formData.weight)) {
      alert('Please enter height and weight');
      return;
    }
    if (currentStep === 4 && !formData.experience) {
      alert('Please select your experience level');
      return;
    }
    if (currentStep === 5 && formData.equipment.length === 0) {
      alert('Please select at least one equipment');
      return;
    }

    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const progress = (currentStep / 5) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold tracking-wider">CALISTHEN<span className="text-accent">X</span></h1>
          <p className="text-metallic text-sm mt-1">Master Your Body</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-md mx-auto px-6 py-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map(step => (
            <div
              key={step}
              className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                step <= currentStep ? 'bg-accent' : 'bg-metallic bg-opacity-20'
              }`}
            />
          ))}
        </div>
        <p className="text-metallic text-xs mt-2">Step {currentStep} of 5</p>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6 pb-32">
        
        {/* STEP 1: GOALS */}
        {currentStep === 1 && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-2">What Are Your Goals?</h2>
            <p className="text-metallic-light text-sm mb-8">Choose as many as you like</p>
            <div className="space-y-3">
              {goals.map(goal => {
                const Icon = goal.icon;
                const isSelected = formData.goals.includes(goal.id);
                return (
                  <button
                    key={goal.id}
                    onClick={() => handleGoalToggle(goal.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      isSelected
                        ? 'border-accent bg-accent bg-opacity-10'
                        : 'border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={24} className={isSelected ? 'text-accent' : 'text-metallic-light'} />
                      <div>
                        <p className="font-bold">{goal.label}</p>
                        <p className="text-metallic text-xs">{goal.description}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 2: PERSONAL INFO */}
        {currentStep === 2 && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-2">Personal Information</h2>
            <p className="text-metallic-light text-sm mb-8">Help us customize your experience</p>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-metallic-light block mb-2 font-semibold">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full bg-dark-secondary border-2 border-metallic border-opacity-30 rounded-xl p-4 text-white placeholder-metallic focus:border-accent outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-metallic-light block mb-2 font-semibold">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full bg-dark-secondary border-2 border-metallic border-opacity-30 rounded-xl p-4 text-white focus:border-accent outline-none transition-colors"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-metallic-light block mb-2 font-semibold">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  placeholder="25"
                  className="w-full bg-dark-secondary border-2 border-metallic border-opacity-30 rounded-xl p-4 text-white placeholder-metallic focus:border-accent outline-none transition-colors"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: MEASUREMENTS */}
        {currentStep === 3 && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-2">Your Measurements</h2>
            <p className="text-metallic-light text-sm mb-8">Track your progress accurately</p>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-metallic-light block mb-2 font-semibold">Height (cm)</label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  placeholder="180"
                  className="w-full bg-dark-secondary border-2 border-metallic border-opacity-30 rounded-xl p-4 text-white placeholder-metallic focus:border-accent outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-sm text-metallic-light block mb-2 font-semibold">Weight (kg)</label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  placeholder="75"
                  className="w-full bg-dark-secondary border-2 border-metallic border-opacity-30 rounded-xl p-4 text-white placeholder-metallic focus:border-accent outline-none transition-colors"
                />
              </div>

              <div className="bg-dark-secondary border border-accent border-opacity-30 rounded-xl p-4 mt-6">
                <p className="text-accent text-sm font-semibold">💡 Tip</p>
                <p className="text-metallic-light text-xs mt-2">We'll use this to calculate calories and track your transformation</p>
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: EXPERIENCE */}
        {currentStep === 4 && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-2">Experience Level</h2>
            <p className="text-metallic-light text-sm mb-8">We'll tailor workouts to your fitness level</p>
            
            <div className="space-y-3">
              {experience.map(exp => (
                <button
                  key={exp.id}
                  onClick={() => setFormData(prev => ({ ...prev, experience: exp.id }))}
                  className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    formData.experience === exp.id
                      ? 'border-accent bg-accent bg-opacity-10'
                      : 'border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
                  }`}
                >
                  <p className="font-bold">{exp.label}</p>
                  <p className="text-metallic text-xs mt-1">{exp.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: EQUIPMENT */}
        {currentStep === 5 && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold mb-2">Available Equipment</h2>
            <p className="text-metallic-light text-sm mb-8">Select what you have access to</p>
            
            <div className="grid grid-cols-2 gap-3">
              {equipmentOptions.map(equip => (
                <button
                  key={equip.id}
                  onClick={() => handleEquipmentToggle(equip.id)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.equipment.includes(equip.id)
                      ? 'border-accent bg-accent bg-opacity-10'
                      : 'border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
                  }`}
                >
                  <p className="font-bold text-sm">{equip.label}</p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-dark-secondary border-t border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4 flex gap-3">
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="flex-1 py-3 border-2 border-metallic border-opacity-50 rounded-xl font-bold hover:border-metallic transition-colors"
            >
              Back
            </button>
          )}
          <button
            onClick={handleNext}
            className="flex-1 py-3 bg-accent text-dark rounded-xl font-bold hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
          >
            {currentStep === 5 ? 'Complete' : 'Next'} <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in;
        }
      `}</style>
    </div>
  );
}