import React from 'react';
import { Briefcase, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { portfolioData } from '../data/mockData';

const Journey = () => {
  const { journey } = portfolioData;

  return (
    <section id="journey" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional growth in AI engineering
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-teal-500 transform md:-translate-x-1/2"></div>

            {journey.map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10">
                  <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
                </div>

                {/* Content Card */}
                <Card
                  className={`ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  } bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10`}
                >
                  <CardContent className="p-6">
                    {/* Year Badge */}
                    <div className="mb-4">
                      <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 text-lg px-3 py-1">
                        {item.year}
                      </Badge>
                    </div>

                    {/* Title & Company */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-cyan-500/10 rounded-lg mt-1">
                        {item.year === '2024' ? (
                          <TrendingUp className="h-5 w-5 text-cyan-400" />
                        ) : (
                          <Briefcase className="h-5 w-5 text-cyan-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-cyan-400 text-sm">{item.company}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Key Achievements:</p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                            <span className="text-teal-400 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;