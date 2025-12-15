import React from 'react';
import { Award, Calendar, Hash } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mockData';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Professional certifications validating my expertise
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Award className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 text-sm mb-3">{cert.issuer}</p>
                    
                    <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Hash className="h-4 w-4" />
                        <span className="font-mono text-xs">{cert.credentialId}</span>
                      </div>
                    </div>
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

export default Certifications;