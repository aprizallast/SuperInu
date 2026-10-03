'use client';

import React, { useState } from 'react';
import { X, Check, Wallet, ExternalLink, ShieldCheck, AlertCircle } from 'lucide-react';

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  walletConnected: boolean;
  walletAddress: string;
  onConnectWallet: (provider: string) => void;
  onDisconnectWallet: () => void;
}

export function WalletModal({
  isOpen,
  onClose,
  walletConnected,
  walletAddress,
  onConnectWallet,
  onDisconnectWallet,
}: WalletModalProps) {
  const [connectingProvider, setConnectingProvider] = useState<string | null>(null);

  if (!isOpen) return null;

  const walletProviders = [
    {
      name: 'MetaMask',
      badge: 'Popular',
      description: 'Connect with browser extension or mobile app',
      iconText: '🦊',
    },
    {
      name: 'Binance Web3 Wallet',
      badge: 'BNB Native',
      description: 'Official Binance ecosystem MPC wallet',
      iconText: '🟡',
    },
    {
      name: 'Bitget Wallet',
      badge: 'Multi-chain',
      description: 'Official verified trading wallet for $BREW',
      iconText: '🔷',
    },
    {
      name: 'Trust Wallet',
      badge: 'Mobile',
      description: 'Decentralized crypto wallet for BNB Chain',
      iconText: '🛡️',
    },
    {
      name: 'WalletConnect',
      badge: 'QR Scan',
      description: 'Connect with any QR-compatible mobile wallet',
      iconText: '🔗',
    },
  ];

  const handleSelect = (providerName: string) => {
    setConnectingProvider(providerName);
    setTimeout(() => {
      onConnectWallet(providerName);
      setConnectingProvider(null);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#0c121e] p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Wallet className="h-5 w-5 text-amber-400" />
            <h3 className="text-base font-bold text-white">
              {walletConnected ? 'Connected Wallet' : 'Connect a Web3 Wallet'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {walletConnected ? (
          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">Status</span>
                <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Active on BNB Chain
                </span>
              </div>
              <p className="mt-2 font-mono text-sm font-bold text-white select-all">
                {walletAddress}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-xl border border-white/5 bg-slate-900 p-3">
                <span className="text-slate-400">BNB Balance</span>
                <p className="mt-1 font-mono text-base font-bold text-white">1.854 BNB</p>
                <span className="text-[10px] text-slate-500 font-mono">~$1,135 USD</span>
              </div>
              <div className="rounded-xl border border-white/5 bg-slate-900 p-3">
                <span className="text-slate-400">BREW Balance</span>
                <p className="mt-1 font-mono text-base font-bold text-amber-400">142,500 BREW</p>
                <span className="text-[10px] text-slate-500 font-mono">~$1,501 USD</span>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href={`https://bscscan.com/address/${walletAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>View on BSCScan</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => {
                  onDisconnectWallet();
                  onClose();
                }}
                className="flex-1 py-2.5 rounded-xl border border-red-500/20 bg-red-500/10 text-xs font-semibold text-red-400 hover:bg-red-500/20 transition-colors"
              >
                Disconnect
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-2.5">
            <p className="text-xs text-slate-400 mb-3">
              Select your wallet provider to interact with the Brew Inu decentralized exchange and token launchpad.
            </p>

            {walletProviders.map((w) => (
              <button
                key={w.name}
                onClick={() => handleSelect(w.name)}
                disabled={connectingProvider !== null}
                className="w-full flex items-center justify-between rounded-xl border border-white/5 bg-slate-900/80 p-3.5 hover:border-amber-400/40 hover:bg-slate-900 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{w.iconText}</span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                        {w.name}
                      </span>
                      {w.badge && (
                        <span className="text-[10px] font-semibold text-amber-400/90 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                          {w.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400">{w.description}</p>
                  </div>
                </div>

                {connectingProvider === w.name ? (
                  <div className="h-4 w-4 rounded-full border-2 border-amber-400 border-t-transparent animate-spin shrink-0" />
                ) : (
                  <span className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                    Connect →
                  </span>
                )}
              </button>
            ))}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                Non-custodial & secure
              </span>
              <span>BNB Smart Chain (Chain ID: 56)</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
