import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mockData';

const Accomplishments = () => {
  const { accomplishments } = portfolioData;

  return (
    <section id="accomplishments" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research & <span className="text-cyan-400">Accomplishments</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Published research contributions in Computer Vision and Data Analysis
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {accomplishments.map((item, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <Badge className="mb-3 bg-teal-500/10 text-teal-400 border-teal-500/20">
                      {item.type}
                    </Badge>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-slate-400 text-xs">{item.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;
