'use client';

import React, { useState } from 'react';
import { ArrowDownUp, Settings, ExternalLink, ShieldCheck, CheckCircle2, Loader2, Info } from 'lucide-react';

interface SwapWidgetProps {
  walletConnected: boolean;
  walletAddress: string;
  onOpenWallet: () => void;
}

export function SwapWidget({ walletConnected, walletAddress, onOpenWallet }: SwapWidgetProps) {
  const [fromAsset, setFromAsset] = useState<'BNB' | 'USDT'>('BNB');
  const [fromAmount, setFromAmount] = useState<string>('0.5');
  const [slippage, setSlippage] = useState<number>(0.5);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [isSwapping, setIsSwapping] = useState<boolean>(false);
  const [swapSuccess, setSwapSuccess] = useState<boolean>(false);

  const bnbPrice = 612.4;
  const brewPrice = 0.01054;
  const brewPerBnb = bnbPrice / brewPrice; // ~58,102.46
  const brewPerUsdt = 1 / brewPrice; // ~94.87

  const numFrom = parseFloat(fromAmount) || 0;
  const toAmount = fromAsset === 'BNB' 
    ? (numFrom * brewPerBnb).toLocaleString('en-US', { maximumFractionDigits: 2 })
    : (numFrom * brewPerUsdt).toLocaleString('en-US', { maximumFractionDigits: 2 });

  const rawToAmount = fromAsset === 'BNB' ? numFrom * brewPerBnb : numFrom * brewPerUsdt;
  const minReceived = (rawToAmount * (1 - slippage / 100)).toLocaleString('en-US', { maximumFractionDigits: 2 });
  const usdValue = fromAsset === 'BNB' ? (numFrom * bnbPrice).toFixed(2) : numFrom.toFixed(2);

  const handleExecuteSwap = () => {
    if (!walletConnected) {
      onOpenWallet();
      return;
    }
    if (numFrom <= 0) return;

    setIsSwapping(true);
    setSwapSuccess(false);

    // Simulate blockchain transaction on BNB Chain
    setTimeout(() => {
      setIsSwapping(false);
      setSwapSuccess(true);
      setTimeout(() => setSwapSuccess(false), 5000);
    }, 1800);
  };

  return (
    <section id="swap" className="relative py-16 lg:py-24 bg-[#06090e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Direct BEP-20 Swap Interface</span>
            <span aria-hidden="true">·</span>
            <span>0% Token Tax</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Instant $BREW Exchange Simulator
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Swap directly with optimal routing on PancakeSwap V3 with 0% tax and guaranteed liquidity depth.
          </p>
        </div>

        {/* Swap Card Container */}
        <div className="mx-auto max-w-lg">
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/90 p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
            {/* Header with Title and Settings Toggle */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-white">Swap BEP-20</span>
                <span className="rounded bg-amber-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-amber-400 border border-amber-500/20">
                  PancakeSwap V3
                </span>
              </div>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className={`p-1.5 rounded-lg text-slate-400 hover:text-white transition-colors ${showSettings ? 'bg-white/10 text-white' : ''}`}
                aria-label="Swap settings"
              >
                <Settings className="h-4 w-4" />
              </button>
            </div>

            {/* Settings Drawer (Slippage) */}
            {showSettings && (
              <div className="my-3 p-3 rounded-xl bg-[#06090e] border border-white/10 text-xs">
                <div className="flex items-center justify-between text-slate-300 font-medium mb-2">
                  <span>Slippage Tolerance</span>
                  <span className="font-mono text-amber-400">{slippage}%</span>
                </div>
                <div className="flex items-center gap-2">
                  {[0.1, 0.5, 1.0, 2.5].map((val) => (
                    <button
                      key={val}
                      onClick={() => setSlippage(val)}
                      className={`flex-1 py-1.5 rounded-lg font-medium transition-colors ${
                        slippage === val
                          ? 'bg-amber-500 text-slate-950 font-bold'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {val}%
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Asset Section */}
            <div className="mt-4 rounded-xl border border-white/10 bg-[#06090e] p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>You Pay</span>
                <span>Balance: {walletConnected ? '1.854 BNB' : '0.00'}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  placeholder="0.0"
                  className="w-full bg-transparent font-mono text-2xl sm:text-3xl font-bold text-white outline-none placeholder:text-slate-600"
                />
                
                {/* Asset selector dropdown buttons */}
                <div className="flex items-center gap-1 bg-slate-800/80 rounded-xl p-1 shrink-0 border border-white/10">
                  <button
                    onClick={() => setFromAsset('BNB')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      fromAsset === 'BNB' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    BNB
                  </button>
                  <button
                    onClick={() => setFromAsset('USDT')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      fromAsset === 'USDT' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    USDT
                  </button>
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                <span className="font-mono">~${usdValue} USD</span>
                <div className="flex items-center gap-1.5">
                  {['0.1', '0.5', '1.0', 'Max'].map((preset) => (
                    <button
                      key={preset}
                      onClick={() => setFromAmount(preset === 'Max' ? '1.85' : preset)}
                      className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 font-mono text-[11px] transition-colors"
                    >
                      {preset}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Swap Divider Button */}
            <div className="relative my-3 flex justify-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative rounded-full border border-white/10 bg-slate-800 p-2 shadow-md">
                <ArrowDownUp className="h-4 w-4 text-amber-400" />
              </div>
            </div>

            {/* Output Asset Section (BREW) */}
            <div className="rounded-xl border border-white/10 bg-[#06090e] p-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>You Receive (Estimated)</span>
                <span>$0.00 Fee</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-amber-400 truncate">
                  {toAmount}
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 shrink-0">
                  <span className="font-bold text-sm text-white">$BREW</span>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Rate: 1 BNB ≈ {brewPerBnb.toLocaleString('en-US', { maximumFractionDigits: 0 })} BREW</span>
                <span className="text-emerald-400 font-semibold">0% Tax</span>
              </div>
            </div>

            {/* Transaction Parameters Breakdown */}
            <div className="mt-4 space-y-2 rounded-xl bg-white/5 p-3.5 text-xs text-slate-400">
              <div className="flex items-center justify-between">
                <span>Expected Output</span>
                <span className="font-mono text-slate-200">{toAmount} BREW</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Minimum Received ({slippage}%)</span>
                <span className="font-mono text-slate-200">{minReceived} BREW</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Network Fee (Est.)</span>
                <span className="font-mono text-slate-200">~0.00084 BNB ($0.51)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Routing Pool</span>
                <span className="font-mono text-amber-400">PancakeSwap V3 (0.25% fee tier)</span>
              </div>
            </div>

            {/* Action Swap Button */}
            <div className="mt-5 flex flex-col gap-2">
              <button
                onClick={handleExecuteSwap}
                disabled={isSwapping || numFrom <= 0}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:from-amber-400 hover:to-amber-500 disabled:opacity-60 active:scale-[0.99]"
              >
                {isSwapping ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Broadcasting to BNB Smart Chain...</span>
                  </>
                ) : !walletConnected ? (
                  <span>Connect Wallet to Swap</span>
                ) : (
                  <span>Confirm Swap for {toAmount} BREW</span>
                )}
              </button>

              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0xfa6d9b504848606eb9aec04ccc161d169b3f2159&chain=bsc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
              >
                <span>Or trade directly on PancakeSwap DApp</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            {/* Feedback notification on success */}
            {swapSuccess && (
              <div className="mt-3 flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 p-3 text-xs text-emerald-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Simulated transaction confirmed! {toAmount} $BREW added to simulated wallet balance.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
