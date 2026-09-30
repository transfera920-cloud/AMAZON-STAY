import React from 'react';
import { Compass, ShieldCheck, BookOpen, Radio, Database, AlertTriangle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#1F2B24] bg-[#0C100E]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Top Kicker / Metadata Line - Clean unboxed text with typographic separators */}
        <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-[#8E9B93] mb-5 tracking-wider uppercase font-mono">
          <span className="font-semibold text-[#34D399]">登山安全宣導</span>
          <span aria-hidden="true" className="text-[#364A3E]">/</span>
          <span>亞馬遜國家山岳協會</span>
          <span aria-hidden="true" className="text-[#364A3E]">/</span>
          <span>山域風險管理與後勤防衛制度</span>
        </div>

        {/* Primary H1 Title & Subtitle */}
        <div className="space-y-3 mb-8">
          <h1 
            style={{ textWrap: 'balance' }} 
            className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[#F3F1EC] leading-tight"
          >
            登山留守人的角色與價值
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl font-serif text-[#E09443] font-medium tracking-wide">
            山下的守護者
          </p>
        </div>

        {/* Lead Introduction Box - Dark Alpine Refined Container */}
        <div className="border-l-4 border-[#34D399] pl-5 sm:pl-7 py-4 mb-12 bg-[#131A17] rounded-r-lg border-y border-r border-[#1F2B24]">
          <p className="text-base sm:text-lg text-[#E6E4DE] leading-relaxed font-serif">
            重新定義留守人於登山安全的角色——他不是等待消息的人，而是守護整趟旅程安全的最後一道防線。
          </p>
        </div>

        {/* Architectural Safety Architecture Overview Strip (Clean, Professional Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-5 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <div className="text-xs text-[#8E9B93] font-mono mb-1">01. 實體與情資</div>
            <div className="text-base font-bold text-[#F3F1EC] mb-1 font-serif">全域情資整合</div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              掌握航跡 GPX、隊員病史用藥、通訊設備 ID 與每日通過節點時間軸。
            </p>
          </div>

          <div className="p-5 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <div className="text-xs text-[#8E9B93] font-mono mb-1">02. 判斷與警戒</div>
            <div className="text-base font-bold text-[#F3F1EC] mb-1 font-serif">主動異常識別</div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              辨識正常山屋延遲 vs 真正脫軌失聯，依時序嚴謹啟動分級處置。
            </p>
          </div>

          <div className="p-5 bg-[#131A17] rounded-lg border border-[#1F2B24]">
            <div className="text-xs text-[#8E9B93] font-mono mb-1">03. 搜救與窗口</div>
            <div className="text-base font-bold text-[#F3F1EC] mb-1 font-serif">單一對外樞紐</div>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              對接消防救災中心、國家公園管理處與家屬，過濾謠言提供精確情資。
            </p>
          </div>
        </div>

        {/* Quick Read Anchor Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="#foreword"
            className="group p-4 bg-[#131A17] border border-[#1F2B24] hover:border-[#34D399] rounded-lg transition-all flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded bg-[#1E2B24] flex items-center justify-center shrink-0 text-[#34D399] group-hover:bg-[#34D399] group-hover:text-[#0C100E] transition-colors">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-[#8E9B93] mb-0.5 font-medium font-mono">CHAPTER 01</div>
              <div className="text-sm font-semibold text-[#E6E4DE] group-hover:text-[#34D399]">
                被低估的角色與傳統對比
              </div>
            </div>
          </a>

          <a
            href="#decision-tree"
            className="group p-4 bg-[#131A17] border border-[#1F2B24] hover:border-[#E09443] rounded-lg transition-all flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded bg-[#2D2115] flex items-center justify-center shrink-0 text-[#E09443] group-hover:bg-[#E09443] group-hover:text-[#0C100E] transition-colors">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-[#8E9B93] mb-0.5 font-medium font-mono">CHAPTER 04</div>
              <div className="text-sm font-semibold text-[#E6E4DE] group-hover:text-[#E09443]">
                正常延誤 vs 真正異常決策樹
              </div>
            </div>
          </a>

          <a
            href="#plan-generator"
            className="group p-4 bg-[#131A17] border border-[#1F2B24] hover:border-[#34D399] rounded-lg transition-all flex items-start gap-3"
          >
            <div className="w-8 h-8 rounded bg-[#1E2B24] flex items-center justify-center shrink-0 text-[#34D399] group-hover:bg-[#34D399] group-hover:text-[#0C100E] transition-colors">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-[#8E9B93] mb-0.5 font-medium font-mono">SAFETY TOOL</div>
              <div className="text-sm font-semibold text-[#E6E4DE] group-hover:text-[#34D399]">
                隊伍留守計畫表產生器
              </div>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
