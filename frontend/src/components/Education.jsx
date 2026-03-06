import React from 'react';
import { education } from '../mock';
import { GraduationCap, Calendar } from 'lucide-react';

const EducationItem = ({ edu, index, isLast }) => {
  return (
    <div className="relative flex gap-6 group">
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-teal-500 to-blue-500 opacity-30"></div>
      )}

      {/* Timeline Dot */}
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-1 pb-12">
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:border-teal-200">
          <div className="flex items-center gap-2 text-teal-600 mb-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{edu.duration}</span>
          </div>
          <h3 className="text-2xl font-bold text-[#0A2463] mb-2">{edu.degree}</h3>
          <p className="text-lg text-gray-700 font-medium mb-3">{edu.institution}</p>
          <p className="text-gray-600 leading-relaxed">{edu.description}</p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2463] mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Academic journey in biotechnology and life sciences
          </p>
        </div>

        <div className="space-y-0">
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              edu={edu}
              index={index}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
