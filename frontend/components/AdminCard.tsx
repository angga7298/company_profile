"use client";

import React from "react";

interface AdminCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function AdminCard({ children, className = "", onClick }: AdminCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`group relative bg-navy border border-white/5 p-8 rounded-[2.5rem] transition-all duration-700 hover:bg-white hover:shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brass/5 rounded-full blur-3xl group-hover:bg-navy/5 transition-colors duration-700 -translate-y-16 translate-x-16" />
    </div>
  );
}
