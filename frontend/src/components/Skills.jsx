import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../mock';
import { Dna, Binary, Layers, Atom, Microscope, BarChart, FlaskConical, TestTube } from 'lucide-react';

const iconMap = {
  dna: Dna,
  binary: Binary,
  layers: Layers,
  atom: Atom,
  microscope: Microscope,
  'bar-chart': BarChart,
  'flask-conical': FlaskConical,
  'test-tube': TestTube
};

const SkillCard = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const cardRef = useRef(null);
  const Icon = iconMap[skill.icon];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = cardRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let current = 0;
        const interval = setInterval(() => {
          current += 2;
          if (current >= skill.level) {
            setAnimatedLevel(skill.level);
            clearInterval(interval);
          } else {
            setAnimatedLevel(current);
          }
        }, 20);
        return () => clearInterval(interval);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div
      ref={cardRef}
      className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg">
          {Icon && <Icon className="w-7 h-7 text-[#0A2463]" />}
        </div>
        <h3 className="text-lg font-semibold text-[#0A2463]">{skill.name}</h3>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
        </div>
      </div>
      <p className="text-right text-sm text-gray-600 mt-2 font-medium">{animatedLevel}%</p>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2463] mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Expertise across molecular biology, computational analysis, and advanced laboratory techniques
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
