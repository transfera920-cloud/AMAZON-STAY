import React from 'react';
import { COMPARISON_TABLE } from '../data/guideContent';
import { AlertTriangle, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const SectionForeword: React.FC = () => {
  return (
    <section id="foreword" className="py-14 sm:py-20 border-b border-[#1F2B24] bg-[#0C100E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8E9B93] mb-2">
            CHAPTER 01 · FOUNDATION
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F3F1EC] tracking-tight">
            一、前言：被低估的安全角色
          </h2>
        </div>

        {/* Narrative Prose */}
        <div className="prose prose-invert max-w-none text-[#CDC8BD] leading-relaxed space-y-5 text-base sm:text-lg font-serif mb-12">
          <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#34D399]">
            在山域活動中，大家往往將注意力集中於領隊能力、隊員體能、裝備準備與路線規劃。然而，有一個角色經常被忽略，卻在危急時刻扮演關鍵作用——留守人員。
          </p>
          <p>
            傳統觀念中，留守人常被認為只需「行前留下姓名與電話、知道隊伍去哪裡、等待隊伍平安返家」。這樣的認知，使得留守制度長期停留在形式層面，未能發揮其應有的安全價值。
          </p>
        </div>

        {/* Editorial Comparative Table: 傳統認知／現代留守觀念 */}
        <div className="bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs overflow-hidden mb-12">
          <div className="px-6 py-4 bg-[#18221E] border-b border-[#1F2B24] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-base font-serif font-bold text-[#F3F1EC]">
              觀念演進對比：傳統認知 vs 現代留守觀念
            </h3>
            <span className="text-xs text-[#8E9B93] font-mono">
              PARADIGM SHIFT IN BASECAMP SAFETY
            </span>
          </div>

          <div className="divide-y divide-[#1F2B24]">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#101614] text-xs font-semibold uppercase tracking-wider">
              <div className="p-4 border-b md:border-b-0 md:border-r border-[#1F2B24] flex items-center gap-2 text-[#F87171]">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>傳統認知（被動與形式化）</span>
              </div>
              <div className="p-4 flex items-center gap-2 text-[#34D399]">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>現代留守觀念（主動與系統化）</span>
              </div>
            </div>

            {COMPARISON_TABLE.map((row, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 hover:bg-[#161F1B] transition-colors">
                {/* Traditional Side */}
                <div className="p-5 md:border-r border-[#1F2B24] bg-[#121815]/50 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-[#8E9B93] font-medium mb-1 font-mono">
                      面向：{row.dimension}
                    </div>
                    <div className="text-base font-medium text-[#E09443] line-through decoration-[#4B5563]">
                      {row.traditional}
                    </div>
                  </div>
                  <div className="mt-3 text-xs text-[#6B7280]">
                    侷限：失去預警彈性與情資縱深
                  </div>
                </div>

                {/* Modern Side */}
                <div className="p-5 bg-[#131A17] flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-[#34D399] font-semibold mb-1 flex items-center gap-1.5 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#34D399]" />
                      現代專業實務
                    </div>
                    <div className="text-base font-bold text-[#F3F1EC]">
                      {row.modern}
                    </div>
                  </div>
                  <p className="mt-3 text-xs text-[#9CA3AF] leading-relaxed">
                    {row.insight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Principle Quotation Block */}
        <div className="p-6 sm:p-8 bg-[#18241F] text-white rounded-lg border border-[#23352B] shadow-sm">
          <blockquote className="space-y-3 font-serif">
            <p className="text-lg sm:text-xl font-medium leading-relaxed tracking-wide text-[#F3F1EC]">
              「真正有效的留守制度，不應只是『留下資料』，而應成為登山安全管理系統中的重要環節。留守不是被動等待，而是主動參與。」
            </p>
            <footer className="text-xs sm:text-sm text-[#8E9B93] font-sans pt-3 border-t border-[#25382E] flex items-center justify-between">
              <span>亞馬遜國家山岳協會 · 登山安全體系核心守則</span>
              <span className="font-mono">P.01 / ESSENTIAL PRINCIPLE</span>
            </footer>
          </blockquote>
        </div>

      </div>
    </section>
  );
};
