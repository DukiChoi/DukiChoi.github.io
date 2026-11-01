
(() => {
const J=(x,a,b)=>x+(/[013678flmnr]$/i.test(String(x))?a:b);
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const PC={i:'#185FA5',j:'#BA7517',p:'#534AB7',m:'#993556',f:'#0F6E56'};
const BAND={ok:'rgba(29,158,117,.14)',bad:'rgba(216,90,48,.13)',p:'rgba(127,119,221,.14)',w:'rgba(232,163,23,.18)',b:'rgba(55,138,221,.13)'};
class Rec{
  constructor(els,o){this.els=els;this.n=o.n;this.a=els.map(e=>e.id);this.x=o.aux?Array(o.auxN||o.n).fill(null):null;this.fixed=new Set();this.st=Object.assign({},o.stats||{});this.f=[];}
  v(i){return this.els[this.a[i]].v} xv(i){return this.els[this.x[i]].v}
  L(i){const e=this.els[this.a[i]];return e.v+(e.tag||'');} XL(i){const e=this.els[this.x[i]];return e.v+(e.tag||'');}
  swap(i,j){const t=this.a[i];this.a[i]=this.a[j];this.a[j]=t;}
  mv(i,j){this.a[j]=this.a[i];this.a[i]=null;}
  down(i,j){this.x[j]=this.a[i];this.a[i]=null;}
  up(j,i){this.a[i]=this.x[j];this.x[j]=null;}
  xmv(i,j){this.x[j]=this.x[i];this.x[i]=null;}
  add(v,j){const id=this.els.length;this.els.push({id,v});this.x[j]=id;return id;}
  fix(i){if(this.a[i]!=null)this.fixed.add(this.a[i]);}
  fixAll(){this.a.forEach(id=>id!=null&&this.fixed.add(id));if(this.x)this.x.forEach(id=>id!=null&&this.fixed.add(id));}
  H(...p){const h={};p.forEach(([i,c,row])=>{const id=row?this.x[i]:this.a[i];if(id!=null)h[id]=c;});return h;}
  S(line,msg,o={}){this.f.push({a:this.a.slice(),x:this.x?this.x.slice():null,fixed:new Set(this.fixed),hl:o.hl||{},ptr:o.ptr||[],band:o.band||[],rng:o.rng||null,line,msg,st:Object.assign({},this.st),ex:o.ex?JSON.parse(JSON.stringify(o.ex)):null});}
}
const stackSide=fn=>fr=>{const s=(fr.ex&&fr.ex.stack)||[];return `{% include js-text.html key="sfeee16f6ef2b" %}${s.length?s.slice().reverse().map((x,i)=>`<div class="${i===0?'on':''}">${fn}(a, ${x[0]}, ${x[1]})</div>`).join(''):{{ lesson_strings.sad0bee1cc3e2 | jsonify }}}</div>`;};

let MODE='find';
const CODES={find:['def binary_search(a, x):','    lo, hi = 0, len(a) - 1','    while lo <= hi:','        mid = (lo + hi) // 2','        if a[mid] == x:','            return mid','        elif a[mid] < x:','            lo = mid + 1','        else:','            hi = mid - 1','    return -1'],
lower:[{{ lesson_strings.sb776cf5bf2f8 | jsonify }},'    lo, hi = 0, len(a)','    while lo < hi:','        mid = (lo + hi) // 2','        if a[mid] < x:','            lo = mid + 1','        else:','            hi = mid','    return lo'],
upper:[{{ lesson_strings.s906c8b2e961b | jsonify }},'    lo, hi = 0, len(a)','    while lo < hi:','        mid = (lo + hi) // 2','        if a[mid] <= x:','            lo = mid + 1','        else:','            hi = mid','    return lo']};
const CFG={mode:'cells',n:15,cols:16,tags:false,stats:{ {{ lesson_strings.sebba48c61d27 | jsonify }}:0,{{ lesson_strings.sd9b2125f101a | jsonify }}:15},legend:['c',['#639922',{{ lesson_strings.se62bafe9f696 | jsonify }}]],
presets:[['random',{{ lesson_strings.s8e1b710bbb3e | jsonify }}],['dups',{{ lesson_strings.s355f319154f8 | jsonify }}]],
inputs:`{% include js-text.html key="s8dad931729a5" %}`,
gen(p){const a=[];let v=1+Math.floor(Math.random()*5);for(let i=0;i<15;i++){a.push(v);v+=p==='dups'?Math.floor(Math.random()*3):1+Math.floor(Math.random()*6);}return a;},
code:()=>CODES[MODE],
side(fr){const h=(fr.ex&&fr.ex.hist)||[];return `{% include js-text.html key="s5963631c989c" %}${h.map((x,i)=>`<span class="${i===h.length-1?'on':''}">${x}</span>`).join('<i>→</i>')}</div>`;},
bind(build,err){
  const x=document.getElementById('bsX');x.onchange=()=>{if(x.value===''||isNaN(+x.value)){err({{ lesson_strings.sfb8f52c015e3 | jsonify }});return;}build();};
  document.getElementById('bsPick').onclick=()=>{const vs=[...document.querySelectorAll('.vz-el')].filter(d=>d.style.opacity!=='0').map(d=>parseInt(d.textContent));x.value=vs[Math.floor(Math.random()*vs.length)];build();};
  document.querySelectorAll('[data-bm]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-bm]').forEach(y=>y.classList.remove('sel'));b.classList.add('sel');MODE=b.dataset.bm;build();});},
record(r){const n=r.n,x=+document.getElementById('bsX').value,hist=[];
  if(MODE==='find'){let lo=0,hi=n-1,found=-1;hist.push(n);r.st[{{ lesson_strings.sd9b2125f101a | jsonify }}]=n;
    r.S(1,`{% include js-text.html key="s2ebc91810d5a" %}${x}{% include js-text.html key="s21de150f9b50" %}${n-1}{% include js-text.html key="s4846c9041c5e" %}`,{ptr:[{i:lo,t:'lo'},{i:hi,t:'hi'}],rng:[lo,hi],ex:{hist}});
    while(lo<=hi){const mid=(lo+hi)>>1,v=r.v(mid),P=[{i:lo,t:'lo'},{i:mid,t:'mid',c:PC.m},{i:hi,t:'hi'}];r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;
      r.S(3,`mid = (${lo} + ${hi}) // 2 = ${mid}{% include js-text.html key="s00802aa3b792" %}${mid}] = ${J(v,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})} ${J(x,{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})}{% include js-text.html key="s70bcd9bfeaa8" %}`,{hl:r.H([mid,'c']),ptr:P,rng:[lo,hi],ex:{hist}});
      if(v===x){found=mid;r.S(5,`${v} = ${x}. ${mid}{% include js-text.html key="s8ed75c1a45d2" %}`,{hl:r.H([mid,'g']),ptr:P,rng:[lo,hi],ex:{hist}});break;}
      if(v<x){lo=mid+1;hist.push(Math.max(0,hi-lo+1));r.st[{{ lesson_strings.sd9b2125f101a | jsonify }}]=Math.max(0,hi-lo+1);r.S(7,`${v} < ${x}{% include js-text.html key="sb88131c2c92e" %}${lo}{% include js-text.html key="sccabeabdfd84" %}`,{ptr:[{i:lo,t:'lo'},{i:hi,t:'hi'}],rng:[lo,hi],ex:{hist}});}
      else{hi=mid-1;hist.push(Math.max(0,hi-lo+1));r.st[{{ lesson_strings.sd9b2125f101a | jsonify }}]=Math.max(0,hi-lo+1);r.S(9,`${v} > ${x}{% include js-text.html key="s9ddf760325b5" %}${hi}{% include js-text.html key="sdfb39f16d348" %}`,{ptr:[{i:Math.min(lo,n-1),t:'lo'},{i:Math.max(hi,0),t:'hi'}],rng:[lo,hi],ex:{hist}});}}
    let lin=0;for(let i=0;i<n;i++){lin++;if(r.v(i)===x)break;}
    if(found<0)r.S(10,`lo(${lo}{% include js-text.html key="s6bf20045f31c" %}${hi}{% include js-text.html key="s33457fa0b718" %}${J(x,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})}{% include js-text.html key="s2b2414dcf28c" %}${r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]}{% include js-text.html key="s1a4ad3a01f42" %}${n}{% include js-text.html key="s63ef2084ffaf" %}`,{ex:{hist}});
    else r.S(5,`{% include js-text.html key="s161b2e4c01c1" %}${r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]}{% include js-text.html key="sc5c231cbd300" %}${lin}{% include js-text.html key="sf838ac5baf13" %}`,{hl:r.H([found,'g']),ex:{hist}});
    return;}
  const up=MODE==='upper',word=up?{{ lesson_strings.s515d123b9a0d | jsonify }}:{{ lesson_strings.sd04579c939cc | jsonify }};let lo=0,hi=n;hist.push(n+1);r.st[{{ lesson_strings.sd9b2125f101a | jsonify }}]=n+1;
  r.S(1,`lo = 0, hi = ${n}{% include js-text.html key="s1ef9356a5a03" %}${n}{% include js-text.html key="s91e5f6a04aff" %}${n}{% include js-text.html key="sba4d04612086" %}${x} ${word}{% include js-text.html key="s30e91a3a7e94" %}`,{ptr:[{i:lo,t:'lo'},{i:hi,t:'hi'}],rng:[lo,hi-1],ex:{hist}});
  while(lo<hi){const mid=(lo+hi)>>1,v=r.v(mid),P=[{i:lo,t:'lo'},{i:mid,t:'mid',c:PC.m},{i:hi,t:'hi'}];r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;const go=up?v<=x:v<x;
    r.S(3,`mid = (${lo} + ${hi}) // 2 = ${mid}. a[${mid}] = ${v}`+(go?(up?` ≤ ${x}{% include js-text.html key="sf4eaa5354904" %}`:` < ${x}{% include js-text.html key="sf4eaa5354904" %}`):(up?` > ${x}{% include js-text.html key="s0810bdbe494f" %}`:` ≥ ${x}{% include js-text.html key="s0810bdbe494f" %}`)),{hl:r.H([mid,'c']),ptr:P,rng:[lo,hi-1],ex:{hist}});
    if(go){lo=mid+1;hist.push(hi-lo+1);r.st[{{ lesson_strings.sd9b2125f101a | jsonify }}]=hi-lo+1;r.S(5,`lo = mid + 1 = ${lo}{% include js-text.html key="s995f9765de64" %}`,{ptr:[{i:lo,t:'lo'},{i:hi,t:'hi'}],rng:[lo,hi-1],ex:{hist}});}
    else{hi=mid;hist.push(hi-lo+1);r.st[{{ lesson_strings.sd9b2125f101a | jsonify }}]=hi-lo+1;r.S(7,`hi = mid = ${hi}{% include js-text.html key="se43e5efcaaba" %}`,{ptr:[{i:lo,t:'lo'},{i:hi,t:'hi'}],rng:[lo,hi-1],ex:{hist}});}}
  r.S(8,lo<n?`{% include js-text.html key="s1e6869b175b6" %}${lo}{% include js-text.html key="s355534950bbf" %}${x} ${word}{% include js-text.html key="s9d84f9482b8d" %}${lo}{% include js-text.html key="s036957731916" %}${lo}] = ${r.v(lo)}{% include js-text.html key="se7356701fc10" %}`:`{% include js-text.html key="s1e6869b175b6" %}${n}{% include js-text.html key="s355534950bbf" %}${x} ${word}{% include js-text.html key="sf29104eb1048" %}${n}{% include js-text.html key="sc3b40a72bff8" %}`,{hl:lo<n?r.H([lo,'g']):{},ptr:[{i:lo,t:{{ lesson_strings.s1ae90cabd25d | jsonify }}}],ex:{hist}});}};

