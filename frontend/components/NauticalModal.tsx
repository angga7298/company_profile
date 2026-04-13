"use client";

import { useEffect, useState } from "react";

interface NauticalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image?: string;
  date?: string;
}

export default function NauticalModal({ isOpen, onClose, title, description, image, date }: NauticalModalProps) {
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      document.body.style.overflow = "hidden";
    } else {
      const timer = setTimeout(() => setIsRendered(false), 500);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 transition-all duration-500 overflow-hidden ${
        isOpen ? "opacity-100 backdrop-blur-xl" : "opacity-0 backdrop-blur-0 pointer-events-none"
      }`}
    >
      <div 
        className="absolute inset-0 bg-navy/80 cursor-pointer" 
        onClick={onClose} 
      />
      
      <div 
        className={`relative w-full max-w-3xl max-h-[90vh] bg-[#001F3F] border border-white/10 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] flex flex-col transition-all duration-500 transform ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-10"
        }`}
      >
        {/* Modal Header/Image */}
        {image && (
          <div className="relative h-64 md:h-80 w-full shrink-0 overflow-hidden rounded-t-[3rem]">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-transparent" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-brass text-white hover:text-navy rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-500 z-20 group"
            >
              <span className="text-xl group-hover:rotate-90 transition-transform">✕</span>
            </button>
          </div>
        )}

        {/* Modal Content */}
        <div className="flex-grow overflow-y-auto px-8 md:px-16 py-12 custom-scrollbar">
          {!image && (
             <div className="flex justify-between items-start mb-8">
                <span className="text-seafoam font-black tracking-[0.4em] uppercase text-[10px]">Log Entry #88</span>
                <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">✕ Close</button>
             </div>
          )}
          
          <div className="space-y-2 mb-10">
            {date && <p className="text-[10px] font-black text-brass uppercase tracking-[0.4em] mb-2">{date}</p>}
            <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">{title}</h3>
            <div className="h-1 w-20 bg-seafoam mt-6" />
          </div>

          <div 
            className="text-white/60 leading-relaxed space-y-6 prose prose-invert max-w-none text-lg font-medium tracking-tight whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          {/* Decorative Elements */}
          <div className="mt-16 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] font-black text-white/20 uppercase tracking-[0.3em]">
             <span>Bahari Maritime Systems v2.0</span>
             <span>Coordinates Secured</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(130, 238, 253, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(130, 238, 253, 0.4);
        }
      `}</style>
    </div>
  );
}
