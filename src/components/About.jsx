import React from 'react';
import { User, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { portfolioData } from '../data/mockData';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <User className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{personal.name}</h3>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="h-4 w-4" />
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed">
                {personal.bio}
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{personal.experience}</div>
                  <div className="text-slate-400 text-sm">Experience</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{portfolioData.projects.length}+</div>
                  <div className="text-slate-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{portfolioData.certifications.length}</div>
                  <div className="text-slate-400 text-sm">Certifications</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;