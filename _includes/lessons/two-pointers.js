
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

let MODE='sum';
const CFG={mode:'cells',n:12,tags:false,stats:{ {{ lesson_strings.sebba48c61d27 | jsonify }}:0},legend:['c','s',['#639922',{{ lesson_strings.s1ae90cabd25d | jsonify }}],[BAND.w,{{ lesson_strings.sb0d95170ae02 | jsonify }}],[BAND.ok,{{ lesson_strings.s106c0d6c4bde | jsonify }}]],
presets:[['random',{{ lesson_strings.s8e1b710bbb3e | jsonify }}],['ex1',{{ lesson_strings.sfbf65df96cc7 | jsonify }}]],
inputs:`{% include js-text.html key="sc0f61e21a9a1" %}`,
gen(p){if(MODE==='sum'){if(p==='ex1')return [2,5,7,11,14,18,21,25,29,33,36,40];const a=[];let v=1+Math.floor(Math.random()*4);for(let i=0;i<12;i++){a.push(v);v+=1+Math.floor(Math.random()*5);}return a;}
  if(p==='ex1')return [2,3,1,2,4,3,5,1,2,6,1,3];return [...Array(12)].map(()=>1+Math.floor(Math.random()*9));},
code:()=>MODE==='sum'?['def two_sum_sorted(a, target):','    l, r = 0, len(a) - 1','    while l < r:','        s = a[l] + a[r]','        if s == target:','            return l, r','        elif s < target:','            l += 1','        else:','            r -= 1','    return None']:['def min_len(a, S):','    best, s, l = INF, 0, 0','    for r in range(len(a)):','        s += a[r]','        while s >= S:','            best = min(best, r - l + 1)','            s -= a[l]','            l += 1','    return best'],
bind(build,err){const x=document.getElementById('tpX');x.onchange=()=>{if(x.value===''||+x.value<1){err({{ lesson_strings.s96af8e44f7d5 | jsonify }});return;}build();};
  document.querySelectorAll('[data-tm]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-tm]').forEach(y=>y.classList.remove('sel'));b.classList.add('sel');MODE=b.dataset.tm;x.value=MODE==='sum'?40:12;document.getElementById('tpLb').textContent=MODE==='sum'?{{ lesson_strings.s9f55c65ca98a | jsonify }}:'S';build(true);});},
record(r){const n=r.n,T=+document.getElementById('tpX').value;
  if(MODE==='sum'){r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]=0;let l=0,R=n-1;
    r.S(1,`{% include js-text.html key="sde6c161461e6" %}${T}{% include js-text.html key="s56a0c56c862e" %}${n*(n-1)/2}{% include js-text.html key="s914ff6e248a6" %}${n-1}{% include js-text.html key="sdc16fa16cbec" %}`,{ptr:[{i:l,t:'l'},{i:R,t:'r',c:PC.m}],rng:[l,R]});
    while(l<R){const a=r.v(l),b=r.v(R),s=a+b,P=[{i:l,t:'l'},{i:R,t:'r',c:PC.m}];r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;
      if(s===T){r.S(5,`${a} + ${b} = ${s}{% include js-text.html key="s3478c64246b5" %}${l}{% include js-text.html key="sdda46ac1a94b" %}${R}{% include js-text.html key="s39d926518951" %}`,{hl:r.H([l,'g'],[R,'g']),ptr:P,rng:[l,R]});return;}
      if(s<T){r.S(7,`${a} + ${b} = ${s} < ${T}{% include js-text.html key="s09406b5fe2b4" %}${a}{% include js-text.html key="sf64126fa36b8" %}${b}{% include js-text.html key="sb187446e9bd4" %}`,{hl:r.H([l,'s'],[R,'c']),ptr:P,rng:[l,R]});l++;}
      else{r.S(9,`${a} + ${b} = ${s} > ${T}{% include js-text.html key="s84f609c53466" %}${b}{% include js-text.html key="sb6675994eac2" %}`,{hl:r.H([l,'c'],[R,'s']),ptr:P,rng:[l,R]});R--;}}
    r.S(10,`{% include js-text.html key="sb7836bfa12ce" %}${T}{% include js-text.html key="sbfa9b80eb2a4" %}`,{rng:[l,R]});return;}
  r.st={ {{ lesson_strings.s1bb583e92da5 | jsonify }}:0,{{ lesson_strings.sed39c7a36ad4 | jsonify }}:Infinity};let s=0,l=0,best=Infinity,bb=null;const BB=()=>bb?[{lo:bb[0],hi:bb[1],c:BAND.ok}]:[];
  r.S(1,`{% include js-text.html key="sb312a7ba9e56" %}${T}{% include js-text.html key="s11bdc693daf4" %}`,{ptr:[{i:0,t:'l'},{i:0,t:'r',c:PC.m}]});
  for(let R=0;R<n;R++){s+=r.v(R);r.st[{{ lesson_strings.s1bb583e92da5 | jsonify }}]=s;
    r.S(3,`r = ${R}: ${J(r.v(R),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s291d1f808239" %}${s}{% include js-text.html key="s28d60366a43a" %}`+(s>=T?` ${T}{% include js-text.html key="s76c697a59034" %}`:`{% include js-text.html key="s5551d22ae447" %}${T}{% include js-text.html key="saf27417e0f32" %}`),{hl:r.H([R,'g']),band:[...BB(),{lo:l,hi:R,c:BAND.w,l:`{% include js-text.html key="sac2bbaf5026e" %}${s}`}],ptr:[{i:l,t:'l'},{i:R,t:'r',c:PC.m}]});
    while(s>=T){const len=R-l+1;if(len<best){best=len;bb=[l,R];}r.st[{{ lesson_strings.sed39c7a36ad4 | jsonify }}]=best;
      r.S(5,`{% include js-text.html key="sf8db2e416c98" %}${len}{% include js-text.html key="sc29fb7915df2" %}${l}~${R}{% include js-text.html key="scf199c1df6f7" %}${s}{% include js-text.html key="s2006aaf60423" %}${best}{% include js-text.html key="s10b22bed874b" %}`,{band:[...BB(),{lo:l,hi:R,c:BAND.w,l:`{% include js-text.html key="sac2bbaf5026e" %}${s}`}],ptr:[{i:l,t:'l'},{i:R,t:'r',c:PC.m}]});
      s-=r.v(l);r.st[{{ lesson_strings.s1bb583e92da5 | jsonify }}]=s;r.S(6,`a[${l}] = ${J(r.v(l),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sd84ec98b652f" %}${s}{% include js-text.html key="s28d60366a43a" %}`,{hl:r.H([l,'s']),band:[...BB(),...(l+1<=R?[{lo:l+1,hi:R,c:BAND.w,l:`{% include js-text.html key="sac2bbaf5026e" %}${s}`}]:[])],ptr:[{i:l,t:'l'},{i:R,t:'r',c:PC.m}]});l++;}}
  r.S(8,best<Infinity?`{% include js-text.html key="sb00a416a5b97" %}${T}{% include js-text.html key="se9a58e3b0025" %}${best}{% include js-text.html key="sca1f676b6017" %}${bb[0]}~${bb[1]}{% include js-text.html key="s69eeac59177b" %}`:`{% include js-text.html key="sb312a7ba9e56" %}${T}{% include js-text.html key="s90c19b59fef3" %}`,{band:BB(),hl:bb?Object.fromEntries(r.a.slice(bb[0],bb[1]+1).map(id=>[id,'g'])):{}});}};

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
