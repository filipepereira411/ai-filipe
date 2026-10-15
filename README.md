const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', onSend);
inputEl.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') onSend();
});

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
    messagesEl.removeChild(thinking);
    appendMessage(generateResponse(text.toLowerCase()), 'bot');
  }, 650);
}

function generateResponse(t) {
  if (t.includes('pepino') || t.includes('pepin')) {
    return 'Pepinilhos confirmados! 🥒 O Bubble Bass teria muito orgulho desta colheita.';
  }

  if (t.includes('bubble') || t.includes('bass')) {
    return 'Bubble Bass + pepinos = meme clássico da cultura de SpongeBob. É exatamente o tipo de confusão que faz a internet rir.';
  }

  if (t.includes('origem') || t.includes('wiki') || t.includes('fonte')) {
    return 'A referência vem da cultura de SpongeBob e da ideia de “AI generated sponge” em fandom, combinada com o meme dos pepinos e do Bubble Bass.';
  }

  if (t.includes('ai sponge') || t.includes('sponge') || t.includes('bob')) {
    return 'A ideia de AI Sponge é uma mistura de fandom, internet e humor de cultura pop. Aqui, o AI Filipe faz essa brincadeira de forma local.';
  }

  if (t.includes('ola') || t.includes('olá') || t.includes('oi')) {
    return 'Olá! Eu sou o AI Filipe. Podes perguntar-me sobre pepinos, Bubble Bass, SpongeBob ou a origem da referência.';
  }

  const fallbacks = [
    'Humm... isso parece o tipo de ideia que Bubble Bass aprovaria.',
    'Interessante. A internet adora misturar memes e cultura pop.',
    'Posso ajudar com pepinos, SpongeBob, Bubble Bass ou a origem do meme.'
  ];

  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

function quick(topic) {
  if (topic === 'pepino') {
    inputEl.value = 'Fala-me dos pepinos';
  } else if (topic === 'bubble bass') {
    inputEl.value = 'O que é o Bubble Bass?';
  } else if (topic === 'origem') {
    inputEl.value = 'Qual é a origem da referência?';
  } else if (topic === 'wiki') {
    inputEl.value = 'Mostra a fonte da wiki';
  }
  onSend();
}

inputEl.focus();

