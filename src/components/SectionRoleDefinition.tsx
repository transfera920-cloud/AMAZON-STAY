import React from 'react';
import { Database, Eye, Share2, Compass, Shield } from 'lucide-react';

export const SectionRoleDefinition: React.FC = () => {
  return (
    <section id="role-definition" className="py-14 sm:py-20 border-b border-[#1F2B24] bg-[#0F1412]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8E9B93] mb-2">
            CHAPTER 02 · ROLES & JURISDICTION
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F3F1EC] tracking-tight">
            二、重新定義留守人的角色
          </h2>
        </div>

        {/* Lead Clarification */}
        <div className="prose prose-invert max-w-none text-[#CDC8BD] text-base sm:text-lg font-serif mb-10 leading-relaxed">
          <p>
            現代登山活動中的留守人，<span className="font-semibold text-[#E09443]">不是遠端領隊，也不是山上決策者</span>。他的定位是：
          </p>
        </div>

        {/* Three Core Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Role 1 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#1E2B24] text-[#34D399] flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC] mb-2">
                山下的資訊管理者
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                彙整並持有全隊名冊、緊急聯絡人、GPX 軌跡、每日預定通過節點、通信裝備代碼、入山許可與各員特殊醫療紀錄。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              ROLE 01 / INFORMATION HUB
            </div>
          </div>

          {/* Role 2 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#2B1F17] text-[#E09443] flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC] mb-2">
                異常發現者
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                依據預定回報時序與衛星座標，敏銳識別是否發生超時失聯、異常停滯或路徑偏離，第一時間判定正常延誤或真正危機。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              ROLE 02 / ANOMALY DETECTOR
            </div>
          </div>

          {/* Role 3 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-md bg-[#1B2922] text-[#38BDF8] flex items-center justify-center mb-4">
                <Share2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC] mb-2">
                外部資源協調者
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                山難事故發生時，對接消防救災中心、國家公園巡山員、民間搜救隊與家屬，以專業規格遞交搜救參數，避免資訊混亂。
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              ROLE 03 / RESOURCE COORDINATOR
            </div>
          </div>

        </div>

        {/* Narrative Core Duties & Authority Boundary */}
        <div className="space-y-6 text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-10">
          <p>
            他的核心任務是在隊伍進入山區後，維持一條與外界連結的安全線。這條線平時可能毫不起眼，卻在緊急時刻成為救援行動得以啟動的關鍵。
          </p>
          <div className="p-6 bg-[#131A17] border-l-4 border-[#E09443] rounded-r-lg border-y border-r border-[#1F2B24] shadow-xs">
            <p className="font-medium text-[#F3F1EC]">
              留守人不干預山上的決策，但確保山下的支援系統隨時就緒。他的存在，讓登山隊伍在面對未知風險時，始終有一條退路。
            </p>
          </div>
        </div>

        {/* Division of Authority Comparison Chart */}
        <div className="bg-[#131A17] border border-[#1F2B24] rounded-lg p-6 sm:p-7">
          <div className="text-xs uppercase tracking-widest text-[#8E9B93] font-mono mb-2">
            OPERATIONAL BOUNDARY · 職能權責邊界
          </div>
          <h4 className="text-base font-serif font-bold text-[#F3F1EC] mb-4">
            山上領隊 vs 山下留守人：職責分工清晰化
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-[#18221E] rounded border border-[#23352B]">
              <div className="font-bold text-[#34D399] mb-2 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#34D399]" />
                山上現場（領隊與嚮導主導）
              </div>
              <ul className="text-xs sm:text-sm text-[#9CA3AF] space-y-1.5 list-disc list-inside">
                <li>現場行進節奏、隊員體能調配與即時狀況處置</li>
                <li>路況遭遇坍方/壞天氣時之現場轉進或撤退決策</li>
                <li>定時到達通訊良好處向留守人發送定位與回報</li>
              </ul>
            </div>

            <div className="p-4 bg-[#18221E] rounded border border-[#23352B]">
              <div className="font-bold text-[#E09443] mb-2 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#E09443]" />
                山下後方（留守人堅守防線）
              </div>
              <ul className="text-xs sm:text-sm text-[#9CA3AF] space-y-1.5 list-disc list-inside">
                <li>嚴格依時間表監看回報，不隨意干預現場登山戰術</li>
                <li>掌握全域天候劇變、封路、地震或警報並預先示警</li>
                <li>超時未報時主動查訪山莊，必要時啟動搜救機制</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
