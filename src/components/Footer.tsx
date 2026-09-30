import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090D0B] text-[#8E9B93] py-10 text-center text-sm font-sans border-t border-[#1F2B24]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
        <a
          href="https://amazon-hike.com/"
          className="text-[#E6E4DE] hover:text-[#34D399] transition-colors font-serif font-medium text-sm sm:text-base"
        >
          亞馬遜國家山岳協會
        </a>
        <span aria-hidden="true" className="hidden sm:inline text-[#23352B]">·</span>
        <a
          href="https://amazon-hike.com/intro"
          className="text-[#9CA3AF] hover:text-[#E6E4DE] transition-colors text-sm"
        >
          回到登山入門教學
        </a>
      </div>
    </footer>
  );
};
