import React from 'react';
import { Code, Brain, Cloud, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mockData';

const Skills = () => {
  const { skills } = portfolioData;

  const skillIcons = {
    'Programming Languages': Code,
    'ML Frameworks': Brain,
    'AI/ML Domains': Brain,
    'MLOps & Tools': Code,
    'Cloud Platforms': Cloud,
    'Databases': Database
  };

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build AI solutions
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList], index) => {
            const IconComponent = skillIcons[category] || Code;
            return (
              <Card
                key={category}
                className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                      <IconComponent className="h-5 w-5 text-cyan-400" />
                    </div>
                    <span className="text-lg">{category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-slate-900/50 text-slate-300 border-slate-700 hover:bg-cyan-500/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;