import React from 'react';
import { FileText, PhoneForwarded, Radio, AlertCircle } from 'lucide-react';

export const SectionIncident: React.FC = () => {
  return (
    <section id="incident" className="py-14 sm:py-20 border-b border-[#1F2B24] bg-[#0C100E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#E09443] mb-2 font-bold">
            CHAPTER 05 · CRISIS DISPATCH
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F3F1EC] tracking-tight">
            五、事故發生時：成為資訊整合中心
          </h2>
        </div>

        {/* Narrative Prose */}
        <div className="prose prose-invert max-w-none text-[#CDC8BD] text-base sm:text-lg font-serif mb-12 leading-relaxed">
          <p>
            當山區發生意外，留守人往往是最早接觸外界的人。在這個關鍵時刻，他所掌握的資訊品質，直接影響救援行動的效率與成敗。
          </p>
        </div>

        {/* 3 Core Functions during Incident (H3s) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* H3 1: 提供完整資訊 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#1E2B24] text-[#34D399] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC] mb-2">
                提供完整資訊
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                包括隊伍名單、路線資料、最後已知位置、通訊狀況、裝備能力，以及入山入園及保險資料。這些資訊是搜救單位制定行動計畫的基礎。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              PRECISION DOSSIER
            </div>
          </div>

          {/* H3 2: 協助啟動救援 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#2B1F17] text-[#E09443] flex items-center justify-center mb-4">
                <PhoneForwarded className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC] mb-2">
                協助啟動救援
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                依情況聯繫消防單位、搜救單位、國家公園管理處及相關協助資源，確保救援力量能夠迅速集結。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              RAPID MOBILIZATION
            </div>
          </div>

          {/* H3 3: 維持正確資訊傳遞 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#1B2922] text-[#38BDF8] flex items-center justify-center mb-4">
                <Radio className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC] mb-2">
                維持正確資訊傳遞
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                避免家屬恐慌、網路謠言及錯誤消息干擾救援行動。留守人是資訊的守門人，確保每一條訊息都經過核實才對外傳遞。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              TRUTH GATEKEEPER
            </div>
          </div>

        </div>

        {/* Essential Rescue Dossier 7 Elements Card */}
        <div className="p-6 sm:p-8 bg-[#131A17] border border-[#1F2B24] rounded-xl shadow-xs mb-10">
          <div className="flex items-center gap-2.5 mb-2 text-[#E09443]">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span className="text-xs uppercase tracking-widest font-mono font-bold">
              SEARCH & RESCUE INTELLIGENCE
            </span>
          </div>
          <h4 className="text-lg font-serif font-bold text-[#F3F1EC] mb-4">
            搜救報案（119 / 搜救中心）必備 7 大關鍵情資
          </h4>
          <p className="text-xs sm:text-sm text-[#9CA3AF] mb-6">
            消防救災指揮中心派遣搜救隊或申請空勤直升機時，留守人應立即遞交之標準情報：
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <div className="p-3.5 bg-[#18221E] rounded border border-[#23352B] flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#34D399]">01.</span>
              <div>
                <span className="font-bold text-[#F3F1EC]">最後已知位置（LKP）：</span>
                <span className="text-[#9CA3AF]">經緯度座標（WGS84）及相對地標（如：斷崖下30公尺）。</span>
              </div>
            </div>
            <div className="p-3.5 bg-[#18221E] rounded border border-[#23352B] flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#34D399]">02.</span>
              <div>
                <span className="font-bold text-[#F3F1EC]">全隊人數與待援名冊：</span>
                <span className="text-[#9CA3AF]">傷患人數、傷情（意識/外傷/失溫）及待援者身分證與年齡。</span>
              </div>
            </div>
            <div className="p-3.5 bg-[#18221E] rounded border border-[#23352B] flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#34D399]">03.</span>
              <div>
                <span className="font-bold text-[#F3F1EC]">裝備與求生資源：</span>
                <span className="text-[#9CA3AF]">是否有帳篷、露宿袋、保暖衣物、爐具與剩餘存糧天數。</span>
              </div>
            </div>
            <div className="p-3.5 bg-[#18221E] rounded border border-[#23352B] flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#34D399]">04.</span>
              <div>
                <span className="font-bold text-[#F3F1EC]">現場天候與能見度：</span>
                <span className="text-[#9CA3AF]">是否下雨、起霧、強陣風，現場是否有直升機吊掛空地。</span>
              </div>
            </div>
            <div className="p-3.5 bg-[#18221E] rounded border border-[#23352B] flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#34D399]">05.</span>
              <div>
                <span className="font-bold text-[#F3F1EC]">通訊管道與約定呼叫時間：</span>
                <span className="text-[#9CA3AF]">衛星通訊 ID、無線電頻率、下次開機通話時段。</span>
              </div>
            </div>
            <div className="p-3.5 bg-[#18221E] rounded border border-[#23352B] flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#34D399]">06.</span>
              <div>
                <span className="font-bold text-[#F3F1EC]">完整行程 GPX 航跡檔：</span>
                <span className="text-[#9CA3AF]">立即提供電子航跡檔予搜救隊，加速判讀可能偏離岔路。</span>
              </div>
            </div>
            <div className="p-3.5 bg-[#18221E] rounded border border-[#23352B] sm:col-span-2 flex items-start gap-2.5">
              <span className="font-mono font-bold text-[#34D399]">07.</span>
              <div>
                <span className="font-bold text-[#F3F1EC]">入山證與登山綜合保險單號：</span>
                <span className="text-[#9CA3AF]">加速國家公園管理處核對身分與保險搜救費用理賠專線對接。</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section Closing Remark */}
        <div className="p-6 bg-[#131A17] border-l-4 border-[#34D399] rounded-r-lg border-y border-r border-[#1F2B24] shadow-xs">
          <p className="text-base sm:text-lg font-serif text-[#F3F1EC] font-medium leading-relaxed">
            留守人的價值，不只是「通知」，而是提供搜救所需的關鍵資訊——讓救援行動從一開始就走在正確的方向上。
          </p>
        </div>

      </div>
    </section>
  );
};
