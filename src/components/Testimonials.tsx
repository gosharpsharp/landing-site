import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Verified } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'Aisha Thompson',
      location: 'Lagos, Nigeria',
      role: 'Small Business Owner',
      text: 'GoSharpSharp has revolutionized how I handle my business logistics. The parcel service is incredibly reliable, and I love ordering lunch through the same app. It\'s become essential to my daily routine.',
      rating: 5,
      avatar: 'AT',
      gradient: 'from-emerald-500 to-emerald-600',
      verified: true
    },
    {
      name: 'David Kalu',
      location: 'Abuja, Nigeria',
      role: 'Marketing Executive',
      text: 'Finally, one app that does everything I need! The interface is clean, delivery is fast, and customer service is top-notch. I\'ve recommended it to all my colleagues.',
      rating: 5,
      avatar: 'DK',
      gradient: 'from-blue-500 to-blue-600',
      verified: true
    },
    {
      name: 'Funmi Okafor',
      location: 'Port Harcourt, Nigeria',
      role: 'Freelance Designer',
      text: 'The real-time tracking feature is amazing. I always know exactly where my parcels are, and the food delivery is consistently fresh and on time. Highly recommended!',
      rating: 5,
      avatar: 'FO',
      gradient: 'from-purple-500 to-purple-600',
      verified: true
    },
    {
      name: 'Kemi Adebayo',
      location: 'Ibadan, Nigeria',
      role: 'University Student',
      text: 'As a student, I appreciate the affordable pricing and quick service. Whether I\'m sending documents or ordering dinner, GoSharpSharp never disappoints.',
      rating: 5,
      avatar: 'KA',
      gradient: 'from-pink-500 to-pink-600',
      verified: true
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setIsAutoPlaying(false);
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Responsive section header */}
        <div className="text-center mb-16 sm:mb-20 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fade-in">
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
            <span>Customer Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            What Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">Users Say</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            Join thousands of satisfied customers who trust GoSharpSharp for their daily needs
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main testimonial card */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden border border-slate-100 animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-full blur-3xl opacity-30 -translate-y-24 sm:-translate-y-32 translate-x-24 sm:translate-x-32 animate-pulse"></div>
            
            <div className="relative z-10">
              {/* Quote icon */}
              <div className="flex justify-center mb-6 sm:mb-8 animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex justify-center mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-current mx-0.5 sm:mx-1 animate-bounce" 
                    style={{ animationDelay: `${1.3 + i * 0.1}s` }}
                  />
                ))}
              </div>
              
              {/* Testimonial text */}
              <blockquote className="text-lg sm:text-xl lg:text-2xl text-slate-800 mb-8 sm:mb-10 font-light leading-relaxed text-center italic animate-fade-in" style={{ animationDelay: '1.4s' }}>
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              {/* User info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-in-up" style={{ animationDelay: '1.6s' }}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${testimonials[currentTestimonial].gradient} rounded-full flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg hover:scale-110 transition-transform duration-300`}>
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start space-x-2 mb-1">
                    <p className="font-bold text-slate-900 text-base sm:text-lg">{testimonials[currentTestimonial].name}</p>
                    {testimonials[currentTestimonial].verified && (
                      <Verified className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 fill-current animate-pulse" />
                    )}
                  </div>
                  <p className="text-slate-600 text-sm">{testimonials[currentTestimonial].role}</p>
                  <div className="flex items-center justify-center sm:justify-start space-x-1 text-slate-500 text-sm">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{testimonials[currentTestimonial].location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8 sm:mt-12 space-y-4 sm:space-y-0">
            <button
              onClick={prevTestimonial}
              className="group p-3 sm:p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 hover:text-emerald-600 border border-slate-200 hover:border-emerald-200 hover:scale-110 transform touch-manipulation"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition-transform" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-manipulation ${
                    index === currentTestimonial 
                      ? 'bg-emerald-600 scale-125' 
                      : 'bg-slate-300 hover:bg-emerald-300 hover:scale-110'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="group p-3 sm:p-4 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 hover:text-emerald-600 border border-slate-200 hover:border-emerald-200 hover:scale-110 transform touch-manipulation"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Responsive stats section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {[
              { value: '50K+', label: 'Happy Users' },
              { value: '4.8★', label: 'App Rating' },
              { value: '1M+', label: 'Deliveries' },
              { value: '500+', label: 'Restaurant Partners' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${2 + index * 0.1}s` }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;