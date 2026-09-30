import React from 'react';

export const SectionIncident: React.FC = () => {
  return (
    <section id="chapter-5" className="py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0C100E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* H2 章節標題 */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8">
          五、事故發生時：成為資訊整合中心
        </h2>

        {/* 內文導言 */}
        <p className="text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-8">
          當山區發生意外，留守人往往是最早接觸外界的人。在這個關鍵時刻，他所掌握的資訊品質，直接影響救援行動的效率與成敗。
        </p>

        {/* 3 個 H3 區塊 */}
        <div className="space-y-6 mb-8">
          
          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <h3 className="text-lg font-serif font-bold text-[#34D399] mb-3">
              提供完整資訊
            </h3>
            <p className="text-base font-serif text-[#CDC8BD] leading-relaxed">
              包括隊伍名單、路線資料、最後已知位置、通訊狀況、裝備能力，以及入山入園及保險資料。這些資訊是搜救單位制定行動計畫的基礎。
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <h3 className="text-lg font-serif font-bold text-[#34D399] mb-3">
              協助啟動救援
            </h3>
            <p className="text-base font-serif text-[#CDC8BD] leading-relaxed">
              依情況聯繫消防單位、搜救單位、國家公園管理處及相關協助資源，確保救援力量能夠迅速集結。
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <h3 className="text-lg font-serif font-bold text-[#34D399] mb-3">
              維持正確資訊傳遞
            </h3>
            <p className="text-base font-serif text-[#CDC8BD] leading-relaxed">
              避免家屬恐慌、網路謠言及錯誤消息干擾救援行動。留守人是資訊的守門人，確保每一條訊息都經過核實才對外傳遞。
            </p>
          </div>

        </div>

        {/* 內文結尾 */}
        <div className="text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed">
          <p>
            留守人的價值，不只是「通知」，而是提供搜救所需的關鍵資訊——讓救援行動從一開始就走在正確的方向上。
          </p>
        </div>

      </div>
    </section>
  );
};
