import React from 'react';
import { ArrowRight, Play, Leaf, Star, Shield, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 bg-slate-200/30 rounded-full blur-2xl animate-bounce-slow"></div>
        
        {/* Responsive grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-12 gap-2 sm:gap-3 lg:gap-4 h-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-slate-300 rounded-sm animate-fade-in"
                style={{ animationDelay: `${i * 0.01}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Responsive Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <div className="flex items-center space-x-2 sm:space-x-3 animate-slide-in-left">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <span className="text-slate-900 font-bold text-lg sm:text-xl tracking-tight">GoSharpSharp</span>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 animate-slide-in-right">
          <a href="#features" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-300 hover:scale-105 transform">Features</a>
          <a href="#how-it-works" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-300 hover:scale-105 transform">How it Works</a>
          <a href="#testimonials" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors duration-300 hover:scale-105 transform">Reviews</a>
          <button className="bg-emerald-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
            Download App
          </button>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 text-slate-700 hover:text-emerald-600 transition-colors duration-300">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-current transform transition-transform duration-300"></div>
            <div className="w-full h-0.5 bg-current transform transition-transform duration-300"></div>
            <div className="w-full h-0.5 bg-current transform transition-transform duration-300"></div>
          </div>
        </button>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content - Responsive typography */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-slide-in-up">
            {/* Trust indicators - Responsive layout */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                <span>4.8 Rating</span>
              </div>
              <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-600" />
                <span>Secure & Trusted</span>
              </div>
              <div className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                <span>Lightning Fast</span>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
                One App.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">Two Powers.</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light max-w-lg leading-relaxed animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
                Send parcels and order food seamlessly. Experience the future of on-demand services.
              </p>
            </div>
            
            {/* Responsive CTA section */}
            <div className="space-y-4 sm:space-y-6 animate-slide-in-up" style={{ animationDelay: '0.7s' }}>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="group bg-slate-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform touch-manipulation">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Google Play</span>
                </button>
                <button className="group bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center space-x-3 hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl border border-slate-200 hover:scale-105 transform touch-manipulation">
                  <span>App Store</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Social proof - Responsive layout */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-slate-500">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white animate-bounce" style={{ animationDelay: '1s' }}></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white animate-bounce" style={{ animationDelay: '1.2s' }}></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white animate-bounce" style={{ animationDelay: '1.4s' }}></div>
                </div>
                <span>Join 50,000+ happy users</span>
              </div>
            </div>
          </div>

          {/* Right content - Responsive app showcase */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right" style={{ animationDelay: '0.8s' }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative w-64 sm:w-72 lg:w-80 h-96 sm:h-[450px] lg:h-[500px] bg-slate-900 rounded-3xl p-2 shadow-2xl hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Phone header */}
                  <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 h-12 sm:h-16 flex items-center justify-center relative">
                    <div className="absolute top-2 sm:top-3 left-4 w-8 sm:w-12 h-0.5 sm:h-1 bg-white/30 rounded-full animate-pulse"></div>
                    <h3 className="text-white font-semibold text-sm sm:text-base">GoSharpSharp</h3>
                  </div>
                  
                  {/* App content - Responsive */}
                  <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 sm:p-6 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer animate-fade-in" style={{ animationDelay: '1.5s' }}>
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-emerald-600 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-md"></div>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-emerald-800">Parcel</span>
                      </div>
                      <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 rounded-2xl text-center hover:scale-105 transition-transform cursor-pointer animate-fade-in" style={{ animationDelay: '1.7s' }}>
                        <div className="w-8 h-8 sm:w-12 sm:h-12 bg-slate-600 rounded-xl mx-auto mb-2 sm:mb-3 flex items-center justify-center">
                          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white rounded-md"></div>
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-slate-800">Food</span>
                      </div>
                    </div>
                    
                    {/* Progress indicators - Responsive */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-600">
                          <span>Active Orders</span>
                          <span>3 of 5</span>
                        </div>
                        <div className="h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full w-3/5 transition-all duration-1000 animate-progress"></div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-50 rounded-xl p-3 sm:p-4 animate-fade-in" style={{ animationDelay: '2s' }}>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                          <span className="text-xs sm:text-sm text-slate-700">Order #1234 - In Transit</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements - Responsive positioning */}
      <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-10 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-bounce"></div>
      <div className="absolute top-1/3 right-8 sm:right-20 w-2 h-2 sm:w-3 sm:h-3 bg-slate-400 rounded-full animate-pulse"></div>
    </section>
  );
};

export default Hero;