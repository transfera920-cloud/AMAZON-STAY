import React from 'react';
import { Mountain, HeartHandshake } from 'lucide-react';

export const SectionConclusion: React.FC = () => {
  return (
    <section id="conclusion" className="py-16 sm:py-24 border-b border-[#1F2B24] bg-[#0F1412]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8E9B93] mb-2">
            CHAPTER 07 · THE FINAL DEFENSE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F3F1EC] tracking-tight">
            七、結語：留守，是登山安全的一部分
          </h2>
        </div>

        {/* Narrative Prose */}
        <div className="prose prose-invert max-w-none text-[#CDC8BD] text-base sm:text-lg font-serif mb-12 leading-relaxed space-y-5">
          <p>
            真正成熟的登山活動，不只是做好山上的準備，也要建立山下的支援系統。一位優秀的留守人，不一定站在第一線，卻能在關鍵時刻提供最大的支援。
          </p>
          <p>
            他不是等待消息的人，而是守護整趟旅程安全的最後一道防線。建立完整的留守制度，讓登山不只是挑戰未知，而是在準備充分下，安全探索山林。
          </p>
        </div>

        {/* The Formal Institutional Credo Banner */}
        <div className="relative overflow-hidden rounded-xl bg-[#131A17] border border-[#23352B] text-white p-8 sm:p-14 shadow-lg">
          {/* Subtle background mountain watermark / aesthetic geometry */}
          <div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none">
            <Mountain className="w-80 h-80 text-white" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#1E2B24] border border-[#2A3E34] flex items-center justify-center mx-auto text-[#34D399]">
              <HeartHandshake className="w-6 h-6" />
            </div>

            <div className="space-y-4 font-serif">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-[#F3F1EC] leading-relaxed">
                山上的人負責前進，<br />
                山下的人負責守護。
              </p>
              
              <div className="w-12 h-0.5 bg-[#E09443] mx-auto my-5" />

              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-normal">
                建立完整的留守制度，<br />
                讓登山不只是挑戰未知，<br />
                而是在準備充分下，安全探索山林。
              </p>
            </div>

            <div className="pt-8 border-t border-[#1F2B24] text-xs sm:text-sm tracking-widest uppercase font-mono text-[#8E9B93]">
              — 亞馬遜國家山岳協會 登山安全宣導
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
