import React from 'react';
import { RefreshCw, MessageSquare, CheckCheck, Compass } from 'lucide-react';

export const SectionPostTrip: React.FC = () => {
  return (
    <section id="posttrip" className="py-14 sm:py-20 border-b border-[#1F2B24] bg-[#0F1412]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[#8E9B93] mb-2">
            CHAPTER 06 · SYSTEMIC DEBRIEF
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F3F1EC] tracking-tight">
            六、行程結束後：建立安全回饋機制
          </h2>
        </div>

        {/* Narrative Prose */}
        <div className="prose prose-invert max-w-none text-[#CDC8BD] text-base sm:text-lg font-serif mb-12 leading-relaxed">
          <p>
            一次登山行程的結束，是下一次更好準備的開始。完成行程後，留守人可協助整個團隊進行系統性的檢討，讓每一次的經驗都轉化為制度的進步。
          </p>
        </div>

        {/* Four Feedback Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
          
          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs">
            <div className="flex items-center gap-3 mb-2 text-[#34D399]">
              <div className="w-8 h-8 rounded bg-[#1E2B24] flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#F3F1EC]">
                通訊流程是否有效
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              檢視此行在各稜線、鞍部與營地之電信基地台與衛星發報成功率，確認通訊死角並記錄於隊伍資料庫中。
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs">
            <div className="flex items-center gap-3 mb-2 text-[#34D399]">
              <div className="w-8 h-8 rounded bg-[#1E2B24] flex items-center justify-center shrink-0">
                <CheckCheck className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#F3F1EC]">
                回報方式是否合理
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              原定約定時間（如 18:00）是否因下雨紮營延遲而過於緊湊？是否有造成山上隊員趕路的壓力？回報頻率是否恰如其分？
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs">
            <div className="flex items-center gap-3 mb-2 text-[#E09443]">
              <div className="w-8 h-8 rounded bg-[#2B1F17] flex items-center justify-center shrink-0">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#F3F1EC]">
                應變流程是否需要改善
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              若此行發生遲歸或小插曲，留守人在啟動查證時聯絡山莊的電話是否正確？家屬的應對安撫是否平順周延？
            </p>
          </div>

          <div className="p-5 sm:p-6 bg-[#131A17] rounded-lg border border-[#1F2B24] shadow-xs">
            <div className="flex items-center gap-3 mb-2 text-[#38BDF8]">
              <div className="w-8 h-8 rounded bg-[#1B2922] flex items-center justify-center shrink-0">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#F3F1EC]">
                未來行程是否需要調整
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
              針對路況崩塌改道或隊員體能落差，修正日後排程天數、每日重裝時數與撤退決策點，轉化為隊伍制度積累。
            </p>
          </div>

        </div>

        {/* Institutional Legacy Callout */}
        <div className="p-6 sm:p-8 bg-[#131A17] border border-[#1F2B24] rounded-xl shadow-xs">
          <p className="text-base sm:text-lg font-serif text-[#CDC8BD] leading-relaxed mb-3">
            這種系統性的回顧，讓登山安全不再依賴個人經驗的積累，而是形成可傳承、可複製的制度性知識。
          </p>
          <p className="text-sm sm:text-base font-serif font-bold text-[#34D399]">
            每一次登山經驗，都轉化為下一次更好的安全制度。
          </p>
        </div>

      </div>
    </section>
  );
};
