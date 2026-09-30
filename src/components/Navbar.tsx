import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#0C100E]/95 backdrop-blur-md border-b border-[#1F2B24]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand link - Opens in same tab */}
        <a 
          href="https://amazon-hike.com/" 
          className="text-lg font-bold tracking-tight text-[#E6E4DE] hover:text-[#34D399] transition-colors whitespace-nowrap font-serif"
        >
          亞馬遜國家山岳協會
        </a>

        {/* Seven Chapter Anchors */}
        <nav aria-label="章節導覽" className="hidden lg:flex items-center gap-4 text-xs font-medium text-[#9CA3AF]">
          <a href="#chapter-1" className="hover:text-[#F3F1EC] transition-colors py-1">一、前言</a>
          <a href="#chapter-2" className="hover:text-[#F3F1EC] transition-colors py-1">二、角色定義</a>
          <a href="#chapter-3" className="hover:text-[#F3F1EC] transition-colors py-1">三、行前階段</a>
          <a href="#chapter-4" className="hover:text-[#F3F1EC] transition-colors py-1">四、行進期間</a>
          <a href="#chapter-5" className="hover:text-[#F3F1EC] transition-colors py-1">五、事故發生</a>
          <a href="#chapter-6" className="hover:text-[#F3F1EC] transition-colors py-1">六、行程結束</a>
          <a href="#chapter-7" className="hover:text-[#F3F1EC] transition-colors py-1">七、結語</a>
        </nav>
      </div>

      {/* Mobile Chapter Scroll Strip */}
      <nav aria-label="行動版章節導覽" className="lg:hidden flex items-center gap-4 px-4 py-2 overflow-x-auto text-xs font-medium text-[#9CA3AF] border-t border-[#1F2B24] no-scrollbar">
        <a href="#chapter-1" className="whitespace-nowrap hover:text-[#F3F1EC]">一、前言</a>
        <a href="#chapter-2" className="whitespace-nowrap hover:text-[#F3F1EC]">二、角色定義</a>
        <a href="#chapter-3" className="whitespace-nowrap hover:text-[#F3F1EC]">三、行前階段</a>
        <a href="#chapter-4" className="whitespace-nowrap hover:text-[#F3F1EC]">四、行進期間</a>
        <a href="#chapter-5" className="whitespace-nowrap hover:text-[#F3F1EC]">五、事故發生</a>
        <a href="#chapter-6" className="whitespace-nowrap hover:text-[#F3F1EC]">六、行程結束</a>
        <a href="#chapter-7" className="whitespace-nowrap hover:text-[#F3F1EC]">七、結語</a>
      </nav>
    </header>
  );
};
