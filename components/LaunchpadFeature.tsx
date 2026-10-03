'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Rocket, Lock, Flame, Shield, ArrowRight, Check, Sparkles } from 'lucide-react';

export function LaunchpadFeature() {
  const [tokenName, setTokenName] = useState('SuperDoge');
  const [tokenSymbol, setTokenSymbol] = useState('SDOGE');
  const [pairedAsset, setPairedAsset] = useState<'BREW' | 'BNB' | 'USDT'>('BREW');
  const [supply, setSupply] = useState('1000000000');
  const [lpLockPercentage, setLpLockPercentage] = useState(100);
  const [autoBurnFee, setAutoBurnFee] = useState(true);
  const [isSimulatingLaunch, setIsSimulatingLaunch] = useState(false);
  const [deployedResult, setDeployedResult] = useState<{ address: string; txHash: string } | null>(null);

  const handleSimulateDeploy = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulatingLaunch(true);
    setDeployedResult(null);

    setTimeout(() => {
      setIsSimulatingLaunch(false);
      setDeployedResult({
        address: '0x' + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
        txHash: '0x' + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join(''),
      });
    }, 1500);
  };

  return (
    <section id="launchpad" className="py-16 lg:py-24 bg-[#080d15] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Powered by Brew Family Protocol</span>
            <span aria-hidden="true">·</span>
            <span>BNB Chain Launchpad</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            One-Click Token Deployment Engine
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Launch your own BEP-20 token paired with $BREW or $BNB in seconds. Permanent liquidity locks, zero-owner privileges, and automated fee-burning mechanisms natively built-in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Creator Simulator Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-6 sm:p-8 backdrop-blur">
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Brew Token Deployer</h3>
                    <p className="text-xs text-slate-400">PancakeSwap V3 Automated Pool Creator</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                  Status: Ready
                </span>
              </div>

              <form onSubmit={handleSimulateDeploy} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Token Name
                    </label>
                    <input
                      type="text"
                      value={tokenName}
                      onChange={(e) => setTokenName(e.target.value)}
                      required
                      placeholder="e.g. CyberHero"
                      className="w-full rounded-lg border border-white/10 bg-[#06090e] px-3.5 py-2.5 text-sm text-white outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Token Symbol / Ticker
                    </label>
                    <input
                      type="text"
                      value={tokenSymbol}
                      onChange={(e) => setTokenSymbol(e.target.value.toUpperCase())}
                      required
                      placeholder="e.g. HERO"
                      className="w-full rounded-lg border border-white/10 bg-[#06090e] px-3.5 py-2.5 text-sm text-white font-mono uppercase outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Initial Total Supply
                    </label>
                    <input
                      type="text"
                      value={supply}
                      onChange={(e) => setSupply(e.target.value)}
                      required
                      className="w-full rounded-lg border border-white/10 bg-[#06090e] px-3.5 py-2.5 text-sm text-white font-mono outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Paired Base Asset
                    </label>
                    <div className="grid grid-cols-3 gap-1 bg-[#06090e] p-1 rounded-lg border border-white/10">
                      {(['BREW', 'BNB', 'USDT'] as const).map((asset) => (
                        <button
                          key={asset}
                          type="button"
                          onClick={() => setPairedAsset(asset)}
                          className={`py-1.5 text-xs font-bold rounded-md transition-colors ${
                            pairedAsset === asset
                              ? 'bg-amber-500 text-slate-950'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          ${asset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Anti-Rug & Protocol Security Parameters */}
                <div className="pt-2 space-y-3">
                  <div className="flex items-center justify-between rounded-lg bg-[#06090e] p-3 border border-white/5">
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-amber-400 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-white">Permanent Liquidity Lock</p>
                        <p className="text-[11px] text-slate-400">LP tokens locked in smart contract irrevocably</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs font-bold text-amber-400">100% Locked</span>
                  </div>

                  <div className="flex items-center justify-between rounded-lg bg-[#06090e] p-3 border border-white/5">
                    <div className="flex items-center gap-2">
                      <Flame className="h-4 w-4 text-orange-400 shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-white">Automated Token Burn</p>
                        <p className="text-[11px] text-slate-400">Protocol trading fees burned automatically</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={autoBurnFee}
                      onChange={(e) => setAutoBurnFee(e.target.checked)}
                      className="h-4 w-4 accent-amber-500 cursor-pointer"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSimulatingLaunch}
                  className="w-full mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-bold text-slate-950 transition-all hover:from-amber-400 hover:to-amber-500 disabled:opacity-60 active:scale-[0.99] shadow-lg shadow-amber-500/20"
                >
                  {isSimulatingLaunch ? (
                    <>
                      <div className="h-4 w-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                      <span>Simulating Contract Generation...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-4 w-4" />
                      <span>Simulate Token Creation</span>
                    </>
                  )}
                </button>
              </form>

              {/* Simulation Result */}
              {deployedResult && (
                <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-2">
                    <Check className="h-4 w-4" />
                    <span>Deployment Simulation Successful!</span>
                  </div>
                  <div className="space-y-1.5 text-xs font-mono">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-300">
                      <span className="text-slate-500">Contract:</span>
                      <span className="text-amber-300 break-all">{deployedResult.address}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-300">
                      <span className="text-slate-500">Pairing:</span>
                      <span className="text-slate-200">{tokenSymbol} / {pairedAsset} on PancakeSwap V3</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-slate-300">
                      <span className="text-slate-500">Owner State:</span>
                      <span className="text-emerald-400">Renounced (No Mint Function)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Visual Graphic and Launchpad Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/brewinu_launchpad.jpg"
                  alt="Brew Family Launchpad interface visual"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 500px"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06090e] via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h4 className="text-base font-bold text-white">Why Creators Choose Brew Family</h4>
                <p className="mt-1 text-xs text-slate-400">
                  Traditional launchpads lock creators into single-asset pairings with predatory taxes. Brew lets you pair with any token on BNB Chain.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/5 bg-slate-900/40 p-4">
                <Shield className="h-5 w-5 text-amber-400 mb-2" />
                <h5 className="text-xs font-bold text-white">Permanent Lock</h5>
                <p className="mt-1 text-[11px] text-slate-400 leading-normal">
                  Liquidity is permanently sent to the dead address or time-locked contract.
                </p>
              </div>

              <div className="rounded-xl border border-white/5 bg-slate-900/40 p-4">
                <Flame className="h-5 w-5 text-orange-400 mb-2" />
                <h5 className="text-xs font-bold text-white">80% Fee Burn</h5>
                <p className="mt-1 text-[11px] text-slate-400 leading-normal">
                  80% of platform revenue purchases $BREW on the open market and burns it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
