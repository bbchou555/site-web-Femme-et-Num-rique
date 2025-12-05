import React from 'react';
import { Users, Mail, GraduationCap, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS, PRESENTATION_TEXT } from '../constants';

const TeamSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Presentation Text Column */}
      <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-primary/20 rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-2xl font-display font-bold">Notre Démarche</h3>
        </div>
        <div className="prose prose-invert prose-p:text-gray-300 prose-p:leading-relaxed flex-1">
          <p className="whitespace-pre-line text-lg">
            {PRESENTATION_TEXT}
          </p>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Conditions Générales</p>
            <div className="flex items-center gap-2 mt-2 text-green-400 text-sm font-medium">
                <CheckCircle2 className="w-4 h-4" />
                Document lu et accepté (Discord)
            </div>
        </div>
      </div>

      {/* Team Members Column */}
      <div className="lg:col-span-7 space-y-4">
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-teal-500/20 rounded-lg">
                    <Users className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-2xl font-display font-bold">L'Équipe du Projet</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {TEAM_MEMBERS.map((member, idx) => (
                    <div key={idx} className={`p-4 rounded-xl border transition-all ${member.isLead ? 'bg-primary/10 border-primary/30' : 'bg-white/5 border-white/5 hover:border-white/20'}`}>
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-lg text-white">{member.firstName} {member.lastName}</h4>
                            {member.isLead && <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-bold uppercase">Resp.</span>}
                        </div>
                        <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                        
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-xs text-gray-400">
                                <GraduationCap className="w-3.5 h-3.5" />
                                <span className="truncate">{member.formation || "Université de Tours"}</span>
                            </div>
                            {member.email && (
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Mail className="w-3.5 h-3.5" />
                                    <span className="truncate">{member.email}</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;