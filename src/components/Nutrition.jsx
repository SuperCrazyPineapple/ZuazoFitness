import React, { useState } from 'react';
import { Plus, Trash2, Search, Moon, Sun, ChevronDown, ChevronUp } from 'lucide-react';

export default function Nutrition() {
  // Ajouter styles de scrollbar et font au chargement
  React.useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');
      
      /* Police élégante */
      * {
        font-family: 'Playfair Display', serif;
      }
      
      /* Scrollbar général */
      ::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background: #47A025;
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #2d6015;
      }
      
      /* Scrollbar pour inputs et selects */
      input::-webkit-scrollbar,
      select::-webkit-scrollbar,
      textarea::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      input::-webkit-scrollbar-track,
      select::-webkit-scrollbar-track,
      textarea::-webkit-scrollbar-track {
        background: transparent;
      }
      input::-webkit-scrollbar-thumb,
      select::-webkit-scrollbar-thumb,
      textarea::-webkit-scrollbar-thumb {
        background: #47A025;
        border-radius: 4px;
      }
      input::-webkit-scrollbar-thumb:hover,
      select::-webkit-scrollbar-thumb:hover,
      textarea::-webkit-scrollbar-thumb:hover {
        background: #2d6015;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const [darkMode, setDarkMode] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState('breakfast');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFood, setSelectedFood] = useState(null);
  const [quantity, setQuantity] = useState('100');
  const [quantityUnit, setQuantityUnit] = useState('g');
  const [expandedMeal, setExpandedMeal] = useState(null);

  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: []
  });

  const dailyGoals = {
    calories: 2000,
    protein: 150,
    carbs: 200,
    fat: 70
  };

  // Couleurs cohérentes CALISTHENX
  const bg = 'bg-[#100E0E]';
  const bgSecondary = 'bg-[#1a1817]';
  const bgTertiary = 'bg-[#242220]';
  const text = 'text-white';
  const textSecondary = 'text-[#BFB7B6]';
  const border = 'border-[#BFB7B6]';
  const primaryGreen = 'text-[#47A025]';
  const primaryGreenBg = 'bg-[#47A025]';

  const foodDatabase = [
    { id: 1, name: 'Chicken Breast', calories: 165, protein: 31, carbs: 0, fat: 3.6 },
    { id: 2, name: 'Chicken Thigh', calories: 209, protein: 26, carbs: 0, fat: 11 },
    { id: 3, name: 'Egg', calories: 155, protein: 13, carbs: 1.1, fat: 11 },
    { id: 4, name: 'Turkey Breast', calories: 135, protein: 29.9, carbs: 0, fat: 1.3 },
    { id: 5, name: 'Salmon', calories: 206, protein: 22, carbs: 0, fat: 13 },
    { id: 6, name: 'Tuna Canned', calories: 132, protein: 29.9, carbs: 0, fat: 1.3 },
    { id: 7, name: 'Lean Beef', calories: 250, protein: 26, carbs: 0, fat: 17 },
    { id: 8, name: 'Greek Yogurt', calories: 59, protein: 10, carbs: 3.3, fat: 0.4 },
    { id: 9, name: 'White Rice', calories: 130, protein: 2.7, carbs: 28, fat: 0.3 },
    { id: 10, name: 'Brown Rice', calories: 111, protein: 2.6, carbs: 23, fat: 0.9 },
    { id: 11, name: 'Whole Wheat Pasta', calories: 124, protein: 5.3, carbs: 25, fat: 1.1 },
    { id: 12, name: 'Oatmeal', calories: 389, protein: 16.7, carbs: 66.3, fat: 6.9 },
    { id: 13, name: 'Sweet Potato', calories: 86, protein: 1.6, carbs: 20, fat: 0.1 },
    { id: 14, name: 'Banana', calories: 89, protein: 1, carbs: 23, fat: 0.3 },
    { id: 15, name: 'Apple', calories: 52, protein: 0.3, carbs: 13.8, fat: 0.2 },
    { id: 16, name: 'Orange', calories: 47, protein: 0.9, carbs: 11.8, fat: 0.1 },
    { id: 17, name: 'Broccoli', calories: 34, protein: 2.8, carbs: 7, fat: 0.4 },
    { id: 18, name: 'Spinach', calories: 23, protein: 2.7, carbs: 3.6, fat: 0.4 },
    { id: 19, name: 'Carrot', calories: 41, protein: 0.9, carbs: 10, fat: 0.2 },
    { id: 20, name: 'Almonds', calories: 579, protein: 21, carbs: 22, fat: 50 },
    { id: 21, name: 'Avocado', calories: 160, protein: 2, carbs: 8.6, fat: 14.7 },
    { id: 22, name: 'Olive Oil', calories: 884, protein: 0, carbs: 0, fat: 100 },
    { id: 23, name: 'Strawberry', calories: 32, protein: 0.8, carbs: 7.7, fat: 0.3 },
    { id: 24, name: 'Blueberry', calories: 57, protein: 0.7, carbs: 14.5, fat: 0.3 },
    { id: 25, name: 'Grape', calories: 67, protein: 0.6, carbs: 17, fat: 0.2 },
    { id: 26, name: 'Watermelon', calories: 30, protein: 0.6, carbs: 7.6, fat: 0.2 },
    { id: 27, name: 'Mango', calories: 60, protein: 0.8, carbs: 15, fat: 0.3 },
    { id: 28, name: 'Pineapple', calories: 50, protein: 0.5, carbs: 13.1, fat: 0.1 },
    { id: 29, name: 'Kiwi', calories: 61, protein: 1.1, carbs: 14.7, fat: 0.5 },
    { id: 30, name: 'Lemon', calories: 29, protein: 1.1, carbs: 9.3, fat: 0.3 },
    { id: 31, name: 'Lime', calories: 30, protein: 0.7, carbs: 10.5, fat: 0.2 },
    { id: 32, name: 'Pomegranate', calories: 83, protein: 1.7, carbs: 19, fat: 1.2 },
    { id: 33, name: 'Raspberry', calories: 52, protein: 1.2, carbs: 12, fat: 0.7 },
    { id: 34, name: 'Blackberry', calories: 43, protein: 1.4, carbs: 10.2, fat: 0.5 },
    { id: 35, name: 'Peach', calories: 39, protein: 0.9, carbs: 9.5, fat: 0.3 },
    { id: 36, name: 'Pear', calories: 57, protein: 0.4, carbs: 15.2, fat: 0.1 },
    { id: 37, name: 'Papaya', calories: 43, protein: 0.7, carbs: 11, fat: 0.3 },
    { id: 38, name: 'Coconut', calories: 354, protein: 3.3, carbs: 15.2, fat: 33.5 },
    { id: 39, name: 'Tomato', calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2 },
    { id: 40, name: 'Bell Pepper', calories: 31, protein: 1, carbs: 6, fat: 0.3 },
    { id: 41, name: 'Cucumber', calories: 16, protein: 0.7, carbs: 3.6, fat: 0.1 },
    { id: 42, name: 'Lettuce', calories: 15, protein: 1.2, carbs: 2.9, fat: 0.2 },
    { id: 43, name: 'Onion', calories: 40, protein: 1.1, carbs: 9, fat: 0.1 },
    { id: 44, name: 'Garlic', calories: 149, protein: 6.4, carbs: 33.1, fat: 0.5 },
    { id: 45, name: 'Celery', calories: 16, protein: 0.7, carbs: 3.7, fat: 0.1 },
    { id: 46, name: 'Cauliflower', calories: 25, protein: 1.9, carbs: 5, fat: 0.3 },
    { id: 47, name: 'Zucchini', calories: 21, protein: 1.4, carbs: 3.7, fat: 0.4 },
    { id: 48, name: 'Eggplant', calories: 25, protein: 0.8, carbs: 5.9, fat: 0.2 },
    { id: 49, name: 'Asparagus', calories: 27, protein: 3.1, carbs: 5.2, fat: 0.1 },
    { id: 50, name: 'Mushroom', calories: 22, protein: 3.1, carbs: 3.3, fat: 0.3 },
    { id: 51, name: 'Green Beans', calories: 31, protein: 1.8, carbs: 7, fat: 0.1 },
    { id: 52, name: 'Peas', calories: 81, protein: 5.4, carbs: 14.5, fat: 0.4 },
    { id: 53, name: 'Corn', calories: 86, protein: 3.3, carbs: 19.1, fat: 1.2 },
    { id: 54, name: 'Cabbage', calories: 25, protein: 1.3, carbs: 5.8, fat: 0.1 },
    { id: 55, name: 'Kale', calories: 49, protein: 4.3, carbs: 9, fat: 0.9 },
    { id: 56, name: 'Radish', calories: 16, protein: 0.6, carbs: 3.4, fat: 0.1 },
    { id: 57, name: 'Beet', calories: 43, protein: 1.6, carbs: 9.6, fat: 0.2 },
    { id: 58, name: 'Pumpkin', calories: 26, protein: 1, carbs: 6.5, fat: 0.1 },
  ];

  const mealLabels = {
    breakfast: 'Breakfast',
    lunch: 'Lunch',
    dinner: 'Dinner',
    snacks: 'Snacks'
  };

  const totals = Object.values(meals).reduce((acc, mealList) => {
    return mealList.reduce((meal, item) => ({
      calories: meal.calories + item.calories,
      protein: meal.protein + item.protein,
      carbs: meal.carbs + item.carbs,
      fat: meal.fat + item.fat
    }), acc);
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });

  const getMealTotals = (mealType) => {
    return meals[mealType].reduce((acc, item) => ({
      calories: acc.calories + item.calories,
      protein: acc.protein + item.protein,
      carbs: acc.carbs + item.carbs,
      fat: acc.fat + item.fat
    }), { calories: 0, protein: 0, carbs: 0, fat: 0 });
  };

  const filteredFoods = foodDatabase.filter(food =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPercentage = (current, goal) => Math.min((current / goal) * 100, 100);

  const renderMacroBar = (label, current, goal, color) => {
    const percentage = getPercentage(current, goal);
    return (
      <div key={label} className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className={`text-sm font-bold ${text}`}>{label}</span>
          <span className={`text-sm font-bold ${primaryGreen}`}>{Math.round(current)}g / {goal}g</span>
        </div>
        <div className={`w-full h-3 rounded-full overflow-hidden border ${border}`}>
          <div
            className={`h-full ${color} rounded-full transition-all duration-300`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    );
  };

  const handleAddFood = () => {
    if (!selectedFood || !quantity) return;

    const multiplier = quantityUnit === 'g' ? parseInt(quantity) / 100 : parseInt(quantity);

    const newItem = {
      id: Date.now(),
      name: selectedFood.name,
      calories: Math.round(selectedFood.calories * multiplier * 10) / 10,
      protein: Math.round(selectedFood.protein * multiplier * 10) / 10,
      carbs: Math.round(selectedFood.carbs * multiplier * 10) / 10,
      fat: Math.round(selectedFood.fat * multiplier * 10) / 10
    };

    setMeals({
      ...meals,
      [selectedMeal]: [...meals[selectedMeal], newItem]
    });

    setSelectedFood(null);
    setQuantity('100');
    setSearchQuery('');
  };

  const removeFood = (mealType, itemId) => {
    setMeals({
      ...meals,
      [mealType]: meals[mealType].filter(item => item.id !== itemId)
    });
  };

  return (
    <div className={`w-full h-screen ${bg} ${text} flex flex-col overflow-hidden transition-colors duration-300`}>
      
      {/* Header */}
      <div className={`${bgSecondary} border-b ${border} flex-shrink-0`}>
        <div className="w-full px-6 py-3 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Nutrition Tracker</h1>
            <p className={`${textSecondary} text-xs`}>Track your daily meals</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg ${bgSecondary} border ${border} hover:opacity-80`}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full px-6 py-4">
        
        {/* Daily Summary */}
        <div className={`${bgSecondary} border-2 border-[#BFB7B6] rounded-xl p-6 mb-8`}>
          <p className={`${textSecondary} text-sm mb-2`}>TODAY'S TOTAL</p>
          <div className="flex items-baseline gap-3 mb-4">
            <p className={`text-5xl font-bold ${primaryGreen}`}>{Math.round(totals.calories)}</p>
            <p className={textSecondary}>/ {dailyGoals.calories} calories</p>
          </div>
          <div className={`w-full h-3 rounded-full overflow-hidden border ${border}`}>
            <div
              className={`h-full ${primaryGreenBg} transition-all duration-300`}
              style={{ width: `${getPercentage(totals.calories, dailyGoals.calories)}%` }}
            />
          </div>
        </div>

        {/* Macros */}
        <div className={`${bgSecondary} border ${border} rounded-xl p-6 mb-8`}>
          <h3 className={`font-bold ${text} text-lg mb-5`}>Macronutrients</h3>
          {renderMacroBar('Protein', totals.protein, dailyGoals.protein, 'bg-red-500')}
          {renderMacroBar('Carbs', totals.carbs, dailyGoals.carbs, 'bg-orange-400')}
          {renderMacroBar('Fat', totals.fat, dailyGoals.fat, 'bg-yellow-500')}
        </div>

        {/* Add Food Section */}
        <div className={`${bgSecondary} border ${border} rounded-xl p-6 mb-8`}>
          <h3 className={`font-bold ${text} text-lg mb-6`}>Add Food</h3>
          
          {/* Select Meal */}
          <div className="mb-6">
            <label className={`block text-sm font-bold ${textSecondary} mb-3`}>Which meal?</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {Object.entries(mealLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedMeal(key)}
                  className={`py-2 rounded-lg font-bold text-sm transition ${
                    selectedMeal === key
                      ? `${primaryGreenBg} text-[#100E0E]`
                      : `${bgSecondary} border ${border} ${text} hover:border-[#BFB7B6]`
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Food */}
          <div className="mb-6">
            <label className={`block text-sm font-bold ${textSecondary} mb-3`}>Search food</label>
            <div className="relative">
              <Search size={16} className={`absolute left-3 top-3 ${textSecondary}`} />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-3 ${bgTertiary} border-[#BFB7B6] border rounded-lg text-sm focus:border-[#47A025] outline-none transition ${text}`}
              />
            </div>

            {/* Food List */}
            {searchQuery && (
              <div className={`mt-2 max-h-48 overflow-y-auto`}>
                {filteredFoods.map(food => (
                  <div
                    key={food.id}
                    onClick={() => setSelectedFood(food)}
                    className={`p-3 mb-2 cursor-pointer rounded-lg transition ${
                      selectedFood?.id === food.id
                        ? `bg-[#47A025] bg-opacity-20 border border-[#47A025]`
                        : `${bgSecondary} border ${border} hover:border-[#BFB7B6]`
                    }`}
                  >
                    <div className="flex justify-between">
                      <p className="font-bold text-sm">{food.name}</p>
                      <p className={`text-sm ${primaryGreen}`}>{food.calories} cal</p>
                    </div>
                    <p className={`text-xs ${textSecondary}`}>P:{Math.round(food.protein)}g C:{Math.round(food.carbs)}g F:{Math.round(food.fat)}g</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {selectedFood && (
            <>
              {/* Quantity */}
              <div className="mb-6">
                <label className={`block text-sm font-bold ${textSecondary} mb-3`}>How much?</label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={quantity}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^\d]/g, '');
                      setQuantity(val || '100');
                    }}
                    onKeyDown={(e) => {
                      if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'].includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    className={`flex-1 px-4 py-3 ${bgTertiary} border-[#BFB7B6] border rounded-lg text-sm focus:border-[#47A025] outline-none ${text}`}
                    placeholder="100"
                  />
                  <select
                    value={quantityUnit}
                    onChange={(e) => setQuantityUnit(e.target.value)}
                    className={`px-4 py-3 ${bgTertiary} border-[#BFB7B6] border rounded-lg text-sm focus:border-[#47A025] outline-none ${text}`}
                  >
                    <option value="g">Grams</option>
                    <option value="oz">Ounces</option>
                    <option value="piece">Piece</option>
                  </select>
                </div>
              </div>

              {/* Calculated Values */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                  <p className={`${textSecondary} text-xs`}>Cal</p>
                  <p className={`text-lg font-bold ${primaryGreen}`}>
                    {Math.round(selectedFood.calories * (quantityUnit === 'g' ? parseInt(quantity) / 100 : parseInt(quantity)))}
                  </p>
                </div>
                <div>
                  <p className={`${textSecondary} text-xs`}>Protein</p>
                  <p className={`text-lg font-bold ${primaryGreen}`}>
                    {Math.round(selectedFood.protein * (quantityUnit === 'g' ? parseInt(quantity) / 100 : parseInt(quantity)) * 10) / 10}g
                  </p>
                </div>
              </div>

              {/* Add Button */}
              <button
                onClick={handleAddFood}
                className={`w-full ${primaryGreenBg} hover:bg-[#2d6015] text-[#100E0E] font-bold py-4 rounded-lg transition flex items-center justify-center gap-2`}
              >
                <Plus size={20} />
                Add to {mealLabels[selectedMeal]}
              </button>
            </>
          )}
        </div>

        {/* Meals */}
        <div className="space-y-4 mb-8">
          {Object.entries(mealLabels).map(([mealType, mealLabel]) => {
            const mealItems = meals[mealType];
            const mealTotals = getMealTotals(mealType);
            const isExpanded = expandedMeal === mealType;

            return (
              <div key={mealType} className={`${bgSecondary} border ${border} rounded-xl overflow-hidden`}>
                {/* Meal Header */}
                <button
                  onClick={() => setExpandedMeal(isExpanded ? null : mealType)}
                  className={`w-full p-4 flex justify-between items-center hover:${bgTertiary} transition`}
                >
                  <div className="flex-1 text-left">
                    <h3 className="font-bold text-lg">{mealLabel}</h3>
                    {mealItems.length > 0 && (
                      <p className={`text-sm ${textSecondary}`}>
                        {mealTotals.calories} cal • P:{Math.round(mealTotals.protein)}g C:{Math.round(mealTotals.carbs)}g
                      </p>
                    )}
                  </div>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>

                {/* Meal Items */}
                {isExpanded && (
                  <div className={`border-t ${border} p-4 space-y-2`}>
                    {mealItems.length === 0 ? (
                      <p className={textSecondary}>No items added</p>
                    ) : (
                      mealItems.map(item => (
                        <div key={item.id} className={`flex justify-between items-center p-3 ${bgSecondary} border ${border} rounded-lg`}>
                          <div className="flex-1">
                            <p className="font-bold text-sm">{item.name}</p>
                            <p className={`text-xs ${textSecondary}`}>{item.calories} cal • P:{Math.round(item.protein)}g</p>
                          </div>
                          <button
                            onClick={() => removeFood(mealType, item.id)}
                            className="p-2 hover:bg-[#242220] rounded transition"
                          >
                            <Trash2 size={16} className="text-red-400" />
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {Object.values(meals).some(arr => arr.length > 0) && (
          <div className="mb-8">
            <button
              onClick={() => setMeals({ breakfast: [], lunch: [], dinner: [], snacks: [] })}
              className={`w-full ${bgSecondary} border ${border} hover:border-red-500 ${text} font-bold py-3 rounded-lg transition`}
            >
              Clear All Meals
            </button>
          </div>
        )}

        </div>
      </div>
    </div>
  );
}