'use client';

import React, { useState } from 'react';
import { TrendingUp, RefreshCw, Flame, DollarSign, Activity } from 'lucide-react';

export function StatsRibbon() {
  const [currency, setCurrency] = useState<'USD' | 'BNB'>('USD');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState('Just now');

  const bnbPrice = 612.4; // simulated live BNB price in USD
  const brewPriceUsd = 0.01054;
  const brewPriceBnb = brewPriceUsd / bnbPrice;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setLastUpdated('Just now');
    }, 600);
  };

  const metrics = [
    {
      label: 'Token Price',
      value: currency === 'USD' ? `$${brewPriceUsd.toFixed(5)}` : `${brewPriceBnb.toFixed(8)} BNB`,
      change: '+14.62%',
      positive: true,
      sub: '24h High: $0.0124',
    },
    {
      label: 'Market Capitalization',
      value: currency === 'USD' ? '$10,540,000' : `${(10540000 / bnbPrice).toFixed(1)} BNB`,
      change: 'Rank #1042',
      positive: true,
      sub: 'Fully Diluted: $10.54M',
    },
    {
      label: '24h Trading Volume',
      value: currency === 'USD' ? '$1,428,500' : `${(1428500 / bnbPrice).toFixed(1)} BNB`,
      change: '+38.4%',
      positive: true,
      sub: 'PancakeSwap + Uniswap',
    },
    {
      label: 'Total Burned (Scarcity)',
      value: '81,240,000 BREW',
      change: '8.12% Torched',
      positive: true,
      sub: 'Dead Address: 0x...dEaD',
      icon: Flame,
    },
    {
      label: 'Circulating Supply',
      value: '918,760,000 BREW',
      change: '100% Fixed Cap',
      positive: true,
      sub: 'Max Supply: 1,000,000,000',
    },
  ];

  return (
    <section className="border-y border-white/10 bg-[#080d15] py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Live On-Chain Telemetry (BNB Smart Chain)
            </span>
            <span className="text-xs text-slate-500">Updated {lastUpdated}</span>
          </div>

          {/* Controls: Currency switcher and Refresh */}
          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-lg bg-slate-900 border border-white/10 p-0.5 text-xs">
              <button
                onClick={() => setCurrency('USD')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  currency === 'USD' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setCurrency('BNB')}
                className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                  currency === 'BNB' ? 'bg-amber-500 text-slate-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                BNB
              </button>
            </div>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900 px-2.5 py-1.5 text-xs text-slate-300 hover:text-white hover:border-white/20 transition-colors"
              title="Refresh metrics"
            >
              <RefreshCw className={`h-3 w-3 ${isRefreshing ? 'animate-spin text-amber-400' : ''}`} />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-white/5 bg-slate-900/50 p-4 transition-all hover:border-amber-400/20 hover:bg-slate-900/80"
            >
              <p className="text-xs font-medium text-slate-400">{m.label}</p>
              <p className="mt-1.5 text-base sm:text-lg font-bold font-mono text-white tabular-nums">
                {m.value}
              </p>
              <div className="mt-1 flex items-center justify-between text-[11px]">
                <span className="font-semibold text-emerald-400 tabular-nums">{m.change}</span>
                <span className="text-slate-500 truncate max-w-[100px]">{m.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
