import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-[#1F2B24] bg-[#0C100E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* 麵包屑導覽 */}
        <nav aria-label="麵包屑" className="mb-6 text-xs text-[#8E9B93]">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <a href="https://amazon-hike.com/" className="hover:text-[#E6E4DE] transition-colors">
                首頁
              </a>
            </li>
            <li aria-hidden="true" className="text-[#364A3E]">›</li>
            <li>
              <a href="https://amazon-hike.com/intro" className="hover:text-[#E6E4DE] transition-colors">
                登山入門教學
              </a>
            </li>
            <li aria-hidden="true" className="text-[#364A3E]">›</li>
            <li aria-current="page" className="text-[#34D399]">
              登山留守人的角色與價值
            </li>
          </ol>
        </nav>

        {/* 頁首標語 */}
        <div className="text-xs sm:text-sm font-medium text-[#34D399] mb-4 tracking-wider">
          登山安全宣導
        </div>

        {/* H1 與副標語 */}
        <div className="space-y-3 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-[#F3F1EC] leading-tight">
            登山留守人的角色與價值
          </h1>
          <p className="text-xl sm:text-2xl font-serif text-[#E09443] font-medium">
            山下的守護者
          </p>
        </div>

        {/* 導言 */}
        <div className="border-l-4 border-[#34D399] pl-5 sm:pl-6 py-2 bg-[#131A17] rounded-r-md border-y border-r border-[#1F2B24]">
          <p className="text-base sm:text-lg text-[#E6E4DE] leading-relaxed font-serif">
            重新定義留守人於登山安全的角色——他不是等待消息的人，而是守護整趟旅程安全的最後一道防線。
          </p>
        </div>

      </div>
    </section>
  );
};
