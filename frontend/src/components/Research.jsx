import React, { useState } from 'react';
import { projects } from '../mock';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="overflow-hidden border-2 border-gray-100 hover:border-teal-300 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0A2463] via-[#0A2463]/50 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-90' : 'opacity-60'
        }`}></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        </div>
      </div>

      <CardContent className="p-6">
        <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-[#0A2463] mb-2">Tools & Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="bg-teal-100 text-teal-700 hover:bg-teal-200">
                {tool}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 flex items-start gap-2">
            <span className="font-semibold text-[#0A2463]">Impact:</span>
            <span>{project.impact}</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

const Research = () => {
  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2463] mb-4">
            Research & Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cutting-edge research in bioinformatics, genomics, and molecular biology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
