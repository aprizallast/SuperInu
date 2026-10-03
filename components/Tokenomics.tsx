'use client';

import React from 'react';
import { Shield, Lock, Flame, CheckCircle, Percent, Coins, Ban } from 'lucide-react';

export function Tokenomics() {
  const allocation = [
    {
      title: 'PancakeSwap V3 Liquidity Pool',
      pct: '80.00%',
      amount: '800,000,000 BREW',
      color: 'bg-amber-500',
      note: 'Permanently locked on deployment, immutable LP',
    },
    {
      title: 'Burned to Dead Address',
      pct: '8.12%',
      amount: '81,240,000 BREW',
      color: 'bg-orange-500',
      note: 'Permanently destroyed via 80% protocol buyback fee',
    },
    {
      title: 'Community Ecosystem & Staking Vaults',
      pct: '11.88%',
      amount: '118,760,000 BREW',
      color: 'bg-emerald-500',
      note: 'Multi-sig community incentives and platform rewards',
    },
  ];

  const securityFeatures = [
    {
      icon: Ban,
      title: '0% Tax on All Transfers',
      desc: 'No buy tax, no sell tax, no hidden dev fees. 100% of your transaction goes to your wallet.',
    },
    {
      icon: Shield,
      title: 'Renounced Contract Ownership',
      desc: 'No admin keys or privileged functions. The contract is immutable and cannot be modified.',
    },
    {
      icon: Lock,
      title: 'Permanently Locked Liquidity',
      desc: 'Liquidity positions cannot be drained, removed, or migrated by anyone, ensuring 100% anti-rug safety.',
    },
    {
      icon: Coins,
      title: 'Fixed Cap (No Minting)',
      desc: 'The max supply is hardcoded to 1,000,000,000 tokens. Zero additional tokens can ever be minted.',
    },
  ];

  return (
    <section id="tokenomics" className="py-16 lg:py-24 bg-[#080d15] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Rock-Solid Architecture</span>
            <span aria-hidden="true">·</span>
            <span>BEP-20 Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Uncompromised Tokenomics
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Engineered for trust, liquidity depth, and long-term scarcity on BNB Smart Chain.
          </p>
        </div>

        {/* Security Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {securityFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="rounded-xl border border-white/10 bg-slate-900/60 p-5 transition-all hover:border-amber-400/30 hover:bg-slate-900"
              >
                <div className="inline-flex p-2.5 rounded-lg bg-amber-500/10 text-amber-400 mb-3 border border-amber-500/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1.5">{feat.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Allocation Breakdown */}
        <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <h3 className="text-lg font-bold text-white">Token Supply Allocation</h3>
              <p className="text-xs text-slate-400">1,000,000,000 BREW Total Fixed Supply</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400">Standard: BEP-20</span>
              <span className="text-xs text-slate-600">·</span>
              <span className="text-xs font-mono text-slate-400">Decimals: 18</span>
            </div>
          </div>

          {/* Allocation segmented bar */}
          <div className="mt-6">
            <div className="flex h-4 w-full rounded-full overflow-hidden p-0.5 bg-[#06090e] border border-white/10">
              <div style={{ width: '80%' }} className="h-full bg-amber-500" title="80% Liquidity" />
              <div style={{ width: '8.12%' }} className="h-full bg-orange-500" title="8.12% Burned" />
              <div style={{ width: '11.88%' }} className="h-full bg-emerald-500" title="11.88% Ecosystem" />
            </div>
          </div>

          {/* Cards for each allocation */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {allocation.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/5 bg-[#06090e] p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                  <span className="text-xs font-bold text-slate-200">{item.title}</span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl font-bold font-mono text-white tabular-nums">{item.pct}</span>
                  <span className="text-xs font-mono text-slate-400">{item.amount}</span>
                </div>
                <p className="mt-2 text-[11px] text-slate-500">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
