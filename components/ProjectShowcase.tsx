import React from 'react';
import { Play, Download, Image as ImageIcon, Film } from 'lucide-react';

const ProjectShowcase: React.FC = () => {
  return (
    <div className="glass-panel p-8 rounded-3xl border border-white/10 w-full">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-secondary/20 rounded-lg">
          <Film className="w-6 h-6 text-secondary" />
        </div>
        <h3 className="text-3xl font-display font-bold">Nos Supports de Communication</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Video Section */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-video bg-black/50 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl">
            {/* Placeholder for Video */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-primary/20 to-secondary/20 group-hover:opacity-80 transition-opacity">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="text-xs font-bold bg-red-600 text-white px-2 py-1 rounded mb-2 inline-block">LIVE</span>
              <p className="text-white font-medium text-lg drop-shadow-md">Les Femmes qui ont codé l'Histoire</p>
              <p className="text-gray-300 text-sm">Durée: 02:45</p>
            </div>
          </div>
          <div className="flex justify-between items-center px-2">
            <div>
              <h4 className="font-bold text-lg">Vidéo de Sensibilisation</h4>
              <p className="text-gray-400 text-sm">Format MP4 - 1080p</p>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Download className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Flyer Section */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-[1/1.414] bg-white rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
            {/* Placeholder for Flyer Content */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900 p-8 flex flex-col items-center text-center justify-between">
              <div className="w-full text-right">
                <div className="inline-block w-8 h-8 bg-white/20 rounded-full"></div>
              </div>
              <div>
                <h2 className="text-3xl font-display font-black text-white mb-2 uppercase tracking-tighter">Femmes &<br/><span className="text-secondary">Numérique</span></h2>
                <div className="w-16 h-1 bg-primary mx-auto my-4"></div>
                <p className="text-gray-300 text-sm">Rejoignez le mouvement pour plus de mixité dans la tech.</p>
              </div>
              <div className="w-full flex justify-between items-end border-t border-white/20 pt-4">
                 <div className="text-xs text-gray-400 text-left">
                    NUIT DE L'INFO<br/>2025
                 </div>
                 <div className="w-12 h-12 bg-white rounded-lg"></div>
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
              <button className="bg-white text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                <ImageIcon className="w-5 h-5" />
                Voir le Flyer HD
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center px-2">
            <div>
              <h4 className="font-bold text-lg">Flyer Officiel</h4>
              <p className="text-gray-400 text-sm">Format PDF - A4</p>
            </div>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Download className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;