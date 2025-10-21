// src/components/Challenges.jsx

import React, { useState } from 'react';
import { Users, Trophy, Flame, Target, Calendar, Award, Check, Lock } from 'lucide-react';

export default function Challenges({ user }) {
  const [activeTab, setActiveTab] = useState('active');
  const [joinedChallenges, setJoinedChallenges] = useState([1, 3]);

  const challenges = [
    {
      id: 1,
      name: '100 Push-ups Challenge',
      description: 'Complete 100 push-ups within 7 days',
      participants: 1234,
      goal: 100,
      progress: 45,
      duration: '7 days',
      difficulty: 'Hard',
      reward: '🔥 Hot Warrior Badge',
      daysLeft: 3,
      joined: true,
      icon: '💪',
      status: 'active'
    },
    {
      id: 2,
      name: 'Plank Master',
      description: 'Achieve 5 minutes plank hold',
      participants: 876,
      goal: 300,
      progress: 120,
      duration: '14 days',
      difficulty: 'Hard',
      reward: '🏆 Endurance Champion',
      daysLeft: 10,
      joined: false,
      icon: '📏',
      status: 'active'
    },
    {
      id: 3,
      name: 'Daily Consistency',
      description: 'Work out 7 days straight',
      participants: 2456,
      goal: 7,
      progress: 5,
      duration: '7 days',
      difficulty: 'Medium',
      reward: '⭐ Consistency Star',
      daysLeft: 2,
      joined: true,
      icon: '🔥',
      status: 'active'
    },
    {
      id: 4,
      name: 'Pull-up Progression',
      description: 'Increase your max pull-ups by 5',
      participants: 654,
      goal: 5,
      progress: 2,
      duration: '30 days',
      difficulty: 'Medium',
      reward: '💪 Strength Master',
      daysLeft: 25,
      joined: false,
      icon: '🦾',
      status: 'active'
    },
    {
      id: 5,
      name: 'Friends Battle: Push-ups',
      description: 'Compete with friends in 100 push-ups',
      participants: 5,
      goal: 100,
      progress: 0,
      duration: '3 days',
      difficulty: 'Hard',
      reward: '👑 Victory Crown',
      daysLeft: 1,
      joined: false,
      icon: '⚔️',
      status: 'active',
      isFriends: true
    },
    {
      id: 6,
      name: 'Completed: Squat King',
      description: '300 squats in 7 days',
      participants: 3421,
      goal: 300,
      progress: 300,
      duration: '7 days',
      difficulty: 'Medium',
      reward: '👑 Squat King',
      daysLeft: 0,
      joined: true,
      icon: '🦵',
      status: 'completed'
    }
  ];

  const activeChallenges = challenges.filter(c => c.status === 'active');
  const completedChallenges = challenges.filter(c => c.status === 'completed');

  const toggleChallenge = (id) => {
    if (joinedChallenges.includes(id)) {
      setJoinedChallenges(joinedChallenges.filter(cid => cid !== id));
    } else {
      setJoinedChallenges([...joinedChallenges, id]);
    }
  };

  const renderChallenge = (challenge) => {
    const isJoined = joinedChallenges.includes(challenge.id);
    const percentage = (challenge.progress / challenge.goal) * 100;

    return (
      <div
        key={challenge.id}
        className="bg-dark-secondary border border-metallic border-opacity-30 rounded-xl p-4 hover:border-accent hover:border-opacity-50 transition"
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            <span className="text-4xl">{challenge.icon}</span>
            <div className="flex-1">
              <h3 className="font-bold text-lg">{challenge.name}</h3>
              <p className="text-metallic text-xs">{challenge.description}</p>
            </div>
          </div>
          {isJoined && <Check size={20} className="text-accent flex-shrink-0" />}
        </div>

        {/* Difficulty and Days */}
        <div className="flex gap-2 mb-3">
          <span className={`text-xs font-bold px-2 py-1 rounded ${
            challenge.difficulty === 'Easy' ? 'bg-green-500 bg-opacity-20 text-green-400' :
            challenge.difficulty === 'Medium' ? 'bg-yellow-500 bg-opacity-20 text-yellow-400' :
            'bg-red-500 bg-opacity-20 text-red-400'
          }`}>
            {challenge.difficulty}
          </span>
          <span className="text-xs font-bold px-2 py-1 rounded bg-accent bg-opacity-20 text-accent">
            ⏱️ {challenge.daysLeft} days left
          </span>
          <span className="text-xs font-bold px-2 py-1 rounded bg-metallic bg-opacity-20 text-metallic">
            👥 {challenge.participants}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex justify-between mb-1 text-xs">
            <span className="font-bold">Progress</span>
            <span className="text-accent">{challenge.progress} / {challenge.goal}</span>
          </div>
          <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-accent to-green-400 rounded-full transition-all"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        </div>

        {/* Reward */}
        <div className="mb-4 p-2 bg-dark rounded-lg flex items-center gap-2">
          <Trophy size={16} className="text-yellow-400" />
          <span className="text-sm font-bold">{challenge.reward}</span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => toggleChallenge(challenge.id)}
          className={`w-full font-bold py-3 rounded-lg transition ${
            isJoined
              ? 'bg-dark-secondary border border-accent border-opacity-50 text-accent hover:bg-dark'
              : 'bg-accent hover:bg-green-400 text-dark'
          }`}
        >
          {isJoined ? '✓ Joined' : 'Join Challenge'}
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark-secondary border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">Challenges</h1>
          <p className="text-metallic text-sm">Join the community and compete</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        {/* Tabs */}
        <div className="flex gap-2 mt-6 mb-6">
          <button
            onClick={() => setActiveTab('active')}
            className={`flex-1 py-3 rounded-lg font-bold transition ${
              activeTab === 'active'
                ? 'bg-accent text-dark'
                : 'bg-dark-secondary border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 py-3 rounded-lg font-bold transition ${
              activeTab === 'completed'
                ? 'bg-accent text-dark'
                : 'bg-dark-secondary border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 text-center">
            <Trophy size={20} className="mx-auto mb-1 text-yellow-400" />
            <p className="text-2xl font-bold">6</p>
            <p className="text-metallic text-xs">Completed</p>
          </div>
          <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 text-center">
            <Flame size={20} className="mx-auto mb-1 text-red-400" />
            <p className="text-2xl font-bold">3</p>
            <p className="text-metallic text-xs">Active</p>
          </div>
          <div className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 text-center">
            <Users size={20} className="mx-auto mb-1 text-accent" />
            <p className="text-2xl font-bold">8</p>
            <p className="text-metallic text-xs">Friends</p>
          </div>
        </div>

        {/* Create Challenge */}
        <div className="bg-gradient-to-r from-accent to-green-400 rounded-lg p-4 mb-6 text-dark">
          <h3 className="font-bold text-lg mb-1">Create a Challenge</h3>
          <p className="text-sm opacity-90 mb-3">Challenge your friends to stay motivated</p>
          <button className="w-full bg-dark hover:bg-dark-secondary font-bold py-2 rounded-lg transition text-sm">
            Start Challenge
          </button>
        </div>

        {/* Challenges List */}
        <div className="space-y-4 mb-6">
          {(activeTab === 'active' ? activeChallenges : completedChallenges).map(renderChallenge)}
        </div>

        {(activeTab === 'active' ? activeChallenges : completedChallenges).length === 0 && (
          <div className="text-center py-12">
            <p className="text-4xl mb-2">😴</p>
            <p className="text-metallic">No challenges here yet</p>
          </div>
        )}
      </div>
    </div>
  );
}