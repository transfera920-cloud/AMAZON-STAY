import React from 'react';

export const SectionForeword: React.FC = () => {
  return (
    <section id="chapter-1" className="py-12 sm:py-16 border-b border-[#1F2B24] bg-[#0C100E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* H2 章節標題 */}
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F3F1EC] tracking-tight mb-8">
          一、前言：被低估的安全角色
        </h2>

        {/* 內文 */}
        <div className="space-y-5 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-10">
          <p>
            在山域活動中，大家往往將注意力集中於領隊能力、隊員體能、裝備準備與路線規劃。然而，有一個角色經常被忽略，卻在危急時刻扮演關鍵作用——留守人員。
          </p>
          <p>
            傳統觀念中，留守人常被認為只需「行前留下姓名與電話、知道隊伍去哪裡、等待隊伍平安返家」。這樣的認知，使得留守制度長期停留在形式層面，未能發揮其應有的安全價值。
          </p>
        </div>

        {/* 表格：傳統認知／現代留守觀念 */}
        <div className="bg-[#131A17] rounded-lg border border-[#1F2B24] overflow-hidden mb-10">
          <div className="px-5 py-3.5 bg-[#18221E] border-b border-[#1F2B24]">
            <h3 className="text-sm sm:text-base font-serif font-bold text-[#F3F1EC]">
              傳統認知／現代留守觀念
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm font-serif">
              <thead>
                <tr className="bg-[#101614] border-b border-[#1F2B24] text-[#8E9B93]">
                  <th className="p-4 font-medium w-1/2">傳統認知</th>
                  <th className="p-4 font-medium w-1/2">現代留守觀念</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1F2B24]">
                <tr className="hover:bg-[#161F1B] transition-colors">
                  <td className="p-4 text-[#E09443]">被動等待消息</td>
                  <td className="p-4 text-[#34D399] font-medium">主動監控異常狀況</td>
                </tr>
                <tr className="hover:bg-[#161F1B] transition-colors">
                  <td className="p-4 text-[#E09443]">留下基本聯絡資料即可</td>
                  <td className="p-4 text-[#34D399] font-medium">掌握完整行程與風險資訊</td>
                </tr>
                <tr className="hover:bg-[#161F1B] transition-colors">
                  <td className="p-4 text-[#E09443]">事故發生才開始聯絡</td>
                  <td className="p-4 text-[#34D399] font-medium">事前建立應變共識與流程</td>
                </tr>
                <tr className="hover:bg-[#161F1B] transition-colors">
                  <td className="p-4 text-[#E09443]">單純的通訊中繼站</td>
                  <td className="p-4 text-[#34D399] font-medium">山下的資訊整合與資源協調者</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 內文結尾 */}
        <div className="text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed">
          <p>
            真正有效的留守制度，不應只是「留下資料」，而應成為登山安全管理系統中的重要環節。留守不是被動等待，而是主動參與。
          </p>
        </div>

      </div>
    </section>
  );
};
