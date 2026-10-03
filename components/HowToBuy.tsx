'use client';

import React, { useState } from 'react';
import { Copy, Check, ExternalLink, Wallet, ArrowRight, ArrowDownRight } from 'lucide-react';

export function HowToBuy() {
  const [copied, setCopied] = useState(false);
  const contractAddress = '0xfa6d9b504848606eb9aec04ccc161d169b3f2159';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const steps = [
    {
      num: '01',
      title: 'Set Up a Web3 Wallet',
      desc: 'Download MetaMask, Trust Wallet, or Bitget Wallet on mobile or browser. Ensure your active network is set to BNB Smart Chain (Chain ID: 56).',
    },
    {
      num: '02',
      title: 'Acquire BNB for Gas & Swap',
      desc: 'Purchase BNB through Binance, MEXC, or any major exchange. Send BNB to your personal BEP-20 wallet address.',
    },
    {
      num: '03',
      title: 'Connect to PancakeSwap V3',
      desc: 'Navigate to PancakeSwap V3 (BSC) or use our embedded Instant Swap widget. Click "Connect Wallet" at the top right.',
    },
    {
      num: '04',
      title: 'Import $BREW & Swap',
      desc: 'Paste the official contract address below. Because Brew Inu has 0% tax, standard 0.1% - 0.5% slippage is recommended.',
    },
  ];

  const exchanges = [
    {
      name: 'PancakeSwap V3',
      type: 'DEX',
      url: 'https://pancakeswap.finance/swap?outputCurrency=0xfa6d9b504848606eb9aec04ccc161d169b3f2159&chain=bsc',
    },
    {
      name: 'Uniswap V3 (BSC)',
      type: 'DEX',
      url: 'https://app.uniswap.org/swap?chain=bnb',
    },
    {
      name: 'MEXC Global',
      type: 'CEX',
      url: 'https://www.mexc.com/',
    },
    {
      name: 'Bitget Wallet',
      type: 'Web3 DEX',
      url: 'https://web3.bitget.com/',
    },
    {
      name: 'DexScreener Chart',
      type: 'Live Data',
      url: 'https://dexscreener.com/bsc/0xfa6d9b504848606eb9aec04ccc161d169b3f2159',
    },
    {
      name: 'CoinMarketCap',
      type: 'Tracking',
      url: 'https://coinmarketcap.com/currencies/brew-inu/',
    },
  ];

  return (
    <section id="how-to-buy" className="py-16 lg:py-24 bg-[#06090e] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Simple Onboarding</span>
            <span aria-hidden="true">·</span>
            <span>BNB Chain Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            How to Buy $BREW in 4 Simple Steps
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Follow this quick guide to safely purchase Brew Inu on BNB Smart Chain.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur transition-all hover:border-amber-400/30 hover:bg-slate-900"
            >
              <span className="font-mono text-3xl font-extrabold text-amber-400/40">
                {step.num}
              </span>
              <h3 className="mt-3 text-base font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Official Contract Box Callout */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 mb-12 text-center max-w-2xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Official Verified BSC Contract Address
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 rounded-xl bg-[#06090e] p-3 border border-white/10">
            <span className="font-mono text-xs text-amber-300 break-all select-all">
              {contractAddress}
            </span>
            <button
              onClick={handleCopy}
              className="shrink-0 flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Address'}</span>
            </button>
          </div>
          <p className="mt-2 text-[11px] text-slate-500">
            Always verify the contract address before executing swaps to avoid counterfeit tokens.
          </p>
        </div>

        {/* Exchange & Tracking Portals */}
        <div className="border-t border-white/10 pt-10">
          <div className="text-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Where to Trade & Track $BREW
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {exchanges.map((ex) => (
              <a
                key={ex.name}
                href={ex.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-xl border border-white/10 bg-slate-900/60 p-3.5 hover:border-amber-400/40 hover:bg-slate-900 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">{ex.type}</span>
                    <ExternalLink className="h-3 w-3 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </div>
                  <p className="mt-1 text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    {ex.name}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
