
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

const EUN=n=>/[013678]$/.test(String(n))?{{ lesson_strings.s9ec8bcb5fed9 | jsonify }}:{{ lesson_strings.s222918affd18 | jsonify }};
const CFG={mode:'cells',n:10,aux:{{ lesson_strings.s0c9607ee99ca | jsonify }},auxN:11,tags:false,stats:{ {{ lesson_strings.scdc123a208e1 | jsonify }}:0},legend:['c','m',['#639922',{{ lesson_strings.s01d67a2effc6 | jsonify }}],['#D85A30','P[l]'],[BAND.w,{{ lesson_strings.s1332c25667e9 | jsonify }}]],
presets:[['ex1',{{ lesson_strings.sfbf65df96cc7 | jsonify }}],['random',{{ lesson_strings.s8e1b710bbb3e | jsonify }}]],
inputs:`{% include js-text.html key="sc3d813c57d05" %}`,
gen(p){return p==='ex1'?[3,1,4,1,5,9,2,6,5,3]:[...Array(10)].map(()=>1+Math.floor(Math.random()*9));},
code:[{{ lesson_strings.s5de795a078dc | jsonify }},'P = [0] * (len(a) + 1)','for i in range(len(a)):','    P[i + 1] = P[i] + a[i]','',{{ lesson_strings.sf2debbabfc14 | jsonify }},'def range_sum(l, r):','    return P[r + 1] - P[l]'],
bind(build,err){['pfL','pfR'].forEach(id=>document.getElementById(id).onchange=()=>{const l=+document.getElementById('pfL').value,r=+document.getElementById('pfR').value;if(!Number.isInteger(l)||!Number.isInteger(r)||l<0||r>9||l>r){err({{ lesson_strings.s3a3faf11f85a | jsonify }});return;}build();});},
record(r){const n=r.n,l=+document.getElementById('pfL').value,R=+document.getElementById('pfR').value;
  r.add(0,0);r.S(1,{{ lesson_strings.s297f79111ec8 | jsonify }},{hl:r.H([0,'g',1])});
  for(let i=0;i<n;i++){const pv=r.xv(i),nv=pv+r.v(i);r.add(nv,i+1);r.st[{{ lesson_strings.scdc123a208e1 | jsonify }}]++;
    r.S(3,`P[${i+1}] = P[${i}] + a[${i}] = ${pv} + ${r.v(i)} = ${nv}`,{hl:Object.assign(r.H([i,'c']),r.H([i,'m',1]),r.H([i+1,'g',1])),ptr:[{i,t:'i'}]});}
  const big=r.xv(R+1),small=r.xv(l),ans=big-small;
  r.S(5,`{% include js-text.html key="s6f6af2546152" %}${l}{% include js-text.html key="s70f3149da828" %}${R}{% include js-text.html key="s62862b74d5e8" %}`,{band:[{lo:l,hi:R,c:BAND.w,l:`a[${l}..${R}]`}]});
  r.S(7,`P[${R+1}]${EUN(R+1)}{% include js-text.html key="s8abd633c6ed4" %}${R+1}{% include js-text.html key="s15bc8b3e13bb" %}${l}]${EUN(l)}{% include js-text.html key="s8abd633c6ed4" %}${l}{% include js-text.html key="s209b3b89dd50" %}${l}~${R}{% include js-text.html key="sd055ec3bb2cb" %}${R+1}] − P[${l}] = ${big} − ${small} = ${ans}`,{band:[{lo:l,hi:R,c:BAND.w,l:`{% include js-text.html key="sac2bbaf5026e" %}${ans}`}],hl:Object.assign(r.H([R+1,'g',1]),R+1!==l?r.H([l,'s',1]):{}),ptr:[{r:1,i:R+1,t:'r+1',c:PC.f},{r:1,i:l,t:'l',c:'#993C1D'}]});
  r.S(7,`{% include js-text.html key="s3e3a9d06ec10" %}${ans}{% include js-text.html key="s8a8edfaf08b7" %}${R-l}{% include js-text.html key="sa641598cfa16" %}`,{band:[{lo:l,hi:R,c:BAND.ok,l:`{% include js-text.html key="sac2bbaf5026e" %}${ans}`}],hl:Object.fromEntries(r.a.slice(l,R+1).map(id=>[id,'g']))});}};

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
