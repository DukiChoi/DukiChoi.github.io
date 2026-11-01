
(() => {
const $=id=>document.getElementById(id);
const PAT={loop:'TTTNTTTNTTTNTTTN',alt:'TNTNTNTNTNTNTNTN',most:'TTTTTTTNTTTTTTTT'};
const SN=[{{ lesson_strings.sc99f96a84d93 | jsonify }},{{ lesson_strings.s21bbc18066c1 | jsonify }},{{ lesson_strings.sdab6d5c4b335 | jsonify }},{{ lesson_strings.s2267920e045e | jsonify }}];
let pat='loop',O=[],S=[],k=-1;
function sim(){O=pat==='rand'?[...Array(16)].map(()=>Math.random()<.5?'T':'N'):[...PAT[pat]];S=[];let one='T',two=2;const c={a:0,o:0,t:0};
  O.forEach((o,i)=>{const pa='T',po=one,pt=two>=2?'T':'N',before=two;if(pa===o)c.a++;if(po===o)c.o++;if(pt===o)c.t++;
    one=o;two=o==='T'?Math.min(3,two+1):Math.max(0,two-1);S.push({i,o,pa,po,pt,before,after:two,c:{...c}});});}
function render(){const s=S[k];
  let h=`<div class="lb"></div>`+O.map((_,i)=>`<div class="hd">${i+1}</div>`).join('');
  const row=(lb,f)=>`<div class="lb">${lb}</div>`+O.map((o,i)=>{if(i>k)return `<div class="fu">?</div>`;const v=f(S[i]);return `<div class="${v[1]}${i===k?' cur':''}">${v[0]}</div>`;}).join('');
  h+=row({{ lesson_strings.s1660d005f106 | jsonify }},x=>[x.o,'act']);h+=row({{ lesson_strings.sbdf6e94a8e43 | jsonify }},x=>[x.pa,x.pa===x.o?'ok':'no']);h+=row({{ lesson_strings.s526a2988aae1 | jsonify }},x=>[x.po,x.po===x.o?'ok':'no']);h+=row({{ lesson_strings.s1ae1168bcef8 | jsonify }},x=>[x.pt,x.pt===x.o?'ok':'no']);
  const g=$('bpG');g.style.gridTemplateColumns=`90px repeat(${O.length},30px)`;g.innerHTML=h;
  const cur=s?s.after:2,prev=s?s.before:null;let v=`<defs><marker id="bpA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="context-stroke" stroke-width="2"/></marker></defs>`;
  const X=i=>70+i*127,Y=78;
  for(let i=0;i<3;i++){const tOn=s&&prev===i&&cur===i+1,nOn=s&&prev===i+1&&cur===i;
    v+=`<path d="M${X(i)+34} ${Y-14} Q${X(i)+63} ${Y-44} ${X(i+1)-34} ${Y-14}" fill="none" stroke="${tOn?'#1D9E75':'var(--border-strong)'}" stroke-width="${tOn?3:1.5}" marker-end="url(#bpA)"/><text x="${X(i)+63}" y="${Y-40}" text-anchor="middle" font-size="12" fill="${tOn?'#0F6E56':'var(--text-muted)'}">T</text>`;
    v+=`<path d="M${X(i+1)-34} ${Y+14} Q${X(i)+63} ${Y+44} ${X(i)+34} ${Y+14}" fill="none" stroke="${nOn?'#E24B4A':'var(--border-strong)'}" stroke-width="${nOn?3:1.5}" marker-end="url(#bpA)"/><text x="${X(i)+63}" y="${Y+50}" text-anchor="middle" font-size="12" fill="${nOn?'#A32D2D':'var(--text-muted)'}">N</text>`;}
  for(let i=0;i<4;i++){const on=i===cur;v+=`<circle cx="${X(i)}" cy="${Y}" r="32" fill="${on?(i>=2?'#5DCAA5':'#F09595'):'var(--surface-1)'}" stroke="${on?(i>=2?'#0F6E56':'#A32D2D'):'var(--border-strong)'}" stroke-width="${on?2.5:1.2}"/><text x="${X(i)}" y="${Y-3}" text-anchor="middle" font-size="11" font-weight="600" fill="${on?'#2C2C2A':'var(--text-primary)'}">${SN[i].split(' ')[0]}</text><text x="${X(i)}" y="${Y+12}" text-anchor="middle" font-size="11" fill="${on?'#2C2C2A':'var(--text-secondary)'}">${SN[i].split(' ').slice(1).join(' ')}</text><text x="${X(i)}" y="${Y+56+ (i%3?0:0)}{% include js-text.html key="s9a7106da64f0" %}${i>=2?'T':'N'}</text>`;}
  $('bpSvg').innerHTML=v;
  const c=s?s.c:{a:0,o:0,t:0},n=k+1;$('bpAcc').innerHTML=[[{{ lesson_strings.sbdf6e94a8e43 | jsonify }},c.a],[{{ lesson_strings.s526a2988aae1 | jsonify }},c.o],[{{ lesson_strings.s1ae1168bcef8 | jsonify }},c.t]].map(([l,x])=>`<div class="r"><span>${l}</span><div class="tr"><div class="fl" style="width:${n?x/n*100:0}%"></div></div><b>${n?Math.round(x/n*100):0}%</b></div>`).join('');
  const M=$('bpMsg');
  if(!s){M.className='msg';M.textContent={{ lesson_strings.sfe29c19b9ad5 | jsonify }};}
  else{const res=o=>o==='T'?{{ lesson_strings.sb29aa309238d | jsonify }}:{{ lesson_strings.s652b18d33184 | jsonify }};M.className='msg';
    M.textContent=`${s.i+1}{% include js-text.html key="s01fc631b2473" %}${res(s.o)}{% include js-text.html key="s87df7dc985f5" %}${s.po}${s.po==='N'?{{ lesson_strings.s9fbc96bea655 | jsonify }}:{{ lesson_strings.s638343428099 | jsonify }}}{% include js-text.html key="sf3a5f5616a73" %}${s.po===s.o?{{ lesson_strings.sef992e95ef98 | jsonify }}:{{ lesson_strings.sc66c83f89df7 | jsonify }}}{% include js-text.html key="s0f07cd7bc94a" %}${SN[s.before]}{% include js-text.html key="s4aa8e8869b7b" %}${s.pt}${s.pt==='N'?{{ lesson_strings.s9fbc96bea655 | jsonify }}:{{ lesson_strings.s638343428099 | jsonify }}}{% include js-text.html key="sf3a5f5616a73" %}${s.pt===s.o?{{ lesson_strings.s387debba6fec | jsonify }}:{{ lesson_strings.s8d0ad3466d43 | jsonify }}}{% include js-text.html key="s2b3c86fad66e" %}${SN[s.after]}"${s.before===s.after?{{ lesson_strings.sf01cfdfebc52 | jsonify }}:{{ lesson_strings.sd748580c07a5 | jsonify }}}.`;}
  $('bpNext').disabled=k>=S.length-1;$('bpAll').disabled=k>=S.length-1;}
$('bpNext').onclick=()=>{if(k<S.length-1){k++;render();}};$('bpAll').onclick=()=>{k=S.length-1;render();};$('bpReset').onclick=()=>{k=-1;render();};
document.querySelectorAll('[data-bp]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-bp]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');pat=b.dataset.bp;sim();k=-1;render();});
sim();render();

})();
