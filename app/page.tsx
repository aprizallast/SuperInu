'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Copy, Check, ExternalLink, Sparkles } from 'lucide-react';

export default function Home() {
  const [gateProgress, setGateProgress] = useState(0);
  const [isEntered, setIsEntered] = useState(false);
  const [gateHidden, setGateHidden] = useState(false);
  const [activeNode, setActiveNode] = useState<'WATCH' | 'LEARN' | 'SIGNAL' | 'MEME'>('WATCH');
  const [copied, setCopied] = useState(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const heroCharacterRef = useRef<HTMLDivElement>(null);
  const gateMediaRef = useRef<HTMLDivElement>(null);

  const contractAddress =
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || '0xfa6d9b504848606eb9aec04ccc161d169b3f2159';

  const handleCopy = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEnter = React.useCallback(() => {
    if (isEntered) return;
    setIsEntered(true);
    document.body.style.overflow = '';
    setTimeout(() => {
      setGateHidden(true);
    }, 1300);
    setTimeout(() => {
      document.querySelectorAll('#home .reveal').forEach((el) => {
        el.classList.add('in');
      });
    }, 200);
  }, [isEntered]);

  useEffect(() => {
    if (!isEntered) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const onWheel = (e: WheelEvent) => {
      if (!isEntered) {
        e.preventDefault();
        setGateProgress((prev) => {
          const next = Math.min(100, prev + Math.max(6, Math.min(18, Math.abs(e.deltaY) * 0.055)));
          if (next >= 100) {
            handleEnter();
          }
          return next;
        });
      }
    };

    let touchStart: number | null = null;
    const onTouchStart = (e: TouchEvent) => {
      if (!isEntered) touchStart = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isEntered && touchStart !== null) {
        const d = touchStart - e.touches[0].clientY;
        if (d > 0) {
          setGateProgress((prev) => {
            const next = Math.min(100, prev + Math.min(18, d * 0.12));
            touchStart = e.touches[0].clientY;
            if (next >= 100) {
              handleEnter();
            }
            return next;
          });
        }
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (!isEntered && ['ArrowDown', 'PageDown', ' ', 'Enter'].includes(e.key)) {
        setGateProgress((prev) => {
          const next = Math.min(100, prev + 34);
          if (next >= 100) {
            handleEnter();
          }
          return next;
        });
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (!isEntered && gateMediaRef.current) {
        const dx = (e.clientX / window.innerWidth - 0.5) * -14;
        const dy = (e.clientY / window.innerHeight - 0.5) * -9;
        gateMediaRef.current.style.backgroundPosition = `calc(50% + ${dx}px) calc(48% + ${dy}px)`;
      }

      if (heroCharacterRef.current && window.innerWidth >= 900) {
        const rect = heroCharacterRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const rx = ((e.clientY - cy) / rect.height) * 3.5;
        const ry = ((e.clientX - cx) / rect.width) * -3.5;
        heroCharacterRef.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointermove', onPointerMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const interactiveElements = document.querySelectorAll('a, button');
    const onEnterInteractive = () => document.body.classList.add('cursor-hot');
    const onLeaveInteractive = () => document.body.classList.remove('cursor-hot');

    interactiveElements.forEach((el) => {
      el.addEventListener('pointerenter', onEnterInteractive);
      el.addEventListener('pointerleave', onLeaveInteractive);
    });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointermove', onPointerMove);
      observer.disconnect();
      interactiveElements.forEach((el) => {
        el.removeEventListener('pointerenter', onEnterInteractive);
        el.removeEventListener('pointerleave', onLeaveInteractive);
      });
      document.body.style.overflow = '';
    };
  }, [isEntered, handleEnter]);

  const scale = 1.05 + gateProgress * 0.00045;

  const nodeModeLabels: Record<string, string> = {
    WATCH: '01 俯瞰洞察',
    LEARN: '02 感知解析',
    SIGNAL: '03 超能信号',
    MEME: '04 模因传播',
  };

  return (
    <>
      {/* 噪点粒子背景层 */}
      <div className="noise" aria-hidden="true" />

      {/* 交互式光标 */}
      <div className="cursor-orbit" ref={cursorRef} aria-hidden="true">
        <span />
      </div>

      {/* 门幕开场全屏遮罩 (Gate) */}
      {!gateHidden && (
        <section
          id="gate"
          className={`gate ${isEntered ? 'is-open' : ''}`}
          aria-label="进入 SUPER INU 官网"
        >
          <div
            className="gate-media"
            ref={gateMediaRef}
            style={{
              transform: `scale(${scale}) translateY(${gateProgress * -0.035}px)`,
            }}
          />
          <div className="gate-vignette" />
          <div className="gate-grid" />
          <div className="gate-topline">
            <div className="mini-brand">
              <span className="mark">b</span>
              <span>SUPER INU // $SI</span>
            </div>
            <div className="gate-status">
              <i /> BREW 家族生态
            </div>
          </div>
          <div className="gate-copy">
            <span className="eyebrow">超级英雄现已降临</span>
            <h1>
              SUPER
              <br />
              <em>INU</em>
            </h1>
            <p>
              Solana 有 $SI，Brew 也有 $SI (SUPER INU)。Brew 原生的超级 Inu！
            </p>
          </div>

          <div
            className="scroll-entry"
            id="scrollEntry"
            onClick={handleEnter}
            role="button"
            tabIndex={0}
          >
            <span>向下滚动或点击进入探索</span>
            <div className="scroll-rail">
              <b id="scrollFill" style={{ width: `${gateProgress}%` }} />
            </div>
            <small>
              <span id="entryPct">{String(Math.round(gateProgress)).padStart(2, '0')}</span> / 100
            </small>
          </div>

          <div className="gate-corner gate-corner-a" />
          <div className="gate-corner gate-corner-b" />
        </section>
      )}

      {/* 主网站容器 */}
      <main id="site" className={`site ${isEntered ? 'is-visible' : ''}`} aria-hidden={!isEntered}>
        {/* 顶部导航栏 */}
        <header className="nav" id="nav">
          <a href="#home" className="nav-brand">
            <span className="mark">b</span>
            <span>SUPER INU</span>
            <small>$SI</small>
          </a>
          <nav>
            <a href="#home">首页</a>
            <a href="#lore">英雄起源</a>
            <a href="#intelligence">超能感知</a>
            <a href="#signal">超级信号</a>
            <a href="#contract">代币合约</a>
          </nav>
          <div className="nav-actions">
            <a
              className="icon-link text-slate-300 hover:text-white"
              href="https://x.com/SuperInuBrew"
              target="_blank"
              rel="noreferrer"
            >
              推特 X ↗
            </a>
            <a
              className="pill text-amber-300"
              href="https://brewfamily.dev"
              target="_blank"
              rel="noreferrer"
            >
              进入 BREW 生态 ↗
            </a>
          </div>
        </header>

        {/* Hero 首页场景 */}
        <section id="home" className="hero scene">
          <div className="hero-rail" aria-hidden="true">
            <span>BREW</span>
            <b />
            <span>超级英雄</span>
            <b />
            <span>INU</span>
          </div>

          <div className="hero-copy reveal">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 border border-amber-400/20 bg-amber-400/5 text-amber-300 text-xs font-mono tracking-widest rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BREW 家族 // 超级英雄 01</span>
            </div>
            <h2>
              SOLANA 有 <span>$SI.</span>
              <br />
              BREW 也有 <em>$SI.</em>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#c6b6a6]">
              Solana 有 $SI，Brew 也有 $SI (SUPER INU)。SUPER INU ($SI) 是 Brew Meme 生态的超级英雄代表！他不是一只普通的柴犬，而是身披红斗篷、穿着金色战衣翱翔在 Brew 链上天际的强大护卫。
            </p>
            <div className="hero-actions">
              <a href="#lore" className="primary">
                了解 SUPER INU <span>↓</span>
              </a>
              <a
                href="https://x.com/SuperInuBrew"
                target="_blank"
                rel="noreferrer"
                className="ghost"
              >
                官方推特 @SuperInuBrew ↗
              </a>
            </div>
          </div>

          <div className="hero-character reveal delay-1" id="heroCharacter" ref={heroCharacterRef}>
            <div className="portrait-shell">
              <Image
                src="/assets/brewinu-portrait.png"
                alt="Super Inu 柴犬超级英雄"
                width={384}
                height={384}
                priority
                className="w-full h-full object-cover rounded-full saturate-[0.92] contrast-[1.04]"
                referrerPolicy="no-referrer"
              />
              <div className="portrait-ring ring-a" />
              <div className="portrait-ring ring-b" />
              <div className="portrait-index">SI / 01</div>
            </div>
          </div>

          <div className="hero-note reveal delay-2">
            <strong>$SI</strong>
            <span>
              SUPER INU
              <br />
              链上超级守护者
            </span>
          </div>
        </section>

        {/* Section 01: 英雄起源 Lore */}
        <section id="lore" className="lore scene">
          <div className="section-index">01 / 英雄起源 LORE</div>
          <div className="lore-sticky reveal">
            <span className="eyebrow">不是普通的柴犬 MEME</span>
            <h3>
              身披金甲的
              <br />
              链上守护者
            </h3>
            <p className="text-[#a9988a] text-sm sm:text-base leading-relaxed">
              $SI 将时刻俯瞰新项目、市场动向和正在形成的叙事，用他的“超能力”将生态的活力转化为最强烈的信号、反应、Meme 和内容。
            </p>
          </div>

          <div className="lore-cards">
            <article className="lore-card reveal">
              <span>01</span>
              <h4>超级英雄 MASCOT</h4>
              <p>
                身披红斗篷、穿着金色战衣翱翔在 Brew 链上天际的强大护卫。他不仅是吉祥物，更是整个 Brew Meme 生态力量与无畏精神的视觉化身。
              </p>
            </article>

            <article className="lore-card reveal">
              <span>02</span>
              <h4>一飞冲天 TAKEOFF</h4>
              <p>
                随着越来越多项目在 Brew 平台起飞，Super Inu 也将带领整个生态一飞冲天。新的代币、社区、市场趋势和高光时刻，都将成为这位超级英雄传奇故事的一部分。
              </p>
            </article>

            <article className="lore-card reveal">
              <span>03</span>
              <h4>链上守护者 HERO ON-CHAIN</h4>
              <p>
                长期来看，我们致力于将 Super Inu 打造为真正的“链上超级守护者 (Hero On-Chain)”。敏锐洞察 Brew 链上风云，理解市场焦点，将无畏的英雄能量重新传递给社区。
              </p>
            </article>
          </div>
        </section>

        {/* Section 02: 脑核感知 Intelligence */}
        <section id="intelligence" className="intel scene">
          <div className="section-index">02 / 超能感知 INTELLIGENCE</div>
          <div className="intel-heading reveal">
            <span className="eyebrow">BREW INU // 超能脑核感知</span>
            <h3>
              超级英雄具备
              <br />
              <em>敏锐洞察力</em>
            </h3>
            <p>
              Super Inu 能敏锐洞察 Brew 的链上风云，理解市场的焦点，并以 Super Inu 独有的英雄气概和表达方式，将无畏的能量重新传递给社区。
            </p>
          </div>

          {/* 交互式大脑脑核 */}
          <div className="brain" id="brain">
            <div className="brain-core">
              <span className="core-eye" />
              <b>SI</b>
              <small>在线感知</small>
            </div>
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />

            <button
              className={`node node-a ${activeNode === 'WATCH' ? 'active' : ''}`}
              data-label="WATCH"
              onClick={() => setActiveNode('WATCH')}
            >
              <span>01</span> 俯瞰洞察
            </button>
            <button
              className={`node node-b ${activeNode === 'LEARN' ? 'active' : ''}`}
              data-label="LEARN"
              onClick={() => setActiveNode('LEARN')}
            >
              <span>02</span> 感知解析
            </button>
            <button
              className={`node node-c ${activeNode === 'SIGNAL' ? 'active' : ''}`}
              data-label="SIGNAL"
              onClick={() => setActiveNode('SIGNAL')}
            >
              <span>03</span> 超能信号
            </button>
            <button
              className={`node node-d ${activeNode === 'MEME' ? 'active' : ''}`}
              data-label="MEME"
              onClick={() => setActiveNode('MEME')}
            >
              <span>04</span> 模因传播
            </button>

            <svg
              className="connections"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M500 300 C360 230 300 160 160 150" />
              <path d="M500 300 C630 220 700 160 845 160" />
              <path d="M500 300 C360 380 300 430 160 445" />
              <path d="M500 300 C635 380 700 435 840 445" />
            </svg>
          </div>

          <div className="intel-strip reveal">
            <div>
              <small>当前模式 MODE</small>
              <strong id="intelMode">{nodeModeLabels[activeNode]}</strong>
            </div>
            <div>
              <small>感知状态 STATE</small>
              <strong>英雄觉醒 AWAKE</strong>
            </div>
            <div>
              <small>所属归属 HOME</small>
              <strong>BREW 链上天际</strong>
            </div>
            <div>
              <small>核心身份 IDENTITY</small>
              <strong>SUPER INU ($SI)</strong>
            </div>
          </div>
        </section>

        {/* Section 03: 超级信号 Signal */}
        <section id="signal" className="signal scene">
          <div className="section-index">03 / 超级信号 SIGNAL</div>
          <div className="signal-copy reveal">
            <span className="eyebrow">BREW 原生的超级 INU</span>
            <h3>
              为起飞而生
              <br />
              <span>一飞冲天</span>
            </h3>
            <p>
              $SI 将时刻俯瞰新项目、市场动向和正在形成的叙事，用他的“超能力”将生态的活力转化为最强烈的信号、反应、Meme 和内容。高光时刻与英雄传奇正在 Brew 链上实时上演。
            </p>
            <div className="signal-tags">
              <span>超级英雄</span>
              <span>链上守护者</span>
              <span>BREW 生态</span>
              <span>翱翔天际</span>
              <span>金色战衣</span>
              <span>红斗篷</span>
            </div>
          </div>

          {/* 用户指定的展示视图：替换图片为 hero_brewinu_flying_1791019097680.jpg */}
          <div className="signal-art reveal delay-1">
            <Image
              src="/assets/hero_brewinu_flying_1791019097680.jpg"
              alt="HERO ON-CHAIN // SUPER INU ($SI)"
              width={1024}
              height={338}
              priority
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="signal-cut">HERO ON-CHAIN // SUPER INU ($SI)</div>
          </div>
        </section>

        {/* 合约验证与快捷交易 */}
        <section id="contract" className="border-t border-white/10 bg-[#070503] py-14 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">官方链上核验</span>
            <h3 className="font-['Archivo_Black'] text-2xl sm:text-4xl text-white mt-2 mb-4 tracking-tight">
              SUPER INU ($SI) 代币合约地址
            </h3>
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-[#0c0907] border border-amber-500/20 rounded-xl p-3 sm:px-5">
              <span className="font-mono text-xs sm:text-sm text-amber-300 break-all select-all">
                {contractAddress}
              </span>
              <button
                onClick={handleCopy}
                className="shrink-0 flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition-colors"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? '已复制地址' : '复制合约地址'}</span>
              </button>
            </div>

            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href={`https://bscscan.com/token/${contractAddress}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                BSCScan 区块链浏览器 <ExternalLink className="h-3 w-3" />
              </a>
              <span>·</span>
              <a
                href={`https://dexscreener.com/bsc/${contractAddress}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                DexScreener 实时行情图表 <ExternalLink className="h-3 w-3" />
              </a>
              <span>·</span>
              <a
                href={`https://pancakeswap.finance/swap?outputCurrency=${contractAddress}&chain=bsc`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                在 PancakeSwap 上交易兑换 <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </section>

        {/* 超级英雄宣言 Manifesto */}
        <section className="manifesto scene">
          <div className="manifesto-line">
            <span>SUPER INU</span>
            <span>超级英雄</span>
            <span>链上守护者</span>
          </div>

          <div className="manifesto-copy reveal">
            <span className="eyebrow">核心愿景</span>
            <h3>BREW 迎来了属于它的超级英雄。</h3>
            <p className="text-amber-200/90 font-medium">
              Brew 原生的超级 Inu！带领整个生态一飞冲天。
            </p>
            <a
              href="https://brewfamily.dev"
              target="_blank"
              rel="noreferrer"
              className="primary large"
            >
              加入 BREW 家族生态 ↗
            </a>
          </div>

          <div className="manifesto-footer">
            <a href="https://x.com/SuperInuBrew" target="_blank" rel="noreferrer">
              官方推特 X / @SuperInuBrew ↗
            </a>
            <span>$SI // SUPER INU (超级犬)</span>
            <a href="https://brewfamily.dev" target="_blank" rel="noreferrer">
              BREWFAMILY.DEV ↗
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
