import React, { useState } from 'react';
import { Package, MapPin, Clock, Star, Utensils, Truck, Shield, Zap, Users, Award } from 'lucide-react';

const Features = () => {
  const [activeTab, setActiveTab] = useState('parcel');

  const features = {
    parcel: {
      title: 'Parcel Delivery',
      subtitle: 'Professional logistics made simple',
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'emerald',
      items: [
        {
          icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: 'Real-time Tracking',
          description: 'Monitor your parcel journey with live GPS tracking and instant notifications',
          stat: '99.9% accuracy'
        },
        {
          icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: 'Same-day Delivery',
          description: 'Express delivery options available for urgent shipments across the city',
          stat: 'Within 2 hours'
        },
        {
          icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: 'Secure & Insured',
          description: 'Full insurance coverage and secure handling for all your valuable items',
          stat: '100% protected'
        }
      ]
    },
    food: {
      title: 'Food Ordering',
      subtitle: 'Delicious meals at your doorstep',
      icon: <Utensils className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'slate',
      items: [
        {
          icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: 'Top Restaurants',
          description: 'Curated selection of the best local restaurants and cloud kitchens',
          stat: '500+ partners'
        },
        {
          icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: 'Lightning Fast',
          description: 'Average delivery time of 25 minutes with real-time order tracking',
          stat: '25 min average'
        },
        {
          icon: <Award className="w-5 h-5 sm:w-6 sm:h-6" />,
          title: 'Quality Guaranteed',
          description: 'Fresh ingredients, quality control, and satisfaction guarantee',
          stat: '4.8★ rating'
        }
      ]
    }
  };

  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Responsive section header */}
        <div className="text-center mb-16 sm:mb-20 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fade-in">
            <Star className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Dual Functionality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Two Services.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">One Platform.</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            Experience seamless parcel delivery and food ordering in a single, beautifully designed application
          </p>
        </div>

        {/* Responsive tab navigation */}
        <div className="flex justify-center mb-12 sm:mb-16 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="bg-white rounded-2xl p-1.5 sm:p-2 shadow-lg border border-slate-200 w-full max-w-md sm:max-w-none sm:w-auto">
            <div className="flex flex-col sm:flex-row">
              <button
                onClick={() => setActiveTab('parcel')}
                className={`px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 touch-manipulation ${
                  activeTab === 'parcel'
                    ? 'bg-emerald-600 text-white shadow-lg scale-105'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Package className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Parcel Delivery</span>
              </button>
              <button
                onClick={() => setActiveTab('food')}
                className={`px-4 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 sm:space-x-3 mt-2 sm:mt-0 touch-manipulation ${
                  activeTab === 'food'
                    ? 'bg-slate-800 text-white shadow-lg scale-105'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Utensils className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">Food Ordering</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feature content - Responsive grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
            <div className="space-y-4">
              <div className={`inline-flex items-center space-x-3 p-3 sm:p-4 rounded-2xl ${
                activeTab === 'parcel' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-800'
              } transition-all duration-300`}>
                {features[activeTab].icon}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">{features[activeTab].title}</h3>
                  <p className="text-xs sm:text-sm opacity-80">{features[activeTab].subtitle}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {features[activeTab].items.map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:scale-105 transform animate-fade-in"
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className={`p-2 sm:p-3 rounded-xl ${
                      activeTab === 'parcel' 
                        ? 'bg-emerald-100 text-emerald-600' 
                        : 'bg-slate-100 text-slate-600'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-1 sm:mb-0">{item.title}</h4>
                        <span className={`text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full ${
                          activeTab === 'parcel' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {item.stat}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive feature showcase */}
          <div className="flex justify-center animate-slide-in-right" style={{ animationDelay: '1s' }}>
            <div className="relative">
              <div className={`absolute -inset-4 sm:-inset-6 rounded-3xl blur-xl opacity-20 transition-all duration-500 ${
                activeTab === 'parcel' 
                  ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' 
                  : 'bg-gradient-to-r from-slate-400 to-slate-600'
              }`}></div>
              <div className={`relative w-72 sm:w-80 h-80 sm:h-96 rounded-3xl p-6 sm:p-8 shadow-2xl transition-all duration-500 hover:scale-105 transform ${
                activeTab === 'parcel' 
                  ? 'bg-gradient-to-br from-emerald-600 to-emerald-700' 
                  : 'bg-gradient-to-br from-slate-700 to-slate-800'
              }`}>
                <div className="bg-white rounded-2xl h-full p-4 sm:p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900">
                      {features[activeTab].title}
                    </h4>
                    <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full animate-pulse ${
                      activeTab === 'parcel' ? 'bg-emerald-500' : 'bg-slate-500'
                    }`}></div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4 flex-1">
                    {features[activeTab].items.map((item, index) => (
                      <div 
                        key={index} 
                        className="flex items-center space-x-3 p-2.5 sm:p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300 animate-fade-in"
                        style={{ animationDelay: `${1.5 + index * 0.1}s` }}
                      >
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                          activeTab === 'parcel' ? 'bg-emerald-100' : 'bg-slate-200'
                        }`}>
                          <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                            activeTab === 'parcel' ? 'bg-emerald-600' : 'bg-slate-600'
                          }`}></div>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs sm:text-sm font-semibold text-slate-800">{item.title}</div>
                          <div className="text-xs text-slate-500">{item.stat}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;