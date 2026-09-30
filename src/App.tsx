/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionForeword } from './components/SectionForeword';
import { SectionRoleDefinition } from './components/SectionRoleDefinition';
import { SectionPreTrip } from './components/SectionPreTrip';
import { SectionOnTrail } from './components/SectionOnTrail';
import { SectionIncident } from './components/SectionIncident';
import { SectionPostTrip } from './components/SectionPostTrip';
import { PlanGenerator } from './components/PlanGenerator';
import { SectionConclusion } from './components/SectionConclusion';
import { Footer } from './components/Footer';
import { EmergencyModal } from './components/EmergencyModal';

export default function App() {
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0C100E] text-[#E6E4DE] selection:bg-[#1E3B2E] selection:text-[#A7F3D0]">
      {/* Top Bar adhering to 3-zone contract */}
      <Navbar onOpenEmergencyModal={() => setIsEmergencyModalOpen(true)} />

      {/* Main Educational & Practical Content Flow */}
      <main>
        {/* Editorial Hero */}
        <Hero />

        {/* Chapter 1: 前言：被低估的安全角色 & 傳統 vs 現代對比表 */}
        <SectionForeword />

        {/* Chapter 2: 重新定義留守人的角色 (資訊管理、異常發現、資源協調) */}
        <SectionRoleDefinition />

        {/* Chapter 3: 行前階段：建立完整資訊基礎 & 四大支柱檢核清單 */}
        <SectionPreTrip />

        {/* Chapter 4: 行進期間：掌握狀況但不過度干預 & 正常延誤 vs 真正異常 & 決策樹 */}
        <SectionOnTrail />

        {/* Chapter 5: 事故發生時：成為資訊整合中心 & 搜救情報必備7要素 */}
        <SectionIncident />

        {/* Chapter 6: 行程結束後：建立安全回饋機制 */}
        <SectionPostTrip />

        {/* Interactive Utility: 登山留守計畫表產生器 */}
        <PlanGenerator />

        {/* Chapter 7: 結語 & 亞馬遜國家山岳協會標語 */}
        <SectionConclusion />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Emergency Protocol Dialog */}
      <EmergencyModal 
        isOpen={isEmergencyModalOpen} 
        onClose={() => setIsEmergencyModalOpen(false)} 
      />
    </div>
  );
}
