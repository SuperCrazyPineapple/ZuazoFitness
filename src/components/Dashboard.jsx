// src/components/Dashboard.jsx

import React, { useState } from 'react';
import {
  Flame,
  Zap,
  Heart,
  TrendingUp,
  Trophy,
  Clock,
  Target,
  ChevronRight,
  Bell,
  Settings,
  Play,
  Calendar,
  Activity,
  Droplet,
  Moon,
  AlertCircle
} from 'lucide-react';

export default function Dashboard({ user }) {
  const [selectedDay, setSelectedDay] = useState(0);

  // Workout of the day data
  const workoutOfDay = {
    title: 'Full Body Power',
    duration: 45,
    level: 'All Levels',
    difficulty: 'Advanced',
    exercises: 8,
    calories: 350
  };

  // Week data
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const workoutDays = [3, 5, 4, 6, 5, 0, 0];

  // Today's objectives
  const todayObjectives = [
    { label: 'Calories', value: 1245, goal: 2000, icon: Flame, color: 'text-red-400' },
    { label: 'Water', value: 6, goal: 8, icon: Droplet, color: 'text-blue-400' },
    { label: 'Sleep', value: 7.5, goal: 8, icon: Moon, color: 'text-purple-400' },
    { label: 'Steps', value: 8432, goal: 10000, icon: Activity, color: 'text-green-400' }
  ];

  // Programs
  const programs = [
    {
      title: 'Push Mastery',
      level: 'Intermediate',
      duration: '8 weeks',
      progress: 35
    },
    {
      title: 'Handstand Academy',
      level: 'Advanced',
      duration: '12 weeks',
      progress: 60
    },
    {
      title: 'Strength Foundation',
      level: 'Beginner',
      duration: '6 weeks',
      progress: 15
    }
  ];

  // Stats
  const stats = [
    { icon: Flame, label: 'Calories', value: '1,245', change: '+245', color: 'text-red-400' },
    { icon: Trophy, label: 'Streak', value: '7 days', change: '+2', color: 'text-accent' },
    { icon: Zap, label: 'Workouts', value: '12', change: '+3', color: 'text-cyan-400' },
    { icon: TrendingUp, label: 'Progress', value: '+5%', change: '+2%', color: 'text-green-400' }
  ];

  // Recent workouts
  const recentWorkouts = [
    { name: 'Chest & Triceps', date: 'Today', duration: 45, intensity: 'High', time: '18:30' },
    { name: 'Back & Biceps', date: 'Yesterday', duration: 50, intensity: 'High', time: '17:00' },
    { name: 'Legs & Core', date: '2 days ago', duration: 55, intensity: 'Medium', time: '16:30' }
  ];

  // Upcoming workouts
  const upcomingWorkouts = [
    { name: 'Push Day', time: 'Today at 18:00', type: 'Scheduled' },
    { name: 'Pull Day', time: 'Tomorrow at 17:30', type: 'Scheduled' },
    { name: 'Leg Day', time: 'Wed at 16:00', type: 'Scheduled' }
  ];

  const renderObjective = (obj) => {
    const Icon = obj.icon;
    const percentage = (obj.value / obj.goal) * 100;
    return (
      <div key={obj.label} className="flex items-center gap-3">
        <div className="flex-shrink-0">
          <Icon size={24} className={obj.color} />
        </div>
        <div className="flex-1">
          <div className="flex justify-between mb-1 text-xs">
            <span className="font-bold">{obj.label}</span>
            <span className="text-metallic">{obj.value} / {obj.goal}</span>
          </div>
          <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${obj.color.replace('text', 'bg')} transition-all`}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-poppins text-white pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark-secondary border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-metallic text-xs font-semibold">WELCOME BACK</p>
            <h1 className="text-2xl font-bold">{user?.name || 'Athlete'}</h1>
          </div>
          <div className="flex gap-3">
            <button className="p-2 hover:bg-dark-secondary rounded-lg transition relative">
              <Bell size={20} className="text-metallic-light" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-dark-secondary rounded-lg transition">
              <Settings size={20} className="text-metallic-light" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto px-6">
        {/* Notification Banner */}
        <div className="mt-6 bg-yellow-500 bg-opacity-20 border border-yellow-500 border-opacity-50 rounded-lg p-3 flex items-start gap-2">
          <AlertCircle size={18} className="text-yellow-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-sm">You're on a 7-day streak! 🔥</p>
            <p className="text-metallic text-xs">Don't miss today's workout to keep it going</p>
          </div>
        </div>

        {/* Workout of the Day */}
        <div className="mt-6 bg-gradient-to-br from-dark-secondary to-dark border-2 border-metallic border-opacity-30 rounded-2xl overflow-hidden hover:border-metallic hover:border-opacity-50 transition-all">
          <div className="aspect-video bg-gradient-to-br from-accent from-10% via-dark-secondary to-dark relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
            </div>
            <div className="relative z-10 text-center">
              <Zap size={56} className="mx-auto mb-3 text-accent" />
              <p className="text-metallic text-sm font-semibold tracking-wider">WORKOUT OF THE DAY</p>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">{workoutOfDay.title}</h3>
                <div className="flex gap-2 text-metallic-light text-xs flex-wrap">
                  <span className="px-2 py-1 bg-accent bg-opacity-20 rounded-full text-accent font-semibold">
                    NEW
                  </span>
                  <span className="px-2 py-1 bg-dark rounded-full">{workoutOfDay.exercises} Exercises</span>
                </div>
              </div>
              <div className="text-right ml-4">
                <p className="text-2xl font-bold text-accent">{workoutOfDay.calories}</p>
                <p className="text-metallic text-xs">Calories</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4 p-3 bg-dark rounded-lg border border-metallic border-opacity-20">
              <div className="text-center">
                <Clock size={18} className="mx-auto mb-1 text-metallic-light" />
                <p className="text-sm font-bold">{workoutOfDay.duration}m</p>
                <p className="text-metallic text-xs">Duration</p>
              </div>
              <div className="text-center">
                <Target size={18} className="mx-auto mb-1 text-metallic-light" />
                <p className="text-sm font-bold">{workoutOfDay.level}</p>
                <p className="text-metallic text-xs">Level</p>
              </div>
              <div className="text-center">
                <Zap size={18} className="mx-auto mb-1 text-accent" />
                <p className="text-sm font-bold text-accent">{workoutOfDay.difficulty}</p>
                <p className="text-metallic text-xs">Intensity</p>
              </div>
            </div>

            <button className="w-full bg-accent hover:bg-green-400 text-dark font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group">
              <Play size={20} />
              START WORKOUT
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Today's Objectives */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-3">Today's Goals</h3>
          <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-xl p-4 space-y-4">
            {todayObjectives.map(renderObjective)}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mt-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-dark-secondary border border-metallic border-opacity-30 rounded-xl p-4 hover:border-metallic hover:border-opacity-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon size={20} className={stat.color} />
                  <span className="text-accent text-xs font-bold">{stat.change}</span>
                </div>
                <p className="text-metallic text-xs mb-1 font-semibold">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
              </div>
            );
          })}
        </div>

        {/* Weekly Activity */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">This Week</h3>
            <button className="text-accent text-xs hover:text-green-300 transition font-semibold">
              View Details
            </button>
          </div>
          <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-xl p-4">
            <div className="flex items-end justify-around gap-2 h-40">
              {weekDays.map((day, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1 flex-1">
                  <div className="relative group w-full flex justify-center">
                    <div
                      className="w-6 bg-gradient-to-t from-accent to-green-300 rounded-t-lg transition-all duration-300 hover:from-green-300 hover:to-green-200 cursor-pointer"
                      style={{ height: `${(workoutDays[idx] / 6) * 120 || 8}px` }}
                    />
                    {workoutDays[idx] > 0 && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-dark-secondary px-2 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 border border-metallic border-opacity-30">
                        {workoutDays[idx]} workouts
                      </div>
                    )}
                  </div>
                  <p className="text-metallic text-xs font-semibold mt-2">{day}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-metallic border-opacity-20">
              <p className="text-metallic text-xs">
                Total: {workoutDays.reduce((a, b) => a + b, 0)} workouts this week
              </p>
            </div>
          </div>
        </div>

        {/* Active Programs */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Active Programs</h3>
            <button className="text-accent text-xs hover:text-green-300 transition font-semibold">
              See all
            </button>
          </div>

          <div className="space-y-3">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="bg-dark-secondary rounded-xl p-4 border border-metallic border-opacity-20 cursor-pointer hover:border-accent hover:border-opacity-50 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-bold text-lg">{program.title}</h4>
                    <p className="text-metallic-light text-sm">{program.level} • {program.duration}</p>
                  </div>
                  <ChevronRight size={20} className="text-metallic-light group-hover:text-accent group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-metallic-light font-semibold">Progress</span>
                    <span className="font-bold text-accent">{program.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-dark bg-opacity-50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${program.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Workouts */}
        <div className="mt-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Upcoming</h3>
            <button className="text-accent text-xs hover:text-green-300 transition font-semibold">
              Schedule
            </button>
          </div>
          <div className="space-y-2">
            {upcomingWorkouts.map((workout, idx) => (
              <div
                key={idx}
                className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 hover:border-metallic hover:border-opacity-50 transition-colors flex items-center gap-3"
              >
                <Calendar size={18} className="text-accent flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-bold text-sm">{workout.name}</p>
                  <p className="text-metallic text-xs">{workout.time}</p>
                </div>
                <ChevronRight size={16} className="text-metallic-light" />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Workouts */}
        <div className="mt-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold">Recent Workouts</h3>
            <button className="text-accent text-xs hover:text-green-300 transition font-semibold">
              View All
            </button>
          </div>
          <div className="space-y-2">
            {recentWorkouts.map((workout, idx) => (
              <div
                key={idx}
                className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-4 flex items-center justify-between hover:border-metallic hover:border-opacity-50 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-accent bg-opacity-20 flex items-center justify-center flex-shrink-0 group-hover:bg-opacity-30 transition">
                    <Activity size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{workout.name}</p>
                    <p className="text-metallic text-xs">
                      {workout.date} • {workout.time}
                    </p>
                  </div>
                </div>
                <div className="text-right ml-2">
                  <p className="text-sm font-bold">{workout.duration}m</p>
                  <p className={`text-xs font-bold ${
                    workout.intensity === 'High'
                      ? 'text-red-400'
                      : workout.intensity === 'Medium'
                      ? 'text-yellow-400'
                      : 'text-green-400'
                  }`}>
                    {workout.intensity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}