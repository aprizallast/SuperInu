(() => {
  const gate = document.getElementById('gate');
  const site = document.getElementById('site');
  const gateMedia = document.getElementById('gateMedia');
  const scrollFill = document.getElementById('scrollFill');
  const entryPct = document.getElementById('entryPct');
  const cursor = document.querySelector('.cursor-orbit');
  let progress = 0, entered = false, mouseX = innerWidth/2, mouseY = innerHeight/2;

  document.body.style.overflow = 'hidden';

  const renderProgress = () => {
    progress = Math.max(0, Math.min(100, progress));
    scrollFill.style.width = `${progress}%`;
    entryPct.textContent = String(Math.round(progress)).padStart(2,'0');
    const scale = 1.05 + progress * .00045;
    gateMedia.style.transform = `scale(${scale}) translateY(${progress * -0.035}px)`;
    if(progress >= 100) enter();
  };
  const enter = () => {
    if(entered) return; entered = true;
    gate.classList.add('is-open');
    site.classList.add('is-visible');
    site.setAttribute('aria-hidden','false');
    document.body.style.overflow = '';
    setTimeout(() => { gate.style.display = 'none'; }, 1300);
    setTimeout(() => document.querySelector('#home .reveal')?.classList.add('in'), 200);
  };
  addEventListener('wheel', e => { if(!entered){ e.preventDefault(); progress += Math.max(6, Math.min(18, Math.abs(e.deltaY)*.055)); renderProgress(); } }, {passive:false});
  let touchStart = null;
  addEventListener('touchstart', e => { if(!entered) touchStart = e.touches[0].clientY; }, {passive:true});
  addEventListener('touchmove', e => { if(!entered && touchStart!==null){ const d = touchStart-e.touches[0].clientY; if(d>0){progress += Math.min(18,d*.12);touchStart=e.touches[0].clientY;renderProgress();} } }, {passive:true});
  addEventListener('keydown', e => { if(!entered && ['ArrowDown','PageDown',' ','Enter'].includes(e.key)){progress += 34;renderProgress();} });

  addEventListener('pointermove', e => {
    mouseX=e.clientX; mouseY=e.clientY;
    if(cursor){ cursor.style.left = `${mouseX}px`; cursor.style.top = `${mouseY}px`; }
    if(!entered && gateMedia){
      const dx=(mouseX/innerWidth-.5)*-14, dy=(mouseY/innerHeight-.5)*-9;
      gateMedia.style.backgroundPosition = `calc(50% + ${dx}px) calc(48% + ${dy}px)`;
    }
  });
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('pointerenter',()=>document.body.classList.add('cursor-hot'));
    el.addEventListener('pointerleave',()=>document.body.classList.remove('cursor-hot'));
  });

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{if(entry.isIntersecting) entry.target.classList.add('in')});
  },{threshold:.14,rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  const heroCharacter = document.getElementById('heroCharacter');
  addEventListener('pointermove', e => {
    if(!heroCharacter || innerWidth<900) return;
    const rect=heroCharacter.getBoundingClientRect();
    const cx=rect.left+rect.width/2, cy=rect.top+rect.height/2;
    const rx=(e.clientY-cy)/rect.height*3.5, ry=(e.clientX-cx)/rect.width*-3.5;
    heroCharacter.style.transform=`perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
  });

  const nodes=[...document.querySelectorAll('.node')];
  const mode=document.getElementById('intelMode');
  nodes.forEach(n=>n.addEventListener('click',()=>{
    nodes.forEach(x=>x.classList.remove('active')); n.classList.add('active'); mode.textContent=n.dataset.label;
  }));
  nodes[0]?.classList.add('active');

  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth',block:'start'});}
  }));
})();
