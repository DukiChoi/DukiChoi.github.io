
(() => {
const $=id=>document.getElementById(id);
const J=(n,a,b)=>n+('2459'.includes(String(n%10))?b:a);
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
let root=null,busy=false,path=[],mark={};
function say(t,c){const m=$('bsMsg');m.textContent=t;m.className='msg'+(c?' '+c:'');}
const height=n=>n?1+Math.max(height(n.l),height(n.r)):0;
const count=n=>n?1+count(n.l)+count(n.r):0;
function insRaw(v){if(!root){root={v,l:null,r:null};return;}let n=root;while(true){if(v===n.v)return;const d=v<n.v?'l':'r';if(!n[d]){n[d]={v,l:null,r:null};return;}n=n[d];}}
function draw(){
  const list=[];(function walk(n,d){if(!n)return;walk(n.l,d+1);list.push({n,d});walk(n.r,d+1);})(root,0);
  const cnt=list.length,H=height(root),gap=Math.min(70,280/Math.max(1,H));
  const pos=new Map();list.forEach((x,i)=>pos.set(x.n,{x:(i+1)*680/(cnt+1),y:30+x.d*gap}));
  let h='';
  list.forEach(({n})=>{const p=pos.get(n);['l','r'].forEach(d=>{if(n[d]){const q=pos.get(n[d]);const on=path.includes(n)&&path.includes(n[d]);h+=`<line x1="${p.x}" y1="${p.y}" x2="${q.x}" y2="${q.y}" stroke="${on?'#E8A317':'var(--border-strong)'}" stroke-width="${on?3:1.5}"/>`;}});});
  list.forEach(({n})=>{const p=pos.get(n);let f='var(--surface-1)',s='var(--border-strong)',tc='var(--text-primary)';
    if(path.includes(n)){f='#FAC775';s='#BA7517';tc='#412402';}
    if(mark.hit===n){f='#5DCAA5';s='#0F6E56';tc='#04342C';}
    if(mark.del===n){f='#F09595';s='#A32D2D';tc='#501313';}
    if(mark.cur===n){s='#185FA5';}
    h+=`<circle cx="${p.x}" cy="${p.y}" r="17" fill="${f}" stroke="${s}" stroke-width="${mark.cur===n?3:1.5}"/><text x="${p.x}" y="${p.y+5}" text-anchor="middle" font-size="14" font-weight="500" font-family="var(--font-mono)" fill="${tc}">${n.v}</text>`;});
  if(!root)h=`{% include js-text.html key="sde35c554d3bc" %}`;
  $('bsSvg').innerHTML=h;
  $('bsN').textContent=cnt;$('bsH').textContent=H;$('bsW').textContent=H;
}
function getV(){const v=+$('bsV').value;if(!Number.isInteger(v)||v<1||v>99){$('bsErr').textContent={{ lesson_strings.s84ccdf368d8b | jsonify }};return null;}$('bsErr').textContent='';return v;}
async function walk(v,act){
  path=[];mark={};let n=root,par=null,cmp=0;
  while(n){path.push(n);mark.cur=n;cmp++;draw();
    if(v===n.v){say(`${J(v,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})} ${J(n.v,{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})}{% include js-text.html key="s667891acb4e0" %}`);await sleep(650);return {n,par,cmp};}
    const left=v<n.v;say(`${J(v,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})} ${n.v}{% include js-text.html key="s2aeb27b3a45e" %}${left?{{ lesson_strings.s4b8abe695521 | jsonify }}:{{ lesson_strings.s653df6758363 | jsonify }}}{% include js-text.html key="s81a52c0e6da7" %}`);await sleep(650);
    par=n;n=left?n.l:n.r;}
  return {n:null,par,cmp};
}
function minNode(n){while(n.l)n=n.l;return n;}
function removeNode(rt,v){if(!rt)return null;if(v<rt.v)rt.l=removeNode(rt.l,v);else if(v>rt.v)rt.r=removeNode(rt.r,v);else{if(!rt.l)return rt.r;if(!rt.r)return rt.l;const m=minNode(rt.r);rt.v=m.v;rt.r=removeNode(rt.r,m.v);}return rt;}
async function run(fn){if(busy)return;const v=getV();if(v===null)return;busy=true;lock(true);try{await fn(v);}finally{busy=false;lock(false);}}
function lock(b){['bsIns','bsFind','bsDel','bsRand','bsSort','bsClr'].forEach(id=>$(id).disabled=b);}
$('bsIns').onclick=()=>run(async v=>{
  if(count(root)>=15){say({{ lesson_strings.s3152b2fab5d7 | jsonify }},'bad');return;}
  if(!root){root={v,l:null,r:null};path=[root];mark={hit:root};draw();say(`{% include js-text.html key="s6a49826b1054" %}${J(v,{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }})}{% include js-text.html key="s745c4f8c1983" %}`,'ok');return;}
  const r=await walk(v);
  if(r.n){mark={hit:r.n};draw();say(`${J(v,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})}{% include js-text.html key="seb64f0aa3736" %}`,'bad');return;}
  const nn={v,l:null,r:null};if(v<r.par.v)r.par.l=nn;else r.par.r=nn;path.push(nn);mark={hit:nn};draw();
  say(`{% include js-text.html key="sec3a45258d9c" %}${r.par.v}{% include js-text.html key="s9c9b3359171e" %}${v<r.par.v?{{ lesson_strings.sb54afa9950ad | jsonify }}:{{ lesson_strings.s53c0a389ee32 | jsonify }}}{% include js-text.html key="s68cd8196845e" %}${J(v,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s8b437cc4c242" %}${r.cmp}{% include js-text.html key="sc201965a92c7" %}`,'ok');
});
$('bsFind').onclick=()=>run(async v=>{
  if(!root){say({{ lesson_strings.sc881c4ce6eb5 | jsonify }},'bad');return;}
  const r=await walk(v);
  if(r.n){mark={hit:r.n};draw();say(`${J(v,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s21dca032cc7b" %}${r.cmp}{% include js-text.html key="s247eda1ae502" %}`,'ok');}
  else{mark={};draw();say(`${J(v,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})}{% include js-text.html key="se7141a1b1b96" %}${r.cmp}{% include js-text.html key="s73becc26d08e" %}`,'bad');}
});
$('bsDel').onclick=()=>run(async v=>{
  if(!root){say({{ lesson_strings.sc881c4ce6eb5 | jsonify }},'bad');return;}
  const r=await walk(v);
  if(!r.n){mark={};draw();say(`${J(v,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})}{% include js-text.html key="s83ae14a6af66" %}`,'bad');return;}
  const n=r.n;mark={del:n};draw();
  if(n.l&&n.r){const m=minNode(n.r);say(`${J(v,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})}{% include js-text.html key="s270110301780" %}${J(m.v,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sbc58a7ec9ea4" %}`);}
  else if(n.l||n.r){say(`${J(v,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})}{% include js-text.html key="s3f8bc9a61b25" %}`);}
  else say(`${J(v,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})}{% include js-text.html key="s8059f173f814" %}`);
  await sleep(1300);root=removeNode(root,v);path=[];mark={};draw();
});
$('bsRand').onclick=()=>{if(busy)return;root=null;const s=new Set();while(s.size<7)s.add(1+Math.floor(Math.random()*99));[...s].forEach(insRaw);path=[];mark={};draw();say({{ lesson_strings.s083405939f56 | jsonify }});};
$('bsSort').onclick=()=>{if(busy)return;root=null;[10,20,30,40,50,60,70].forEach(insRaw);path=[];mark={};draw();say({{ lesson_strings.s53f674ac6d4a | jsonify }},'bad');};
$('bsClr').onclick=()=>{if(busy)return;root=null;path=[];mark={};draw();say({{ lesson_strings.s1ff4c700df33 | jsonify }});};
$('bsV').oninput=()=>{$('bsErr').textContent='';};
[50,30,70,20,40,60,80].forEach(insRaw);draw();say({{ lesson_strings.sc6407219eedc | jsonify }});
})();
