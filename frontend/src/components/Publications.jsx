import React from 'react';
import { researchInterests } from '../mock';
import { BookOpen, Target, Lightbulb } from 'lucide-react';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2463] mb-4">
            Research Interests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Areas of scientific exploration and future research directions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchInterests.map((interest, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl hover:border-teal-300 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  {index % 3 === 0 && <BookOpen className="w-6 h-6 text-[#0A2463]" />}
                  {index % 3 === 1 && <Target className="w-6 h-6 text-[#0A2463]" />}
                  {index % 3 === 2 && <Lightbulb className="w-6 h-6 text-[#0A2463]" />}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#0A2463] leading-snug">
                    {interest}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Goals Section */}
        <div className="mt-16 bg-gradient-to-br from-[#0A2463] to-[#00B4D8] p-8 md:p-12 rounded-2xl shadow-2xl">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Future Research Goals
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              Committed to advancing biotechnology research through innovative approaches in genomics, 
              protein engineering, and computational biology. Aspiring to contribute to breakthrough 
              discoveries in personalized medicine and therapeutic development that will impact human health 
              and scientific understanding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
