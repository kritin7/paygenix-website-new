// frontend/src/components/Team.jsx

import React from 'react';
import { teamMembers } from '../data/mock';
import { Linkedin } from 'lucide-react';

const Team = () => {
  // Generate initials for avatar fallback
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const getGradient = (index) => {
    const gradients = [
      'from-teal-400 to-teal-600',
      'from-cyan-400 to-cyan-600',
      'from-emerald-400 to-emerald-600'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* ... (Header content) */}

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 text-center"
            >
              {/* Avatar Container */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${getGradient(index)} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {getInitials(member.name)}
                  </div>
                )}
                
                {/* LinkedIn Badge */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-1 -right-1 w-8 h-8 bg-slate-900 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>

              {/* ... (Member info and badges) */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
