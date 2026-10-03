'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Copy, Check, ExternalLink, Flame, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0xfa6d9b504848606eb9aec04ccc161d169b3f2159';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-500/15 via-red-500/5 to-transparent blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Wide Hero Flying Banner Showcase */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-black/80">
          <div className="relative h-64 sm:h-80 md:h-[400px] w-full">
            <Image
              src="/images/brewinu_flying.jpg"
              alt="Brew Inu superhero flying over the illuminated metropolis"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
              referrerPolicy="no-referrer"
            />
            {/* Scrim overlay for legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06090e] via-[#06090e]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06090e]/80 via-transparent to-[#06090e]/80" />
            
            {/* Flying badge label */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">
                  BNB Smart Chain • Official Native Token
                </span>
                <h1 className="mt-1 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
                  Brew Inu <span className="text-amber-400">($BREW)</span>
                </h1>
                <p className="mt-2 text-sm sm:text-base text-slate-200 max-w-xl line-clamp-2 sm:line-clamp-none drop-shadow">
                  The superhero meme token powering Brew Family — the one-click launchpad with permanent liquidity locks and 80% protocol fee burn.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="#swap"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
                >
                  Swap $BREW
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0xfa6d9b504848606eb9aec04ccc161d169b3f2159&chain=bsc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 bg-slate-900/80 px-4 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur transition-all hover:bg-white/10"
                >
                  PancakeSwap
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Two-column Hero Detail: Character Portrait & Value Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Portrait Showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/30 to-red-500/30 blur-lg transition duration-500 group-hover:opacity-100 opacity-60" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c121e]">
                <div className="relative aspect-square w-full">
                  <Image
                    src="/images/brewinu_portrait.jpg"
                    alt="Brew Inu superhero portrait with golden suit and b emblem"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 400px"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Mascot Guardian</p>
                      <p className="text-base font-bold text-white">Commander Brew Inu</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-lg bg-black/60 px-2.5 py-1 backdrop-blur border border-white/10 text-xs font-mono text-emerald-400 tabular-nums">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      Audited & Safe
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission, Contract Address, Core Pillars */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-medium text-amber-400 mb-2">
                <span>Decentralized Launchpad Ecosystem</span>
                <span aria-hidden="true">·</span>
                <span>BNB Smart Chain</span>
                <span aria-hidden="true">·</span>
                <span>PancakeSwap V3</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white text-balance">
                Zero Tax. Permanent Liquidity. Built for Real Creators.
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Brew Inu ($BREW) operates with unalterable tokenomics. With a fixed supply of exactly 1 Billion, renounced ownership, and 80% protocol revenues directed to automated buyback and burns, BREW defends holders while empowering creators to launch pairings with any meme or BEP-20 token.
              </p>
            </div>

            {/* Contract Box */}
            <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4 backdrop-blur">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                <span className="font-semibold text-slate-300">Contract Address (BEP-20)</span>
                <span className="font-mono text-amber-400">BNB Smart Chain</span>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-lg bg-[#06090e] p-2.5 border border-white/5">
                <div className="font-mono text-xs text-amber-300 break-all select-all sm:px-2">
                  {contractAddress}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={handleCopy}
                    className="flex items-center justify-center gap-1.5 rounded-md bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-medium text-white transition-colors"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                  <a
                    href={`https://bscscan.com/token/${contractAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                    title="View on BSCScan"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Guarantees Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="rounded-lg border border-white/5 bg-slate-900/40 p-3">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-xs font-bold text-white">0% Tax</span>
                </div>
                <p className="text-[11px] text-slate-400">Zero buy and sell taxes forever.</p>
              </div>

              <div className="rounded-lg border border-white/5 bg-slate-900/40 p-3">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  <Flame className="h-4 w-4 text-orange-400" />
                  <span className="text-xs font-bold text-white">8.12% Burned</span>
                </div>
                <p className="text-[11px] text-slate-400">81.2M+ BREW permanently torched.</p>
              </div>

              <div className="rounded-lg border border-white/5 bg-slate-900/40 p-3">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  <Zap className="h-4 w-4" />
                  <span className="text-xs font-bold text-white">Locked LP</span>
                </div>
                <p className="text-[11px] text-slate-400">Liquidity permanently sealed.</p>
              </div>

              <div className="rounded-lg border border-white/5 bg-slate-900/40 p-3">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  <ShieldCheck className="h-4 w-4" />
                  <span className="text-xs font-bold text-white">Renounced</span>
                </div>
                <p className="text-[11px] text-slate-400">No owner or mint privileges.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#swap"
                className="rounded-lg bg-amber-500 hover:bg-amber-400 px-5 py-2.5 text-xs font-bold text-slate-950 transition-colors shadow-lg shadow-amber-500/20"
              >
                Launch Instant Swap
              </a>
              <a
                href="#launchpad"
                className="rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-colors"
              >
                Create a Token
              </a>
              <a
                href="https://dexscreener.com/bsc/0xfa6d9b504848606eb9aec04ccc161d169b3f2159"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 hover:border-amber-400/40 px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              >
                DexScreener Chart
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
