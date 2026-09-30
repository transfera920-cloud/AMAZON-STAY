import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090D0B] text-[#8E9B93] py-8 text-center text-sm font-sans border-t border-[#1F2B24]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <a
          href="https://amazon-hike.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#E6E4DE] hover:text-[#34D399] transition-colors font-serif font-medium tracking-wide text-sm sm:text-base inline-block"
        >
          亞馬遜國家山岳協會
        </a>
      </div>
    </footer>
  );
};
