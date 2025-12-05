import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GENDER_STATS } from '../constants';

const StatsSection: React.FC = () => {
  return (
    <div className="glass-panel p-8 rounded-3xl border border-white/10">
      <div className="mb-8">
        <h3 className="text-3xl font-display font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
          L'Écart des Genres
        </h3>
        <p className="text-gray-400">
          Pourcentage de femmes diplômées en informatique (USA/Europe tendances).
          <br/>
          <span className="text-xs italic opacity-70">Données illustratives basées sur les tendances historiques.</span>
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={GENDER_STATS}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
            <XAxis dataKey="year" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#f8fafc' }}
              itemStyle={{ color: '#ec4899' }}
            />
            <Area 
              type="monotone" 
              dataKey="percentage" 
              stroke="#ec4899" 
              fillOpacity={1} 
              fill="url(#colorPv)" 
              name="% Femmes"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <div className="text-2xl font-bold text-primary">28%</div>
          <div className="text-sm text-gray-400">Salariées Tech en 2023</div>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <div className="text-2xl font-bold text-secondary">16%</div>
          <div className="text-sm text-gray-400">Rôles Techniques</div>
        </div>
        <div className="bg-white/5 p-4 rounded-xl border border-white/10">
          <div className="text-2xl font-bold text-teal-400">22%</div>
          <div className="text-sm text-gray-400">Étudiantes Ingénieures</div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
