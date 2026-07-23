import React from 'react';

interface HeaderProps {
  onCtaClick?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#0B0F1A]/75 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Real Logo Image Asset */}
        <div className="flex items-center">
          <img 
            src="/logo-removebg-preview.png" 
            alt="Sales Lab Company" 
            decoding="async"
            className="h-12 sm:h-16 max-h-[85%] w-auto object-contain drop-shadow-[0_0_14px_rgba(34,211,166,0.2)]"
          />
        </div>

      </div>
    </header>
  );
};
