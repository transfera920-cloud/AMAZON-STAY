import React from 'react';

export const SectionRoleDefinition: React.FC = () => {
  return (
    <section id="chapter-2" className="py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0F1412]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* H2 章節標題 */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8">
          二、重新定義留守人的角色
        </h2>

        {/* 內文 */}
        <div className="space-y-6 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed">
          <p>
            現代登山活動中的留守人，不是遠端領隊，也不是山上決策者。他的定位是：
          </p>

          <ul className="space-y-3 pl-6 list-disc text-[#F3F1EC]">
            <li>山下的資訊管理者</li>
            <li>異常發現者</li>
            <li>外部資源協調者</li>
          </ul>

          <p>
            他的核心任務是在隊伍進入山區後，維持一條與外界連結的安全線。這條線平時可能毫不起眼，卻在緊急時刻成為救援行動得以啟動的關鍵。
          </p>

          <p>
            留守人不干預山上的決策，但確保山下的支援系統隨時就緒。他的存在，讓登山隊伍在面對未知風險時，始終有一條退路。
          </p>
        </div>

      </div>
    </section>
  );
};
