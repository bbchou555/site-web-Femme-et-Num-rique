import React, { useRef, useEffect, useState } from 'react';
import { Play, ArrowDown, Mail, Download, Maximize2 } from 'lucide-react';
import { INTRO_TEXT, POSTER_TEXT, PRESENTATION_TEXT, TEAM_MEMBERS, LEGAL_TEXT } from './constants';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

// --- Composant d'Animation "Min-Max / Anime.js style" ---
// Utilise Scale (Min -> Max) et Opacity
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Déclenche un peu plus tard pour l'effet
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      // Transition cubic-bezier pour l'effet "Spring/Elastic" d'Anime.js
      // Transform origin center pour l'effet de zoom
      className={`transform transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${className} ${
        isVisible 
          ? 'scale-100 opacity-100 translate-y-0' // MAX state
          : 'scale-90 opacity-0 translate-y-12'   // MIN state
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  // Mise à jour du chemin vers le fichier placé dans le dossier components
  const posterSrc = "./components/Poster.PNG";
  const posterFallback = "./components/Poster.png"; // Fallback extension minuscule au cas où

  return (
    <div className="min-h-screen bg-light text-dark font-sans selection:bg-accent selection:text-white">
      
      {/* --- LOGO FIXE --- */}
      {/* mix-blend-difference permet au texte de s'inverser selon la couleur du fond (noir sur blanc, blanc sur noir) */}
      <div className="fixed top-8 left-8 z-50 mix-blend-difference text-white pointer-events-none hidden md:block">
         <div className="flex flex-col items-start">
            <span className="font-serif italic text-xl tracking-wider font-bold">Électron Libre.</span>
            <div className="h-[1px] w-full bg-white opacity-50 my-1"></div>
            <span className="block text-[10px] font-sans font-bold uppercase tracking-[0.3em] opacity-80">Nuit de l'Info '25</span>
         </div>
      </div>

      {/* 1. HERO SECTION: Typographie Massive */}
      <section className="h-screen flex flex-col justify-center items-center relative overflow-hidden px-4">
        {/* Background decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>

        <div className="z-10 text-center space-y-2 md:space-y-4">
          <Reveal delay={0}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9]">
              FEMMES
            </h1>
          </Reveal>
          <Reveal delay={100}>
             <span className="font-sans text-2xl md:text-4xl font-light text-gray-400">&</span>
          </Reveal>
          <Reveal delay={200}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] italic text-accent/80">
              INFORMATIQUE
            </h1>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-8">
              <p className="text-lg tracking-widest uppercase text-dark/60 border-t border-b border-dark/10 py-2 inline-block px-8">
                L'Union fait la Force
              </p>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-12 animate-bounce opacity-40">
           <ArrowDown size={32} />
        </div>
      </section>

      {/* 2. INTRO: < 50 mots */}
      <section className="py-24 px-6 md:px-15 max-w-3xl mx-auto text-center">
        <Reveal>
          <div className="w-1 bg-accent h-16 mx-auto mb-8"></div>
          <p className="text-xl md:text-3xl font-serif leading-relaxed text-dark/90">
            "{INTRO_TEXT.trim()}"
          </p>
          <p className="mt-8 text-xs font-bold tracking-widest uppercase text-gray-400">— Association ACDI</p>
        </Reveal>
      </section>

      {/* 3. AFFICHE & CONCEPT */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* L'Affiche (Gauche) - REDUITE et FORMAT PAYSAGE */}
          <div className="flex justify-center lg:justify-end">
            <Reveal className="relative group w-full max-w-lg"> {/* max-w-lg réduit la taille */}
               {/* Effet de fond décalé */}
               <div className="absolute inset-0 bg-accent/20 transform translate-x-3 translate-y-3 rounded-sm transition-transform group-hover:translate-x-5 group-hover:translate-y-5"></div>
               
               {/* Container de l'image - Ratio Paysage (env 1.41) */}
               <div className="relative bg-white aspect-[1.414/1] border border-dark/10 shadow-2xl overflow-hidden flex items-center justify-center">
                   
                   {/* IMAGE REELLE: Utilisation du chemin components/Poster.PNG */}
                   <img 
                      src={posterSrc}
                      onError={(e) => {
                        // Fallback au cas où l'extension serait différente
                        const target = e.target as HTMLImageElement;
                        if (target.src !== posterFallback && !target.src.includes("unsplash")) {
                           target.src = posterFallback;
                        } else {
                           // Image par défaut si le fichier n'est pas trouvé
                           target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
                        }
                      }}
                      alt="Affiche Électron Libre - Nuit de l'Info" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />

                   {/* Overlay bouton */}
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer">
                      <span className="bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-2">
                        <Maximize2 size={12}/> Agrandir
                      </span>
                   </div>
               </div>
               <div className="text-center mt-3 text-xs text-gray-400 font-mono">
                  Affiche Officielle (Paysage)
               </div>
            </Reveal>
          </div>

          {/* Le Texte (Droite) */}
          <Reveal delay={200} className="lg:pl-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative inline-block">
              Notre Visuel
              <span className="absolute -bottom-2 left-0 w-1/3 h-3 bg-accent/20 -z-10"></span>
            </h2>
            <p className="text-lg leading-relaxed text-gray-600 border-l-2 border-accent/30 pl-6 text-justify">
              {POSTER_TEXT}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. VIDÉO */}
      <section className="py-24 bg-[#1a1a1a] text-white px-6 md:px-20 relative overflow-hidden">
        {/* Abstract bg element */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-black/50 pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <Reveal className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-2">PRODUCTION VIDÉO</h2>
             <p className="text-white/50 text-sm tracking-[0.2em] uppercase">L'Union des Compétences</p>
          </Reveal>
          
          <Reveal delay={200} className="w-full aspect-video bg-gray-900 relative group overflow-hidden rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 mx-auto">
            {/* Placeholder Vidéo avec l'affiche en fond */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-[1.5s]"
                style={{ backgroundImage: `url('${posterSrc}')` }}
              ></div>
              <button className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                <Play className="w-8 h-8 text-white ml-1 group-hover:text-black transition-colors" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/50 to-transparent">
               <div className="flex justify-between items-end">
                 <div>
                    <p className="text-white font-bold text-lg">Synergie : Hommes & Femmes dans le Code</p>
                    <p className="text-white/60 text-xs mt-1">Électron Libre Production</p>
                 </div>
                 <div className="text-white/80 font-mono text-xs border border-white/20 px-2 py-1 rounded">
                    02:30
                 </div>
               </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. PRÉSENTATION (150 Mots) */}
      <section className="py-32 px-6 md:px-20 max-w-4xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-10 border-b border-dark/5 pb-4">
            <span className="text-6xl font-serif font-bold text-dark/10">05</span>
            <h2 className="text-3xl font-bold font-serif">Note d'Intention</h2>
          </div>
          
          <div className="prose prose-lg prose-headings:font-serif text-gray-700 leading-8 text-justify columns-1">
             {PRESENTATION_TEXT.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 indent-8">{paragraph}</p>
             ))}
          </div>
        </Reveal>
      </section>

      {/* 6. ÉQUIPE & RÈGLES */}
      <footer className="bg-white border-t border-dark/5 pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto mb-20">
           <Reveal className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold mb-4">Équipe Électron Libre</h2>
              <div className="w-16 h-1 bg-accent mx-auto"></div>
           </Reveal>

           {/* Responsable mis en avant */}
           <div className="flex flex-col items-center justify-center mb-12">
              {TEAM_MEMBERS.filter(m => m.isLead).map((lead, i) => (
                <Reveal key={i} className="bg-accent/5 border border-accent/20 p-8 rounded-2xl text-center max-w-md w-full">
                    <p className="text-xs uppercase tracking-widest text-accent font-bold mb-3">Responsable du Projet</p>
                    <h3 className="text-3xl font-serif font-bold text-dark mb-1">{lead.lastName}</h3>
                    <p className="text-xl text-gray-600 mb-4">{lead.firstName}</p>
                    <a href={`mailto:${lead.email}`} className="inline-flex items-center gap-2 text-sm font-medium text-dark bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 hover:border-accent transition-colors">
                      <Mail size={14} /> {lead.email}
                    </a>
                </Reveal>
              ))}
           </div>

           {/* Les autres membres */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.filter(m => !m.isLead).map((member, i) => (
                <Reveal key={i} delay={i * 100} className="p-6 border border-dark/5 bg-[#FAFAF5] hover:bg-white hover:shadow-lg transition-all rounded-lg text-center">
                   <h3 className="text-lg font-serif font-bold text-dark uppercase">{member.lastName}</h3>
                   <p className="text-md text-gray-500 mb-4 font-light">{member.firstName}</p>
                   
                   <div className="pt-4 border-t border-dark/5">
                     <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-accent transition-colors">
                       <Mail size={12} />
                       Email
                     </a>
                   </div>
                </Reveal>
              ))}
           </div>
        </div>

        {/* Bloc Légal / Règles */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-dark/5">
            <Reveal delay={400}>
              <div className="bg-[#1a1a1a] text-gray-400 p-8 text-sm leading-relaxed text-center font-light rounded-sm">
                 <h4 className="font-bold text-white uppercase tracking-widest mb-4 text-xs">Règles & Conditions</h4>
                 <p className="max-w-2xl mx-auto">{LEGAL_TEXT}</p>
                 <div className="flex justify-center gap-4 mt-6 opacity-50">
                    <span className="text-xs border border-white/20 px-2 py-1 rounded">Discord</span>
                    <span className="text-xs border border-white/20 px-2 py-1 rounded">Nuit de l'Info 2025</span>
                 </div>
              </div>
            </Reveal>
        </div>
      </footer>
    </div>
  );
};

export default App;