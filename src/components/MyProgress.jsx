// src/components/MyProgress.jsx

import React, { useState } from 'react';
import { TrendingUp, Download, Calendar, Activity, Target, Zap } from 'lucide-react';

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

  const bodyProgress = [
    { metric: 'Weight', value: '72 kg', change: '-3 kg', unit: 'kg', target: '68 kg', progress: 75 },
    { metric: 'Body Fat', value: '18%', change: '-2%', unit: '%', target: '12%', progress: 50 },
    { metric: 'Muscle Mass', value: '62 kg', change: '+2 kg', unit: 'kg', target: '68 kg', progress: 65 }
  ];

  const maxValue = Math.max(...weekData.map(d => d.duration));

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white pb-20">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold tracking-wider mb-4">My Progress</h1>
          
          {/* Time Range Tabs */}
          <div className="flex gap-2 mb-4">
            {['week', 'month', 'year'].map(range => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  timeRange === range
                    ? 'bg-accent text-dark'
                    : 'bg-dark-secondary border border-metallic border-opacity-30 text-metallic hover:text-metallic-light'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>

          {/* Export Button */}
          <button className="w-full bg-dark-secondary border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50 rounded-lg py-2 flex items-center justify-center gap-2 transition-colors">
            <Download size={18} />
            Export Report
          </button>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-6">
        
        {/* Key Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((stat, idx) => {
            const Icon = typeof stat.icon === 'string' ? null : stat.icon;
            return (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  {Icon ? <Icon size={20} className={stat.color} /> : <span className="text-2xl">{stat.icon}</span>}
                  <span className="text-accent text-xs font-bold">{stat.change}</span>
                </div>
                <p className="text-metallic text-xs mb-1">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Weekly Activity Chart */}
        <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 mb-6">
          <h3 className="font-bold mb-4">Weekly Activity</h3>
          <div className="flex items-end justify-around gap-2 h-40">
            {weekData.map((day, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                <div className="relative w-full group">
                  <div
                    className="w-full bg-gradient-to-t from-accent to-green-300 rounded-t-lg transition-all duration-300 hover:from-green-300 hover:to-green-200"
                    style={{ height: `${(day.duration / maxValue) * 120 || 4}px` }}
                  />
                  {day.workouts > 0 && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark px-2 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
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

        {/* Exercise PRs */}
        <div className="mb-6">
          <h3 className="font-bold mb-4">Exercise Progress</h3>
          <div className="space-y-3">
            {progressExercises.map((ex, idx) => (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold">{ex.name}</h4>
                  <span className="text-accent text-sm font-bold">{ex.current} {ex.unit}</span>
                </div>
                <div className="mb-2">
                  <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{ width: `${ex.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-metallic text-xs">Goal: {ex.personal} {ex.unit}</p>
                  <p className="text-green-400 text-xs font-semibold">{ex.trend}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Body Metrics */}
        <div className="mb-6">
          <h3 className="font-bold mb-4">Body Metrics</h3>
          <div className="space-y-3">
            {bodyProgress.map((metric, idx) => (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-metallic text-xs mb-1">{metric.metric}</p>
                    <p className="font-bold text-lg">{metric.value}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-bold ${metric.change.startsWith('-') ? 'text-red-400' : 'text-green-400'}`}>
                      {metric.change}
                    </p>
                    <p className="text-metallic text-xs">Target: {metric.target}</p>
                  </div>
                </div>
                <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all"
                    style={{ width: `${metric.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-6">
          <h3 className="font-bold mb-4">Achievements</h3>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map(achievement => (
              <div
                key={achievement.id}
                className={`rounded-lg p-4 text-center transition-all ${
                  achievement.unlocked
                    ? 'bg-dark-secondary border border-accent border-opacity-50'
                    : 'bg-dark-secondary border border-metallic border-opacity-20 opacity-50'
                }`}
              >
                <p className="text-3xl mb-2">{achievement.icon}</p>
                <p className="text-xs font-bold mb-1">{achievement.name}</p>
                {achievement.unlocked && achievement.date && (
                  <p className="text-metallic text-xs">{achievement.date}</p>
                )}
                {!achievement.unlocked && (
                  <p className="text-metallic text-xs">{achievement.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}