// AYA ULTRA HUB — tiny logic
(function(){
  const buildStampEl = document.getElementById('buildStamp');
  const stamp = new Date().toISOString().replace('T',' ').replace('Z',' UTC');
  buildStampEl.textContent = stamp;

  // WhatsApp CTA: put your number here when ready.
  // If unknown, it falls back to opening WhatsApp Web without a prefilled message.
  const waNumber = ""; // e.g. "359XXXXXXXXX"
  const waText = encodeURIComponent("AYA, ACTIVATE. Искам AYA Travel Blueprint.");
  const waLink = waNumber
    ? `https://wa.me/${waNumber}?text=${waText}`
    : `https://web.whatsapp.com/`;
  document.getElementById('whatsappCta').href = waLink;

  // Copy prompt
  document.getElementById('copyPrompt').addEventListener('click', async () => {
    const text = document.getElementById('intakePrompt').textContent;
    try{
      await navigator.clipboard.writeText(text);
      toast("Copied ✅");
    }catch(e){
      // fallback
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      toast("Copied ✅");
    }
  });

  function toast(msg){
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.position = "fixed";
    t.style.left = "50%";
    t.style.bottom = "22px";
    t.style.transform = "translateX(-50%)";
    t.style.padding = "10px 14px";
    t.style.borderRadius = "999px";
    t.style.background = "rgba(0,0,0,.55)";
    t.style.border = "1px solid rgba(255,255,255,.12)";
    t.style.color = "rgba(234,240,255,.95)";
    t.style.backdropFilter = "blur(10px)";
    t.style.zIndex = "9999";
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1200);
  }
})();