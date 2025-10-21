// src/components/Community.jsx

import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Trophy, TrendingUp, Search, Plus } from 'lucide-react';

export default function Community({ user }) {
  const [activeTab, setActiveTab] = useState('feed');
  const [searchQuery, setSearchQuery] = useState('');
  const [likes, setLikes] = useState({});

  const posts = [
    {
      id: 1,
      author: 'Alex Johnson',
      avatar: '👨',
      title: 'Just hit my first handstand hold for 30 seconds!',
      content: 'After 3 months of training, finally achieved this goal 🎉',
      image: '🤸',
      likes: 342,
      comments: 45,
      timestamp: '2h ago',
      difficulty: 'Advanced'
    },
    {
      id: 2,
      author: 'Sarah Chen',
      avatar: '👩',
      title: 'Complete Pull-up Mastery Program',
      content: 'Finished the full program! Here\'s my transformation journey...',
      image: '💪',
      likes: 521,
      comments: 68,
      timestamp: '4h ago',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      author: 'Marcus Williams',
      avatar: '👨',
      title: '7-Day Streak! 🔥',
      content: 'Consistency is key. Never miss a workout!',
      image: '🔥',
      likes: 189,
      comments: 32,
      timestamp: '6h ago',
      difficulty: 'Beginner'
    },
    {
      id: 4,
      author: 'Emma Davis',
      avatar: '👩',
      title: 'Personal Record: 50 Push-ups',
      content: 'New PB achieved today! Feeling strong 💪',
      image: '🏆',
      likes: 456,
      comments: 87,
      timestamp: '8h ago',
      difficulty: 'Intermediate'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Johnson', workouts: 156, streak: 45, level: '🥇' },
    { rank: 2, name: 'Sarah Chen', workouts: 142, streak: 38, level: '🥈' },
    { rank: 3, name: 'Marcus Williams', workouts: 128, streak: 31, level: '🥉' },
    { rank: 4, name: 'Emma Davis', workouts: 115, streak: 27, level: '4' },
    { rank: 5, name: 'John Smith', workouts: 98, streak: 19, level: '5' },
    { rank: 6, name: 'Lisa Park', workouts: 87, streak: 14, level: '6' }
  ];

  const challenges = [
    {
      id: 1,
      title: '100 Push-ups Challenge',
      participants: 1243,
      progress: 65,
      deadline: '5 days left',
      icon: '💪',
      joined: true
    },
    {
      id: 2,
      title: 'Planche Hold Progress',
      participants: 532,
      progress: 42,
      deadline: '12 days left',
      icon: '🤸',
      joined: false
    },
    {
      id: 3,
      title: 'Muscle-up Mastery',
      participants: 876,
      progress: 38,
      deadline: '8 days left',
      icon: '🏋️',
      joined: true
    }
  ];

  const toggleLike = (postId) => {
    setLikes(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold tracking-wider mb-4">Community</h1>
          
          {/* Search Bar */}
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-metallic" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search users..."
                className="w-full bg-dark-secondary border border-metallic border-opacity-30 rounded-lg pl-10 pr-4 py-2 text-sm focus:border-accent outline-none transition-colors"
              />
            </div>
            <button className="bg-accent hover:bg-green-400 text-dark p-2 rounded-lg transition-colors">
              <Plus size={18} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mt-4 border-b border-metallic border-opacity-20">
            {['feed', 'leaderboard', 'challenges'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-4 text-sm font-semibold border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-accent text-accent'
                    : 'border-transparent text-metallic hover:text-metallic-light'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6 py-6 pb-20">
        
        {/* FEED TAB */}
        {activeTab === 'feed' && (
          <div className="space-y-4">
            {posts.map(post => (
              <div key={post.id} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-xl p-4 hover:border-metallic hover:border-opacity-50 transition-colors">
                {/* Author */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{post.avatar}</span>
                    <div>
                      <p className="font-bold text-sm">{post.author}</p>
                      <p className="text-metallic text-xs">{post.timestamp}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                    post.difficulty === 'Beginner' ? 'bg-green-900 text-green-300' :
                    post.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-red-900 text-red-300'
                  }`}>
                    {post.difficulty}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-bold mb-2">{post.title}</h3>
                <p className="text-metallic-light text-sm mb-3">{post.content}</p>

                {/* Image */}
                <div className="text-6xl mb-4 text-center">{post.image}</div>

                {/* Stats */}
                <div className="flex gap-4 mb-3 text-sm text-metallic-light border-t border-b border-metallic border-opacity-20 py-3">
                  <span>❤️ {post.likes} Likes</span>
                  <span>💬 {post.comments} Comments</span>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                      likes[post.id]
                        ? 'bg-red-900 bg-opacity-30 text-red-400'
                        : 'hover:bg-dark border border-metallic border-opacity-20'
                    }`}
                  >
                    <Heart size={16} fill={likes[post.id] ? 'currentColor' : 'none'} />
                    Like
                  </button>
                  <button className="py-2 rounded-lg font-semibold hover:bg-dark border border-metallic border-opacity-20 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle size={16} />
                    Reply
                  </button>
                  <button className="py-2 rounded-lg font-semibold hover:bg-dark border border-metallic border-opacity-20 transition-colors flex items-center justify-center gap-2">
                    <Share2 size={16} />
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* LEADERBOARD TAB */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-3">
            {leaderboard.map((user, idx) => (
              <div key={idx} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-xl p-4 flex items-center justify-between hover:border-metallic hover:border-opacity-50 transition-colors">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-2xl font-bold text-accent">{user.level}</span>
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p className="text-metallic text-xs">{user.workouts} Workouts</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-accent font-bold">🔥 {user.streak}</p>
                  <p className="text-metallic text-xs">day streak</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CHALLENGES TAB */}
        {activeTab === 'challenges' && (
          <div className="space-y-3">
            {challenges.map(challenge => (
              <div key={challenge.id} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-xl p-4 hover:border-metallic hover:border-opacity-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{challenge.icon}</span>
                    <div>
                      <h3 className="font-bold">{challenge.title}</h3>
                      <p className="text-metallic text-xs">{challenge.participants} Participants</p>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-metallic-light">Progress</span>
                    <span className="font-bold">{challenge.progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all"
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <p className="text-metallic text-xs">{challenge.deadline}</p>
                  <button className={`px-3 py-1 rounded-lg text-sm font-semibold transition-colors ${
                    challenge.joined
                      ? 'bg-accent text-dark hover:bg-green-400'
                      : 'border border-accent text-accent hover:bg-accent hover:bg-opacity-20'
                  }`}>
                    {challenge.joined ? 'Joined' : 'Join'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}