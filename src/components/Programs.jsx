import React, { useState, useEffect } from 'react';
import { Search, Star, Users, Clock, Zap, PlayCircle } from 'lucide-react';

export default function Programs() {
  // Ajouter la typographie Playfair Display
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
      
      .font-playfair {
        font-family: 'Playfair Display', serif;
      }
      
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // Styles cohérents CALISTHENX
  const darkMode = true;
  const bg = 'bg-[#100E0E]';
  const bgSecondary = 'bg-[#1a1817]';
  const bgTertiary = 'bg-[#242220]';
  const text = 'text-white';
  const textSecondary = 'text-[#BFB7B6]';
  const border = 'border-[#BFB7B6]';
  const primaryGreen = 'text-[#47A025]';
  const primaryGreenBg = 'bg-[#47A025]';
  const primaryGreenHover = 'hover:bg-[#2d6015]';

  const [selectedCategory, setSelectedCategory] = useState('strength');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const programs = [
    {
      id: 1,
      title: 'Push Mastery',
      category: 'strength',
      level: 'Intermediate',
      duration: '8 weeks',
      difficulty: 'Hard',
      rating: 4.8,
      reviews: 234,
      enrolled: 1234,
      description: 'Master push movements with progressive training',
      exercises: 42,
      sessions: 24,
      progress: 35,
      status: 'ongoing',
      nextSession: 'Tomorrow at 18:00',
      features: ['Expert coaching', 'Video tutorials', 'Progressive overload'],
      highlights: [
        { week: 1, focus: 'Foundations' },
        { week: 4, focus: 'Advanced variations' },
        { week: 8, focus: 'Peak performance' }
      ]
    },
    {
      id: 2,
      title: 'Handstand Academy',
      category: 'skill',
      level: 'Advanced',
      duration: '12 weeks',
      difficulty: 'Elite',
      rating: 4.9,
      reviews: 456,
      enrolled: 876,
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
      category: 'flexibility',
      level: 'Beginner',
      duration: '4 weeks',
      difficulty: 'Easy',
      rating: 4.7,
      reviews: 567,
      enrolled: 1876,
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

  const categories = [
    { id: 'all', label: 'All Programs' },
    { id: 'strength', label: 'Strength' },
    { id: 'cardio', label: 'Cardio' },
    { id: 'flexibility', label: 'Flexibility' },
    { id: 'skill', label: 'Skills' }
  ];

  const levels = [
    { id: 'all', label: 'All Levels' },
    { id: 'Beginner', label: 'Beginner' },
    { id: 'Intermediate', label: 'Intermediate' },
    { id: 'Advanced', label: 'Advanced' }
  ];

  const filteredPrograms = programs.filter(program => {
    const matchesCategory = selectedCategory === 'all' || program.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || program.level === selectedLevel;
    const matchesSearch = program.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  return (
    <div className={`w-full h-screen ${bg} ${text} flex flex-col overflow-hidden transition-colors duration-300`}>
      
      {/* Header */}
      <div className={`${bgSecondary} border-b ${border} flex-shrink-0`}>
        <div className="w-full px-6 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-playfair">Programs</h1>
            <p className={`${textSecondary} text-xs font-playfair`}>Choose your training path</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full px-6 py-4">

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search size={18} className={`absolute left-3 top-3 ${textSecondary}`} />
              <input
                type="text"
                placeholder="Search programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 font-playfair ${bgTertiary} border-[#BFB7B6] border rounded-lg text-sm focus:border-[#47A025] outline-none transition ${text}`}
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
            <p className={`text-sm font-bold font-playfair ${textSecondary} mb-3`}>Category</p>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg font-bold font-playfair text-sm whitespace-nowrap transition flex-shrink-0 ${
                    selectedCategory === cat.id
                      ? `${primaryGreenBg} text-[#100E0E]`
                      : `${bgSecondary} border ${border} ${text} hover:border-[#BFB7B6]`
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div className="mb-8">
            <p className={`text-sm font-bold font-playfair ${textSecondary} mb-3`}>Difficulty Level</p>
            <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
              {levels.map(lvl => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`px-4 py-2 rounded-lg font-bold font-playfair text-sm whitespace-nowrap transition flex-shrink-0 ${
                    selectedLevel === lvl.id
                      ? `${primaryGreenBg} text-[#100E0E]`
                      : `${bgSecondary} border ${border} ${text} hover:border-[#BFB7B6]`
                  }`}
                >
                  {lvl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Programs by Category - Horizontal Scroll */}
          <div className="space-y-6 pb-8">
            {categories.filter(c => c.id === selectedCategory).map(cat => {
              const categoryPrograms = filteredPrograms.filter(p => p.category === cat.id);
              
              return (
                <div key={cat.id}>
                  <h2 className={`text-xl font-bold font-playfair ${text} mb-3`}>{cat.label} Programs</h2>
                  <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
                    {categoryPrograms.map(program => (
                      <div
                        key={program.id}
                        className={`${bgSecondary} border ${border} rounded-xl overflow-hidden hover:border-[#47A025] transition flex-shrink-0 w-72`}
                      >
                        {/* Video Space */}
                        <div className={`w-full h-40 ${bgTertiary} border-b ${border} flex items-center justify-center`}>
                          <div className="text-center">
                            <PlayCircle size={40} className={`${primaryGreen} mx-auto mb-2 opacity-50`} />
                            <p className={`text-xs font-playfair ${textSecondary}`}>Video Tutorial</p>
                          </div>
                        </div>

                        {/* Program Header */}
                        <div className="p-3 border-b border-inherit">
                          <h3 className="text-base font-bold font-playfair">{program.title}</h3>
                          <p className={`text-xs font-playfair ${textSecondary} mt-1 line-clamp-2`}>{program.description}</p>

                          {/* Tags */}
                          <div className="flex gap-2 mt-2">
                            <span className={`text-xs font-playfair ${primaryGreenBg} bg-opacity-20 ${primaryGreen} px-2 py-1 rounded-full font-bold`}>
                              {program.level}
                            </span>
                          </div>
                        </div>

                        {/* Program Stats */}
                        <div className="p-3 grid grid-cols-2 gap-3 border-b border-inherit">
                          <div className="flex items-center gap-1">
                            <Star size={14} className={primaryGreen} />
                            <div>
                              <p className={`text-xs font-playfair ${textSecondary}`}>Rating</p>
                              <p className={`font-bold font-playfair text-xs ${primaryGreen}`}>{program.rating}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={14} className={textSecondary} />
                            <div>
                              <p className={`text-xs font-playfair ${textSecondary}`}>Users</p>
                              <p className="font-bold font-playfair text-xs">{(program.enrolled / 1000).toFixed(1)}k</p>
                            </div>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        {program.status === 'ongoing' && (
                          <div className="px-3 py-2 border-b border-inherit">
                            <div className="flex justify-between mb-1">
                              <p className={`text-xs font-bold font-playfair ${text}`}>Progress</p>
                              <p className={`text-xs font-bold font-playfair ${primaryGreen}`}>{program.progress}%</p>
                            </div>
                            <div className={`w-full h-1.5 rounded-full overflow-hidden ${bgTertiary}`}>
                              <div
                                className={`h-full ${primaryGreenBg} transition-all duration-300`}
                                style={{ width: `${program.progress}%` }}
                              />
                            </div>
                          </div>
                        )}

                        {/* Action Button */}
                        <div className="p-3">
                          <button
                            onClick={() => {
                              setSelectedProgram(program);
                              setShowModal(true);
                            }}
                            className={`w-full flex items-center justify-center gap-2 py-2 rounded-lg font-bold font-playfair text-sm transition ${primaryGreenBg} ${primaryGreenHover} text-[#100E0E]`}
                          >
                            <PlayCircle size={14} />
                            {program.status === 'ongoing' ? 'Continue' : 'Start'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {categoryPrograms.length === 0 && (
                    <p className={`${textSecondary} font-playfair text-sm`}>No programs in this category</p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Modal - Continue Training */}
      {showModal && selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className={`${bgSecondary} border ${border} rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto`}>
            {/* Modal Header */}
            <div className={`sticky top-0 ${bgSecondary} border-b ${border} px-6 py-4 flex justify-between items-center`}>
              <h2 className="text-2xl font-bold font-playfair">{selectedProgram.title}</h2>
              <button
                onClick={() => setShowModal(false)}
                className={`text-2xl font-playfair ${textSecondary} hover:text-white transition`}
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="px-6 py-4 space-y-4">
              {/* Video Area */}
              <div className={`w-full h-48 ${bgTertiary} rounded-lg border ${border} flex items-center justify-center`}>
                <div className="text-center">
                  <PlayCircle size={56} className={`${primaryGreen} mx-auto mb-2 opacity-50`} />
                  <p className={`font-playfair ${textSecondary}`}>Workout Video</p>
                </div>
              </div>

              {/* Program Info */}
              <div>
                <p className={`${textSecondary} text-sm font-playfair mb-2`}>{selectedProgram.description}</p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className={`${bgSecondary} border ${border} p-3 rounded-lg text-center`}>
                  <p className={`text-xs font-playfair ${textSecondary}`}>Sessions</p>
                  <p className="font-bold font-playfair text-lg">{selectedProgram.sessions}</p>
                </div>
                <div className={`${bgSecondary} border ${border} p-3 rounded-lg text-center`}>
                  <p className={`text-xs font-playfair ${textSecondary}`}>Duration</p>
                  <p className="font-bold font-playfair text-lg">{selectedProgram.duration}</p>
                </div>
                <div className={`${bgSecondary} border ${border} p-3 rounded-lg text-center`}>
                  <p className={`text-xs font-playfair ${textSecondary}`}>Difficulty</p>
                  <p className={`font-bold font-playfair text-lg ${primaryGreen}`}>{selectedProgram.level}</p>
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="font-bold font-playfair mb-2">Program Highlights</h3>
                <div className="space-y-2">
                  {selectedProgram.highlights.map((h, idx) => (
                    <div key={idx} className={`${bgSecondary} border ${border} p-2 rounded text-sm`}>
                      <p className="font-playfair"><span className={primaryGreen}>Week {h.week}:</span> {h.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-bold font-playfair mb-2">Features</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProgram.features.map((f, idx) => (
                    <span key={idx} className={`text-xs font-playfair ${primaryGreenBg} bg-opacity-20 ${primaryGreen} px-3 py-1 rounded-full`}>
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-inherit">
                <button
                  onClick={() => setShowModal(false)}
                  className={`flex-1 py-3 rounded-lg font-bold font-playfair transition ${bgSecondary} border ${border} hover:border-[#BFB7B6]`}
                >
                  Cancel
                </button>
                <button
                  className={`flex-1 py-3 rounded-lg font-bold font-playfair ${primaryGreenBg} ${primaryGreenHover} text-[#100E0E] transition`}
                >
                  {selectedProgram.status === 'ongoing' ? 'Resume Training' : 'Start Now'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}