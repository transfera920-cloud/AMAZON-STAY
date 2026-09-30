import React, { useState } from 'react';
import { DECISION_SCENARIOS } from '../data/guideContent';
import { CheckCircle2, AlertTriangle, Radio, Clock, MessageSquare } from 'lucide-react';

export const SectionOnTrail: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('scenario-normal-delay');
  const currentScenario = DECISION_SCENARIOS.find(s => s.id === selectedScenarioId) || DECISION_SCENARIOS[0];

  return (
    <section id="judgement" className="py-14 sm:py-20 border-b border-[#1F2B24] bg-[#0F1412]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8E9B93] mb-2">
            CHAPTER 04 · ON-TRAIL SURVEILLANCE
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F3F1EC] tracking-tight">
            四、行進期間：掌握狀況但不過度干預
          </h2>
        </div>

        {/* Narrative Prose */}
        <div className="prose prose-invert max-w-none text-[#CDC8BD] text-base sm:text-lg font-serif mb-12 leading-relaxed space-y-4">
          <p>
            科技進步後，留守人可利用衛星通訊設備、GPS 定位、衛星訊息及手機通訊協助掌握隊伍狀況。然而，留守的核心並非「監控」，而是確認是否出現異常。
          </p>
          <p>
            留守人需要具備辨別「正常延誤」與「真正異常」的判斷能力：
          </p>
        </div>

        {/* Comparative Dual Cards: 正常情況 vs 異常情況 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* H3: 正常情況——不需過度反應 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#34D399]">
                <CheckCircle2 className="w-5 h-5 text-[#34D399]" />
                <h3 className="text-lg font-serif font-bold text-[#F3F1EC]">
                  正常情況——不需過度反應
                </h3>
              </div>
              <p className="text-sm font-serif text-[#CDC8BD] leading-relaxed mb-4">
                山屋晚到兩小時、因天候延後行程——這些屬於山域活動的正常範圍，不一定代表危險。過度反應反而會消耗救援資源，造成不必要的恐慌。
              </p>
              <div className="space-y-2 text-xs text-[#9CA3AF] bg-[#18221E] p-3.5 rounded border border-[#23352B]">
                <div className="font-semibold text-[#34D399] font-mono">典型常見情境：</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>隊伍遇午後雷陣雨於涼亭避雨 1 小時</li>
                  <li>隊員體能不一放慢腳步，晚 90 分鐘到達山屋</li>
                  <li>深山黑水塘或谷地暫無行動通訊基地台訊號</li>
                </ul>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-[#1F2B24] text-xs text-[#34D399] font-mono">
              留守守則：靜默紀錄、核對天候、安心守候
            </div>
          </div>

          {/* H3: 異常情況——需要進一步確認 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3 text-[#E09443]">
                <AlertTriangle className="w-5 h-5 text-[#E09443]" />
                <h3 className="text-lg font-serif font-bold text-[#F3F1EC]">
                  異常情況——需要進一步確認
                </h3>
              </div>
              <p className="text-sm font-serif text-[#CDC8BD] leading-relaxed mb-4">
                超過預定時間仍無消息、位置長時間停留異常、路線明顯偏離預定計畫——此時才需要主動聯繫確認，並依應變共識啟動後續程序。
              </p>
              <div className="space-y-2 text-xs text-[#9CA3AF] bg-[#221915] p-3.5 rounded border border-[#3E2319]">
                <div className="font-semibold text-[#E09443] font-mono">典型警戒訊號：</div>
                <ul className="list-disc list-inside space-y-1 text-[#FCA5A5]">
                  <li>已入夜（20:00後）且逾時達 3 小時未報安全</li>
                  <li>GPS 航跡點偏離原定主稜，切入陡峭無路山谷</li>
                  <li>在非宿營點長時間滯留不動超過 4 小時</li>
                </ul>
              </div>
            </div>
            <div className="mt-5 pt-3 border-t border-[#1F2B24] text-xs text-[#E09443] font-mono">
              留守守則：主動查訪、備妥圖資、啟動預備
            </div>
          </div>

        </div>

        {/* Highlight Pullquote */}
        <div className="mb-14 p-6 sm:p-7 bg-[#131A17] border-l-4 border-[#34D399] rounded-r-lg border-y border-r border-[#1F2B24] shadow-2xs">
          <p className="text-base sm:text-lg font-serif italic text-[#F3F1EC] leading-relaxed">
            「留守的藝術，在於知道何時保持靜默，何時採取行動。這需要行前建立的共識作為判斷基準。」
          </p>
        </div>

        {/* Interactive Feature: 異常判斷與應變決策互動樹 */}
        <div id="decision-tree" className="bg-[#131A17] border border-[#1F2B24] rounded-xl shadow-xs overflow-hidden">
          <div className="px-6 py-5 bg-[#18241F] border-b border-[#23352B] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#8E9B93] font-mono">
                INTERACTIVE SCENARIO SIMULATOR
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC] mt-0.5">
                山域異常判斷與應變決策互動樹
              </h3>
            </div>
            <span className="text-xs text-[#34D399] bg-[#1E3B2E] px-2.5 py-1 rounded font-mono border border-[#274E3C]">
              實務情境演練
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-xs sm:text-sm text-[#9CA3AF] mb-5">
              選擇留守人當前遭遇的現場回報情境，系統將即刻演示對應之「應變階段」、「警戒窗口」與「行動準則」：
            </p>

            {/* Scenario Segmented Selector - Functional buttons with clean states */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-6">
              {DECISION_SCENARIOS.map((item) => {
                const isActive = item.id === selectedScenarioId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedScenarioId(item.id)}
                    className={`p-3 text-left rounded-lg border text-xs transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#34D399] text-[#0C100E] border-[#34D399] font-bold shadow-xs'
                        : 'bg-[#18221E] text-[#9CA3AF] border-[#23352B] hover:border-[#34D399] hover:text-[#F3F1EC]'
                    }`}
                  >
                    <div className="font-bold mb-1 line-clamp-1">{item.levelLabel}</div>
                    <div className={`text-[11px] line-clamp-2 ${isActive ? 'text-[#0C100E]/80' : 'text-[#8E9B93]'}`}>
                      {item.timeWindow}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Scenario Decision Card */}
            <div className="p-5 sm:p-6 rounded-lg border border-[#23352B] bg-[#18221E] space-y-5">
              
              {/* Scenario Context */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#23352B]">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#8E9B93]">
                    當前狀況
                  </div>
                  <div className="text-base font-bold text-[#F3F1EC] mt-0.5 font-serif">
                    {currentScenario.situation}
                  </div>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 text-xs font-mono font-medium text-[#E09443] bg-[#2B1F17] px-2.5 py-1 rounded border border-[#3E2319]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentScenario.timeWindow}</span>
                </div>
              </div>

              {/* Action Directive */}
              <div>
                <div className="text-xs font-bold text-[#34D399] mb-1.5 flex items-center gap-1.5 font-mono">
                  <Radio className="w-4 h-4 text-[#34D399]" />
                  留守人首要行動指導方針：
                </div>
                <div className="p-3.5 bg-[#101614] rounded border border-[#1F2B24] text-sm text-[#F3F1EC] font-serif leading-relaxed">
                  {currentScenario.watchkeeperAction}
                </div>
              </div>

              {/* Step-by-Step SOP */}
              <div>
                <div className="text-xs font-bold text-[#34D399] mb-2 flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
                  標準作業程序（SOP 執行步驟）：
                </div>
                <div className="space-y-2">
                  {currentScenario.recommendedStep.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#CDC8BD] bg-[#101614] p-3 rounded border border-[#1F2B24]">
                      <span className="w-5 h-5 rounded-full bg-[#1E2B24] text-[#34D399] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Communication Protocol */}
              <div className="pt-2 text-xs sm:text-sm text-[#8E9B93] flex items-start gap-2 border-t border-[#23352B]">
                <MessageSquare className="w-4 h-4 text-[#E09443] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#E09443]">通訊及家屬溝通守則：</span>{' '}
                  <span className="text-[#CDC8BD]">{currentScenario.communicationProtocol}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
