'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Flame, TrendingDown, ExternalLink, ArrowRight, ShieldCheck } from 'lucide-react';

export function BurnEngine() {
  const [dailyVolume, setDailyVolume] = useState<number>(2000000); // $2M default
  const brewPrice = 0.01054;
  const protocolFeeRate = 0.0025; // 0.25%
  const buybackRatio = 0.80; // 80% of protocol fees buyback & burn

  // Daily fees collected in USD
  const dailyProtocolFee = dailyVolume * protocolFeeRate;
  const dailyBuybackUsd = dailyProtocolFee * buybackRatio;
  const dailyBrewBurned = dailyBuybackUsd / brewPrice;

  const monthlyBrewBurned = dailyBrewBurned * 30;
  const yearlyBrewBurned = dailyBrewBurned * 365;

  const burnedAmount = 81240000;
  const totalSupply = 1000000000;
  const burnedPercent = (burnedAmount / totalSupply) * 100;

  return (
    <section id="burn" className="py-16 lg:py-24 bg-[#06090e] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-400 mb-2">
            <Flame className="h-3.5 w-3.5" />
            <span>Continuous Hyper-Deflation</span>
            <span aria-hidden="true">·</span>
            <span>80% Buyback Rule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            The Deflationary Burn Vault
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Every transaction executed across the Brew Family launchpad routes 80% of claimed protocol fees into open-market market buybacks and irreversible burns.
          </p>
        </div>

        {/* Top Burn Progress Card */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 p-6 sm:p-8 backdrop-blur mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Total Supply Torched to Date
              </span>
              <div className="mt-1 flex items-baseline gap-3">
                <span className="text-3xl sm:text-5xl font-extrabold font-mono text-white tabular-nums">
                  {burnedAmount.toLocaleString()}
                </span>
                <span className="text-lg font-bold text-amber-400">$BREW</span>
              </div>
              <p className="mt-1 text-xs text-slate-500 font-mono">
                Proof of Burn Contract: 0x000000000000000000000000000000000000dEaD
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold font-mono text-orange-400 tabular-nums">
                  {burnedPercent.toFixed(2)}%
                </p>
                <p className="text-xs font-medium text-slate-300">Total Supply Destroyed</p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                <p className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
                  918.76M
                </p>
                <p className="text-xs font-medium text-slate-400">Remaining Circulating</p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
              <span>0 BREW</span>
              <span className="text-orange-400 font-bold">{burnedPercent.toFixed(2)}% Torched</span>
              <span>1,000,000,000 Max Cap</span>
            </div>
            <div className="h-3 w-full rounded-full bg-slate-800 overflow-hidden p-0.5 border border-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transition-all duration-1000"
                style={{ width: `${burnedPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Burn Calculator & Graphic Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Burn Visual Graphic */}
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/brewinu_burn.jpg"
                  alt="Deflationary crypto token burn mechanism visual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 500px"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090e] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white flex items-center gap-2">
                  <Flame className="h-4 w-4 text-orange-400" />
                  Irreversible Protocol Black Hole
                </h4>
                <p className="mt-1 text-xs text-slate-400">
                  Unlike inflationary tokens that dilute holders, Brew Inu reduces circulating tokens continuously as the ecosystem scales.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Projected Burn Calculator */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 sm:p-8 backdrop-blur">
              <h3 className="text-lg font-bold text-white mb-2">
                Simulated Buyback & Burn Forecaster
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Adjust projected daily launchpad trading volume to see forecasted $BREW scarcity reduction:
              </p>

              {/* Slider */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400 font-medium">Daily Ecosystem Volume:</span>
                  <span className="font-mono text-base font-bold text-amber-400 tabular-nums">
                    ${(dailyVolume / 1000000).toFixed(1)}M USD/day
                  </span>
                </div>
                <input
                  type="range"
                  min="200000"
                  max="10000000"
                  step="200000"
                  value={dailyVolume}
                  onChange={(e) => setDailyVolume(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-slate-800 accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>$200K / day</span>
                  <span>$5M / day</span>
                  <span>$10M / day</span>
                </div>
              </div>

              {/* Forecast Results Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/5 bg-[#06090e] p-4">
                  <p className="text-xs text-slate-400">Daily Burn</p>
                  <p className="mt-1 font-mono text-lg font-bold text-white tabular-nums">
                    {(dailyBrewBurned / 1000).toFixed(0)}K
                  </p>
                  <p className="text-[11px] text-amber-400 font-mono">
                    ${(dailyBuybackUsd).toLocaleString('en-US', { maximumFractionDigits: 0 })} USD
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#06090e] p-4">
                  <p className="text-xs text-slate-400">Monthly Burn (30d)</p>
                  <p className="mt-1 font-mono text-lg font-bold text-orange-400 tabular-nums">
                    {(monthlyBrewBurned / 1000000).toFixed(2)}M
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    ~{((monthlyBrewBurned / totalSupply) * 100).toFixed(2)}% of supply
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#06090e] p-4">
                  <p className="text-xs text-slate-400">Yearly Burn (365d)</p>
                  <p className="mt-1 font-mono text-lg font-bold text-emerald-400 tabular-nums">
                    {(yearlyBrewBurned / 1000000).toFixed(1)}M
                  </p>
                  <p className="text-[11px] text-slate-400 font-mono">
                    ~{((yearlyBrewBurned / totalSupply) * 100).toFixed(1)}% burned/yr
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-4">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  All burns visible on BNB Smart Chain explorer
                </span>
                <a
                  href="https://bscscan.com/token/0xfa6d9b504848606eb9aec04ccc161d169b3f2159?a=0x000000000000000000000000000000000000dead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  Inspect Dead Wallet
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
