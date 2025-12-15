import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/mockData';

const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-slate-400 text-sm">
            <p className="flex items-center gap-2">
              © {currentYear} {personal.name}. Built with
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              and AI
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href={`https://${personal.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;