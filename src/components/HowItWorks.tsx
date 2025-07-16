import React from 'react';
import { Smartphone, MousePointer, MapPin, CheckCircle, Zap, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Download & Sign Up',
      description: 'Get the app and create your account in seconds',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700'
    },
    {
      icon: <MousePointer className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Choose Service',
      description: 'Select parcel delivery or food ordering',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700'
    },
    {
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Place Order',
      description: 'Enter details and confirm your request',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700'
    },
    {
      icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Track Progress',
      description: 'Monitor in real-time with live updates',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700'
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Receive & Enjoy',
      description: 'Get your delivery fast and secure',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Responsive section header */}
        <div className="text-center mb-16 sm:mb-20 animate-slide-in-up">
          <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6 animate-fade-in">
            <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            How It
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">Works</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
            Get started in minutes with our streamlined process designed for maximum convenience
          </p>
        </div>

        {/* Responsive process flow */}
        <div className="relative">
          {/* Connection line - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute top-20 xl:top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-blue-200 via-purple-200 via-orange-200 to-green-200 animate-progress"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group animate-slide-in-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                {/* Step card */}
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group-hover:border-slate-200 hover:scale-105 transform touch-manipulation">
                  {/* Step number */}
                  <div className="absolute -top-3 sm:-top-4 left-6 sm:left-8 w-6 h-6 sm:w-8 sm:h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-bold shadow-lg animate-bounce" style={{ animationDelay: `${1 + index * 0.1}s` }}>
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 ${step.bgColor} rounded-2xl flex items-center justify-center ${step.textColor} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 mx-auto sm:mx-0`}>
                    {step.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector (desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 animate-pulse">
                      <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 text-slate-300" />
                    </div>
                  )}
                </div>

                {/* Mobile connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-3 sm:py-4">
                    <div className="w-0.5 h-6 sm:h-8 bg-slate-200 animate-progress"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Responsive CTA section */}
        <div className="text-center mt-16 sm:mt-20 animate-slide-in-up" style={{ animationDelay: '1.8s' }}>
          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-6 sm:p-8 text-white hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to get started?</h3>
            <p className="text-sm sm:text-base text-emerald-100 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust GoSharpSharp for their daily delivery needs
            </p>
            <button className="bg-white text-emerald-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform touch-manipulation">
              Download Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;