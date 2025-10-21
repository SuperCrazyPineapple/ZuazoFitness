// src/components/Nutrition.jsx

import React, { useState } from 'react';
import { Plus, Trash2, Search, Barcode, Apple, Droplet, TrendingUp } from 'lucide-react';

export default function Nutrition({ user }) {
  const [activeTab, setActiveTab] = useState('today');
  const [searchQuery, setSearchQuery] = useState('');
  const [meals, setMeals] = useState({
    breakfast: [
      { name: 'Oatmeal with Banana', calories: 280, protein: 8, carbs: 50, fat: 4 },
      { name: 'Espresso', calories: 5, protein: 0, carbs: 0, fat: 0 }
    ],
    lunch: [
      { name: 'Grilled Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
      { name: 'Brown Rice', calories: 216, protein: 5, carbs: 45, fat: 1.8 }
    ],
    dinner: [],
    snacks: [
      { name: 'Protein Bar', calories: 200, protein: 20, carbs: 20, fat: 6 }
    ]
  });

  const [waterIntake, setWaterIntake] = useState(6); // glasses of water

  const dailyGoals = {
    calories: 2000,
    protein: 150,
    carbs: 200,
    fat: 70
  };

  const totals = Object.values(meals).reduce((acc, mealList) => {
    return mealList.reduce((meal, item) => ({
      calories: meal.calories + item.calories,
      protein: meal.protein + item.protein,
      carbs: meal.carbs + item.carbs,
      fat: meal.fat + item.fat
    }), acc);
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });

  const addWater = () => {
    if (waterIntake < 12) setWaterIntake(waterIntake + 1);
  };

  const commonFoods = [
    { name: 'Chicken Breast (100g)', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    { name: 'Egg (1 large)', calories: 78, protein: 6, carbs: 0.6, fat: 5 },
    { name: 'Rice (100g)', calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    { name: 'Banana (1 medium)', calories: 89, protein: 1, carbs: 23, fat: 0.3 },
    { name: 'Apple (1 medium)', calories: 95, protein: 0.5, carbs: 25, fat: 0.3 },
    { name: 'Salmon (100g)', calories: 206, protein: 22, carbs: 0, fat: 13 },
    { name: 'Yogurt (100g)', calories: 61, protein: 3.5, carbs: 7.2, fat: 0.4 },
    { name: 'Almonds (28g)', calories: 164, protein: 6, carbs: 6, fat: 14 }
  ];

  const mealSuggestions = [
    {
      name: 'Muscle Builder Bowl',
      meals: ['Grilled Chicken', 'Sweet Potato', 'Broccoli'],
      totalCalories: 450,
      protein: 45,
      goal: 'muscle'
    },
    {
      name: 'Fat Loss Special',
      meals: ['Turkey', 'Salad', 'Brown Rice'],
      totalCalories: 380,
      protein: 38,
      goal: 'fat-loss'
    },
    {
      name: 'Endurance Mix',
      meals: ['Oats', 'Berries', 'Honey'],
      totalCalories: 320,
      protein: 12,
      goal: 'endurance'
    }
  ];

  const renderMacroProgress = (current, goal, label, color) => {
    const percentage = (current / goal) * 100;
    return (
      <div className="flex-1">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-bold">{label}</span>
          <span className={`text-xs font-bold ${color}`}>{current}g / {goal}g</span>
        </div>
        <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
          <div
            className={`h-full ${color.replace('text', 'bg')} rounded-full transition-all`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark-secondary border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">Nutrition Tracker</h1>
          <p className="text-metallic text-sm">Track your daily intake</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        {/* Daily Summary */}
        <div className="mt-6 bg-gradient-to-br from-dark-secondary to-dark border-2 border-metallic border-opacity-30 rounded-2xl p-6">
          <div className="text-center mb-4">
            <p className="text-metallic text-sm mb-1">TODAY'S INTAKE</p>
            <h2 className="text-4xl font-bold">{totals.calories}</h2>
            <p className="text-metallic text-sm">/ {dailyGoals.calories} calories</p>
          </div>

          <div className="w-full h-2 bg-dark rounded-full overflow-hidden mb-6">
            <div
              className="h-full bg-gradient-to-r from-accent to-green-400 rounded-full transition-all"
              style={{ width: `${Math.min((totals.calories / dailyGoals.calories) * 100, 100)}%` }}
            />
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div>
              <p className="font-bold">{totals.protein}g</p>
              <p className="text-metallic">Protein</p>
            </div>
            <div>
              <p className="font-bold">{totals.carbs}g</p>
              <p className="text-metallic">Carbs</p>
            </div>
            <div>
              <p className="font-bold">{totals.fat}g</p>
              <p className="text-metallic">Fat</p>
            </div>
          </div>
        </div>

        {/* Water Intake */}
        <div className="mt-6 bg-dark-secondary border border-metallic border-opacity-30 rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold flex items-center gap-2">
              <Droplet size={18} className="text-blue-400" />
              Hydration
            </h3>
            <span className="text-accent text-sm font-bold">{waterIntake} / 8 glasses</span>
          </div>
          <div className="flex gap-2 mb-3">
            {Array(8).fill(0).map((_, i) => (
              <button
                key={i}
                onClick={() => i < waterIntake && setWaterIntake(i)}
                className={`flex-1 h-8 rounded-lg transition ${
                  i < waterIntake 
                    ? 'bg-blue-500' 
                    : 'bg-dark border border-metallic border-opacity-20 hover:border-metallic hover:border-opacity-50'
                }`}
              />
            ))}
          </div>
          <button
            onClick={addWater}
            className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg font-bold text-sm transition"
          >
            + Add Water
          </button>
        </div>

        {/* Macro Goals */}
        <div className="mt-6 bg-dark-secondary border border-metallic border-opacity-30 rounded-xl p-4">
          <h3 className="font-bold mb-4">Macros Progress</h3>
          <div className="space-y-3">
            {renderMacroProgress(totals.protein, dailyGoals.protein, 'Protein', 'text-red-400')}
            {renderMacroProgress(totals.carbs, dailyGoals.carbs, 'Carbs', 'text-orange-400')}
            {renderMacroProgress(totals.fat, dailyGoals.fat, 'Fat', 'text-yellow-400')}
          </div>
        </div>

        {/* Meals by Category */}
        <div className="mt-6">
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2">
            {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map(meal => (
              <button
                key={meal}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-bold transition ${
                  activeTab === meal.toLowerCase()
                    ? 'bg-accent text-dark'
                    : 'bg-dark-secondary border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
                }`}
                onClick={() => setActiveTab(meal.toLowerCase())}
              >
                {meal}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            {meals[activeTab]?.map((meal, idx) => (
              <div
                key={idx}
                className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 flex items-center justify-between"
              >
                <div className="flex-1">
                  <p className="font-bold text-sm">{meal.name}</p>
                  <p className="text-metallic text-xs">{meal.calories} cal • P: {meal.protein}g • C: {meal.carbs}g</p>
                </div>
                <button className="p-1 hover:bg-dark rounded transition">
                  <Trash2 size={16} className="text-red-400" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Add Food */}
        <div className="mt-6 mb-6">
          <h3 className="font-bold mb-3">Quick Add</h3>
          <div className="grid grid-cols-2 gap-2">
            {commonFoods.slice(0, 6).map((food, idx) => (
              <button
                key={idx}
                className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-2 text-xs hover:border-accent hover:border-opacity-50 transition"
              >
                <p className="font-bold">{food.name}</p>
                <p className="text-metallic">{food.calories} cal</p>
              </button>
            ))}
          </div>
        </div>

        {/* Meal Suggestions */}
        <div className="mb-6">
          <h3 className="font-bold mb-3">Suggested Meals</h3>
          <div className="space-y-2">
            {mealSuggestions.map((meal, idx) => (
              <div
                key={idx}
                className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg p-3 hover:border-accent hover:border-opacity-50 cursor-pointer transition"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-bold text-sm">{meal.name}</p>
                    <p className="text-metallic text-xs">{meal.meals.join(' • ')}</p>
                  </div>
                  <div className="text-right text-xs font-bold">
                    <p className="text-accent">{meal.totalCalories} cal</p>
                    <p className="text-green-400">{meal.protein}g P</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}