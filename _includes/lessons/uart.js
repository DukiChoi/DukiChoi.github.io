
(() => {
const $=id=>document.getElementById(id);
const X0=40,X1=660,YH=64,YL=124,BT=380;
const FILL={start:'rgba(216,90,48,.16)',data:'rgba(29,158,117,.14)',par:'rgba(127,119,221,.18)',stop:'rgba(136,135,128,.18)'};
let par='N',stp=1,val=0x41,raf=null,lastIdx=-1;
const hex=v=>'0x'+v.toString(16).toUpperCase().padStart(2,'0');
const chr=v=>v>=32&&v<127?` '${String.fromCharCode(v)}'`:'';
function parseIn(){
  const s=$('uaIn').value,t=s.trim();let v=null;
  if(/^0x[0-9a-f]{1,2}$/i.test(t))v=parseInt(t,16);else if(s.length===1&&s.charCodeAt(0)<128)v=s.charCodeAt(0);
  if(v===null){$('uaErr').textContent={{ lesson_strings.sb53d86431728 | jsonify }};return null;}
  $('uaErr').textContent='';return v;
}
function bits(){
  const b=[{k:'idle',v:1,l:{{ lesson_strings.sf580be856442 | jsonify }}},{k:'start',v:0,l:{{ lesson_strings.s53f6f943a9b8 | jsonify }}}];let ones=0;
  for(let i=0;i<8;i++){const v=(val>>i)&1;ones+=v;b.push({k:'data',v,l:'D'+i,i});}
  if(par!=='N')b.push({k:'par',v:par==='E'?ones%2:1-ones%2,l:'P',ones});
  for(let i=0;i<stp;i++)b.push({k:'stop',v:1,l:{{ lesson_strings.s8241f385c059 | jsonify }}});
  b.push({k:'idle',v:1,l:{{ lesson_strings.sf580be856442 | jsonify }}});return b;
}
function draw(prog){
  const b=bits(),n=b.length,w=(X1-X0)/n,rev=prog<0?n:prog,cx=X0+rev*w;let h='',d='';
  b.forEach((x,i)=>{
    if(x.k!=='idle')h+=`<rect x="${X0+i*w}" y="40" width="${w}" height="104" fill="${FILL[x.k]}"/>`;
    h+=`<text x="${X0+i*w+w/2}" y="28" text-anchor="middle" font-size="12" fill="var(--text-secondary)">${x.l}</text>`;
    if(x.k!=='idle')h+=`<text x="${X0+i*w+w/2}" y="164" text-anchor="middle" font-size="14" font-family="var(--font-mono)" fill="var(--text-primary)">${x.v}</text>`;
    const y=x.v?YH:YL;d+=(i?` L${X0+i*w} ${y}`:`M${X0} ${y}`)+` L${X0+(i+1)*w} ${y}`;
  });
  h+=`<text x="${X0-8}" y="${YH+4}" text-anchor="end" font-size="11" fill="var(--text-muted)">high</text><text x="${X0-8}" y="${YL+4}" text-anchor="end" font-size="11" fill="var(--text-muted)">low</text>`;
  h+=`<path d="${d}" fill="none" stroke="var(--text-muted)" stroke-width="2" opacity=".35"/>`;
  h+=`<clipPath id="uaClip"><rect x="0" y="0" width="${cx}" height="180"/></clipPath><path d="${d}" fill="none" stroke="#185FA5" stroke-width="2.5" clip-path="url(#uaClip)"/>`;
  b.forEach((x,i)=>{if(x.k==='idle')return;const c=X0+i*w+w/2;if(c<=cx+0.1)h+=`<circle cx="${c}" cy="${x.v?YH:YL}" r="4.5" fill="#E8A317"/>`;});
  if(prog>=0&&prog<n)h+=`<line x1="${cx}" y1="38" x2="${cx}" y2="146" stroke="#E8A317" stroke-width="1.5"/>`;
  $('uaSvg').innerHTML=h;
  const got=b.filter((x,i)=>x.k==='data'&&X0+i*w+w/2<=cx+0.1).map(x=>x.v);
  $('uaRx').innerHTML=`{% include js-text.html key="saabc9b5b4423" %}${got.join(' ')}${' _'.repeat(8-got.length)}</b>`+(got.length===8?` → <b>${hex(val)}${chr(val)}</b>`:'');
  return {b,n,w};
}
function info(){
  const baud=+$('uaBaud').value,fb=1+8+(par==='N'?0:1)+stp,bt=1e6/baud;
  const items=[[{{ lesson_strings.saadd11ce2b34 | jsonify }},`8${par}${stp}`],[{{ lesson_strings.sc511b9d98c1c | jsonify }},bt>=100?bt.toFixed(1)+' µs':bt.toFixed(2)+' µs'],[{{ lesson_strings.sba5891f5a8c4 | jsonify }},`${fb}{% include js-text.html key="sd9818143f749" %}${(fb*bt/1000).toFixed(3)} ms`],[{{ lesson_strings.s30b27443435b | jsonify }},`${Math.floor(baud/fb).toLocaleString()}{% include js-text.html key="s99860ef46f28" %}`]];
  $('uaInfo').innerHTML=items.map(([a,b])=>`<div><span>${a}</span><b>${b}</b></div>`).join('');
}
function bitMsg(x){
  if(x.k==='start')return {{ lesson_strings.se5ed910f0cfe | jsonify }};
  if(x.k==='data')return x.i===0?`D0 = ${x.v}{% include js-text.html key="s1dfc8c24051f" %}`:`D${x.i} = ${x.v}`;
  if(x.k==='par')return `{% include js-text.html key="s4ea90a17e177" %}${x.v}{% include js-text.html key="s074ea3f14fc8" %}${x.ones}{% include js-text.html key="s9942bf13c3e0" %}${par==='E'?{{ lesson_strings.sffed6f9d1991 | jsonify }}:{{ lesson_strings.s893abc5ade56 | jsonify }}}{% include js-text.html key="s92d6bc037fcb" %}`;
  return {{ lesson_strings.s10ef77c4ae54 | jsonify }};
}
function stopAnim(){cancelAnimationFrame(raf);raf=null;}
function still(){stopAnim();const v=parseIn();if(v!==null)val=v;draw(-1);info();$('uaMsg').textContent={{ lesson_strings.saf7de3106844 | jsonify }};}
$('uaPlay').onclick=()=>{
  const v=parseIn();if(v===null)return;val=v;stopAnim();info();lastIdx=-1;
  const t0=performance.now(),n=bits().length;
  const loop=now=>{
    const p=Math.min(n,(now-t0)/BT),{b}=draw(p),idx=Math.floor(p-0.5);
    if(idx!==lastIdx&&idx>=0&&idx<n&&b[idx].k!=='idle'){lastIdx=idx;$('uaMsg').textContent=bitMsg(b[idx]);}
    if(p<n)raf=requestAnimationFrame(loop);else{raf=null;$('uaMsg').textContent=`{% include js-text.html key="s78b742674631" %}${hex(val)}${chr(val)}{% include js-text.html key="s28d60366a43a" %}`;}
  };
  raf=requestAnimationFrame(loop);
};
document.querySelectorAll('.ua [data-p]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.ua [data-p]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');par=b.dataset.p;still();});
document.querySelectorAll('.ua [data-s]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.ua [data-s]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');stp=+b.dataset.s;still();});
$('uaIn').oninput=still;$('uaBaud').onchange=still;
still();
})();