const C=CFG,$=id=>document.getElementById(id),ROOT=$('vzStage');
const BARS=C.mode!=='cells',COLS=C.cols||Math.max(C.n,C.auxN||0),W=100/COLS;
const G=BARS?{b0:212,i0:228,p0:236,aux:150,max0:196,max1:128}:{b0:50,i0:66,p0:72,aux:84,cell:44};
const GEO=(()=>{const g={b:[G.b0],i:[G.i0],p:[G.p0]};if(C.aux){const b1=G.p0+40+G.aux;g.b.push(b1);g.i.push(b1+16);g.p.push(b1+24);g.h=b1+66;}else g.h=G.p0+46;return g;})();
const LEG={c:['#EF9F27',{{ lesson_strings.seb1eb53fb063 | jsonify }}],s:['#D85A30',{{ lesson_strings.sae6e9a97cc8a | jsonify }}],p:['#7F77DD',{{ lesson_strings.sc705a051fc4d | jsonify }}],m:['#D4537E',{{ lesson_strings.sd8b0618e50dd | jsonify }}],f:['#1D9E75',{{ lesson_strings.s54511d3daa9b | jsonify }}],g:['#639922',{{ lesson_strings.sf976d0ef798d | jsonify }}]};
let VALS=null,EL=[],F=[],k=0,timer=null,preset=(C.presets&&C.presets.length)?C.presets[0][0]:null,dom={},MAXV=1;
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
const ERR=m=>{$('vzErr').textContent=m||'';};
ROOT.innerHTML=`<div class="vz-ctl">${C.presets?{{ lesson_strings.s44c12d0cc5ef | jsonify }}+C.presets.map(([p,l])=>`<button class="bt${p===preset?' sel':''}" data-pre="${p}">${l}</button>`).join(''):''}${C.inputs||''}{% include js-text.html key="saed5fab9768f" %}${(C.legend||['c','s','f']).map(x=>Array.isArray(x)?`<span><i style="background:${x[0]}"></i>${x[1]}</span>`:`<span><i style="background:${LEG[x][0]}"></i>${LEG[x][1]}</span>`).join('')}</div>
<div class="vz-grid"><div><div class="vz-msg" id="vzMsg" aria-live="polite"></div><div class="vz-stats" id="vzStats"></div><div class="vz-side" id="vzSide"></div></div><div class="vz-code" id="vzCode"></div></div>`;
function gen(p){const n=C.n,a=[...Array(n).keys()].map(i=>i+1);
  if(p==='sorted')return a;if(p==='reversed')return a.reverse();
  if(p==='nearly'){for(let t=0;t<2;t++){const i=Math.floor(Math.random()*(n-1));[a[i],a[i+1]]=[a[i+1],a[i]];}return a;}
  if(p==='dups')return a.map(()=>1+Math.floor(Math.random()*Math.ceil(n/3)));
  return shuffle(a);}
