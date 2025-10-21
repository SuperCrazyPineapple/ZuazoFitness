// src/components/Programs.jsx

import React, { useState } from 'react';
import { Play, Clock, Zap, Target, Users, BookOpen, Video, ChevronRight, Star, Download, Flame, TrendingUp } from 'lucide-react';

export default function Programs({ user }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [enrolledPrograms, setEnrolledPrograms] = useState([1, 2]);

  const categories = [
    { id: 'all', name: 'All Programs', icon: '📚' },
    { id: 'strength', name: 'Strength', icon: '💪' },
    { id: 'cardio', name: 'Cardio', icon: '🏃' },
    { id: 'yoga', name: 'Yoga', icon: '🧘' },
    { id: 'hiit', name: 'HIIT', icon: '⚡' },
    { id: 'flexibility', name: 'Flexibility', icon: '🤸' }
  ];

  const programs = [
    {
      id: 1,
      title: 'Push Mastery',
      category: 'strength',
      level: 'Intermediate',
      duration: '8 weeks',
      difficulty: 'Advanced',
      rating: 4.8,
      reviews: 234,
      enrolled: 1203,
      image: '🤸',
      description: 'Master advanced pushing movements',
      exercises: 42,
      sessions: 24,
      progress: 35,
      status: 'ongoing',
      nextSession: 'Tomorrow at 18:00',
      features: ['Video tutorials', 'Progress tracking', 'Community support'],
      highlights: [
        { week: 1, focus: 'Push-up progressions' },
        { week: 4, focus: 'Archer push-ups' },
        { week: 8, focus: 'One-arm push-ups' }
      ]
    },
    {
      id: 2,
      title: 'Handstand Academy',
      category: 'strength',
      level: 'Advanced',
      duration: '12 weeks',
      difficulty: 'Elite',
      rating: 4.9,
      reviews: 456,
      enrolled: 876,
      image: '🤲',
      description: 'Complete handstand mastery program',
      exercises: 56,
      sessions: 36,
      progress: 60,
      status: 'ongoing',
      nextSession: 'Wed at 17:00',
      features: ['Expert coaching', 'Form analysis', 'Challenge events'],
      highlights: [
        { week: 1, focus: 'Wall holds' },
        { week: 6, focus: 'Free standing holds' },
        { week: 12, focus: 'Handstand walking' }
      ]
    },
    {
      id: 3,
      title: 'HIIT Shred',
      category: 'cardio',
      level: 'Intermediate',
      duration: '6 weeks',
      difficulty: 'Hard',
      rating: 4.6,
      reviews: 789,
      enrolled: 2341,
      image: '🔥',
      description: 'Intense fat-burning workouts',
      exercises: 30,
      sessions: 18,
      progress: 0,
      status: 'available',
      features: ['Interval training', 'Music-synced', 'Beginner friendly'],
      highlights: [
        { week: 1, focus: 'Basic HIIT' },
        { week: 4, focus: 'Advanced intervals' },
        { week: 6, focus: 'Endurance HIIT' }
      ]
    },
    {
      id: 4,
      title: 'Yoga Fundamentals',
      category: 'yoga',
      level: 'Beginner',
      duration: '4 weeks',
      difficulty: 'Easy',
      rating: 4.7,
      reviews: 567,
      enrolled: 1876,
      image: '🧘',
      description: 'Start your yoga journey with basics',
      exercises: 28,
      sessions: 16,
      progress: 0,
      status: 'available',
      features: ['Flexible timing', 'Relaxation focus', 'Injury prevention'],
      highlights: [
        { week: 1, focus: 'Breathing basics' },
        { week: 3, focus: 'Flow sequences' },
        { week: 4, focus: 'Meditation' }
      ]
    },
    {
      id: 5,
      title: 'Full Body Strength',
      category: 'strength',
      level: 'Beginner',
      duration: '6 weeks',
      difficulty: 'Medium',
      rating: 4.5,
      reviews: 234,
      enrolled: 3456,
      image: '💪',
      description: 'Build a solid foundation for all fitness goals',
      exercises: 35,
      sessions: 18,
      progress: 0,
      status: 'available',
      features: ['Structured progression', 'Rest days included', 'No equipment'],
      highlights: [
        { week: 1, focus: 'Bodyweight basics' },
        { week: 3, focus: 'Progressive overload' },
        { week: 6, focus: 'Advanced variations' }
      ]
    },
    {
      id: 6,
      title: 'Mobility & Flexibility',
      category: 'flexibility',
      level: 'Beginner',
      duration: '8 weeks',
      difficulty: 'Easy',
      rating: 4.8,
      reviews: 345,
      enrolled: 2234,
      image: '🤸',
      description: 'Increase range of motion and prevent injuries',
      exercises: 48,
      sessions: 24,
      progress: 0,
      status: 'available',
      features: ['Daily sessions', 'Recovery focused', 'Injury rehab'],
      highlights: [
        { week: 1, focus: 'Joint mobility' },
        { week: 4, focus: 'Deep stretches' },
        { week: 8, focus: 'Complete flexibility' }
      ]
    }
  ];

  const filteredPrograms = selectedCategory === 'all' 
    ? programs 
    : programs.filter(p => p.category === selectedCategory);

  const toggleEnroll = (programId) => {
    if (enrolledPrograms.includes(programId)) {
      setEnrolledPrograms(enrolledPrograms.filter(id => id !== programId));
    } else {
      setEnrolledPrograms([...enrolledPrograms, programId]);
    }
  };

  const renderProgram = (program) => {
    const isEnrolled = enrolledPrograms.includes(program.id);

    return (
      <div
        key={program.id}
        className="bg-dark-secondary border border-metallic border-opacity-30 rounded-xl overflow-hidden hover:border-accent hover:border-opacity-50 transition cursor-pointer"
        onClick={() => setSelectedProgram(program.id)}
      >
        {/* Program Card Header */}
        <div className="aspect-video bg-gradient-to-br from-dark to-dark-secondary flex items-center justify-center text-6xl relative overflow-hidden">
          {program.image}
          <div className="absolute top-3 right-3 bg-dark-secondary bg-opacity-80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-metallic border-opacity-30">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            {program.rating}
          </div>
          {isEnrolled && (
            <div className="absolute top-3 left-3 bg-accent text-dark px-3 py-1 rounded-full text-xs font-bold">
              ✓ Enrolled
            </div>
          )}
        </div>

        {/* Program Info */}
        <div className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div className="flex-1">
              <h3 className="text-lg font-bold mb-1">{program.title}</h3>
              <p className="text-metallic text-xs line-clamp-2">{program.description}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 text-xs mb-3 py-2 border-t border-b border-metallic border-opacity-20">
            <div>
              <p className="text-metallic font-bold">LEVEL</p>
              <p className="font-bold">{program.level}</p>
            </div>
            <div>
              <p className="text-metallic font-bold">DURATION</p>
              <p className="font-bold">{program.duration}</p>
            </div>
            <div>
              <p className="text-metallic font-bold">SESSIONS</p>
              <p className="font-bold text-accent">{program.sessions}</p>
            </div>
          </div>

          {/* Features */}
          <div className="flex gap-2 flex-wrap mb-3">
            {program.features.slice(0, 2).map((feature, idx) => (
              <span key={idx} className="text-xs bg-accent bg-opacity-20 text-accent px-2 py-1 rounded-full font-bold">
                {feature}
              </span>
            ))}
          </div>

          {/* Progress or CTA */}
          {program.status === 'ongoing' ? (
            <div>
              <div className="mb-2">
                <div className="flex justify-between mb-1 text-xs">
                  <span className="font-bold">Progress</span>
                  <span className="text-accent">{program.progress}%</span>
                </div>
                <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all"
                    style={{ width: `${program.progress}%` }}
                  />
                </div>
              </div>
              <p className="text-metallic text-xs mb-2">{program.nextSession}</p>
              <button className="w-full bg-accent hover:bg-green-400 text-dark font-bold py-2 rounded-lg transition text-sm flex items-center justify-center gap-2">
                <Play size={14} />
                Continue
              </button>
            </div>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleEnroll(program.id);
              }}
              className={`w-full font-bold py-3 rounded-lg transition flex items-center justify-center gap-2 text-sm ${
                isEnrolled
                  ? 'bg-dark border border-accent border-opacity-50 text-accent hover:bg-dark-secondary'
                  : 'bg-accent hover:bg-green-400 text-dark'
              }`}
            >
              {isEnrolled ? '✓ Enrolled' : (
                <>
                  <Download size={14} />
                  Start Program
                </>
              )}
            </button>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-poppins text-white pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark-secondary border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">Programs</h1>
          <p className="text-metallic text-sm">Choose your training path</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        {/* Categories */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-2 rounded-full whitespace-nowrap font-bold text-sm transition flex-shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-accent text-dark'
                  : 'bg-dark-secondary border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
              }`}
            >
              <span className="mr-1">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Programs Count */}
        <div className="mt-6 flex items-center justify-between mb-4">
          <p className="text-metallic text-sm">{filteredPrograms.length} programs available</p>
          <div className="text-xs font-bold text-accent">
            {enrolledPrograms.length} enrolled
          </div>
        </div>

        {/* Featured Banner */}
        {selectedCategory === 'all' && (
          <div className="bg-gradient-to-r from-accent to-green-400 rounded-xl p-4 mb-6 text-dark">
            <div className="flex items-center gap-3 mb-2">
              <Flame size={20} />
              <h3 className="font-bold">Trending This Week</h3>
            </div>
            <p className="text-sm opacity-90 mb-3">HIIT Shred - 300+ people started today</p>
            <button className="bg-dark hover:bg-dark-secondary text-accent font-bold py-2 px-4 rounded-lg transition text-sm">
              Explore
            </button>
          </div>
        )}

        {/* Programs Grid */}
        <div className="space-y-4 mb-6">
          {filteredPrograms.map(renderProgram)}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-4xl mb-2">😴</p>
            <p className="text-metallic mb-4">No programs in this category yet</p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="bg-accent text-dark font-bold px-4 py-2 rounded-lg hover:bg-green-400 transition"
            >
              View All Programs
            </button>
          </div>
        )}

        {/* Create Custom Program */}
        <div className="mb-6 bg-gradient-to-br from-dark-secondary to-dark border-2 border-metallic border-opacity-30 rounded-xl p-6 hover:border-accent hover:border-opacity-50 transition">
          <h3 className="text-xl font-bold mb-2">Create Custom Workout</h3>
          <p className="text-metallic text-sm mb-4">Build your own program based on your goals and available time</p>
          <div className="flex gap-2">
            <button className="flex-1 bg-accent hover:bg-green-400 text-dark font-bold py-3 rounded-lg transition">
              Start Builder
            </button>
            <button className="flex-1 bg-dark-secondary border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50 font-bold py-3 rounded-lg transition">
              Templates
            </button>
          </div>
        </div>

        {/* Info Section */}
        <div className="mb-6">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <TrendingUp size={18} className="text-accent" />
            Why Choose Our Programs?
          </h3>
          <div className="space-y-2">
            {[
              { icon: '📹', text: 'Professional video tutorials for every exercise' },
              { icon: '📊', text: 'Detailed progress tracking and analytics' },
              { icon: '🎯', text: 'Personalized recommendations based on goals' },
              { icon: '👥', text: 'Community support and motivation' },
              { icon: '💪', text: 'Progressive overload built-in' },
              { icon: '⭐', text: '4.7+ average rating from users' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm">
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <p className="text-metallic-light">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Enrolled Programs Quick Access */}
        {enrolledPrograms.length > 0 && (
          <div className="mb-6">
            <h3 className="font-bold mb-3">Your Programs</h3>
            <div className="space-y-2">
              {programs
                .filter(p => enrolledPrograms.includes(p.id))
                .map(program => (
                  <div key={program.id} className="bg-dark-secondary border border-accent border-opacity-30 rounded-lg p-3 flex items-center justify-between hover:border-accent hover:border-opacity-50 cursor-pointer transition">
                    <div className="flex items-center gap-3 flex-1">
                      <span className="text-2xl">{program.image}</span>
                      <div className="flex-1">
                        <p className="font-bold text-sm">{program.title}</p>
                        <p className="text-metallic text-xs">{program.duration}</p>
                      </div>
                    </div>
                    <ChevronRight size={16} className="text-metallic-light" />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}