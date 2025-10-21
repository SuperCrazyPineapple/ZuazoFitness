// src/components/MyProgress.jsx

import React, { useState } from 'react';
import { TrendingUp, Download, Calendar, Activity, Target, Zap, Award, Filter } from 'lucide-react';

export default function MyProgress({ user }) {
  const [timeRange, setTimeRange] = useState('week');

  const stats = [
    { label: 'Total Workouts', value: '24', change: '+3', icon: Activity, color: 'text-accent' },
    { label: 'Total Hours', value: '18.5h', change: '+2h', icon: Zap, color: 'text-cyan-400' },
    { label: 'Calories Burned', value: '6,240', change: '+450', icon: '🔥', color: 'text-red-400' },
    { label: 'Current Streak', value: '7 days', change: '+2', icon: Target, color: 'text-yellow-400' }
  ];

  const weekData = [
    { day: 'Mon', workouts: 1, duration: 45, calories: 320 },
    { day: 'Tue', workouts: 1, duration: 55, calories: 380 },
    { day: 'Wed', workouts: 0, duration: 0, calories: 0 },
    { day: 'Thu', workouts: 1, duration: 50, calories: 350 },
    { day: 'Fri', workouts: 1, duration: 60, calories: 420 },
    { day: 'Sat', workouts: 2, duration: 90, calories: 580 },
    { day: 'Sun', workouts: 1, duration: 45, calories: 310 }
  ];

  const maxValue = Math.max(...weekData.map(d => d.duration)) || 60;

  const progressExercises = [
    {
      name: 'Push-ups',
      current: 45,
      personal: 50,
      progress: 90,
      unit: 'reps',
      trend: '+15 this month'
    },
    {
      name: 'Pull-ups',
      current: 12,
      personal: 15,
      progress: 80,
      unit: 'reps',
      trend: '+5 this month'
    },
    {
      name: 'Plank Hold',
      current: 120,
      personal: 180,
      progress: 67,
      unit: 'seconds',
      trend: '+45s this month'
    },
    {
      name: 'Handstand Hold',
      current: 30,
      personal: 60,
      progress: 50,
      unit: 'seconds',
      trend: '+20s this month'
    },
    {
      name: 'Dips',
      current: 25,
      personal: 30,
      progress: 83,
      unit: 'reps',
      trend: '+8 this month'
    },
    {
      name: 'Squats',
      current: 60,
      personal: 80,
      progress: 75,
      unit: 'reps',
      trend: '+12 this month'
    }
  ];

  const achievements = [
    { id: 1, name: '7-Day Warrior', icon: '🔥', unlocked: true, date: '2 weeks ago' },
    { id: 2, name: 'Century', icon: '💯', unlocked: true, description: '100 push-ups', date: '1 week ago' },
    { id: 3, name: 'Pull-up Master', icon: '🏋️', unlocked: false, description: '50 pull-ups' },
    { id: 4, name: 'Planche Warrior', icon: '🤸', unlocked: false, description: 'Hold 60s' },
    { id: 5, name: 'Handstand Pro', icon: '🤲', unlocked: true, description: 'Hold 60s', date: '3 days ago' },
    { id: 6, name: 'Consistency King', icon: '👑', unlocked: false, description: '30-day streak' }
  ];

  const monthlyData = [
    { week: 'Week 1', workouts: 3, hours: 3.5, calories: 1200 },
    { week: 'Week 2', workouts: 4, hours: 4.2, calories: 1500 },
    { week: 'Week 3', workouts: 5, hours: 5.1, calories: 1820 },
    { week: 'Week 4', workouts: 5, hours: 4.8, calories: 1720 }
  ];

  const bodyMetrics = [
    { label: 'Weight', value: '75 kg', change: '-2 kg', icon: '⚖️', color: 'text-green-400' },
    { label: 'BMI', value: '23.1', change: '-0.5', icon: '📏', color: 'text-green-400' },
    { label: 'Body Fat', value: '16%', change: '-2%', icon: '📊', color: 'text-yellow-400' },
    { label: 'Muscle Mass', value: '58 kg', change: '+1.2 kg', icon: '💪', color: 'text-accent' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-poppins text-white pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark-secondary border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">My Progress</h1>
          <p className="text-metallic text-sm">Track your fitness journey</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        {/* Time Range Filter */}
        <div className="flex gap-2 mt-6 mb-6 overflow-x-auto pb-2">
          {['week', 'month', 'year'].map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-bold text-sm transition ${
                timeRange === range
                  ? 'bg-accent text-dark'
                  : 'bg-dark-secondary border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((stat, idx) => {
            const Icon = typeof stat.icon === 'string' ? null : stat.icon;
            return (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  {Icon ? (
                    <Icon size={20} className={stat.color} />
                  ) : (
                    <span className="text-2xl">{stat.icon}</span>
                  )}
                  <span className="text-accent text-xs font-bold">{stat.change}</span>
                </div>
                <p className="text-metallic text-xs mb-1 font-bold">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Body Metrics */}
        <div className="mb-6">
          <h3 className="font-bold mb-3 flex items-center gap-2">
            <TrendingUp size={18} className="text-accent" />
            Body Metrics
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {bodyMetrics.map((metric, idx) => (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-2xl">{metric.icon}</span>
                  <span className={`text-xs font-bold ${metric.color}`}>{metric.change}</span>
                </div>
                <p className="text-metallic text-xs mb-1">{metric.label}</p>
                <p className="text-lg font-bold">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Weekly Activity</h3>
            <Filter size={16} className="text-metallic" />
          </div>
          <div className="flex items-end justify-around gap-2 h-40">
            {weekData.map((day, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                <div className="relative w-full group">
                  <div
                    className="w-full bg-gradient-to-t from-accent to-green-300 rounded-t-lg transition-all duration-300 hover:from-green-300 hover:to-green-200 cursor-pointer"
                    style={{ height: `${(day.duration / maxValue) * 120 || 4}px` }}
                  />
                  {day.workouts > 0 && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark px-2 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 border border-metallic border-opacity-30">
                      {day.duration}m
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="text-metallic text-xs font-semibold">{day.day}</p>
                  <p className="text-metallic text-xs">{day.workouts}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Overview */}
        <div className="mb-6">
          <h3 className="font-bold mb-3">Monthly Overview</h3>
          <div className="space-y-2">
            {monthlyData.map((week, idx) => (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-sm">{week.week}</p>
                  <div className="flex gap-4 text-xs font-bold">
                    <span className="text-accent">{week.workouts} WO</span>
                    <span className="text-blue-400">{week.hours}h</span>
                    <span className="text-red-400">{week.calories} cal</span>
                  </div>
                </div>
                <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent to-green-400 rounded-full"
                    style={{ width: `${(week.workouts / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exercise PRs */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold flex items-center gap-2">
              <Award size={18} className="text-accent" />
              Exercise Progress
            </h3>
            <button className="text-accent text-xs hover:text-green-300 font-bold">View All</button>
          </div>
          <div className="space-y-3">
            {progressExercises.map((ex, idx) => (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 hover:border-accent hover:border-opacity-50 transition cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">{ex.name}</h4>
                  <span className="text-accent text-sm font-bold">{ex.current} {ex.unit}</span>
                </div>
                <div className="mb-2">
                  <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-green-400 rounded-full transition-all"
                      style={{ width: `${ex.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex justify-between text-xs">
                  <p className="text-metallic">PR: {ex.personal} {ex.unit}</p>
                  <p className="text-green-400 font-bold">{ex.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="font-bold mb-3">Badges & Achievements</h3>
          <div className="grid grid-cols-3 gap-2">
            {achievements.map((badge, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition ${
                  badge.unlocked
                    ? 'bg-dark-secondary border-accent border-opacity-50 cursor-pointer hover:border-opacity-100'
                    : 'bg-dark border-metallic border-opacity-30 opacity-50'
                }`}
              >
                <span className="text-3xl">{badge.icon}</span>
                <p className="text-xs text-center font-bold line-clamp-2">{badge.name}</p>
                {badge.unlocked && badge.date && (
                  <p className="text-metallic text-xs">{badge.date}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Download Report */}
        <div className="mb-6">
          <button className="w-full bg-accent hover:bg-green-400 text-dark font-bold py-4 rounded-lg transition flex items-center justify-center gap-2">
            <Download size={18} />
            Download Progress Report
          </button>
        </div>

        {/* Motivational Section */}
        <div className="bg-gradient-to-r from-accent to-green-400 rounded-lg p-6 text-dark text-center mb-6">
          <p className="text-4xl mb-2">🎯</p>
          <h3 className="font-bold text-lg mb-1">Keep It Going!</h3>
          <p className="text-sm opacity-90 mb-3">You're making amazing progress. Stay consistent!</p>
          <button className="bg-dark hover:bg-dark-secondary text-accent font-bold px-6 py-2 rounded-lg transition text-sm">
            View Goals
          </button>
        </div>
      </div>
    </div>
  );
}