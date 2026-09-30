import React from 'react';
import { X, ShieldAlert, PhoneCall, AlertTriangle, Radio, CheckCircle2 } from 'lucide-react';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-[#131A17] rounded-xl shadow-2xl border border-[#23352B] overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#7F1D1D] text-white flex items-center justify-between border-b border-[#991B1B]">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-white" />
            <h3 className="text-base sm:text-lg font-bold font-serif">
              山難緊急求援與留守人通報協議
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="關閉"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#CDC8BD] font-serif">
          
          {/* Priority Call Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-[#18221E] rounded-lg border border-[#23352B]">
              <div className="text-xs font-mono font-bold text-[#E09443] uppercase mb-1">
                山下留守人通報專線
              </div>
              <div className="text-lg font-bold text-[#F3F1EC] flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-[#F87171]" />
                <span>119 消防局救災指揮中心</span>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-1 font-sans">
                留守人具備市話與網路，直撥 119 並指名事發山域轄區縣市消防局。
              </p>
            </div>

            <div className="p-3.5 bg-[#18221E] rounded-lg border border-[#23352B]">
              <div className="text-xs font-mono font-bold text-[#34D399] uppercase mb-1">
                山上受困手機求援（微弱訊號）
              </div>
              <div className="text-lg font-bold text-[#F3F1EC] flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-[#34D399]" />
                <span>112 緊急救難專線</span>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-1 font-sans">
                任何業者手機，只要能抓到任何一家微弱訊號即可撥通。
              </p>
            </div>
          </div>

          {/* Golden Script */}
          <div>
            <h4 className="font-bold text-[#34D399] mb-2 flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-[#34D399]" />
              留守人報案通話標準台詞（清晰、冷靜、條理）：
            </h4>
            <div className="p-4 bg-[#18221E] border-l-3 border-[#E09443] text-xs sm:text-sm text-[#F3F1EC] leading-relaxed rounded-r-md border-y border-r border-[#23352B]">
              「您好，我是隊伍的正式留守人【姓名】。我持有全隊完整名冊與航跡。隊伍原定於【時間】回報，目前已逾時【X】小時且無法聯繫（或接獲SOS求救）。最後已知座標為【WGS84 經緯度】，現場待援人數【X】人，我有完整 GPX 電子檔與保險證號，隨時可配合提供。」
            </div>
          </div>

          {/* National Park Dispatch Info */}
          <div>
            <h4 className="font-bold text-[#34D399] mb-2 font-mono text-xs uppercase tracking-wider">
              主要國家公園保育巡查與救援值班處
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-sans">
              <div className="p-2.5 bg-[#18221E] border border-[#23352B] rounded">
                <div className="font-bold text-[#F3F1EC]">玉山國家公園</div>
                <div className="text-[#9CA3AF] font-mono mt-0.5">049-277-3121</div>
              </div>
              <div className="p-2.5 bg-[#18221E] border border-[#23352B] rounded">
                <div className="font-bold text-[#F3F1EC]">雪霸國家公園</div>
                <div className="text-[#9CA3AF] font-mono mt-0.5">037-996-100</div>
              </div>
              <div className="p-2.5 bg-[#18221E] border border-[#23352B] rounded">
                <div className="font-bold text-[#F3F1EC]">太魯閣國家公園</div>
                <div className="text-[#9CA3AF] font-mono mt-0.5">03-862-1100</div>
              </div>
            </div>
          </div>

          {/* Crucial Notice */}
          <div className="p-3 bg-[#2A1815] border border-[#52251E] rounded-md text-xs text-[#FCA5A5] flex items-start gap-2 font-sans">
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5 text-[#F87171]" />
            <span>
              注意：切勿在社群媒體公開未經證實之受困者揣測或傷亡謠言，留守人為官方指揮中心與家屬間之唯一單一聯絡窗口。
            </span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#18221E] border-t border-[#23352B] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold text-[#F3F1EC] bg-[#23352B] hover:bg-[#2D4236] rounded-md transition-colors cursor-pointer"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};
