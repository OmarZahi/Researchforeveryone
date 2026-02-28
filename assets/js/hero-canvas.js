// Interactive hero canvas with animated network
export function initializeHeroCanvas() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const canvas = document.querySelector('.hero-canvas');
  
  if (!canvas || prefersReduced) return;
  
  const ctx = canvas.getContext('2d');
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  let nodes = [];
  const mouse = { x: 0, y: 0, active: false };
  const hue = 215; // blue-ish
  let rafId = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * dpr);
    canvas.height = Math.floor(rect.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    init();
  }

  function init() {
    const rect = canvas.getBoundingClientRect();
    const count = Math.max(24, Math.floor(rect.width * rect.height / 25000));
    nodes = [];
    
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 1.2 + Math.random() * 1.6
      });
    }
  }

  function draw() {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    // Update and draw connections
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      a.x += a.vx; 
      a.y += a.vy;
      
      if (a.x < -20 || a.x > rect.width + 20) a.vx *= -1;
      if (a.y < -20 || a.y > rect.height + 20) a.vy *= -1;

      // Attract to mouse
      if (mouse.active) {
        const dxm = a.x - mouse.x;
        const dym = a.y - mouse.y;
        const dm2 = dxm*dxm + dym*dym;
        if (dm2 < 16000) { // 126px radius
          a.vx -= dxm * 0.0005;
          a.vy -= dym * 0.0005;
        }
      }
      
      // Connect to nearby nodes
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist2 = dx*dx + dy*dy;
        
        if (dist2 < 26000) { // ~161px
          const alpha = 1 - dist2 / 26000;
          ctx.strokeStyle = `hsla(${hue}, 90%, 55%, ${0.25 * alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }
    
    // Draw nodes
    for (let k = 0; k < nodes.length; k++) {
      const n = nodes[k];
      ctx.fillStyle = `hsla(${hue}, 90%, 45%, 0.9)`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
    
    rafId = requestAnimationFrame(draw);
  }

  function onMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  }
  
  function onLeave() { 
    mouse.active = false; 
  }

  resize();
  window.addEventListener('resize', resize);
  canvas.addEventListener('mousemove', onMove);
  canvas.addEventListener('mouseleave', onLeave);
  rafId = requestAnimationFrame(draw);

  // Cleanup on visibility change
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      cancelAnimationFrame(rafId);
    } else {
      rafId = requestAnimationFrame(draw);
    }
  });
}

// No auto-init; handled inline within Hero component
