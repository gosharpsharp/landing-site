import React from 'react';
import { Users, Target, Award, Globe, Zap, Shield, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { value: '50,000+', label: 'Active Users', icon: Users },
    { value: '1M+', label: 'Deliveries Completed', icon: TrendingUp },
    { value: '500+', label: 'Restaurant Partners', icon: Globe },
    { value: '4.8★', label: 'App Store Rating', icon: Award }
  ];

  const values = [
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Speed & Efficiency',
      description: 'We deliver with lightning speed while maintaining the highest quality standards.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Trust & Security',
      description: 'Your safety and security are our top priorities in every transaction.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Customer First',
      description: 'Every decision we make is centered around improving your experience.',
      color: 'from-pink-500 to-red-500'
    },
    {
      icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Innovation',
      description: 'We continuously innovate to bring you the best delivery solutions.',
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const team = [
    {
      name: 'Adebayo Johnson',
      role: 'CEO & Founder',
      image: 'AJ',
      bio: 'Visionary leader with 10+ years in logistics and technology.',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'Kemi Okafor',
      role: 'CTO',
      image: 'KO',
      bio: 'Tech expert passionate about building scalable solutions.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      name: 'David Adeyemi',
      role: 'Head of Operations',
      image: 'DA',
      bio: 'Operations specialist ensuring smooth delivery experiences.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Funmi Balogun',
      role: 'Head of Marketing',
      image: 'FB',
      bio: 'Creative marketer connecting with our amazing community.',
      gradient: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 animate-slide-in-up">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-fade-in">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>About GoSharpSharp</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-6 sm:mb-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Revolutionizing
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">Delivery Services</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-light animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              We're on a mission to make parcel delivery and food ordering seamless, fast, and reliable for everyone across Nigeria and beyond.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105 transform animate-slide-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <stat.icon className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm sm:text-base text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Story</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Founded in 2020, GoSharpSharp was born from a simple observation: people needed a reliable, 
                  fast way to send parcels and order food without juggling multiple apps.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  What started as a small team of five passionate individuals has grown into Nigeria's 
                  leading dual-service platform, serving over 50,000 active users across major cities.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Today, we're proud to have completed over 1 million deliveries while maintaining 
                  our commitment to speed, reliability, and exceptional customer service.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center animate-slide-in-right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-3xl blur-xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl font-bold mb-2">2020</div>
                      <div className="text-emerald-100">Founded</div>
                    </div>
                    <div className="h-px bg-emerald-400/30"></div>
                    <div className="grid grid-cols-2 gap-6 text-center">
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold">5</div>
                        <div className="text-emerald-100 text-sm">Team Members</div>
                      </div>
                      <div>
                        <div className="text-2xl sm:text-3xl font-bold">1</div>
                        <div className="text-emerald-100 text-sm">City</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-emerald-100 text-sm">To Today's Success</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 animate-slide-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Our Mission &
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">Core Values</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light">
              We're driven by a clear mission and guided by values that shape every decision we make
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl mb-16 sm:mb-20 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center">
              <Target className="w-12 h-12 sm:w-16 sm:h-16 text-emerald-600 mx-auto mb-6" />
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">Our Mission</h3>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                To revolutionize the delivery experience in Nigeria by providing a unified platform that 
                makes parcel delivery and food ordering fast, reliable, and accessible to everyone, 
                while supporting local businesses and creating economic opportunities.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 transform animate-slide-in-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-16 sm:mb-20 animate-slide-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Meet Our
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500">Amazing Team</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-light">
              The passionate individuals behind GoSharpSharp's success
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center group animate-slide-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/20 to-emerald-600/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className={`relative w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-white font-bold text-xl sm:text-2xl mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                    {member.image}
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">{member.name}</h4>
                <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-emerald-600 to-emerald-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="animate-slide-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Join Our Journey?
            </h2>
            <p className="text-lg sm:text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Experience the future of delivery services with GoSharpSharp
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-700 px-8 py-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Download App
              </button>
              <button className="bg-emerald-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;