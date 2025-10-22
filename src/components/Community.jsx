import React, { useState } from 'react';
import {
  Heart,
  MessageCircle,
  Share2,
  Search,
  Trophy,
  Flame,
  Users,
  TrendingUp,
  X,
  ChevronDown,
  ChevronUp,
  Award,
  Star,
  Target,
  Zap
} from 'lucide-react';

export default function Community() {
  // Couleurs CALISTHENX identiques à Nutrition
  const bg = 'bg-[#100E0E]';
  const bgSecondary = 'bg-[#1a1817]';
  const bgTertiary = 'bg-[#242220]';
  const text = 'text-white';
  const textSecondary = 'text-[#BFB7B6]';
  const border = 'border-[#BFB7B6]';
  const primaryGreen = 'text-[#47A025]';
  const primaryGreenBg = 'bg-[#47A025]';

  // States
  const [activeTab, setActiveTab] = useState('feed');
  const [likes, setLikes] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [expandedPost, setExpandedPost] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [expandedMeal, setExpandedMeal] = useState(null);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [currentComment, setCurrentComment] = useState('');
  const [comments, setComments] = useState({});

  // Mock data - Posts
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Alex Morgan',
      avatar: 'AM',
      profileImage: '/images/profile-1.jpg',
      timestamp: '2 hours ago',
      difficulty: 'Advanced',
      title: 'Completed 50 Pull-ups Challenge',
      content: 'Just hit a new personal record today! Started with sets of 5, now doing 10 consecutive. The key is consistent training and proper form.',
      image: '/images/pullups.jpg',
      likes: 342,
      comments: 28,
      shares: 15,
      difficulty_badge: 'bg-[#8B0000]',
      tags: ['pullups', 'strength', 'PR'],
      verified: true
    },
    {
      id: 2,
      author: 'Jordan Lee',
      avatar: 'JL',
      profileImage: '/images/profile-2.jpg',
      timestamp: '4 hours ago',
      difficulty: 'Intermediate',
      title: 'Handstand Progress Update',
      content: 'Week 3 of handstand training and I can now hold for 15 seconds against the wall. Never thought I could do this!',
      image: '/images/handstand.jpg',
      likes: 287,
      comments: 42,
      shares: 22,
      difficulty_badge: 'bg-[#B8860B]',
      tags: ['handstand', 'balance', 'flexibility'],
      verified: false
    },
    {
      id: 3,
      author: 'Chris Rivera',
      avatar: 'CR',
      profileImage: '/images/profile-3.jpg',
      timestamp: '6 hours ago',
      difficulty: 'Beginner',
      title: 'Day 1 of My Fitness Journey',
      content: 'Starting my calisthenics journey today! Did 10 push-ups, 15 squats, and a 30-second plank. Ready to transform!',
      image: '/images/workout.jpg',
      likes: 156,
      comments: 65,
      shares: 34,
      difficulty_badge: 'bg-[#228B22]',
      tags: ['beginner', 'motivation', 'first-day'],
      verified: false
    }
  ]);

  // Mock data - Leaderboard
  const [leaderboard] = useState([
    { rank: 1, name: 'Alex Morgan', level: 'Level 45', workouts: 287, streak: 89, points: 15420 },
    { rank: 2, name: 'Sarah Chen', level: 'Level 42', workouts: 264, streak: 76, points: 14890 },
    { rank: 3, name: 'Marcus Johnson', level: 'Level 41', workouts: 251, streak: 68, points: 14200 },
    { rank: 4, name: 'Emma Davis', level: 'Level 39', workouts: 228, streak: 62, points: 13540 },
    { rank: 5, name: 'Lucas Brown', level: 'Level 38', workouts: 215, streak: 58, points: 12890 }
  ]);

  // Mock data - Challenges
  const [challenges] = useState([
    {
      id: 1,
      title: '30-Day Push-up Challenge',
      icon: 'PU',
      participants: 2456,
      progress: 65,
      joined: true,
      deadline: 'Ends in 8 days',
      difficulty: 'Intermediate',
      description: 'Complete daily push-ups. Target: 1000 total',
      reward: '500 XP + Badge'
    },
    {
      id: 2,
      title: 'Plank Hold Master',
      icon: 'PH',
      participants: 1823,
      progress: 42,
      joined: false,
      deadline: 'Ends in 15 days',
      difficulty: 'Advanced',
      description: 'Hold planks. Target: 5 minutes total',
      reward: '750 XP + Trophy'
    },
    {
      id: 3,
      title: 'Week Warrior',
      icon: 'WW',
      participants: 5234,
      progress: 78,
      joined: true,
      deadline: 'Ends in 2 days',
      difficulty: 'Beginner',
      description: 'Complete 5 workouts this week',
      reward: '300 XP'
    }
  ]);

  // Mock data - Groups
  const [groups] = useState([
    {
      id: 1,
      name: 'Calisthenics Beginners',
      initials: 'CB',
      image: '/images/group-1.jpg',
      members: 3421,
      joined: true,
      description: 'Perfect for those just starting their journey'
    },
    {
      id: 2,
      name: 'Street Workout Pros',
      initials: 'SWP',
      image: '/images/group-2.jpg',
      members: 2156,
      joined: false,
      description: 'Advanced techniques and skills'
    }
  ]);

  const tabs = ['feed', 'leaderboard', 'challenges', 'groups', 'trending'];

  // Fonctions
  const toggleLike = (postId) => {
    setLikes(prev => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  const openPostDetail = (post) => {
    setSelectedPost(post);
    setShowPostModal(true);
  };

  const closePostDetail = () => {
    setShowPostModal(false);
    setSelectedPost(null);
    setCurrentComment('');
  };

  const addComment = () => {
    if (!currentComment.trim() || !selectedPost) return;
    
    setComments(prev => ({
      ...prev,
      [selectedPost.id]: [...(prev[selectedPost.id] || []), {
        id: Date.now(),
        text: currentComment,
        author: 'You',
        timestamp: 'now'
      }]
    }));
    
    setCurrentComment('');
  };

  // Components
  const PostCard = ({ post }) => (
    <div 
      onClick={() => openPostDetail(post)}
      className={`${bgSecondary} border ${border} rounded-xl p-4 hover:border-[#47A025] transition cursor-pointer`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#47A025] to-[#2d6015] flex items-center justify-center text-sm font-bold text-white overflow-hidden">
            {post.profileImage ? (
              <img src={post.profileImage} alt={post.author} className="w-full h-full object-cover" />
            ) : (
              post.avatar
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-bold text-sm">{post.author}</p>
              {post.verified && <Star size={12} className={primaryGreen} fill={`#47A025`} />}
            </div>
            <p className={`${textSecondary} text-xs`}>{post.timestamp}</p>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-bold text-white ${post.difficulty_badge}`}>
          {post.difficulty}
        </span>
      </div>

      <h3 className="font-bold text-white mb-2">{post.title}</h3>
      <p className={`${textSecondary} text-sm mb-3`}>{post.content.substring(0, 100)}...</p>

      <div className="w-full h-32 mb-4 bg-[#242220] rounded-lg border border-[#BFB7B6] flex items-center justify-center overflow-hidden">
        {post.image ? (
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <p className="text-[#BFB7B6] text-sm">Photo</p>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.map((tag, idx) => (
          <span key={idx} className="text-xs bg-[#47A025] bg-opacity-20 text-[#47A025] px-2 py-1 rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mb-3 text-sm border-t border-b border-[#BFB7B6] py-3">
        <span className="flex items-center gap-1 text-[#BFB7B6]">
          <Heart size={14} /> {post.likes}
        </span>
        <span className="flex items-center gap-1 text-[#BFB7B6]">
          <MessageCircle size={14} /> {post.comments}
        </span>
        <span className="flex items-center gap-1 text-[#BFB7B6]">
          <Share2 size={14} /> {post.shares}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleLike(post.id);
          }}
          className={`py-2 rounded-lg font-bold transition text-sm ${
            likes[post.id]
              ? `bg-[#8B0000] text-white`
              : `${bgTertiary} border ${border} text-[#BFB7B6] hover:border-[#47A025]`
          }`}
        >
          Like
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            openPostDetail(post);
            setShowCommentModal(true);
          }}
          className={`py-2 rounded-lg font-bold transition text-sm ${bgTertiary} border ${border} text-[#BFB7B6] hover:border-[#47A025]`}
        >
          Comment
        </button>
        <button className={`py-2 rounded-lg font-bold transition text-sm ${bgTertiary} border ${border} text-[#BFB7B6] hover:border-[#47A025]`}>
          Share
        </button>
      </div>
    </div>
  );

  return (
    <div className={`w-full min-h-screen ${bg} ${text} pb-32`}>
      {/* Header */}
      <div className={`${bgSecondary} border-b ${border} sticky top-0 z-20`}>
        <div className="w-full px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold font-playfair">Community</h1>
          </div>

          {/* Search */}
          <div className="relative mb-4">
            <Search size={16} className={`absolute left-3 top-3 ${textSecondary}`} />
            <input
              type="text"
              placeholder="Search posts, people..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 ${bgTertiary} border ${border} rounded-lg text-sm focus:border-[#47A025] outline-none transition ${text}`}
            />
          </div>

          {/* Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded-lg font-bold text-xs whitespace-nowrap transition ${
                  activeTab === tab
                    ? `${primaryGreenBg} text-[#100E0E]`
                    : `${bgTertiary} border ${border} text-[#BFB7B6] hover:border-[#47A025]`
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full px-6 py-4">
        {/* FEED TAB */}
        {activeTab === 'feed' && (
          <div className="space-y-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['All', 'Beginner', 'Intermediate', 'Advanced'].map(diff => (
                <button
                  key={diff}
                  onClick={() => setFilterDifficulty(diff)}
                  className={`px-3 py-1 rounded-lg font-bold text-xs whitespace-nowrap transition ${
                    filterDifficulty === diff
                      ? `${primaryGreenBg} text-[#100E0E]`
                      : `${bgTertiary} border ${border} text-[#BFB7B6] hover:border-[#47A025]`
                  }`}
                >
                  {diff}
                </button>
              ))}
            </div>

            <div className="space-y-4">
              {posts
                .filter(post => filterDifficulty === 'All' || post.difficulty === filterDifficulty)
                .filter(post =>
                  post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  post.author.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
            </div>
          </div>
        )}

        {/* LEADERBOARD TAB */}
        {activeTab === 'leaderboard' && (
          <div className="space-y-3">
            <div className={`${bgSecondary} border ${border} rounded-xl p-4 mb-6`}>
              <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
                <Trophy size={20} className={primaryGreen} />
                Global Leaderboard
              </h2>
              <p className={`text-sm ${textSecondary}`}>Top performers this month</p>
            </div>

            {leaderboard.map((user, idx) => (
              <div key={idx} className={`${bgSecondary} border ${border} rounded-xl p-4 hover:border-[#47A025] transition`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 flex-1">
                    <div className={`text-lg font-bold w-8 h-8 flex items-center justify-center rounded-lg font-playfair ${
                      idx === 0 ? 'bg-[#FFD700] text-black' :
                      idx === 1 ? 'bg-[#C0C0C0] text-black' :
                      idx === 2 ? 'bg-[#CD7F32] text-white' :
                      `${bgTertiary} border ${border}`
                    }`}>
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-bold">{user.name}</p>
                      <p className={`text-xs ${textSecondary}`}>{user.level}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-bold flex items-center gap-1 ${primaryGreen}`}>
                      <Zap size={14} /> {user.points}
                    </p>
                    <p className={`text-xs ${textSecondary}`}>{user.workouts} workouts</p>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[#BFB7B6] flex justify-between items-center">
                  <span className={`text-xs ${textSecondary}`}>Streak</span>
                  <span className="text-sm font-bold text-[#DC143C] flex items-center gap-1">
                    <Flame size={14} /> {user.streak} days
                  </span>
                </div>
              </div>
            ))}

            <div className={`${bgSecondary} border ${border} rounded-xl p-4 mt-6`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-xs ${textSecondary} mb-1`}>Your Rank</p>
                  <p className="text-2xl font-bold font-playfair">#127</p>
                </div>
                <div className="text-right">
                  <p className={`text-xs ${textSecondary} mb-1`}>Points to next</p>
                  <p className={`text-lg font-bold ${primaryGreen}`}>450 XP</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CHALLENGES TAB */}
        {activeTab === 'challenges' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Target size={20} className={primaryGreen} />
                Active Challenges
              </h2>
              <button className={`text-xs ${primaryGreenBg} text-[#100E0E] px-3 py-1 rounded-lg font-bold hover:bg-[#2d6015] transition`}>
                Explore All
              </button>
            </div>

            {challenges.map(challenge => (
              <div key={challenge.id} className={`${bgSecondary} border ${border} rounded-xl p-4 hover:border-[#47A025] transition`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#47A025] to-[#2d6015] flex items-center justify-center text-white font-bold text-sm">
                      {challenge.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold">{challenge.title}</h3>
                      <p className={`text-xs ${textSecondary}`}>{challenge.participants} Participants</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full font-bold whitespace-nowrap ${
                    challenge.difficulty === 'Beginner' ? 'bg-[#228B22] text-white' :
                    challenge.difficulty === 'Intermediate' ? 'bg-[#B8860B] text-white' :
                    'bg-[#8B0000] text-white'
                  }`}>
                    {challenge.difficulty}
                  </span>
                </div>

                <p className={`text-xs ${textSecondary} mb-3`}>{challenge.description}</p>

                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1">
                    <span className={textSecondary}>Progress</span>
                    <span className="font-bold">{challenge.progress}%</span>
                  </div>
                  <div className={`w-full h-2 rounded-full overflow-hidden border ${border}`}>
                    <div
                      className={`h-full ${primaryGreenBg} rounded-full transition-all`}
                      style={{ width: `${challenge.progress}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[#BFB7B6]">
                  <div>
                    <p className={`text-xs ${textSecondary}`}>{challenge.deadline}</p>
                    <p className={`text-xs ${primaryGreen} font-bold`}>{challenge.reward}</p>
                  </div>
                  <button className={`px-4 py-2 rounded-lg text-sm font-bold transition ${
                    challenge.joined
                      ? `${primaryGreenBg} text-[#100E0E] hover:bg-[#2d6015]`
                      : `${bgTertiary} border ${border} text-[#47A025] hover:border-[#47A025]`
                  }`}>
                    {challenge.joined ? 'In Progress' : 'Join'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* GROUPS TAB */}
        {activeTab === 'groups' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Users size={20} className={primaryGreen} />
                Community Groups
              </h2>
              <button className={`text-xs ${primaryGreenBg} text-[#100E0E] px-3 py-1 rounded-lg font-bold hover:bg-[#2d6015] transition`}>
                Create
              </button>
            </div>

            {groups.map(group => (
              <div key={group.id} className={`${bgSecondary} border ${border} rounded-xl p-4 hover:border-[#47A025] transition`}>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#47A025] to-[#2d6015] flex items-center justify-center text-white font-bold text-lg overflow-hidden flex-shrink-0">
                    {group.image ? (
                      <img src={group.image} alt={group.name} className="w-full h-full object-cover" />
                    ) : (
                      group.initials
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold">{group.name}</h3>
                    <p className={`text-xs ${textSecondary}`}>{group.members.toLocaleString()} Members</p>
                    <p className={`text-sm ${textSecondary} mt-2`}>{group.description}</p>
                  </div>
                </div>

                <button className={`w-full py-2 rounded-lg text-sm font-bold transition ${
                  group.joined
                    ? `bg-[#47A025] bg-opacity-20 border border-[#47A025] text-[#47A025] hover:bg-opacity-30`
                    : `${primaryGreenBg} text-[#100E0E] hover:bg-[#2d6015]`
                }`}>
                  {group.joined ? 'View Group' : 'Join Group'}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TRENDING TAB */}
        {activeTab === 'trending' && (
          <div className="space-y-3">
            <div className={`${bgSecondary} border ${border} rounded-xl p-4 mb-4`}>
              <h2 className="text-lg font-bold mb-1 flex items-center gap-2">
                <TrendingUp size={20} className={primaryGreen} />
                Trending Now
              </h2>
              <p className={`text-xs ${textSecondary}`}>Most popular this week</p>
            </div>

            <div className="space-y-2 mb-6">
              {['#pushupchallenge', '#handstand', '#strengthtraining', '#calisthenics', '#fitnessmotivation'].map((tag, idx) => (
                <div key={idx} className={`${bgSecondary} border ${border} rounded-lg p-3 hover:bg-[#242220] cursor-pointer transition`}>
                  <p className={`font-bold text-sm ${primaryGreen}`}>{tag}</p>
                  <p className={`text-xs ${textSecondary} mt-1`}>{Math.floor(Math.random() * 5000) + 1000} posts</p>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-bold mt-6 mb-3 flex items-center gap-2">
              <Award size={18} className="text-[#FFD700]" />
              Top Posts
            </h3>
            
            {posts.slice(0, 2).map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>

      {/* POST DETAIL MODAL */}
      {showPostModal && selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className={`${bgSecondary} border ${border} rounded-xl max-w-md w-full max-h-96 overflow-y-auto`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#BFB7B6]">
              <h2 className="text-lg font-bold">{selectedPost.title}</h2>
              <button onClick={closePostDetail} className={`${textSecondary} hover:text-white transition`}>
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#47A025] to-[#2d6015] flex items-center justify-center font-bold text-sm">
                    {selectedPost.avatar}
                  </div>
                  <div>
                    <p className="font-bold">{selectedPost.author}</p>
                    <p className={`text-xs ${textSecondary}`}>{selectedPost.timestamp}</p>
                  </div>
                </div>
              </div>

              <p className={`${textSecondary} mb-4 leading-relaxed`}>{selectedPost.content}</p>

              {/* Comments Section */}
              <div className={`border-t border-[#BFB7B6] pt-4`}>
                <h4 className="font-bold mb-3">Comments ({comments[selectedPost.id]?.length || 0})</h4>
                
                <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
                  {comments[selectedPost.id]?.map(comment => (
                    <div key={comment.id} className={`${bgTertiary} border ${border} rounded p-2`}>
                      <p className="font-bold text-sm">{comment.author}</p>
                      <p className="text-sm text-[#BFB7B6]">{comment.text}</p>
                    </div>
                  ))}
                </div>

                {/* Add Comment */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Add comment..."
                    value={currentComment}
                    onChange={(e) => setCurrentComment(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addComment()}
                    className={`flex-1 px-3 py-2 ${bgTertiary} border ${border} rounded text-sm focus:border-[#47A025] outline-none ${text}`}
                  />
                  <button
                    onClick={addComment}
                    className={`${primaryGreenBg} text-[#100E0E] px-4 py-2 rounded font-bold hover:bg-[#2d6015] transition`}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}