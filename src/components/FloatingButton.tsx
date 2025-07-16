import React, { useState, useEffect } from 'react';
import { Download, X, Leaf, Star } from 'lucide-react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
      {isExpanded ? (
        <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 w-72 sm:w-80 border border-slate-200 relative overflow-hidden animate-slide-in-up">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full blur-2xl opacity-50 -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">GoSharpSharp</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-slate-600">4.8 Rating</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1.5 sm:p-2 hover:bg-slate-100 rounded-lg transition-colors touch-manipulation"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-slate-600" />
              </button>
            </div>
            
            <p className="text-slate-600 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed">
              Download now and join 50,000+ users enjoying fast delivery services.
            </p>
            
            <div className="space-y-2 sm:space-y-3">
              <button className="w-full bg-slate-900 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-slate-800 transition-all duration-300 text-xs sm:text-sm hover:scale-105 transform touch-manipulation">
                Google Play Store
              </button>
              <button className="w-full bg-emerald-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-300 text-xs sm:text-sm hover:scale-105 transform touch-manipulation">
                Apple App Store
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(true)}
          className="group bg-emerald-600 text-white p-3 sm:p-4 rounded-full shadow-2xl hover:bg-emerald-700 transition-all duration-300 hover:scale-110 border-4 border-white touch-manipulation animate-bounce"
        >
          <div className="relative">
            <Download className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-0.5 sm:-top-1 -right-0.5 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </div>
        </button>
      )}
    </div>
  );
};

export default FloatingButton;