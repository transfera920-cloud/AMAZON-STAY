/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SectionForeword } from './components/SectionForeword';
import { SectionRoleDefinition } from './components/SectionRoleDefinition';
import { SectionPreTrip } from './components/SectionPreTrip';
import { SectionOnTrail } from './components/SectionOnTrail';
import { SectionIncident } from './components/SectionIncident';
import { SectionPostTrip } from './components/SectionPostTrip';
import { SectionConclusion } from './components/SectionConclusion';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0C100E] text-[#E6E4DE] selection:bg-[#1E3B2E] selection:text-[#A7F3D0]">
      <Navbar />

      <main>
        <Hero />
        <SectionForeword />
        <SectionRoleDefinition />
        <SectionPreTrip />
        <SectionOnTrail />
        <SectionIncident />
        <SectionPostTrip />
        <SectionConclusion />
      </main>

      <Footer />
    </div>
  );
}
