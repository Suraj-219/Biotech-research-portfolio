import React from 'react';
import { certifications } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Award, Calendar } from 'lucide-react';

const CertificationCard = ({ cert, index }) => {
  return (
    <Card className="border-2 border-gray-100 hover:border-teal-300 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 group">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <div className="p-3 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
            <Award className="w-7 h-7 text-[#0A2463]" />
          </div>
          <div className="flex items-center gap-1 text-teal-600 bg-teal-50 px-3 py-1 rounded-full">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">{cert.year}</span>
          </div>
        </div>
        <CardTitle className="text-xl text-[#0A2463] leading-snug">{cert.title}</CardTitle>
        <CardDescription className="text-base font-medium text-gray-700">{cert.issuer}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">{cert.description}</p>
      </CardContent>
    </Card>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2463] mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional training and specialized certifications in biotechnology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
