import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface NavbarProps {
  onOpenEmergencyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEmergencyModal }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#0C100E]/90 backdrop-blur-md border-b border-[#1F2B24] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element brand mark */}
        <a 
          href="https://amazon-hike.com/" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg md:text-xl font-bold tracking-tight text-[#E6E4DE] hover:text-[#5EEAD4] transition-colors whitespace-nowrap font-serif"
        >
          亞馬遜國家山岳協會
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#9CA3AF]">
          <a href="#foreword" className="hover:text-[#E6E4DE] transition-colors py-1 hover:border-b-2 hover:border-[#34D399]">
            核心前言
          </a>
          <a href="#role-definition" className="hover:text-[#E6E4DE] transition-colors py-1 hover:border-b-2 hover:border-[#34D399]">
            角色定義
          </a>
          <a href="#pretrip" className="hover:text-[#E6E4DE] transition-colors py-1 hover:border-b-2 hover:border-[#34D399]">
            行前與行進
          </a>
          <a href="#decision-tree" className="hover:text-[#E6E4DE] transition-colors py-1 hover:border-b-2 hover:border-[#34D399]">
            異常決策樹
          </a>
          <a href="#plan-generator" className="hover:text-[#E6E4DE] transition-colors py-1 hover:border-b-2 hover:border-[#34D399]">
            留守資訊卡
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenEmergencyModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#F87171] bg-[#7F1D1D]/25 hover:bg-[#7F1D1D]/40 rounded-md transition-colors whitespace-nowrap cursor-pointer border border-[#DC2626]/30"
            title="查看山難與緊急搜救通報協議"
          >
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>緊急通報須知</span>
          </button>
          
          <a
            href="#plan-generator"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#0C100E] bg-[#34D399] hover:bg-[#22C55E] rounded-md transition-colors shadow-sm whitespace-nowrap cursor-pointer font-medium"
          >
            <span>建立留守卡</span>
          </a>
        </div>
      </div>
    </header>
  );
};
