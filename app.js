// app.js — Versão final do AI Filipe
const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', onSend);
inputEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') onSend(); });

function appendMessage(text, cls) {
  const div = document.createElement('div');
  div.className = 'message ' + cls;
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function onSend() {
  const text = inputEl.value.trim();
  if (!text) return;
  appendMessage(text, 'user');
  inputEl.value = '';
  respond(text);
}

function respond(text) {
  const thinking = document.createElement('div');
  thinking.className = 'message bot';
  thinking.textContent = 'AI Filipe está a pensar...';
  messagesEl.appendChild(thinking);

  setTimeout(() => {
    if (messagesEl.contains(thinking)) messagesEl.removeChild(thinking);
    appendMessage(generateResponse(text.toLowerCase()), 'bot');
  }, 650 + Math.random()*500);
}

function generateResponse(t) {
  if (t.includes('pepino') || t.includes('pepin')) {
    return 'Pepinilhos confirmados! 🥒 O Bubble Bass teria muito orgulho desta colheita.';
  }

  if (t.includes('bubble') || t.includes('bass')) {
    return 'Bubble Bass + pepinos = meme clássico da cultura SpongeBob. Aqui brincamos com essa ideia com carinho.';
  }

  if (t.includes('origem') || t.includes('wiki') || t.includes('fonte')) {
    return 'A referência vem da comunidade de fandom "AI generated sponge" e dos memes que juntam Bubble Bass e pepinos. Vê as fontes na secção "Origem".';
  }

  if (t.includes('spongebob') || t.includes('sponge') || t.includes('bob')) {
    return 'SpongeBob é a raiz desta cultura — muitos memes e fan creations surgiram a partir dos episódios clássicos.';
  }

  if (t.includes('ola') || t.includes('olá') || t.includes('oi')) {
    return 'Olá! Eu sou o AI Filipe. Podes perguntar-me sobre personagens, memes ou pedir curiosidades.';
  }

  const fallbacks = [
    'Humm... isso parece o tipo de ideia que Bubble Bass aprovaria.',
    'Interessante! A internet gosta de juntar coisas improváveis em memes.',
    'Posso ajudar com pepinos, personagens ou a origem do meme.'
  ];

  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

function quick(topic) {
  if (topic === 'pepino') inputEl.value = 'Fala-me dos pepinos';
  else if (topic === 'bubble bass') inputEl.value = 'O que é o Bubble Bass?';
  else if (topic === 'origem') inputEl.value = 'Qual é a origem da referência?';
  else if (topic === 'wiki') inputEl.value = 'Mostra a fonte da wiki';
  onSend();
}

inputEl.focus();

/* Bubbles background generator */
(function createBubbles(){
  const container = document.querySelector('.bubbles');
  if(!container) return;
  const max = 18;
  for(let i=0;i<max;i++){
    const b = document.createElement('div');
    b.className='bubble';
    const size = 8 + Math.random()*48; // px
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = Math.random()*100 + '%';
    b.style.bottom = (-20 - Math.random()*40) + 'px';
    b.style.opacity = 0.08 + Math.random()*0.22;
    container.appendChild(b);

    const duration = 8 + Math.random()*18; // seconds
    const delay = Math.random()*5;
    b.animate([
      { transform: `translateY(0) scale(${0.6+Math.random()*0.8})`, opacity: b.style.opacity },
      { transform: `translateY(-120vh) scale(${1+Math.random()*0.6})`, opacity: 0 }
    ], { duration: duration*1000, iterations: Infinity, easing: 'linear', delay: delay*1000 });
  }
})();
