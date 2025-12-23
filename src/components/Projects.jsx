import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mockData';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my work in AI/ML - from NLP to Computer Vision
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-t-lg h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:bg-cyan-500/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-700">
                  <p className="text-teal-400 text-sm font-medium">Impact: {project.impact}</p>
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                  onClick={() => window.open(project.github, '_blank')}
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                {/* <Button
                  size="sm"
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white border-0"
                  onClick={() => window.open(project.demo, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button> */}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;