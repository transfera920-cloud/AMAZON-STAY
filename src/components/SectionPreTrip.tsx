import React, { useState } from 'react';
import { PRETRIP_CHECKLIST } from '../data/guideContent';
import { CheckSquare, Square, Users, MapPin, AlertOctagon, Radio } from 'lucide-react';

export const SectionPreTrip: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({
    'team-1': true,
    'itin-1': true,
  });

  const toggleCheck = (id: string) => {
    setCheckedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const totalCount = PRETRIP_CHECKLIST.length;
  const completedCount = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  return (
    <section id="pretrip" className="py-14 sm:py-20 border-b border-[#1F2B24] bg-[#0C100E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8E9B93] mb-2">
            CHAPTER 03 · PRE-TRIP READINESS
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F3F1EC] tracking-tight">
            三、行前階段：建立完整資訊基礎
          </h2>
        </div>

        {/* Narrative Prose */}
        <div className="prose prose-invert max-w-none text-[#CDC8BD] text-base sm:text-lg font-serif mb-12 leading-relaxed">
          <p>
            優秀的留守人應在行程開始前積極參與準備工作，而非被動等待隊伍出發後才開始接收資訊。完整的行前準備是留守制度發揮效用的根本。
          </p>
        </div>

        {/* 4 Pillars Breakdown (H3s) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          
          {/* H3 1: 了解隊伍狀況 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs">
            <div className="flex items-center gap-3 mb-3 text-[#34D399]">
              <div className="w-8 h-8 rounded bg-[#1E2B24] flex items-center justify-center shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC]">
                了解隊伍狀況
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              包括隊伍人數、成員能力、領隊與隊員聯絡方式，以及特殊需求或注意事項，確保對每位成員有基本認識。
            </p>
            <div className="mt-4 pt-3 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              實務要件：過敏藥物備忘、體力差距、緊急聯絡人真實電話
            </div>
          </div>

          {/* H3 2: 熟悉行程內容 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs">
            <div className="flex items-center gap-3 mb-3 text-[#34D399]">
              <div className="w-8 h-8 rounded bg-[#1E2B24] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC]">
                熟悉行程內容
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              掌握進出山路線、預計每日行程、住宿與紮營位置，以及各節點的預計抵達時間，建立時間軸概念。
            </p>
            <div className="mt-4 pt-3 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              實務要件：登山口、通過山屋/鞍部時間節點（Cut-off Time）
            </div>
          </div>

          {/* H3 3: 了解風險因素 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs">
            <div className="flex items-center gap-3 mb-3 text-[#E09443]">
              <div className="w-8 h-8 rounded bg-[#2B1F17] flex items-center justify-center shrink-0">
                <AlertOctagon className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC]">
                了解風險因素
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              包括高風險路段、天候影響、崩塌、溪谷、雪地等環境因素，以及可能的撤退路線，形成風險地圖。
            </p>
            <div className="mt-4 pt-3 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              實務要件：預劃 B 方案（撤退點）與 C 方案（避難就地紮營點）
            </div>
          </div>

          {/* H3 4: 建立應變共識 */}
          <div className="p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs">
            <div className="flex items-center gap-3 mb-3 text-[#38BDF8]">
              <div className="w-8 h-8 rounded bg-[#1B2922] flex items-center justify-center shrink-0">
                <Radio className="w-4 h-4" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#F3F1EC]">
                建立應變共識
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              事先約定何時回報安全、失聯多久需要關注、發生事故如何聯繫，讓每個步驟都有明確的觸發條件。
            </p>
            <div className="mt-4 pt-3 border-t border-[#1F2B24] text-xs text-[#8E9B93] font-mono">
              實務要件：明確訂出「逾時幾小時啟動查訪」、「逾時幾小時報案」
            </div>
          </div>

        </div>

        {/* Interactive Readiness Checklist Tool - Dark Mode */}
        <div className="bg-[#131A17] border border-[#1F2B24] rounded-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#1F2B24] mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8E9B93]">
                INTERACTIVE CHECKLIST
              </span>
              <h4 className="text-lg font-serif font-bold text-[#F3F1EC] mt-0.5">
                行前四大支柱留守檢核清單
              </h4>
              <p className="text-xs text-[#9CA3AF] mt-1">
                領隊與留守人出發前共同核對，確保各項情資白紙黑字完成交接。
              </p>
            </div>

            {/* Progress counter */}
            <div className="bg-[#18221E] px-4 py-2 rounded-md border border-[#23352B] shrink-0 text-center sm:text-right">
              <div className="text-xs text-[#8E9B93] font-mono">整備完成度</div>
              <div className="text-lg font-bold font-mono text-[#34D399]">
                {completedCount} / {totalCount} <span className="text-xs font-normal text-[#9CA3AF]">({progressPercent}%)</span>
              </div>
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            {PRETRIP_CHECKLIST.map((item) => {
              const isChecked = !!checkedIds[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 rounded-md border cursor-pointer transition-all flex items-start gap-3.5 select-none ${
                    isChecked
                      ? 'bg-[#18241F] border-[#34D399]/40 shadow-xs'
                      : 'bg-[#101614] border-[#1F2B24] hover:border-[#2D3E35]'
                  }`}
                >
                  <button
                    type="button"
                    className="mt-0.5 shrink-0 text-[#34D399] focus:outline-hidden"
                    aria-label={isChecked ? "已勾選" : "未勾選"}
                  >
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-[#34D399]" />
                    ) : (
                      <Square className="w-5 h-5 text-[#4B5563]" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-[#8E9B93] font-mono">
                        [{item.categoryLabel}]
                      </span>
                      <span className={`text-sm font-bold ${isChecked ? 'text-[#34D399]' : 'text-[#E6E4DE]'}`}>
                        {item.label}
                      </span>
                    </div>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {completedCount === totalCount && (
            <div className="mt-6 p-3.5 bg-[#182A22] border border-[#274436] rounded-md text-xs sm:text-sm text-[#34D399] font-medium flex items-center gap-2 font-mono">
              <span>✓ 行前四大支柱情報已全數就緒！留守人與隊伍已完成安全互信備忘。</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
