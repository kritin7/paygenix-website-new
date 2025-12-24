import React from 'react';
import { teamMembers } from '../data/mock';
import { Linkedin } from 'lucide-react';

const Team = () => {
  // Generate initials for avatar
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  // Get gradient based on index
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
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-slate-900 text-white rounded-full text-sm font-semibold mb-4">
            Our Team
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Built by Industry Experts
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A team with deep experience in finance, technology, and AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 text-center"
            >
              {/* Avatar */}
              <div className="relative w-28 h-28 mx-auto mb-6">
                <div className={`w-full h-full rounded-full bg-gradient-to-br ${getGradient(index)} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                  {getInitials(member.name)}
                </div>
                {/* LinkedIn Badge */}
                <a
                  href="#"
                  className="absolute -bottom-1 -right-1 w-8 h-8 bg-slate-900 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {member.name}
              </h3>
              <p className="text-teal-600 font-semibold mb-3">{member.role}</p>
              <p className="text-slate-600 text-sm mb-4">{member.bio}</p>

              {/* Institution Badges */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {member.institutions.map((inst, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full"
                  >
                    {inst}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
