import React from 'react';
import { Button } from './ui/button';
import { ArrowDown, Microscope, Download } from 'lucide-react';
import { personalInfo } from '../mock';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2463] via-[#0D3B66] to-[#00B4D8]">
      {/* Animated DNA Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Molecular Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <Microscope className="w-12 h-12 text-teal-300" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-teal-200 mb-3 font-light">
            {personalInfo.title}
          </p>

          {/* University */}
          <p className="text-lg sm:text-xl text-blue-200 mb-8 font-medium">
            {personalInfo.university}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Exploring the frontiers of molecular biology and bioinformatics to unlock scientific breakthroughs in genomics and therapeutic research.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('research')}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Research
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <a href="/Megha_Resume.pdf"
        download
        className='absolute top-20 right-6 flex items-center gap-2 
      bg-white/10 text-white px-6 py-3 rounded-xl 
      shadow-lg hover:shadow-xl backdrop-blur-md
      hover:bg-white/20 transition-all duration-300 
      hover:scale-105 backdrop-blur-md border-2 border-white/30'>
        <Download size={18} />
        Download Resume</a>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
