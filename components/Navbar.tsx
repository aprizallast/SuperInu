'use client';

import React, { useState } from 'react';
import { Wallet, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenWallet: () => void;
  walletConnected: boolean;
  walletAddress: string;
}

export function Navbar({ onOpenWallet, walletConnected, walletAddress }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Launchpad', href: '#launchpad' },
    { label: 'Burn Tracker', href: '#burn' },
    { label: 'How to Buy', href: '#how-to-buy' },
    { label: 'Live Chart', href: 'https://dexscreener.com/bsc/0xfa6d9b504848606eb9aec04ccc161d169b3f2159', external: true },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#06090e]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-black tracking-tight text-white transition-colors group-hover:text-amber-400">
            Brew Inu
          </span>
          <span className="rounded bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-bold text-amber-400 border border-amber-500/20">
            BSC
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="relative py-1 text-slate-300 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full flex items-center gap-1"
            >
              {link.label}
              {link.external && <ArrowUpRight className="w-3 h-3 text-slate-400" />}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <a
            href="#swap"
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-white transition-colors border border-white/10 hover:border-amber-400/40 rounded-lg bg-white/5"
          >
            Instant Swap
          </a>
          <button
            onClick={onOpenWallet}
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-2 text-xs font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/30 active:scale-95 whitespace-nowrap shrink-0"
          >
            <Wallet className="h-3.5 w-3.5" />
            {walletConnected ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
          </button>
          
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-400 hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-white/10 bg-[#06090e] px-4 py-4 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between text-sm font-medium text-slate-300 hover:text-amber-400 py-1"
              >
                <span>{link.label}</span>
                {link.external && <ArrowUpRight className="w-3.5 h-3.5" />}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <a
                href="#swap"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 text-xs font-semibold text-slate-200 border border-white/10 rounded-lg bg-white/5"
              >
                Instant Swap
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWallet();
                }}
                className="w-full py-2 text-xs font-bold text-slate-950 bg-amber-500 rounded-lg hover:bg-amber-400"
              >
                {walletConnected ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
