'use client';

import React, { useState } from 'react';
import { Shield, Sparkles, Flame, Check, Zap, Layers, Lock } from 'lucide-react';

export function AboutSection() {
  const [activeTab, setActiveTab] = useState<'mission' | 'mechanics' | 'security'>('mission');

  const tabContent = {
    mission: {
      title: 'A Superhero Ally for Every Web3 Creator & Degens',
      desc: 'Brew Inu was born out of a simple conviction: BNB Chain needed a fearless, non-extractive mascot and launchpad where anyone can deploy tokens without predatory taxes, team allocations, or rug risks. With Commander Brew Inu at the helm, creators gain instant liquidity depth while holders benefit from permanent deflation.',
      points: [
        '100% fair launch with fixed 1 Billion token cap',
        'Permanent liquidity locks preventing developer drain',
        'Direct integration with PancakeSwap V3 smart liquidity pools',
      ],
    },
    mechanics: {
      title: 'Automated 80% Buyback & Multi-Token Pairing',
      desc: 'The Brew Family engine redefines traditional launchpads. Instead of forcing projects to pair strictly with volatile base tokens, creators can pair their token with $BREW, $BNB, or other community tokens. 80% of all protocol revenues are automatically directed to buy $BREW on the open market and burn it permanently.',
      points: [
        '80% protocol revenues feed constant market buybacks',
        'Launched tokens auto-burn fees in their native asset',
        'Over 81.2 Million $BREW already destroyed from circulation',
      ],
    },
    security: {
      title: 'Zero Privileges, Immutable Smart Contract Code',
      desc: 'Trust is built through transparency and mathematical guarantees. The Brew Inu smart contract contains zero owner privileges, no transfer tax hooks, and no hidden minting functions. Once deployed, the rules cannot be rewritten.',
      points: [
        'Contract ownership renounced to zero address',
        '0% Buy tax and 0% Sell tax hardcoded into BEP-20 transfer',
        'Verified source code auditable by anyone on BSCScan',
      ],
    },
  };

  const current = tabContent[activeTab];

  return (
    <section id="about" className="py-16 lg:py-24 bg-[#080d15] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>The Superhero Story</span>
            <span aria-hidden="true">·</span>
            <span>Why Brew Inu Stands Apart</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Rebuilding Trust on BNB Smart Chain
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Learn why Commander Brew Inu is leading the charge for transparent, community-owned tokenomics.
          </p>
        </div>

        {/* Interactive Segmented Tab Controls */}
        <div className="mx-auto max-w-md flex items-center justify-center p-1 rounded-xl bg-slate-900 border border-white/10 mb-8">
          <button
            onClick={() => setActiveTab('mission')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'mission'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab('mechanics')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'mechanics'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Burn Mechanics
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
              activeTab === 'security'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Immutable Security
          </button>
        </div>

        {/* Tab Detail Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-10 backdrop-blur">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{current.title}</h3>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            {current.desc}
          </p>

          <div className="space-y-3 pt-2 border-t border-white/10">
            {current.points.map((point) => (
              <div key={point} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <div className="h-5 w-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3" />
                </div>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
