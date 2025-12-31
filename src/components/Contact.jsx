// import React, { useState } from 'react';
// import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
// import { Card, CardContent } from './ui/card';
// import { Button } from './ui/button';
// import { Input } from './ui/input';
// import { Textarea } from './ui/textarea';
// import { useToast } from '../hooks/use-toast';
// import { portfolioData } from '../data/mockData';

// const Contact = () => {
//   const { personal } = portfolioData;
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Mock form submission
//     toast({
//       title: "Message Sent!",
//       description: "Thanks for reaching out. I'll get back to you soon.",
//     });
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact" className="py-20 bg-slate-950">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Get In <span className="text-cyan-400">Touch</span>
//           </h2>
//           <p className="text-slate-400 text-lg max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? Let's connect!
//           </p>
//           <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
//           {/* Contact Information */}
//           <Card className="bg-slate-800/50 border-slate-700">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-cyan-500/10 rounded-lg">
//                     <Mail className="h-5 w-5 text-cyan-400" />
//                   </div>
//                   <div>
//                     <p className="text-slate-400 text-sm mb-1">Email</p>
//                     <a href={`mailto:${personal.email}`} className="text-white hover:text-cyan-400 transition-colors">
//                       {personal.email}
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-cyan-500/10 rounded-lg">
//                     <Phone className="h-5 w-5 text-cyan-400" />
//                   </div>
//                   <div>
//                     <p className="text-slate-400 text-sm mb-1">Phone</p>
//                     <a href={`tel:${personal.phone}`} className="text-white hover:text-cyan-400 transition-colors">
//                       {personal.phone}
//                     </a>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-cyan-500/10 rounded-lg">
//                     <MapPin className="h-5 w-5 text-cyan-400" />
//                   </div>
//                   <div>
//                     <p className="text-slate-400 text-sm mb-1">Location</p>
//                     <p className="text-white">{personal.location}</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-8 pt-8 border-t border-slate-700">
//                 <p className="text-slate-400 text-sm mb-4">Connect with me</p>
//                 <div className="flex gap-4">
//                   <a
//                     href={`https://${personal.linkedin}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
//                   >
//                     <Linkedin className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
//                   </a>
//                   <a
//                     href={`https://${personal.github}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
//                   >
//                     <Github className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
//                   </a>
//                   <a
//                     href={`mailto:${personal.email}`}
//                     className="p-3 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all group"
//                   >
//                     <Mail className="h-5 w-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
//                   </a>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>

//           {/* Contact Form */}
//           {/* <Card className="bg-slate-800/50 border-slate-700">
//             <CardContent className="p-8">
//               <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="text-slate-300 text-sm mb-2 block">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="Your name"
//                     required
//                     className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="text-slate-300 text-sm mb-2 block">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="your.email@example.com"
//                     required
//                     className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="text-slate-300 text-sm mb-2 block">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder="Your message..."
//                     required
//                     rows={5}
//                     className="bg-slate-900/50 border-slate-700 text-white placeholder:text-slate-500 focus:border-cyan-500 resize-none"
//                   />
//                 </div>

//                 <Button
//                   type="submit"
//                   className="w-full bg-cyan-600 hover:bg-cyan-700 text-white border-0"
//                   size="lg"
//                 >
//                   Send Message
//                   <Send className="ml-2 h-5 w-5" />
//                 </Button>
//               </form>
//             </CardContent>
//           </Card> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="flex justify-center max-w-6xl mx-auto">
        <Card className="bg-slate-800/50 border-slate-700 w-full max-w-xl">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center text-cyan-400">
              Contact Information
            </h2>

            <div className="space-y-4 text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>sannidhigajiwala@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-400" />
                <span>+1 (587)-938-6368</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-red-400" />
                <span>Edmonton, Alberta, Canada</span>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-blue-500" />
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  LinkedIn Profile
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-gray-400" />
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  GitHub Profile
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
