import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, ArrowRight, Mail, Phone, MapPin, Leaf, Star, Users, Shield } from 'lucide-react';

const FinalCTA = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 sm:w-72 lg:w-80 h-60 sm:h-72 lg:h-80 bg-white/5 rounded-full blur-2xl animate-bounce-slow"></div>
        
        {/* Responsive grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 sm:grid-cols-10 lg:grid-cols-12 gap-2 sm:gap-3 lg:gap-4 h-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-white/20 rounded-sm animate-fade-in"
                style={{ animationDelay: `${i * 0.01}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Main CTA section - Responsive */}
        <div className="text-center mb-16 sm:mb-20 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fade-in">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            <span>Join 50,000+ Users</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            Ready to Go
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-green-200">Sharp Sharp?</span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto mb-12 sm:mb-16 font-light animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            Download GoSharpSharp today and experience the future of parcel delivery and food ordering
          </p>
          
          {/* Download buttons - Responsive */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            <button className="group bg-slate-900 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold flex items-center justify-center space-x-3 hover:bg-slate-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform touch-manipulation">
              <Play className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>Get it on Google Play</span>
            </button>
            <button className="group bg-white text-slate-800 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold flex items-center justify-center space-x-3 hover:bg-emerald-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform touch-manipulation">
              <span>Download on the App Store</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trust indicators - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {[
              { icon: Users, value: '50,000+', label: 'Active Users' },
              { icon: Star, value: '4.8★', label: 'App Store Rating' },
              { icon: Shield, value: '100%', label: 'Secure & Safe' }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 transform animate-slide-in-up"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white mx-auto mb-3 sm:mb-4" />
                <div className="text-xl sm:text-2xl font-bold text-white mb-2">{item.value}</div>
                <div className="text-sm sm:text-base text-emerald-100">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Newsletter signup - Responsive */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-md mx-auto border border-white/20 animate-slide-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white mr-2" />
              <h3 className="text-lg sm:text-xl font-bold text-white">Stay Updated</h3>
            </div>
            <p className="text-emerald-100 text-sm mb-4 sm:mb-6">Get the latest updates and exclusive offers</p>
            
            {isSubscribed ? (
              <div className="bg-green-500 text-white py-3 sm:py-4 rounded-xl text-center font-semibold animate-bounce">
                ✓ Successfully subscribed!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white mb-3 sm:mb-0 touch-manipulation"
                  required
                />
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-yellow-400 to-green-400 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl font-semibold hover:from-yellow-300 hover:to-green-300 transition-all duration-300 hover:scale-105 transform touch-manipulation"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer - Responsive */}
        <div className="border-t border-white/20 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center sm:text-left">
            {/* Brand */}
            <div className="space-y-4 sm:space-y-6 animate-slide-in-up" style={{ animationDelay: '1.4s' }}>
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <span className="text-white font-bold text-lg sm:text-xl">GoSharpSharp</span>
              </div>
              <p className="text-emerald-100 leading-relaxed text-sm">
                Your ultimate app for fast parcel delivery and delicious food ordering.
              </p>
            </div>
            
            {/* Services */}
            <div className="space-y-4 sm:space-y-6 animate-slide-in-up" style={{ animationDelay: '1.5s' }}>
              <h4 className="text-white font-semibold">Services</h4>
              <div className="space-y-2 sm:space-y-3 text-emerald-100 text-sm">
                {['Parcel Delivery', 'Food Ordering', 'Real-time Tracking', 'Business Solutions'].map((service, index) => (
                  <div key={index} className="hover:text-white transition-colors cursor-pointer">{service}</div>
                ))}
              </div>
            </div>
            
            {/* Support */}
            <div className="space-y-4 sm:space-y-6 animate-slide-in-up" style={{ animationDelay: '1.6s' }}>
              <h4 className="text-white font-semibold">Support</h4>
              <div className="space-y-2 sm:space-y-3 text-emerald-100 text-sm">
                {['Help Center', 'Contact Us', 'Track Order', 'Report Issue'].map((support, index) => (
                  <div key={index} className="hover:text-white transition-colors cursor-pointer">{support}</div>
                ))}
              </div>
            </div>
            
            {/* Contact */}
            <div className="space-y-4 sm:space-y-6 animate-slide-in-up" style={{ animationDelay: '1.7s' }}>
              <h4 className="text-white font-semibold">Contact</h4>
              <div className="space-y-3 sm:space-y-4 text-emerald-100 text-sm">
                <div className="flex items-center justify-center sm:justify-start space-x-3 hover:text-white transition-colors">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>+234 800 SHARP</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3 hover:text-white transition-colors">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>hello@gosharpsharp.com</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3 hover:text-white transition-colors">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Lagos, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom footer - Responsive */}
          <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20 animate-slide-in-up" style={{ animationDelay: '1.8s' }}>
            <p className="text-emerald-100 mb-4">
              © 2024 GoSharpSharp. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm">
              <Link to="/privacy" className="text-emerald-100 hover:text-white transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-emerald-100 hover:text-white transition-colors hover:underline">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;