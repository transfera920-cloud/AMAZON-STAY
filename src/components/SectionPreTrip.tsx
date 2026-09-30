import React from 'react';

export const SectionPreTrip: React.FC = () => {
  return (
    <section id="chapter-3" className="py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0C100E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* H2 章節標題 */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8">
          三、行前階段：建立完整資訊基礎
        </h2>

        {/* 內文導言 */}
        <p className="text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-8">
          優秀的留守人應在行程開始前積極參與準備工作，而非被動等待隊伍出發後才開始接收資訊。完整的行前準備是留守制度發揮效用的根本。
        </p>

        {/* 4 個 H3 區塊 */}
        <div className="space-y-8">
          
          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <h3 className="text-lg font-serif font-bold text-[#34D399] mb-3">
              了解隊伍狀況
            </h3>
            <p className="text-base font-serif text-[#CDC8BD] leading-relaxed">
              包括隊伍人數、成員能力、領隊與隊員聯絡方式，以及特殊需求或注意事項，確保對每位成員有基本認識。
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <h3 className="text-lg font-serif font-bold text-[#34D399] mb-3">
              熟悉行程內容
            </h3>
            <p className="text-base font-serif text-[#CDC8BD] leading-relaxed">
              掌握進出山路線、預計每日行程、住宿與紮營位置，以及各節點的預計抵達時間，建立時間軸概念。
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <h3 className="text-lg font-serif font-bold text-[#34D399] mb-3">
              了解風險因素
            </h3>
            <p className="text-base font-serif text-[#CDC8BD] leading-relaxed">
              包括高風險路段、天候影響、崩塌、溪谷、雪地等環境因素，以及可能的撤退路線，形成風險地圖。
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <h3 className="text-lg font-serif font-bold text-[#34D399] mb-3">
              建立應變共識
            </h3>
            <p className="text-base font-serif text-[#CDC8BD] leading-relaxed">
              事先約定何時回報安全、失聯多久需要關注、發生事故如何聯繫，讓每個步驟都有明確的觸發條件。
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
