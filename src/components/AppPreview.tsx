import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Star } from 'lucide-react';

const AppPreview = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const screens = [
    {
      title: 'Home Dashboard',
      description: 'Intuitive interface to choose between parcel delivery and food ordering',
      category: 'Navigation',
      image: 'dashboard'
    },
    {
      title: 'Parcel Tracking',
      description: 'Real-time GPS tracking with detailed delivery progress updates',
      category: 'Logistics',
      image: 'tracking'
    },
    {
      title: 'Restaurant Menu',
      description: 'Browse curated restaurants with detailed menus and reviews',
      category: 'Food',
      image: 'menu'
    },
    {
      title: 'Order Management',
      description: 'Comprehensive order history and status management system',
      category: 'Management',
      image: 'orders'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentScreen((prev) => (prev + 1) % screens.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, screens.length]);

  const nextScreen = () => {
    setIsAutoPlaying(false);
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setIsAutoPlaying(false);
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const goToScreen = (index) => {
    setIsAutoPlaying(false);
    setCurrentScreen(index);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Responsive section header */}
        <div className="text-center mb-16 sm:mb-20 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-emerald-900/50 text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fade-in">
            <Smartphone className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>App Interface</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Experience the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">App Interface</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto font-light animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            Discover our beautifully crafted user interface designed for maximum usability and efficiency
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* App preview - Responsive */}
          <div className="flex justify-center animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
            <div className="relative group">
              <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse"></div>
              <div className="relative w-72 sm:w-80 h-[500px] sm:h-[600px] bg-slate-800 rounded-3xl p-2.5 sm:p-3 shadow-2xl border border-slate-700 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Phone header */}
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 h-16 sm:h-20 flex items-center justify-center relative">
                    <div className="absolute top-3 sm:top-4 left-4 flex space-x-1">
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <div className="absolute top-3 sm:top-4 right-4 flex items-center space-x-1">
                      <div className="w-5 sm:w-6 h-1.5 sm:h-2 bg-white/30 rounded-full animate-pulse"></div>
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg">GoSharpSharp</h3>
                  </div>
                  
                  {/* Screen content - Responsive */}
                  <div className="p-4 sm:p-6 h-full bg-gradient-to-b from-white to-slate-50">
                    {/* Category badge */}
                    <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-2.5 sm:px-3 py-1 rounded-full text-xs font-semibold mb-3 sm:mb-4 animate-fade-in">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                      <span>{screens[currentScreen].category}</span>
                    </div>
                    
                    {/* Main content area - Responsive */}
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl h-40 sm:h-48 mb-4 sm:mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                      <div className="absolute inset-3 sm:inset-4 bg-white/40 rounded-xl flex items-center justify-center">
                        <div className="text-emerald-700 text-3xl sm:text-4xl font-bold opacity-60 animate-pulse">
                          {currentScreen + 1}
                        </div>
                      </div>
                      
                      {/* Simulated UI elements */}
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-12 sm:w-16 h-2 sm:h-3 bg-white/50 rounded-full animate-pulse"></div>
                      <div className="absolute top-6 sm:top-8 left-3 sm:left-4 w-8 sm:w-12 h-1.5 sm:h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-500/30 rounded-full animate-bounce"></div>
                    </div>
                    
                    {/* Screen info - Responsive */}
                    <div className="space-y-3 sm:space-y-4">
                      <h4 className="text-base sm:text-lg font-bold text-slate-900 animate-fade-in">
                        {screens[currentScreen].title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {screens[currentScreen].description}
                      </p>
                      
                      {/* Progress indicators - Responsive */}
                      <div className="space-y-2">
                        <div className="h-1.5 sm:h-2 bg-slate-200 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000 animate-progress" 
                            style={{width: `${70 + (currentScreen * 10)}%`}}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500">
                          <span>Loading...</span>
                          <span>{70 + (currentScreen * 10)}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Responsive */}
          <div className="space-y-6 sm:space-y-8 animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white animate-fade-in">
                {screens[currentScreen].title}
              </h3>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {screens[currentScreen].description}
              </p>
            </div>

            {/* Features list - Responsive */}
            <div className="space-y-3 sm:space-y-4">
              {[
                'Intuitive user interface design',
                'Real-time updates and notifications',
                'Seamless navigation between services'
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:bg-slate-700/50 transition-colors duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm sm:text-base text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* Navigation controls - Responsive */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                onClick={prevScreen}
                className="p-2.5 sm:p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors text-white border border-slate-600 hover:scale-110 transform duration-300 touch-manipulation"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              
              <div className="flex space-x-1.5 sm:space-x-2">
                {screens.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToScreen(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                      index === currentScreen 
                        ? 'bg-emerald-500 scale-125' 
                        : 'bg-slate-600 hover:bg-emerald-400 hover:scale-110'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextScreen}
                className="p-2.5 sm:p-3 bg-slate-700 hover:bg-slate-600 rounded-xl transition-colors text-white border border-slate-600 hover:scale-110 transform duration-300 touch-manipulation"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* App store badges - Responsive */}
        <div className="text-center mt-16 sm:mt-20 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
          <div className="inline-flex items-center space-x-2 bg-emerald-900/30 text-emerald-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fade-in">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            <span>Available Now</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-700 hover:scale-105 transform touch-manipulation">
              Download on Google Play
            </button>
            <button className="bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform touch-manipulation">
              Download on App Store
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;