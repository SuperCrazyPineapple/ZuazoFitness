// src/components/Shop.jsx

import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Search, Filter, Zap } from 'lucide-react';

export default function Shop({ user }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 'all', name: 'All', icon: '🛍️' },
    { id: 'supplements', name: 'Supplements', icon: '💊' },
    { id: 'apparel', name: 'Apparel', icon: '👕' },
    { id: 'equipment', name: 'Equipment', icon: '🏋️' },
    { id: 'programs', name: 'Programs', icon: '📚' }
  ];

  const products = [
    {
      id: 1,
      name: 'Whey Protein Gold',
      category: 'supplements',
      price: 34.99,
      rating: 4.9,
      reviews: 234,
      image: '💊',
      discount: 20,
      stock: true,
      description: 'Premium whey protein isolate',
      featured: true
    },
    {
      id: 2,
      name: 'Creatine Monohydrate',
      category: 'supplements',
      price: 16.99,
      rating: 4.7,
      reviews: 567,
      image: '💊',
      discount: 0,
      stock: true,
      description: 'Pure creatine monohydrate powder',
      featured: true
    },
    {
      id: 3,
      name: 'Athletic T-Shirt',
      category: 'apparel',
      price: 24.99,
      rating: 4.6,
      reviews: 123,
      image: '👕',
      discount: 15,
      stock: true,
      description: 'Breathable performance shirt',
      featured: false
    },
    {
      id: 4,
      name: 'Resistance Bands Set',
      category: 'equipment',
      price: 29.99,
      rating: 4.8,
      reviews: 345,
      image: '🏋️',
      discount: 25,
      stock: true,
      description: '5-piece resistance band set',
      featured: true
    },
    {
      id: 5,
      name: 'Push-Up Bars',
      category: 'equipment',
      price: 19.99,
      rating: 4.5,
      reviews: 89,
      image: '🏋️',
      discount: 10,
      stock: true,
      description: 'Non-slip push-up handles',
      featured: false
    },
    {
      id: 6,
      name: 'BCAA Supplement',
      category: 'supplements',
      price: 28.99,
      rating: 4.7,
      reviews: 234,
      image: '💊',
      discount: 0,
      stock: true,
      description: 'Branched-chain amino acids',
      featured: false
    },
    {
      id: 7,
      name: 'Advanced Strength Program',
      category: 'programs',
      price: 49.99,
      rating: 4.9,
      reviews: 456,
      image: '📚',
      discount: 30,
      stock: true,
      description: '12-week advanced program',
      featured: true,
      isPremium: true
    },
    {
      id: 8,
      name: 'Gym Shorts',
      category: 'apparel',
      price: 19.99,
      rating: 4.4,
      reviews: 92,
      image: '👖',
      discount: 20,
      stock: true,
      description: 'Lightweight training shorts',
      featured: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const renderProduct = (product) => {
    const finalPrice = product.price * (1 - product.discount / 100);
    return (
      <div key={product.id} className="bg-dark-secondary border border-metallic border-opacity-30 rounded-lg overflow-hidden hover:border-accent hover:border-opacity-50 transition">
        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-dark to-dark-secondary flex items-center justify-center text-5xl relative">
          {product.image}
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
              -{product.discount}%
            </div>
          )}
          {product.featured && (
            <div className="absolute top-2 left-2 bg-accent text-dark px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
              <Zap size={12} />
              Hot
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-3">
          <h3 className="font-bold text-sm mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-metallic text-xs mb-2 line-clamp-1">{product.description}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold">{product.rating}</span>
            <span className="text-metallic text-xs">({product.reviews})</span>
          </div>

          {/* Price */}
          <div className="mb-2">
            {product.discount > 0 ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-accent">${finalPrice.toFixed(2)}</span>
                <span className="text-xs text-metallic line-through">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-accent">${product.price.toFixed(2)}</span>
            )}
          </div>

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-accent hover:bg-green-400 text-dark font-bold py-2 rounded-lg transition text-sm flex items-center justify-center gap-2"
          >
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark via-dark-secondary to-dark font-sport text-white pb-28">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-dark-secondary border-b border-metallic border-opacity-20 backdrop-blur-sm">
        <div className="max-w-md mx-auto px-6 py-4">
          <h1 className="text-2xl font-bold">Shop</h1>
          <p className="text-metallic text-sm">Premium fitness products</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-6">
        {/* Search and Filter */}
        <div className="mt-6 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-metallic" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-secondary border border-metallic border-opacity-30 rounded-lg pl-10 pr-4 py-3 text-white placeholder-metallic focus:border-accent focus:border-opacity-50 outline-none transition"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-6 px-6">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 rounded-full whitespace-nowrap font-bold text-sm transition ${
                  selectedCategory === cat.id
                    ? 'bg-accent text-dark'
                    : 'bg-dark-secondary border border-metallic border-opacity-30 hover:border-metallic hover:border-opacity-50'
                }`}
              >
                <span className="mr-1">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Banner */}
        {filteredProducts.some(p => p.featured) && (
          <div className="mt-6 bg-gradient-to-r from-accent to-green-400 rounded-lg p-6 text-dark">
            <h3 className="text-lg font-bold mb-1">🔥 Hot Deals</h3>
            <p className="text-sm mb-3 opacity-90">Limited time offers on popular items</p>
            <button className="bg-dark hover:bg-dark-secondary px-4 py-2 rounded-lg font-bold text-sm transition">
              View Deals
            </button>
          </div>
        )}

        {/* Products Grid */}
        <div className="mt-6 grid grid-cols-2 gap-3 mb-6">
          {filteredProducts.map(renderProduct)}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-metallic mb-4">No products found</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="bg-accent text-dark font-bold px-4 py-2 rounded-lg hover:bg-green-400 transition"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="fixed bottom-28 left-0 right-0 bg-dark-secondary border-t border-metallic border-opacity-30">
            <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
              <div>
                <p className="text-metallic text-sm">Cart ({cart.length} items)</p>
                <p className="text-2xl font-bold text-accent">${cartTotal.toFixed(2)}</p>
              </div>
              <button className="bg-accent hover:bg-green-400 text-dark font-bold px-6 py-3 rounded-lg transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}