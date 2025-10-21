// src/components/Exercises.jsx

import React, { useState } from 'react';
import { Search, Filter, Play, Heart, BookmarkIcon, ChevronRight } from 'lucide-react';

export default function Exercises({ user }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const categories = [
    { id: 'all', label: 'All', icon: '🎯' },
    { id: 'chest', label: 'Chest', icon: '💪' },
    { id: 'back', label: 'Back', icon: '🔙' },
    { id: 'legs', label: 'Legs', icon: '🦵' },
    { id: 'shoulders', label: 'Shoulders', icon: '🎪' },
    { id: 'core', label: 'Core', icon: '💥' },
    { id: 'cardio', label: 'Cardio', icon: '🏃' }
  ];

  const exercises = [
    {
      id: 1,
      name: 'Push-ups',
      category: 'chest',
      difficulty: 'Beginner',
      duration: '10 min',
      reps: '3x15',
      description: 'A fundamental upper body exercise that builds chest, shoulders, and triceps strength.',
      instructions: [
        'Start in a plank position with hands shoulder-width apart',
        'Lower your body until your chest nearly touches the floor',
        'Push through your palms to return to starting position',
        'Maintain a straight line from head to heels throughout'
      ],
      tips: 'Keep core engaged and elbows at 45 degrees',
      videoUrl: '📹',
      muscles: ['Chest', 'Triceps', 'Shoulders'],
      cal: 50
    },
    {
      id: 2,
      name: 'Pull-ups',
      category: 'back',
      difficulty: 'Intermediate',
      duration: '15 min',
      reps: '3x8',
      description: 'Advanced upper body exercise for back and biceps development.',
      instructions: [
        'Grab the bar with hands slightly wider than shoulder-width',
        'Pull your body up until your chin clears the bar',
        'Lower yourself with control to starting position',
        'Avoid swinging or kipping'
      ],
      tips: 'Focus on pulling elbows down and back',
      videoUrl: '📹',
      muscles: ['Back', 'Biceps', 'Shoulders'],
      cal: 80
    },
    {
      id: 3,
      name: 'Handstand Hold',
      category: 'shoulders',
      difficulty: 'Advanced',
      duration: '20 min',
      reps: '5x30sec',
      description: 'Build shoulder stability and core strength with handstand training.',
      instructions: [
        'Find a wall for support',
        'Place hands on ground at arm distance from wall',
        'Kick legs up against the wall',
        'Hold position while breathing normally'
      ],
      tips: 'Start with wall support, gradually reduce dependency',
      videoUrl: '📹',
      muscles: ['Shoulders', 'Core', 'Back'],
      cal: 120
    },
    {
      id: 4,
      name: 'Squats',
      category: 'legs',
      difficulty: 'Beginner',
      duration: '12 min',
      reps: '3x20',
      description: 'Lower body exercise targeting quadriceps, hamstrings, and glutes.',
      instructions: [
        'Stand with feet shoulder-width apart',
        'Lower your hips back and down',
        'Keep weight in heels and chest up',
        'Return to standing position'
      ],
      tips: 'Keep knees aligned with toes',
      videoUrl: '📹',
      muscles: ['Quads', 'Hamstrings', 'Glutes'],
      cal: 60
    },
    {
      id: 5,
      name: 'Plank',
      category: 'core',
      difficulty: 'Beginner',
      duration: '5 min',
      reps: '3x60sec',
      description: 'Isometric core exercise for stabilization and strength.',
      instructions: [
        'Lie face down with forearms on ground',
        'Engage core and lift hips off ground',
        'Maintain straight line from head to heels',
        'Hold position breathing normally'
      ],
      tips: 'Don\'t let hips sag or pike',
      videoUrl: '📹',
      muscles: ['Core', 'Shoulders', 'Back'],
      cal: 40
    },
    {
      id: 6,
      name: 'Burpees',
      category: 'cardio',
      difficulty: 'Intermediate',
      duration: '10 min',
      reps: '3x10',
      description: 'Full-body explosive exercise combining strength and cardio.',
      instructions: [
        'Start standing upright',
        'Drop to plank position',
        'Perform a push-up',
        'Jump feet toward hands',
        'Jump vertically with arms overhead'
      ],
      tips: 'Move explosively for maximum benefits',
      videoUrl: '📹',
      muscles: ['Full Body', 'Core', 'Cardio'],
      cal: 150
    },
    {
      id: 7,
      name: 'Muscle-ups',
      category: 'back',
      difficulty: 'Advanced',
      duration: '25 min',
      reps: '3x5',
      description: 'Combines pull-up and dip to move body above the bar.',
      instructions: [
        'Start with a pull-up grip',
        'Pull yourself high above the bar',
        'Transition to dip position',
        'Push down and rise above bar'
      ],
      tips: 'Requires significant strength and practice',
      videoUrl: '📹',
      muscles: ['Back', 'Chest', 'Triceps'],
      cal: 200
    },
    {
      id: 8,
      name: 'Pike Push-ups',
      category: 'shoulders',
      difficulty: 'Intermediate',
      duration: '10 min',
      reps: '3x12',
      description: 'Shoulder-focused variation of push-ups.',
      instructions: [
        'Start in downward dog position',
        'Lower head toward ground between hands',
        'Push back to starting position',
        'Focus on shoulder engagement'
      ],
      tips: 'Keep hips high throughout movement',
      videoUrl: '📹',
      muscles: ['Shoulders', 'Triceps', 'Core'],
      cal: 55
    }
  ];

  const filteredExercises = exercises.filter(exercise => {
    const matchesSearch = exercise.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || exercise.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (exerciseId) => {
    setFavorites(prev =>
      prev.includes(exerciseId)
        ? prev.filter(id => id !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  if (selectedExercise) {
    const exercise = exercises.find(e => e.id === selectedExercise);
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white pb-20">
        {/* Header */}
        <div className="sticky top-0 z-20 bg-dark border-b border-metallic border-opacity-20 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSelectedExercise(null)}
            className="text-metallic-light hover:text-white"
          >
            ← Back
          </button>
          <h1 className="text-xl font-bold">{exercise.name}</h1>
          <button
            onClick={() => toggleFavorite(exercise.id)}
            className={favorites.includes(exercise.id) ? 'text-red-400' : 'text-metallic'}
          >
            <Heart size={20} fill={favorites.includes(exercise.id) ? 'currentColor' : 'none'} />
          </button>
        </div>

        <div className="max-w-md mx-auto px-6 py-6">
          {/* Hero */}
          <div className="bg-gradient-to-br from-dark-secondary to-dark border border-metallic border-opacity-30 rounded-xl p-8 text-center mb-6">
            <span className="text-7xl">{exercise.videoUrl}</span>
            <button className="mt-4 w-full bg-accent hover:bg-green-400 text-dark py-3 rounded-lg font-bold flex items-center justify-center gap-2">
              <Play size={20} />
              Watch Tutorial
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 text-center">
              <p className="text-metallic text-xs mb-1">Difficulty</p>
              <p className="font-bold text-accent">{exercise.difficulty}</p>
            </div>
            <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 text-center">
              <p className="text-metallic text-xs mb-1">Duration</p>
              <p className="font-bold">{exercise.duration}</p>
            </div>
            <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 text-center">
              <p className="text-metallic text-xs mb-1">Calories</p>
              <p className="font-bold text-red-400">{exercise.cal}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Description</h3>
            <p className="text-metallic-light">{exercise.description}</p>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">How to Perform</h3>
            <div className="space-y-2">
              {exercise.instructions.map((instruction, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="bg-accent text-dark rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {idx + 1}
                  </span>
                  <p className="text-metallic-light pt-0.5">{instruction}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-dark-secondary border border-accent border-opacity-30 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold mb-2">💡 Pro Tip</p>
            <p className="text-metallic-light text-sm">{exercise.tips}</p>
          </div>

          {/* Muscles */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Targeted Muscles</h3>
            <div className="flex flex-wrap gap-2">
              {exercise.muscles.map((muscle, idx) => (
                <span key={idx} className="bg-accent bg-opacity-20 text-accent px-3 py-1 rounded-full text-sm font-semibold">
                  {muscle}
                </span>
              ))}
            </div>
          </div>

          {/* Add to Workout */}
          <button className="w-full bg-accent hover:bg-green-400 text-dark py-4 rounded-lg font-bold transition-colors">
            Add to Current Workout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold tracking-wider mb-4">Exercises</h1>
          
          {/* Search */}
          <div className="relative mb-4">
            <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-metallic" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search exercises..."
              className="w-full bg-dark-secondary border border-metallic border-opacity-30 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-accent outline-none transition-colors"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-accent text-dark'
                    : 'bg-dark-secondary border border-metallic border-opacity-30 text-metallic hover:text-metallic-light'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Exercises Grid */}
      <div className="max-w-md mx-auto px-6 py-6">
        <div className="grid gap-3">
          {filteredExercises.map(exercise => (
            <div
              key={exercise.id}
              onClick={() => setSelectedExercise(exercise.id)}
              className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 hover:border-metallic hover:border-opacity-50 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-lg">{exercise.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      exercise.difficulty === 'Beginner' ? 'bg-green-900 text-green-300' :
                      exercise.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-red-900 text-red-300'
                    }`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                  <p className="text-metallic-light text-sm mb-3">{exercise.description}</p>
                  <div className="flex gap-4 text-xs text-metallic">
                    <span>⏱️ {exercise.duration}</span>
                    <span>🔥 {exercise.cal} cal</span>
                    <span>💪 {exercise.reps}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 ml-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(exercise.id);
                    }}
                    className={favorites.includes(exercise.id) ? 'text-red-400' : 'text-metallic'}
                  >
                    <Heart size={20} fill={favorites.includes(exercise.id) ? 'currentColor' : 'none'} />
                  </button>
                  <ChevronRight size={20} className="text-metallic group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}