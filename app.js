// app.js — chatbot local para AI Filipe
const messagesEl = document.getElementById('messages');
const inputEl = document.getElementById('input');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', onSend);
inputEl.addEventListener('keydown', (e)=>{ if(e.key==='Enter') onSend(); });

function appendMessage(text, cls){
  const div = document.createElement('div');
  div.className = 'message ' + cls;
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function onSend(){
  const text = inputEl.value.trim();
  if(!text) return;
  appendMessage(text, 'user');
  inputEl.value = '';
  respond(text);
}

function respond(text){
  // Simula latência / escrita
  appendMessage('AI Filipe está a escrever...', 'bot');
  const placeholder = messagesEl.lastChild;

  setTimeout(()=>{
    messagesEl.removeChild(placeholder);
    const resp = generateResponse(text.toLowerCase());
    appendMessage(resp, 'bot');
  }, 700 + Math.random()*800);
}

function generateResponse(t){
  // Respostas simples por palavras-chave — estilo divertido inspirado em "AI Sponge"
  if(t.includes('pepino') || t.includes('pepin') ){
    return 'Pepinilhos detectados! 🥒 Bubble Bass ficou orgulhoso. Diz-me quantos queres colher.';
  }
  if(t.includes('bubble') || t.includes('bass')){
    return 'Bubble Bass é famoso pelo seu amor aos pepinos. Lembras-te do episódio?';
  }
  if(t.includes('sponge') || t.includes('bob') || t.includes('spongebob')){
    return 'SpongeBob aparece muitas vezes em memes com Bubble Bass. Aqui é só diversão — sem IA real!';
  }
  if(t.includes('origem') || t.includes('onde')){
    return 'A referência vem de memes e episódios de SpongeBob; consulta a aba "Origem / Referências" no lado direito para ver uma pesquisa relacionada.';
  }
  if(t.includes('ola') || t.includes('olá') || t.includes('oi')){
    return 'Olá! Eu sou o AI Filipe — fala comigo sobre pepinos, memes ou o que quiseres.';
  }
  // Resposta por defeito — estilo brincalhão
  const fallbacks = [
    'Humm... isso cheira a pepino. Conta-me mais!',
    'Não tenho certeza, mas posso fingir que sei! Queres perguntar sobre pepinos?',
    'Interessante! Bubble Bass aprovaria.'
  ];
  return fallbacks[Math.floor(Math.random()*fallbacks.length)];
}

// Botões rápidos
function quick(topic){
  if(topic==='pepino'){
    inputEl.value = 'Mostra-me os pepinos';
  } else if(topic==='bubble bass'){
    inputEl.value = 'O Bubble Bass cultivou pepinos?';
  } else if(topic==='origem'){
    inputEl.value = 'Qual a origem deste meme?';
  }
  onSend();
}