function tag(){const c={},s={};EL.forEach(e=>c[e.v]=(c[e.v]||0)+1);EL.forEach(e=>{if(c[e.v]>1){s[e.v]=(s[e.v]||0)+1;e.tag='abcdefgh'[s[e.v]-1];}});}
function setup(){
  Object.values(dom).forEach(d=>d.remove());dom={};$('vzBox').style.height=GEO.h+'px';
  MAXV=Math.max(1,...EL.map(e=>typeof e.v==='number'?e.v:0));
  EL.forEach(e=>{const d=document.createElement('div');d.className='vz-el';d.dataset.h='1';d.innerHTML=`<span>${e.v}${e.tag?`<sub>${e.tag}</sub>`:''}</span>`;$('vzBox').insertBefore(d,$('vzFront'));dom[e.id]=d;});
  const code=typeof C.code==='function'?C.code():C.code;
  $('vzCode').innerHTML=code.map((l,i)=>`<div><span class="ln">${i+1}</span>${esc(l)}</div>`).join('');
  $('vzSl').max=F.length-1;
}
function draw(){
  const fr=F[k];if(!fr)return;let back='',front='';
  (C.aux?[0,1]:[0]).forEach(r=>{const arr=r?fr.x:fr.a;
    for(let i=0;i<arr.length;i++){
      if(arr[i]==null){const h=BARS?22:G.cell;back+=`<div class="slot" style="left:calc(${i*W}% + 3px);width:calc(${W}% - 6px);top:${GEO.b[r]-h}px;height:${h}px"></div>`;}
      front+=`<div class="idx" style="left:${(i+.5)*W}%;top:${GEO.i[r]-11}px">${i}</div>`;}
    if(r===1)front+=`<div class="rowlb" style="top:${GEO.b[1]-(BARS?G.max1+30:G.cell+22)}px">${C.aux}</div>`;});
  (fr.band||[]).forEach(b=>{const r=b.r||0,top=r?GEO.b[1]-(BARS?G.max1+8:G.cell+6):GEO.b[0]-(BARS?G.max0+8:G.cell+6),bot=GEO.b[r]+3;
    back+=`<div class="band" style="left:calc(${b.lo*W}% + 1px);width:calc(${(b.hi-b.lo+1)*W}% - 2px);top:${top}px;height:${bot-top}px;background:${b.c}"></div>`;
    if(b.l)front+=`<div class="bandlb" style="left:calc(${b.lo*W}% + 3px);top:${top+2}px">${b.l}</div>`;});
  const stk={};(fr.ptr||[]).forEach(p=>{const r=p.r||0,key=r+'_'+p.i,s=stk[key]=(stk[key]||0)+1;
    front+=`<div class="ptr" style="left:${(p.i+.5)*W}%;top:${GEO.p[r]+(s-1)*14}px;color:${p.c||PC.i}">▲${p.t}</div>`;});
  $('vzBack').innerHTML=back;$('vzFront').innerHTML=front;
  EL.forEach(e=>{const d=dom[e.id];let r=0,i=fr.a.indexOf(e.id);if(i<0&&fr.x){i=fr.x.indexOf(e.id);r=1;}
    if(i<0){d.style.opacity='0';d.dataset.h='1';return;}
    const cls=fr.hl[e.id]||(fr.fixed.has(e.id)?'f':''),dim=r===0&&fr.rng&&(i<fr.rng[0]||i>fr.rng[1]);
    const appear=d.dataset.h==='1';if(appear){d.style.transition='none';}
    d.className='vz-el'+(cls?' '+cls:'')+(dim?' dim':'');d.style.opacity='';
    d.style.left=`calc(${i*W}% + 3px)`;d.style.width=`calc(${W}% - 6px)`;
    if(BARS){const mx=r?G.max1:G.max0,h=Math.round(20+(typeof e.v==='number'?e.v:0)/MAXV*(mx-20));d.style.height=h+'px';d.style.top=(GEO.b[r]-h)+'px';}
    else{d.style.height=G.cell+'px';d.style.top=(GEO.b[r]-G.cell)+'px';}
    if(appear){void d.offsetWidth;d.style.transition='';d.dataset.h='';}
  });
  const ln=Array.isArray(fr.line)?fr.line:[fr.line];
  $('vzCode').querySelectorAll('div').forEach((d,i)=>d.classList.toggle('on',ln.includes(i)));
  $('vzMsg').innerHTML=fr.msg;
  $('vzStats').innerHTML=Object.entries(fr.st).map(([a,b])=>`<span>${a}<b>${b===Infinity?'∞':b}</b></span>`).join('');
  $('vzSide').innerHTML=C.side?C.side(fr,EL):'';
  $('vzSl').value=k;$('vzK').textContent=`${k+1} / ${F.length}`;
  $('vzPrev').disabled=k===0;$('vzNext').disabled=k>=F.length-1;
}
function stop(){clearInterval(timer);timer=null;$('vzPlay').textContent={{ lesson_strings.s83a3cd81710b | jsonify }};}
function go(n){k=Math.max(0,Math.min(F.length-1,n));draw();}
function play(){if(k>=F.length-1)k=0;draw();timer=setInterval(()=>{if(k>=F.length-1){stop();return;}go(k+1);},+$('vzSpd').value);$('vzPlay').textContent={{ lesson_strings.sf6d3d23e40b2 | jsonify }};}
$('vzPlay').onclick=()=>{if(timer)stop();else play();};
$('vzSpd').onchange=()=>{if(timer){stop();play();}};
$('vzPrev').onclick=()=>{stop();go(k-1);};$('vzNext').onclick=()=>{stop();go(k+1);};$('vzReset').onclick=()=>{stop();go(0);};
$('vzSl').oninput=e=>{stop();go(+e.target.value);};
ROOT.querySelectorAll('[data-pre]').forEach(b=>b.onclick=()=>{ROOT.querySelectorAll('[data-pre]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');preset=b.dataset.pre;build(true);});
function build(regen){stop();ERR('');if(regen||!VALS){const v=(C.gen||gen)(preset,ERR);if(!v)return;VALS=v;}
  EL=VALS.map((v,i)=>({id:i,v}));if(C.tags!==false)tag();
  const r=new Rec(EL,{n:EL.length,aux:C.aux,auxN:C.auxN,stats:C.stats});C.record(r,ERR);if(!r.f.length)r.S(-1,'');F=r.f;setup();k=0;draw();}
if(C.bind)C.bind(build,ERR);
build(true);

})();
