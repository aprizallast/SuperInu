'use client';

import React from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';

export function Footer() {
  const contractAddress = '0xfa6d9b504848606eb9aec04ccc161d169b3f2159';

  return (
    <footer className="border-t border-white/10 bg-[#04060a] py-12 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-black text-white tracking-tight">Brew Inu</span>
              <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-bold text-amber-400 border border-amber-500/20">
                $BREW
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Brew Inu is the community-driven superhero token on the BNB Smart Chain, empowering decentralized launchpad utility on Brew Family with 0% taxes, permanent liquidity locking, and automated deflationary buyback & burns.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Audited BEP-20 Contract: 0xfa6d...2159</span>
            </div>
          </div>

          {/* Quick Ecosystem Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Ecosystem</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About Brew Inu</a>
              </li>
              <li>
                <a href="#swap" className="hover:text-amber-400 transition-colors">Instant DEX Swap</a>
              </li>
              <li>
                <a href="#launchpad" className="hover:text-amber-400 transition-colors">Launchpad Creator</a>
              </li>
              <li>
                <a href="#tokenomics" className="hover:text-amber-400 transition-colors">Tokenomics & Safety</a>
              </li>
              <li>
                <a href="#burn" className="hover:text-amber-400 transition-colors">Burn Tracker</a>
              </li>
            </ul>
          </div>

          {/* Tracking & Exchanges */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">Trading & Explorer</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`https://bscscan.com/token/${contractAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  <span>BSCScan Explorer</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://dexscreener.com/bsc/0xfa6d9b504848606eb9aec04ccc161d169b3f2159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  <span>DexScreener Chart</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://pancakeswap.finance/swap?outputCurrency=0xfa6d9b504848606eb9aec04ccc161d169b3f2159&chain=bsc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  <span>PancakeSwap V3</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://coinmarketcap.com/currencies/brew-inu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-amber-400 transition-colors"
                >
                  <span>CoinMarketCap</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Brew Inu Community. All rights reserved. Not financial advice.
          </p>
          <p className="max-w-xl text-center md:text-right">
            Cryptocurrency trading involves substantial risk of loss. Always conduct your own research before trading or participating in decentralized tokens.
          </p>
        </div>
      </div>
    </footer>
  );
}
