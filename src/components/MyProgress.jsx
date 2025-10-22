import React, { useState, useEffect } from 'react';
import { TrendingUp, Download, Calendar, Activity, Target, Zap, Award, Filter, LineChart, BarChart3, Flame, Trophy, Calendar as CalendarIcon } from 'lucide-react';

export default function MyProgress() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
      .font-playfair { font-family: 'Playfair Display', serif; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const bg = 'bg-[#100E0E]';
  const bgSecondary = 'bg-[#1a1817]';
  const bgTertiary = 'bg-[#242220]';
  const text = 'text-white';
  const textSecondary = 'text-[#BFB7B6]';
  const border = 'border-[#BFB7B6]';
  const primaryGreen = 'text-[#47A025]';
  const primaryGreenBg = 'bg-[#47A025]';

  const [timeRange, setTimeRange] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('workouts');

  // Top Stats Cards
  const stats = [
    { label: 'Total Workouts', value: '24', change: '+3', icon: Activity, subtext: 'this week' },
    { label: 'Total Hours', value: '18.5h', change: '+2h', icon: Zap, subtext: 'this week' },
    { label: 'Calories Burned', value: '6,240', change: '+450', icon: Flame, subtext: 'this month' },
    { label: 'Current Streak', value: '7 days', change: '+2', icon: Trophy, subtext: 'keep going!' }
  ];

  // Weekly Chart Data
  const weekData = [
    { day: 'Mon', workouts: 1, duration: 45, calories: 320, filled: true },
    { day: 'Tue', workouts: 1, duration: 55, calories: 380, filled: true },
    { day: 'Wed', workouts: 0, duration: 0, calories: 0, filled: false },
    { day: 'Thu', workouts: 1, duration: 50, calories: 350, filled: true },
    { day: 'Fri', workouts: 1, duration: 60, calories: 420, filled: true },
    { day: 'Sat', workouts: 2, duration: 90, calories: 580, filled: true },
    { day: 'Sun', workouts: 1, duration: 45, calories: 310, filled: true }
  ];

  const maxDuration = Math.max(...weekData.map(d => d.duration), 100);

  // Exercise Progress (Personal Records)
  const exerciseProgress = [
    { name: 'Push-ups', current: 45, pr: 50, progress: 90, unit: 'reps', trend: '+15 this month', lastUpdated: '2 days ago' },
    { name: 'Pull-ups', current: 12, pr: 15, progress: 80, unit: 'reps', trend: '+5 this month', lastUpdated: '3 days ago' },
    { name: 'Plank Hold', current: 120, pr: 180, progress: 67, unit: 'seconds', trend: '+45s this month', lastUpdated: '1 day ago' },
    { name: 'Handstand Hold', current: 30, pr: 60, progress: 50, unit: 'seconds', trend: '+20s this month', lastUpdated: '1 week ago' },
    { name: 'Dips', current: 25, pr: 30, progress: 83, unit: 'reps', trend: '+8 this month', lastUpdated: '4 days ago' },
    { name: 'Squats', current: 60, pr: 80, progress: 75, unit: 'reps', trend: '+12 this month', lastUpdated: '2 days ago' }
  ];

  // Achievements & Badges
  const achievements = [
    { id: 1, name: '7-Day Warrior', icon: '🔥', unlocked: true, date: '2 weeks ago', desc: 'Complete 7 workouts' },
    { id: 2, name: 'Century', icon: '💯', unlocked: true, desc: '100 push-ups', date: '1 week ago' },
    { id: 3, name: 'Pull-up Master', icon: '🏋️', unlocked: false, desc: '50 pull-ups' },
    { id: 4, name: 'Planche Warrior', icon: '🤸', unlocked: false, desc: 'Hold 60s' },
    { id: 5, name: 'Handstand Pro', icon: '🤲', unlocked: true, desc: 'Hold 60s', date: '3 days ago' },
    { id: 6, name: 'Consistency King', icon: '👑', unlocked: false, desc: '30-day streak' }
  ];

  // Monthly Overview
  const monthlyData = [
    { week: 'Week 1', workouts: 3, hours: 3.5, calories: 1200 },
    { week: 'Week 2', workouts: 4, hours: 4.2, calories: 1500 },
    { week: 'Week 3', workouts: 5, hours: 4.8, calories: 1650 },
    { week: 'Week 4', workouts: 4, hours: 4.0, calories: 1400 }
  ];

  return (
    <div className={`w-full h-screen ${bg} ${text} flex flex-col overflow-hidden`}>
      
      {/* Header */}
      <div className={`${bgSecondary} border-b ${border} flex-shrink-0`}>
        <div className="w-full px-6 py-3">
          <h1 className="text-3xl font-bold font-playfair">My Progress</h1>
          <p className={`${textSecondary} text-xs font-playfair`}>Track your fitness journey</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full px-6 py-4 space-y-6 pb-8">

          {/* Time Range Filter */}
          <div className="flex gap-2">
            {['week', 'month', 'year'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-bold font-playfair text-sm transition ${
                  timeRange === range
                    ? `${primaryGreenBg} text-[#100E0E]`
                    : `${bgSecondary} border ${border} ${text} hover:border-[#47A025]`
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>

          {/* Key Stats - Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`${bgSecondary} border ${border} rounded-xl p-4`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className={`text-xs font-playfair ${textSecondary}`}>{stat.label}</p>
                      <p className="text-2xl font-bold font-playfair mt-1">{stat.value}</p>
                    </div>
                    <Icon size={20} className={primaryGreen} />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className={`text-xs font-playfair ${textSecondary}`}>{stat.subtext}</p>
                    <p className={`text-xs font-bold ${primaryGreen}`}>{stat.change}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Weekly Activity Chart */}
          <div className={`${bgSecondary} border ${border} rounded-xl p-4`}>
            <h3 className="font-bold font-playfair mb-4">Weekly Activity</h3>
            <div className="flex items-end justify-around h-32 gap-2">
              {weekData.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2 flex-1">
                  <div className={`w-full rounded-t-lg transition ${day.filled ? primaryGreenBg : bgTertiary}`} 
                       style={{ height: day.duration ? `${(day.duration / maxDuration) * 100}%` : '10%', minHeight: '8px' }} />
                  <p className={`text-xs font-playfair ${day.filled ? text : textSecondary}`}>{day.day}</p>
                  <p className={`text-xs font-bold ${primaryGreen}`}>{day.duration}m</p>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Overview */}
          <div className={`${bgSecondary} border ${border} rounded-xl p-4`}>
            <h3 className="font-bold font-playfair mb-4">Monthly Overview</h3>
            <div className="space-y-3">
              {monthlyData.map((week, idx) => (
                <div key={idx} className={`${bgTertiary} border ${border} rounded-lg p-3`}>
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-bold font-playfair text-sm">{week.week}</p>
                    <div className="flex gap-3 text-xs font-bold">
                      <span className={primaryGreen}>{week.workouts} WO</span>
                      <span className="text-blue-400">{week.hours}h</span>
                      <span className="text-red-400">{week.calories} cal</span>
                    </div>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden ${bgTertiary}`}>
                    <div
                      className={`h-full ${primaryGreenBg} rounded-full`}
                      style={{ width: `${(week.workouts / 5) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Exercise Progress / Personal Records */}
          <div>
            <h3 className="font-bold font-playfair mb-4 flex items-center gap-2">
              <Award size={18} className={primaryGreen} />
              Exercise Progress
            </h3>
            <div className="space-y-3">
              {exerciseProgress.map((ex, idx) => (
                <div key={idx} className={`${bgSecondary} border ${border} rounded-lg p-3 hover:border-[#47A025] transition cursor-pointer`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold font-playfair text-sm">{ex.name}</h4>
                    <span className={`${primaryGreen} text-sm font-bold`}>{ex.current} {ex.unit}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className={`w-full h-2 rounded-full overflow-hidden ${bgTertiary} mb-2`}>
                    <div
                      className={`h-full ${primaryGreenBg} rounded-full transition-all`}
                      style={{ width: `${ex.progress}%` }}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex justify-between items-center">
                    <p className={`text-xs font-playfair ${textSecondary}`}>PR: {ex.pr} {ex.unit}</p>
                    <div className="flex flex-col items-end gap-0.5">
                      <p className={`text-xs font-bold ${primaryGreen}`}>{ex.trend}</p>
                      <p className={`text-xs ${textSecondary}`}>{ex.lastUpdated}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Badges & Achievements */}
          <div>
            <h3 className="font-bold font-playfair mb-4">Badges & Achievements</h3>
            <div className="grid grid-cols-3 gap-3">
              {achievements.map((badge, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition ${
                    badge.unlocked
                      ? `${bgSecondary} border-[#47A025] cursor-pointer hover:border-opacity-100`
                      : `${bgTertiary} border ${border} opacity-50`
                  }`}
                >
                  <span className="text-3xl">{badge.icon}</span>
                  <p className="text-xs text-center font-bold font-playfair line-clamp-2">{badge.name}</p>
                  {badge.unlocked && badge.date && (
                    <p className={`text-xs font-playfair ${textSecondary}`}>{badge.date}</p>
                  )}
                  {!badge.unlocked && (
                    <p className={`text-xs text-center font-playfair ${textSecondary}`}>{badge.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Motivational CTA */}
          <div className={`${primaryGreenBg} rounded-xl p-6 text-[#100E0E] text-center`}>
            <p className="text-3xl mb-2">🎯</p>
            <h3 className="font-bold font-playfair text-lg mb-2">Keep It Going!</h3>
            <p className="text-sm opacity-90 mb-4">You're making amazing progress. Stay consistent!</p>
            <button className={`${bgTertiary} hover:bg-[#2d6015] text-[#47A025] font-bold font-playfair px-6 py-2 rounded-lg transition text-sm`}>
              View Goals
            </button>
          </div>

          {/* Download Report Button */}
          <div>
            <button className={`w-full ${primaryGreenBg} hover:bg-[#2d6015] text-[#100E0E] font-bold font-playfair py-4 rounded-lg transition flex items-center justify-center gap-2`}>
              <Download size={18} />
              Download Progress Report
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}