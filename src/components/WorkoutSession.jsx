// src/components/WorkoutSession.jsx

import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, Volume2, Check, X, Heart, Share2 } from 'lucide-react';

export default function WorkoutSession({ workoutId = 1, onClose = () => {} }) {
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);
  const [totalTime, setTotalTime] = useState(0);
  const [completedExercises, setCompletedExercises] = useState([]);

  const exercises = [
    {
      id: 1,
      name: 'Push-ups',
      reps: 15,
      duration: 60,
      rest: 30,
      instructions: 'Keep your body straight from head to heels. Lower yourself until your chest nearly touches the ground.',
      difficulty: 'Intermediate',
      video: '💪'
    },
    {
      id: 2,
      name: 'Squats',
      reps: 20,
      duration: 60,
      rest: 30,
      instructions: 'Lower yourself by bending knees and hips. Keep chest up and weight in heels.',
      difficulty: 'Beginner',
      video: '🦵'
    },
    {
      id: 3,
      name: 'Plank Hold',
      reps: 1,
      duration: 45,
      rest: 45,
      instructions: 'Hold a straight line from head to heels. Engage your core throughout.',
      difficulty: 'Intermediate',
      video: '📏'
    },
    {
      id: 4,
      name: 'Burpees',
      reps: 10,
      duration: 60,
      rest: 30,
      instructions: 'Squat, jump back, push-up, jump forward.',
      difficulty: 'Advanced',
      video: '🔥'
    },
    {
      id: 5,
      name: 'Jumping Jacks',
      reps: 30,
      duration: 60,
      rest: 30,
      instructions: 'Jump while spreading legs and raising arms.',
      difficulty: 'Beginner',
      video: '⚡'
    }
  ];

  const currentExercise = exercises[currentExerciseIndex];
  const progress = ((currentExerciseIndex + completedExercises.length) / exercises.length) * 100;

  useEffect(() => {
    let interval;
    if (isPlaying && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            // Move to next exercise
            if (currentExerciseIndex < exercises.length - 1) {
              setCurrentExerciseIndex(prev => prev + 1);
              setTimeLeft(exercises[currentExerciseIndex + 1]?.duration || 60);
            } else {
              setIsPlaying(false);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, timeLeft, currentExerciseIndex]);

  const handleCompleteExercise = () => {
    setCompletedExercises([...completedExercises, currentExerciseIndex]);
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setTimeLeft(exercises[currentExerciseIndex + 1]?.duration || 60);
      setIsPlaying(false);
    } else {
      setIsPlaying(false);
    }
  };

  const handleSkip = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setTimeLeft(exercises[currentExerciseIndex + 1]?.duration || 60);
      setIsPlaying(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const isCompleted = completedExercises.includes(currentExerciseIndex);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 md:p-0">
      <div className="w-full max-w-md bg-dark rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-dark-secondary border-b border-metallic border-opacity-20 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Full Body Workout</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-dark rounded-lg transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="p-4 bg-dark-secondary border-b border-metallic border-opacity-20">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-bold">Exercise {currentExerciseIndex + 1} of {exercises.length}</span>
            <span className="text-accent text-sm font-bold">{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Main Exercise Display */}
        <div className="p-6 text-center">
          {/* Exercise Icon */}
          <div className="text-8xl mb-4">{currentExercise.video}</div>

          {/* Exercise Name */}
          <h3 className="text-3xl font-bold mb-2">{currentExercise.name}</h3>
          <p className="text-metallic text-sm mb-4">{currentExercise.difficulty}</p>

          {/* Timer */}
          <div className="bg-gradient-to-br from-dark-secondary to-dark border-2 border-accent border-opacity-30 rounded-2xl p-8 mb-6">
            <p className="text-metallic text-sm mb-2">Time Left</p>
            <p className="text-6xl font-bold text-accent font-mono">{formatTime(timeLeft)}</p>
          </div>

          {/* Exercise Stats */}
          <div className="grid grid-cols-2 gap-3 mb-6 text-center">
            <div className="bg-dark-secondary rounded-lg p-3 border border-metallic border-opacity-20">
              <p className="text-metallic text-xs mb-1">REPS</p>
              <p className="text-2xl font-bold">{currentExercise.reps}</p>
            </div>
            <div className="bg-dark-secondary rounded-lg p-3 border border-metallic border-opacity-20">
              <p className="text-metallic text-xs mb-1">REST</p>
              <p className="text-2xl font-bold">{currentExercise.rest}s</p>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-dark-secondary border border-metallic border-opacity-20 rounded-lg p-4 mb-6">
            <p className="text-metallic text-xs font-bold mb-2">INSTRUCTIONS</p>
            <p className="text-sm">{currentExercise.instructions}</p>
          </div>

          {/* Controls */}
          <div className="space-y-3">
            <div className="flex gap-2 justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex-1 bg-accent hover:bg-green-400 text-dark font-bold py-4 rounded-lg transition flex items-center justify-center gap-2"
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                {isPlaying ? 'Pause' : 'Start'}
              </button>
              <button
                onClick={handleSkip}
                className="bg-dark-secondary hover:bg-dark border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50 text-metallic font-bold py-4 px-4 rounded-lg transition flex items-center gap-2"
              >
                <SkipForward size={18} />
              </button>
            </div>

            <button
              onClick={handleCompleteExercise}
              className="w-full bg-green-500 hover:bg-green-600 text-dark font-bold py-4 rounded-lg transition flex items-center justify-center gap-2"
            >
              <Check size={20} />
              Done
            </button>
          </div>
        </div>

        {/* Next Exercise Preview */}
        {currentExerciseIndex < exercises.length - 1 && (
          <div className="border-t border-metallic border-opacity-20 p-4 bg-dark-secondary">
            <p className="text-metallic text-xs font-bold mb-2">NEXT UP</p>
            <div className="flex items-center gap-3">
              <span className="text-3xl">{exercises[currentExerciseIndex + 1].video}</span>
              <div className="flex-1">
                <p className="font-bold">{exercises[currentExerciseIndex + 1].name}</p>
                <p className="text-metallic text-xs">{exercises[currentExerciseIndex + 1].reps} reps</p>
              </div>
            </div>
          </div>
        )}

        {/* Completed Exercises List */}
        {completedExercises.length > 0 && (
          <div className="border-t border-metallic border-opacity-20 p-4">
            <p className="text-metallic text-xs font-bold mb-2">COMPLETED</p>
            <div className="space-y-1">
              {completedExercises.map(idx => (
                <div key={idx} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-accent" />
                  <span className="text-metallic">{exercises[idx].name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completion Screen */}
        {completedExercises.length === exercises.length && (
          <div className="border-t border-metallic border-opacity-20 p-6 text-center bg-gradient-to-br from-accent from-10% to-green-500 text-dark">
            <p className="text-4xl mb-3">🎉</p>
            <h4 className="text-2xl font-bold mb-2">Great Job!</h4>
            <p className="text-sm opacity-90 mb-4">You've completed all exercises</p>
            <div className="space-y-2">
              <button className="w-full bg-dark hover:bg-dark-secondary font-bold py-3 rounded-lg transition">
                Save Workout
              </button>
              <button className="w-full bg-dark hover:bg-dark-secondary font-bold py-3 rounded-lg transition flex items-center justify-center gap-2">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}