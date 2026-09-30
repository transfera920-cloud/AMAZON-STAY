import React from 'react';

export const SectionPostTrip: React.FC = () => {
  return (
    <section id="chapter-6" className="py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0F1412]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* H2 章節標題 */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8">
          六、行程結束後：建立安全回饋機制
        </h2>

        {/* 內文導言 */}
        <p className="text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-6">
          一次登山行程的結束，是下一次更好準備的開始。完成行程後，留守人可協助整個團隊進行系統性的檢討，讓每一次的經驗都轉化為制度的進步。
        </p>

        {/* 4 點清單 */}
        <ul className="space-y-3 pl-6 list-disc text-base sm:text-lg font-serif text-[#F3F1EC] mb-8">
          <li>通訊流程是否有效</li>
          <li>回報方式是否合理</li>
          <li>應變流程是否需要改善</li>
          <li>未來行程是否需要調整</li>
        </ul>

        {/* 內文結尾 */}
        <div className="space-y-4 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed">
          <p>
            這種系統性的回顧，讓登山安全不再依賴個人經驗的積累，而是形成可傳承、可複製的制度性知識。每一次登山經驗，都轉化為下一次更好的安全制度。
          </p>
        </div>

      </div>
    </section>
  );
};
