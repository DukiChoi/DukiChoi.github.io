
(() => {
const $=id=>document.getElementById(id);
const COL={A:'#0F6E56',B:'#534AB7',C:'#993C1D'},TH=['A','B','C'];
let owner,queue,st;
const badge=t=>`<span class="badge" style="background:${COL[t]}">${t}</span>`;
function say(t,bad){const m=$('mxMsg');m.textContent=t;m.className='msg'+(bad?' bad':'');}
function reset(){owner=null;queue=[];st={A:'out',B:'out',C:'out'};say({{ lesson_strings.sac80587e7173 | jsonify }});render();}
function lock(t){
  if(owner===null){owner=t;st[t]='in';say(`${t}{% include js-text.html key="sa16989350819" %}`);}
  else{queue.push(t);st[t]='wait';say(`${t}{% include js-text.html key="sbd98ca93ad7e" %}${owner}{% include js-text.html key="sa3bd0deea799" %}${t}{% include js-text.html key="s1553a3e4ed86" %}`);}
  render();
}
function unlock(t){
  st[t]='out';owner=null;
  if(queue.length){const n=queue.shift();owner=n;st[n]='in';say(`${t}{% include js-text.html key="se0ddafee0883" %}${n}{% include js-text.html key="s0ac9a219cab2" %}`);}
  else say(`${t}{% include js-text.html key="sc729877b87f9" %}`);
  render();
}
function render(){
  $('mxThs').innerHTML=TH.map(t=>{const s=st[t];
    const lbl=s==='out'?`${t}{% include js-text.html key="s0999c269779a" %}`:s==='wait'?`${t}{% include js-text.html key="se3f1a597be02" %}`:`${t}{% include js-text.html key="se9db2303a0ae" %}`;
    const sd=s==='out'?{{ lesson_strings.s07fd3f0a3dd4 | jsonify }}:s==='wait'?{{ lesson_strings.sc1939e2c505f | jsonify }}:{{ lesson_strings.sff6410d79411 | jsonify }};
    return `<div class="th">${badge(t)}<span class="st">${sd}</span><button class="bt${s==='in'?' sel':''}" data-t="${t}" ${s==='wait'?'disabled':''}>${lbl}</button></div>`;}).join('');
  $('mxThs').querySelectorAll('button').forEach(b=>b.onclick=()=>{const t=b.dataset.t;st[t]==='out'?lock(t):unlock(t);});
  $('mxRoom').classList.toggle('lk',owner!==null);
  $('mxWho').innerHTML=owner?`${badge(owner)} ${owner}{% include js-text.html key="s23d4be45d9df" %}`:{{ lesson_strings.s422210198100 | jsonify }};
  $('mxLock').textContent=owner?`{% include js-text.html key="s150a2d16ee39" %}${owner}`:{{ lesson_strings.sf0bfc0548020 | jsonify }};
  $('mxQ').innerHTML={{ lesson_strings.sf9996787a583 | jsonify }}+(queue.length?queue.map((t,i)=>(i?'<span>←</span>':'')+badge(t)).join(''):{{ lesson_strings.s422210198100 | jsonify }});
}
$('mxSteal').onclick=()=>{
  if(owner===null){say({{ lesson_strings.s2a4e3b70ede4 | jsonify }});return;}
  const o=TH.find(t=>t!==owner);
  say(`${o}{% include js-text.html key="sa8ec2a9b2d02" %}${owner}{% include js-text.html key="se0406ef1f303" %}`,true);
};
$('mxReset').onclick=reset;
reset();

const PC={H:'#993C1D',M:'#534AB7',L:'#0F6E56'};
const TL={
  off:{H:'..RBBBBBBBRRR',M:'...RRRRR.....',L:'LLrrrrrrLL...',O:'LLLLLLLLLLHHH',ev:[
    {{ lesson_strings.s1819d29cc920 | jsonify }},
    {{ lesson_strings.s1d4369ceb228 | jsonify }},
    {{ lesson_strings.s4dea7ee11ab8 | jsonify }},
    {{ lesson_strings.scc7e75fb4d16 | jsonify }},
    {{ lesson_strings.s546acee5971a | jsonify }},
    {{ lesson_strings.s546acee5971a | jsonify }},
    {{ lesson_strings.s546acee5971a | jsonify }},
    {{ lesson_strings.s546acee5971a | jsonify }},
    {{ lesson_strings.s20984fe1787e | jsonify }},
    {{ lesson_strings.s10d52b8a3cbe | jsonify }},
    {{ lesson_strings.s9570ee2c0ff6 | jsonify }},
    {{ lesson_strings.s0edbaa8cae07 | jsonify }},
    {{ lesson_strings.sc86bb456d721 | jsonify }}]},
  on:{H:'..RBBRRR.....',M:'...rrrrrRRRRR',L:'LLrUU........',O:'LLLLLHHH.....',ev:[
    {{ lesson_strings.s1819d29cc920 | jsonify }},
    {{ lesson_strings.s1d4369ceb228 | jsonify }},
    {{ lesson_strings.s4dea7ee11ab8 | jsonify }},
    {{ lesson_strings.sd9124675dc59 | jsonify }},
    {{ lesson_strings.s2e5f78a8c2c1 | jsonify }},
    {{ lesson_strings.saf3ecd2dd80c | jsonify }},
    {{ lesson_strings.s0edbaa8cae07 | jsonify }},
    {{ lesson_strings.sc86bb456d721 | jsonify }},
    {{ lesson_strings.s5779a966af7d | jsonify }},
    {{ lesson_strings.s4c5c79e1c986 | jsonify }},{{ lesson_strings.s4c5c79e1c986 | jsonify }},{{ lesson_strings.s4c5c79e1c986 | jsonify }},
    {{ lesson_strings.s7fbd7924ea31 | jsonify }}]}
};
let pi='off',now=-1,pt=null;
function cell(r,ch,t){
  const cls=t===now?' now':'';
  if(t>now)return `<div class="c"></div>`;
  if(r==='O')return ch==='.'?`<div class="c O">-</div>`:`<div class="c O${cls}">${ch}</div>`;
  const col=PC[r];
  if(ch==='R'||ch==='L')return `<div class="c${cls}" style="background:${col}">${r}</div>`;
  if(ch==='U')return `<div class="c U${cls}" style="background:${col}">L↑</div>`;
  if(ch==='B')return `<div class="c B${cls}"></div>`;
  if(ch==='r')return `<div class="c${cls}" style="border:1px solid var(--border)"></div>`;
  return `<div class="c" style="background:transparent"></div>`;
}
function drawTL(){
  const d=TL[pi];let h='<div></div>'+[...Array(13).keys()].map(t=>`<div class="h">${t}</div>`).join('');
  [['H',{{ lesson_strings.sf39875ad6d48 | jsonify }}],['M',{{ lesson_strings.sc15e5d6d20d9 | jsonify }}],['L',{{ lesson_strings.sd4c14066b47d | jsonify }}],['O',{{ lesson_strings.s51563d74fc00 | jsonify }}]].forEach(([r,l])=>{h+=`<div class="lb">${l}</div>`+[...d[r]].map((ch,t)=>cell(r,ch,t)).join('');});
  $('piGrid').innerHTML=h;
  if(now<0){$('piMsg').textContent={{ lesson_strings.se148b0805ec8 | jsonify }};return;}
  let m=d.ev[now];
  if(now===12){const n=d.H.lastIndexOf('R')+1-2;m=`{% include js-text.html key="s4dd667196950" %}${n}{% include js-text.html key="s9b02d15b9b8e" %}`+(pi==='off'?{{ lesson_strings.se8d4d29743f9 | jsonify }}:{{ lesson_strings.sebfb64aaa83f | jsonify }});}
  $('piMsg').textContent=`{% include js-text.html key="s4baa2156106b" %}${now}: ${m}`;
}
document.querySelectorAll('.mx [data-pi]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.mx [data-pi]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');pi=b.dataset.pi;clearInterval(pt);now=-1;drawTL();});
$('piPlay').onclick=()=>{clearInterval(pt);now=0;drawTL();pt=setInterval(()=>{now++;drawTL();if(now>=12)clearInterval(pt);},900);};
drawTL();
})();
