import React from 'react';

export const SectionOnTrail: React.FC = () => {
  return (
    <section id="chapter-4" className="py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0F1412]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* H2 章節標題 */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8">
          四、行進期間：掌握狀況但不過度干預
        </h2>

        {/* 內文導言 */}
        <div className="space-y-5 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-8">
          <p>
            科技進步後，留守人可利用衛星通訊設備、GPS 定位、衛星訊息及手機通訊協助掌握隊伍狀況。然而，留守的核心並非「監控」，而是確認是否出現異常。
          </p>
          <p>
            留守人需要具備辨別「正常延誤」與「真正異常」的判斷能力：
          </p>
        </div>

        {/* 兩個 H3 區塊 */}
        <div className="space-y-6 mb-8">
          
          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <h3 className="text-lg font-serif font-bold text-[#34D399] mb-3">
              正常情況——不需過度反應
            </h3>
            <p className="text-base font-serif text-[#CDC8BD] leading-relaxed">
              山屋晚到兩小時、因天候延後行程——這些屬於山域活動的正常範圍，不一定代表危險。過度反應反而會消耗救援資源，造成不必要的恐慌。
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <h3 className="text-lg font-serif font-bold text-[#E09443] mb-3">
              異常情況——需要進一步確認
            </h3>
            <p className="text-base font-serif text-[#CDC8BD] leading-relaxed">
              超過預定時間仍無消息、位置長時間停留異常、路線明顯偏離預定計畫——此時才需要主動聯繫確認，並依應變共識啟動後續程序。
            </p>
          </div>

        </div>

        {/* 內文結尾 */}
        <div className="text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed">
          <p>
            留守的藝術，在於知道何時保持靜默，何時採取行動。這需要行前建立的共識作為判斷基準。
          </p>
        </div>

      </div>
    </section>
  );
};
