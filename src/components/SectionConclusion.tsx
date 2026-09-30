import React from 'react';

export const SectionConclusion: React.FC = () => {
  return (
    <section id="chapter-7" className="py-12 sm:py-20 bg-[#0C100E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* H2 章節標題 */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8">
          七、結語：留守，是登山安全的一部分
        </h2>

        {/* 內文 */}
        <div className="space-y-6 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-12">
          <p>
            真正成熟的登山活動，不只是做好山上的準備，也要建立山下的支援系統。一位優秀的留守人，不一定站在第一線，卻能在關鍵時刻提供最大的支援。
          </p>
          <p>
            他不是等待消息的人，而是守護整趟旅程安全的最後一道防線。建立完整的留守制度，讓登山不只是挑戰未知，而是在準備充分下，安全探索山林。
          </p>
        </div>

        {/* 結尾標語 */}
        <div className="p-8 sm:p-12 rounded-xl bg-[#131A17] border border-[#1F2B24] text-center space-y-6">
          <div className="space-y-4 font-serif">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-[#F3F1EC] leading-relaxed">
              山上的人負責前進，<br />
              山下的人負責守護。
            </p>
            
            <div className="w-10 h-0.5 bg-[#E09443] mx-auto my-4" />

            <p className="text-base sm:text-lg text-[#CDC8BD] leading-relaxed font-normal">
              建立完整的留守制度，<br />
              讓登山不只是挑戰未知，<br />
              而是在準備充分下，安全探索山林。
            </p>
          </div>

          <div className="pt-6 border-t border-[#1F2B24] text-sm text-[#8E9B93] font-serif">
            — 亞馬遜國家山岳協會 登山安全宣導
          </div>
        </div>

      </div>
    </section>
  );
};
