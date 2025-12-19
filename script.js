async function route() {
  const t = document.getElementById('type').value;
  const b = document.getElementById('budget').value;
  const time = document.getElementById('time').value;

  const payload = {
    source: 'AYA_ULTRA_HUB',
    type: t,
    budget: b,
    time: time,
    paid: false,
    createdAt: new Date().toISOString()
  };

  try {
    const res = await fetch('http://localhost:3001/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await res.json();

    const msg =
      `AYA, ACTIVATE.\n` +
      `Lead ID: ${data.leadId}\n` +
      `Тип: ${t}\n` +
      `Бюджет: ${b}\n` +
      `Срок: ${time}`;

    document.getElementById('out').textContent = msg;
    document.getElementById('wa').href =
      'https://wa.me/?text=' + encodeURIComponent(msg);

  } catch (err) {
    alert('API error — провери дали server.js работи');
    console.error(err);
  }
}
