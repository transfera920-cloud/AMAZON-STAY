import React, { useState } from 'react';
import { WatchkeeperPlan, MemberInfo } from '../types';
import { SAMPLE_PLANS } from '../data/guideContent';
import { Copy, Check, Printer, Plus, Trash2 } from 'lucide-react';

const defaultEmptyPlan: WatchkeeperPlan = {
  tripName: '',
  mountainRange: '',
  startDate: '',
  endDate: '',
  leaderName: '',
  leaderPhone: '',
  leaderSatellite: '',
  watchkeeperName: '',
  watchkeeperPhone: '',
  watchkeeperAlternatePhone: '',
  itineraryPlan: '',
  campSites: '',
  retreatRoutes: '',
  checkInPoints: '每日 18:00 前抵達山屋後回報',
  overdueThresholdHours: 3,
  emergencyTriggerThresholdHours: 6,
  insurancePolicy: '',
  entryPermitNo: '',
  members: [
    { name: '', phone: '', emergencyContact: '', emergencyPhone: '', notes: '' }
  ]
};

export const PlanGenerator: React.FC = () => {
  const [plan, setPlan] = useState<WatchkeeperPlan>({
    ...defaultEmptyPlan,
    ...SAMPLE_PLANS.nanhu as WatchkeeperPlan
  });

  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'editor' | 'preview'>('editor');

  const handleLoadPreset = (key: 'nanhu' | 'yushan' | 'empty') => {
    if (key === 'empty') {
      setPlan(defaultEmptyPlan);
    } else {
      setPlan({
        ...defaultEmptyPlan,
        ...SAMPLE_PLANS[key] as WatchkeeperPlan
      });
    }
  };

  const handleMemberChange = (index: number, field: keyof MemberInfo, value: string) => {
    const updated = [...plan.members];
    updated[index] = { ...updated[index], [field]: value };
    setPlan({ ...plan, members: updated });
  };

  const addMember = () => {
    setPlan({
      ...plan,
      members: [...plan.members, { name: '', phone: '', emergencyContact: '', emergencyPhone: '', notes: '' }]
    });
  };

  const removeMember = (index: number) => {
    if (plan.members.length <= 1) return;
    const updated = plan.members.filter((_, idx) => idx !== index);
    setPlan({ ...plan, members: updated });
  };

  const generateFormattedText = () => {
    return `【亞馬遜國家山岳協會 · 登山活動留守計畫表】
────────────────────────
■ 活動名稱：${plan.tripName || '未填寫'}
■ 山域範圍：${plan.mountainRange || '未填寫'}
■ 活動日期：${plan.startDate || '未定'} ～ ${plan.endDate || '未定'}
■ 入山證號：${plan.entryPermitNo || '無 / 免辦'}
■ 保險單號：${plan.insurancePolicy || '無'}

■ 留守人員資訊（山下守門人）：
  - 留守人姓名：${plan.watchkeeperName || '未指定'}
  - 聯絡電話：${plan.watchkeeperPhone || '未填寫'}
  - 備用電話：${plan.watchkeeperAlternatePhone || '無'}

■ 現場領隊資訊（山上指揮）：
  - 領隊姓名：${plan.leaderName || '未填寫'}
  - 領隊手機：${plan.leaderPhone || '未填寫'}
  - 衛星器材：${plan.leaderSatellite || '無'}

■ 應變共識協議（重要）：
  - 定時回報點：${plan.checkInPoints}
  - 警戒逾時時限：超過約定時間 ${plan.overdueThresholdHours} 小時未報，留守人主動聯繫山屋/林道/家屬查證。
  - 搜救啟動時限：超過約定時間 ${plan.emergencyTriggerThresholdHours} 小時且查證無音訊，依協議正式撥打 119 通報搜救。
  - 預計撤退方案：${plan.retreatRoutes || '原路撤退'}

■ 預定每日行程：
${plan.itineraryPlan || '無'}

■ 預定住宿/紮營點：
${plan.campSites || '無'}

■ 隊員名冊與緊急聯絡人（共 ${plan.members.length} 人）：
${plan.members.map((m, i) => `  ${i + 1}. ${m.name || '隊員'} ｜ 手機：${m.phone || '-'}
     緊急聯絡人：${m.emergencyContact || '-'} (${m.emergencyPhone || '-'})
     備註/病史：${m.notes || '無'}`).join('\n')}
────────────────────────
山上的人負責前進，山下的人負責守護。祝全隊平安順利！`;
  };

  const handleCopyText = async () => {
    try {
      await navigator.clipboard.writeText(generateFormattedText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="plan-generator" className="py-14 sm:py-20 border-b border-[#1F2B24] bg-[#0C100E]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#34D399] mb-2 font-bold">
              PRACTICAL SAFETY TOOL
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#F3F1EC] tracking-tight">
              登山留守計畫表與資訊卡產生器
            </h2>
            <p className="text-sm text-[#9CA3AF] mt-1 font-serif">
              供登山隊伍行前建立完整情資備忘，一鍵生成傳送留守群組或列印紙本留存。
            </p>
          </div>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#8E9B93] font-mono mr-1">範本載入：</span>
            <button
              onClick={() => handleLoadPreset('nanhu')}
              className="px-2.5 py-1 text-xs font-medium bg-[#18221E] hover:bg-[#23352B] text-[#34D399] rounded border border-[#23352B] transition-colors cursor-pointer"
            >
              南湖大山 4天
            </button>
            <button
              onClick={() => handleLoadPreset('yushan')}
              className="px-2.5 py-1 text-xs font-medium bg-[#18221E] hover:bg-[#23352B] text-[#34D399] rounded border border-[#23352B] transition-colors cursor-pointer"
            >
              玉山主西 3天
            </button>
            <button
              onClick={() => handleLoadPreset('empty')}
              className="px-2.5 py-1 text-xs font-medium bg-[#131A17] hover:bg-[#18221E] text-[#8E9B93] rounded border border-[#1F2B24] transition-colors cursor-pointer"
            >
              空白重填
            </button>
          </div>
        </div>

        {/* Action Controls & Mode Switch */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-[#18221E] border border-[#23352B] rounded-t-xl">
          {/* Segmented Control */}
          <div className="flex items-center gap-1 bg-[#101614] p-1 rounded-lg border border-[#1F2B24]">
            <button
              onClick={() => setActiveTab('editor')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'editor'
                  ? 'bg-[#34D399] text-[#0C100E] shadow-xs'
                  : 'text-[#9CA3AF] hover:text-[#F3F1EC]'
              }`}
            >
              編輯留守資料
            </button>
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-[#34D399] text-[#0C100E] shadow-xs'
                  : 'text-[#9CA3AF] hover:text-[#F3F1EC]'
              }`}
            >
              檢視留守卡（預覽）
            </button>
          </div>

          {/* Export Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#34D399] bg-[#101614] border border-[#23352B] hover:bg-[#1A2621] rounded-md transition-colors shadow-2xs cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? '已複製純文字！' : '複製 LINE/通訊群文字'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#0C100E] bg-[#34D399] hover:bg-[#22C55E] rounded-md transition-colors shadow-2xs cursor-pointer font-medium"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>列印 / 存為 PDF</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        {activeTab === 'editor' ? (
          <div className="p-6 sm:p-8 bg-[#131A17] border-x border-b border-[#23352B] rounded-b-xl shadow-xs space-y-8">
            
            {/* Field Set 1: Basic Trip Info */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399] mb-3 pb-2 border-b border-[#1F2B24] flex items-center gap-2">
                <span>01. 行程基本情報</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#8E9B93] mb-1">活動行程名稱</label>
                  <input
                    type="text"
                    value={plan.tripName}
                    onChange={e => setPlan({ ...plan, tripName: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] outline-hidden bg-[#101614] text-[#F3F1EC]"
                    placeholder="例：南湖大山四天三夜"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-[#8E9B93] mb-1">所屬山區 / 國家公園</label>
                  <input
                    type="text"
                    value={plan.mountainRange}
                    onChange={e => setPlan({ ...plan, mountainRange: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] outline-hidden bg-[#101614] text-[#F3F1EC]"
                    placeholder="例：太魯閣國家公園 / 北一段"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8E9B93] mb-1">預計出發日期</label>
                  <input
                    type="date"
                    value={plan.startDate}
                    onChange={e => setPlan({ ...plan, startDate: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] outline-hidden bg-[#101614] text-[#F3F1EC]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8E9B93] mb-1">預計下山日期</label>
                  <input
                    type="date"
                    value={plan.endDate}
                    onChange={e => setPlan({ ...plan, endDate: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] outline-hidden bg-[#101614] text-[#F3F1EC]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8E9B93] mb-1">入園 / 入山許可編號</label>
                  <input
                    type="text"
                    value={plan.entryPermitNo}
                    onChange={e => setPlan({ ...plan, entryPermitNo: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] outline-hidden bg-[#101614] text-[#F3F1EC]"
                    placeholder="例：TRK-2026-988"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8E9B93] mb-1">登山綜合保險單號</label>
                  <input
                    type="text"
                    value={plan.insurancePolicy}
                    onChange={e => setPlan({ ...plan, insurancePolicy: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md focus:border-[#34D399] focus:ring-1 focus:ring-[#34D399] outline-hidden bg-[#101614] text-[#F3F1EC]"
                    placeholder="例：0500-26MAP000128"
                  />
                </div>
              </div>
            </div>

            {/* Field Set 2: Key Personnel */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399] mb-3 pb-2 border-b border-[#1F2B24] flex items-center gap-2">
                <span>02. 現場領隊 vs 山下留守人</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Watchkeeper Box */}
                <div className="p-4 bg-[#18221E] rounded-lg border border-[#23352B]">
                  <div className="text-xs font-bold text-[#E09443] uppercase tracking-wider mb-2 font-mono">
                    山下留守人（外部情資守門人）
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-[#8E9B93] mb-1">留守人姓名</label>
                      <input
                        type="text"
                        value={plan.watchkeeperName}
                        onChange={e => setPlan({ ...plan, watchkeeperName: e.target.value })}
                        className="w-full text-sm px-3 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="例：張雅晴"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#8E9B93] mb-1">留守人手機（保持24小時通暢）</label>
                      <input
                        type="text"
                        value={plan.watchkeeperPhone}
                        onChange={e => setPlan({ ...plan, watchkeeperPhone: e.target.value })}
                        className="w-full text-sm px-3 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="例：0988-765-432"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#8E9B93] mb-1">備用市話或代理留守人</label>
                      <input
                        type="text"
                        value={plan.watchkeeperAlternatePhone}
                        onChange={e => setPlan({ ...plan, watchkeeperAlternatePhone: e.target.value })}
                        className="w-full text-sm px-3 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="例：02-2345-6789"
                      />
                    </div>
                  </div>
                </div>

                {/* Leader Box */}
                <div className="p-4 bg-[#18221E] rounded-lg border border-[#23352B]">
                  <div className="text-xs font-bold text-[#34D399] uppercase tracking-wider mb-2 font-mono">
                    現場領隊 / 嚮導（山上指揮）
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-[#8E9B93] mb-1">領隊姓名</label>
                      <input
                        type="text"
                        value={plan.leaderName}
                        onChange={e => setPlan({ ...plan, leaderName: e.target.value })}
                        className="w-full text-sm px-3 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="例：林逸舟"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#8E9B93] mb-1">領隊行動電話</label>
                      <input
                        type="text"
                        value={plan.leaderPhone}
                        onChange={e => setPlan({ ...plan, leaderPhone: e.target.value })}
                        className="w-full text-sm px-3 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="例：0912-345-678"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-[#8E9B93] mb-1">衛星通訊設備（inReach / 無線電）</label>
                      <input
                        type="text"
                        value={plan.leaderSatellite}
                        onChange={e => setPlan({ ...plan, leaderSatellite: e.target.value })}
                        className="w-full text-sm px-3 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="例：Garmin inReach ID 或無線電 144.430"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Field Set 3: Emergency Consensus */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399] mb-3 pb-2 border-b border-[#1F2B24] flex items-center gap-2">
                <span>03. 應變共識與逾時處置時限（核心防線）</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-[#8E9B93] mb-1">定時回報點與時間</label>
                  <input
                    type="text"
                    value={plan.checkInPoints}
                    onChange={e => setPlan({ ...plan, checkInPoints: e.target.value })}
                    className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md bg-[#101614] text-[#F3F1EC]"
                    placeholder="例：每日 18:00 前抵山屋發送"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#8E9B93] mb-1">逾時自主查證時限（小時）</label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    value={plan.overdueThresholdHours}
                    onChange={e => setPlan({ ...plan, overdueThresholdHours: Number(e.target.value) })}
                    className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md bg-[#101614] text-[#F3F1EC]"
                  />
                  <span className="text-[11px] text-[#8E9B93] mt-0.5 block">逾此時間主動查問山屋與巡山員</span>
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#E09443] mb-1">通報搜救極限時限（小時）</label>
                  <input
                    type="number"
                    min="2"
                    max="24"
                    value={plan.emergencyTriggerThresholdHours}
                    onChange={e => setPlan({ ...plan, emergencyTriggerThresholdHours: Number(e.target.value) })}
                    className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md bg-[#101614] text-[#F3F1EC]"
                  />
                  <span className="text-[11px] text-[#E09443] mt-0.5 block">逾此時間查無音訊即正式撥打119</span>
                </div>
              </div>
            </div>

            {/* Field Set 4: Itinerary & Routes */}
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399] mb-3 pb-2 border-b border-[#1F2B24] flex items-center gap-2">
                <span>04. 行程明細、營地與撤退路線（Plan B）</span>
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#8E9B93] mb-1">預計每日行程（建議列出每日通過之重要鞍部與預估時程）</label>
                  <textarea
                    rows={4}
                    value={plan.itineraryPlan}
                    onChange={e => setPlan({ ...plan, itineraryPlan: e.target.value })}
                    className="w-full text-xs sm:text-sm px-3 py-2 border border-[#23352B] rounded-md bg-[#101614] text-[#F3F1EC] font-mono leading-relaxed"
                    placeholder="D1: ...&#10;D2: ...&#10;D3: ..."
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#8E9B93] mb-1">住宿與紮營點明細</label>
                    <input
                      type="text"
                      value={plan.campSites}
                      onChange={e => setPlan({ ...plan, campSites: e.target.value })}
                      className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md bg-[#101614] text-[#F3F1EC]"
                      placeholder="例：D1 雲稜山屋 / D2 南湖圈谷山屋"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#E09443] mb-1">撤退路線與高風險備案（Plan B）</label>
                    <input
                      type="text"
                      value={plan.retreatRoutes}
                      onChange={e => setPlan({ ...plan, retreatRoutes: e.target.value })}
                      className="w-full text-sm px-3 py-2 border border-[#23352B] rounded-md bg-[#101614] text-[#F3F1EC]"
                      placeholder="例：若五岩峰結冰強風則原路折返雲稜"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Field Set 5: Members & Contacts */}
            <div>
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1F2B24]">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#34D399]">
                  05. 隊員名冊與緊急聯絡人（搜救第一手名單）
                </h3>
                <button
                  type="button"
                  onClick={addMember}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#34D399] bg-[#18221E] px-2.5 py-1 rounded border border-[#23352B] hover:bg-[#23352B] transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>新增隊員</span>
                </button>
              </div>

              <div className="space-y-3">
                {plan.members.map((member, index) => (
                  <div key={index} className="p-3.5 bg-[#18221E] rounded-lg border border-[#23352B] grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-[#8E9B93]">姓名 / 稱謂</label>
                      <input
                        type="text"
                        value={member.name}
                        onChange={e => handleMemberChange(index, 'name', e.target.value)}
                        className="w-full text-xs px-2.5 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="姓名"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-[#8E9B93]">個人手機</label>
                      <input
                        type="text"
                        value={member.phone}
                        onChange={e => handleMemberChange(index, 'phone', e.target.value)}
                        className="w-full text-xs px-2.5 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="09xx-xxx-xxx"
                      />
                    </div>
                    <div className="sm:col-span-3">
                      <label className="block text-[11px] text-[#8E9B93]">緊急聯絡人 (關係)</label>
                      <input
                        type="text"
                        value={member.emergencyContact}
                        onChange={e => handleMemberChange(index, 'emergencyContact', e.target.value)}
                        className="w-full text-xs px-2.5 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="例：王小明 (父親)"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-[#8E9B93]">緊急聯絡電話</label>
                      <input
                        type="text"
                        value={member.emergencyPhone}
                        onChange={e => handleMemberChange(index, 'emergencyPhone', e.target.value)}
                        className="w-full text-xs px-2.5 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="聯絡電話"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] text-[#8E9B93]">病史 / 備註</label>
                      <input
                        type="text"
                        value={member.notes}
                        onChange={e => handleMemberChange(index, 'notes', e.target.value)}
                        className="w-full text-xs px-2.5 py-1.5 border border-[#23352B] rounded bg-[#101614] text-[#F3F1EC]"
                        placeholder="無 / 慢性病用藥"
                      />
                    </div>
                    <div className="sm:col-span-1 text-right sm:text-center pt-2 sm:pt-4">
                      {plan.members.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeMember(index)}
                          className="text-[#F87171] hover:text-red-400 p-1"
                          title="刪除成員"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        ) : (
          /* Preview Document Mode */
          <div className="p-6 sm:p-10 bg-[#131A17] border-x border-b border-[#23352B] rounded-b-xl shadow-xs print-page font-serif">
            
            <div className="border-b-2 border-[#34D399] pb-4 mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-[#8E9B93]">
                  AMAZON NATIONAL MOUNTAINEERING ASSOCIATION · BASECAMP DOSSIER
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F3F1EC]">
                  {plan.tripName || '登山活動留守計畫表'}
                </h3>
              </div>
              <div className="text-xs text-[#8E9B93] font-mono">
                活動時段：{plan.startDate ? `${plan.startDate} ~ ${plan.endDate}` : '待定'}
              </div>
            </div>

            {/* Quick Metadata Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-[#18221E] rounded-lg border border-[#23352B] text-xs mb-6">
              <div>
                <span className="text-[#8E9B93] block font-mono">活動山區</span>
                <span className="font-bold text-[#F3F1EC]">{plan.mountainRange || '-'}</span>
              </div>
              <div>
                <span className="text-[#8E9B93] block font-mono">入山 / 入園證號</span>
                <span className="font-bold text-[#F3F1EC]">{plan.entryPermitNo || '免辦/無'}</span>
              </div>
              <div>
                <span className="text-[#8E9B93] block font-mono">登山保險單號</span>
                <span className="font-bold text-[#F3F1EC]">{plan.insurancePolicy || '無'}</span>
              </div>
              <div>
                <span className="text-[#8E9B93] block font-mono">全隊總人數</span>
                <span className="font-bold text-[#34D399]">{plan.members.length} 人</span>
              </div>
            </div>

            {/* Personnel & Protocol Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border border-[#23352B] bg-[#18221E] rounded-lg p-4">
                <div className="text-xs font-bold text-[#E09443] uppercase tracking-wider mb-2 font-mono">
                  山下留守人（資訊與資源協調）
                </div>
                <div className="text-sm space-y-1 text-[#CDC8BD]">
                  <div><span className="text-[#8E9B93]">姓名：</span>{plan.watchkeeperName || '-'}</div>
                  <div><span className="text-[#8E9B93]">留守手機：</span>{plan.watchkeeperPhone || '-'}</div>
                  <div><span className="text-[#8E9B93]">備用電話：</span>{plan.watchkeeperAlternatePhone || '-'}</div>
                </div>
              </div>

              <div className="border border-[#23352B] bg-[#18221E] rounded-lg p-4">
                <div className="text-xs font-bold text-[#34D399] uppercase tracking-wider mb-2 font-mono">
                  現場領隊（山上現場決策）
                </div>
                <div className="text-sm space-y-1 text-[#CDC8BD]">
                  <div><span className="text-[#8E9B93]">姓名：</span>{plan.leaderName || '-'}</div>
                  <div><span className="text-[#8E9B93]">領隊電話：</span>{plan.leaderPhone || '-'}</div>
                  <div><span className="text-[#8E9B93]">衛星通訊：</span>{plan.leaderSatellite || '-'}</div>
                </div>
              </div>
            </div>

            {/* Agreed Emergency Thresholds */}
            <div className="p-4 bg-[#201713] border border-[#3E2319] rounded-lg mb-6">
              <div className="text-xs font-bold text-[#E09443] uppercase tracking-wider mb-1 font-mono">
                應變觸發協議（逾時通報標準）
              </div>
              <ul className="text-xs sm:text-sm text-[#CDC8BD] space-y-1 list-disc list-inside">
                <li><span className="font-bold text-[#F3F1EC]">回報點：</span>{plan.checkInPoints}</li>
                <li><span className="font-bold text-[#F3F1EC]">第二階段查訪：</span>逾時 <span className="font-bold text-[#E09443] font-mono">{plan.overdueThresholdHours}</span> 小時未報，留守人主動致電山莊與周邊管理單位。</li>
                <li><span className="font-bold text-[#F3F1EC]">第四階段報案：</span>逾時 <span className="font-bold text-[#E09443] font-mono">{plan.emergencyTriggerThresholdHours}</span> 小時且查訪未果，留守人依協議撥打 119 通報山難搜救。</li>
                <li><span className="font-bold text-[#F3F1EC]">撤退方案（Plan B）：</span>{plan.retreatRoutes || '無'}</li>
              </ul>
            </div>

            {/* Itinerary */}
            <div className="mb-6">
              <div className="text-xs font-bold text-[#34D399] uppercase tracking-wider mb-2 font-mono">
                預定行進時程與紮營位置
              </div>
              <pre className="text-xs sm:text-sm text-[#CDC8BD] bg-[#18221E] p-4 rounded border border-[#23352B] whitespace-pre-wrap font-mono">
                {plan.itineraryPlan || '未填寫行程'}
              </pre>
            </div>

            {/* Member List */}
            <div>
              <div className="text-xs font-bold text-[#34D399] uppercase tracking-wider mb-2 font-mono">
                隊員名冊與緊急聯絡人清冊
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-[#23352B]">
                  <thead className="bg-[#18221E] border-b border-[#23352B]">
                    <tr>
                      <th className="p-2.5 font-bold text-[#34D399]">序號</th>
                      <th className="p-2.5 font-bold text-[#34D399]">姓名</th>
                      <th className="p-2.5 font-bold text-[#34D399]">個人電話</th>
                      <th className="p-2.5 font-bold text-[#34D399]">緊急聯絡人 (關係)</th>
                      <th className="p-2.5 font-bold text-[#34D399]">緊急電話</th>
                      <th className="p-2.5 font-bold text-[#34D399]">病史/備註</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#23352B]">
                    {plan.members.map((m, idx) => (
                      <tr key={idx} className="hover:bg-[#18221E]/60 text-[#CDC8BD]">
                        <td className="p-2.5 font-mono">{idx + 1}</td>
                        <td className="p-2.5 font-bold text-[#F3F1EC]">{m.name || '-'}</td>
                        <td className="p-2.5 font-mono">{m.phone || '-'}</td>
                        <td className="p-2.5">{m.emergencyContact || '-'}</td>
                        <td className="p-2.5 font-mono">{m.emergencyPhone || '-'}</td>
                        <td className="p-2.5 text-[#9CA3AF]">{m.notes || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#23352B] text-center text-xs text-[#8E9B93] font-mono">
              山上的人負責前進，山下的人負責守護。 — 亞馬遜國家山岳協會 登山安全宣導
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
