
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

const ALG={};
ALG.bubble={name:{{ lesson_strings.saa75a6c88830 | jsonify }},stats:{ {{ lesson_strings.sebba48c61d27 | jsonify }}:0,{{ lesson_strings.s5167fef78424 | jsonify }}:0},legend:['c','s','f'],
code:['def bubble_sort(a):','    n = len(a)','    for end in range(n - 1, 0, -1):','        swapped = False','        for j in range(end):','            if a[j] > a[j + 1]:','                a[j], a[j + 1] = a[j + 1], a[j]','                swapped = True','        if not swapped:','            break'],
record(r){const n=r.n;
  for(let end=n-1;end>0;end--){let sw=false;
    r.S(2,`${n-end}{% include js-text.html key="s68fadf90f32c" %}${end}{% include js-text.html key="s17d57f08b834" %}${end}{% include js-text.html key="se7e3af7b9d0d" %}`,{rng:[0,end],ptr:[{i:end,t:'end',c:PC.f}]});
    for(let j=0;j<end;j++){r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;const x=r.v(j),y=r.v(j+1),lx=r.L(j),ly=r.L(j+1),P=[{i:j,t:'j',c:PC.j},{i:j+1,t:'j+1',c:PC.j},{i:end,t:'end',c:PC.f}];
      r.S(5,`${J(lx,{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})} ${J(ly,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sd932dd896f0a" %}`+(x>y?{{ lesson_strings.sb871cf79695f | jsonify }}:{{ lesson_strings.s5decc705c7e1 | jsonify }}),{hl:r.H([j,'c'],[j+1,'c']),ptr:P,rng:[0,end]});
      if(x>y){r.swap(j,j+1);r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]++;sw=true;r.S(6,`${J(lx,{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})} ${ly}{% include js-text.html key="sc2ffcd318c95" %}`,{hl:r.H([j,'s'],[j+1,'s']),ptr:P,rng:[0,end]});}}
    r.fix(end);
    if(!sw){r.fixAll();r.S(9,{{ lesson_strings.s9b5bc02f72f3 | jsonify }});return;}
    r.S(2,`${end}{% include js-text.html key="s6821190b930b" %}${J(r.L(end),{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }})}{% include js-text.html key="s99d90c81e239" %}`,{ptr:[{i:end,t:'end',c:PC.f}]});}
  r.fixAll();r.S(-1,`{% include js-text.html key="sde5f6b77b90b" %}${r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]}{% include js-text.html key="sb7383b0dd3f8" %}${r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]}{% include js-text.html key="sc201965a92c7" %}`);}};

ALG.selection={name:{{ lesson_strings.sf6ff2dc23b73 | jsonify }},stats:{ {{ lesson_strings.sebba48c61d27 | jsonify }}:0,{{ lesson_strings.s5167fef78424 | jsonify }}:0},legend:['c','m','s','f'],
code:['def selection_sort(a):','    n = len(a)','    for i in range(n - 1):','        m = i','        for j in range(i + 1, n):','            if a[j] < a[m]:','                m = j','        a[i], a[m] = a[m], a[i]'],
record(r){const n=r.n;
  for(let i=0;i<n-1;i++){let m=i;const P=j=>[{i,t:'i',c:PC.i},...(j!=null?[{i:j,t:'j',c:PC.j}]:[]),{i:m,t:'min',c:PC.m}];
    r.S(3,`${i}{% include js-text.html key="sf6d612c37572" %}${i}] = ${J(r.L(i),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s44ae42b3862c" %}`,{hl:r.H([i,'m']),ptr:P(null),rng:[i,n-1]});
    for(let j=i+1;j<n;j++){r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;const sm=r.v(j)<r.v(m);
      r.S(5,`${J(r.L(j),{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})}{% include js-text.html key="se81f8d35a019" %}${J(r.L(m),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sd932dd896f0a" %}`+(sm?{{ lesson_strings.sb90faf4c7608 | jsonify }}:{{ lesson_strings.se42d16b6a64d | jsonify }}),{hl:r.H([m,'m'],[j,'c']),ptr:P(j),rng:[i,n-1]});
      if(sm){m=j;r.S(6,`{% include js-text.html key="s601b5a34944d" %}${m}{% include js-text.html key="s2bca3f2c417a" %}${r.L(m)}{% include js-text.html key="s28d60366a43a" %}`,{hl:r.H([m,'m']),ptr:P(j),rng:[i,n-1]});}}
    if(m!==i){const a=r.L(i),b=r.L(m);r.swap(i,m);r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]++;r.S(7,`{% include js-text.html key="sd145a1daa71a" %}${J(b,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})} ${i}{% include js-text.html key="s7e89c649099e" %}${J(a,{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})}{% include js-text.html key="s65f0a084ddd1" %}`,{hl:r.H([i,'s'],[m,'s']),ptr:[{i,t:'i',c:PC.i},{i:m,t:'min',c:PC.m}]});}
    else r.S(7,`{% include js-text.html key="s749def00b188" %}${i}{% include js-text.html key="sd6bd7b1b6062" %}`,{ptr:[{i,t:'i',c:PC.i}]});
    r.fix(i);}
  r.fixAll();r.S(-1,`{% include js-text.html key="sde5f6b77b90b" %}${r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]}{% include js-text.html key="sb7383b0dd3f8" %}${r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]}{% include js-text.html key="sb5c7f75e5d37" %}${n*(n-1)/2}{% include js-text.html key="s39d926518951" %}`);}};

ALG.insertion={name:{{ lesson_strings.s425194e8bdf9 | jsonify }},aux:{{ lesson_strings.sf85101958434 | jsonify }},stats:{ {{ lesson_strings.sebba48c61d27 | jsonify }}:0,{{ lesson_strings.s84d0e5acf35c | jsonify }}:0},legend:['c','m','s',['#639922',{{ lesson_strings.s24cf1d1ebb99 | jsonify }}],[BAND.ok,{{ lesson_strings.s8fade5b5bd07 | jsonify }}],'f'],
code:['def insertion_sort(a):','    for i in range(1, len(a)):','        key = a[i]','        j = i - 1','        while j >= 0 and a[j] > key:','            a[j + 1] = a[j]','            j -= 1','        a[j + 1] = key'],
record(r){const n=r.n,B=hi=>[{lo:0,hi,c:BAND.ok,l:{{ lesson_strings.se91f38a98c14 | jsonify }}}];
  r.S(1,{{ lesson_strings.s4e1174beb64c | jsonify }},{band:B(0)});
  for(let i=1;i<n;i++){const key=r.v(i),kl=r.L(i);r.down(i,i);let pos=i,j=i-1;
    r.S(2,`a[${i}] = ${J(kl,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s0ae8c1afb211" %}${i-1}{% include js-text.html key="sac67d19e67ea" %}`,{hl:r.H([pos,'m',1]),band:B(i-1),ptr:[{i,t:'i',c:PC.i}]});
    while(j>=0){r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;const big=r.v(j)>key;
      r.S(4,`${J(r.L(j),{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})} key ${J(kl,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sd932dd896f0a" %}`+(big?{{ lesson_strings.sf4f27600e910 | jsonify }}:{{ lesson_strings.sffbccb99bb31 | jsonify }}),{hl:Object.assign(r.H([j,'c']),r.H([pos,'m',1])),band:B(i),ptr:[{i:j,t:'j',c:PC.j}]});
      if(!big)break;
      r.mv(j,j+1);r.xmv(pos,j);pos=j;r.st[{{ lesson_strings.s84d0e5acf35c | jsonify }}]++;
      r.S(5,`${J(r.L(j+1),{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }})} ${j+1}{% include js-text.html key="s96ae410d4dc3" %}${j}{% include js-text.html key="s22914b71b757" %}`,{hl:Object.assign(r.H([j+1,'s']),r.H([pos,'m',1])),band:B(i),ptr:[{i:j,t:'j',c:PC.j}]});
      j--;}
    r.up(pos,j+1);r.st[{{ lesson_strings.s84d0e5acf35c | jsonify }}]++;
    r.S(7,(j<0?{{ lesson_strings.s375d83ee1a26 | jsonify }}:'')+`{% include js-text.html key="s10b8090a62c4" %}${j+1}{% include js-text.html key="sec93feeeac85" %}${J(kl,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s7ffb5b6743d1" %}${i}{% include js-text.html key="s26b2ea3a7ada" %}`,{hl:r.H([j+1,'g']),band:B(i)});}
  r.fixAll();r.S(-1,`{% include js-text.html key="sde5f6b77b90b" %}${r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]}{% include js-text.html key="s7b75dda5bd9d" %}${r.st[{{ lesson_strings.s84d0e5acf35c | jsonify }}]}{% include js-text.html key="sc201965a92c7" %}`);}};

ALG.quick={name:{{ lesson_strings.s2372435cbfa7 | jsonify }},stats:{ {{ lesson_strings.sebba48c61d27 | jsonify }}:0,{{ lesson_strings.s5167fef78424 | jsonify }}:0,{{ lesson_strings.s422e1577f0be | jsonify }}:0},legend:['c','s','p',[BAND.ok,{{ lesson_strings.sb432f5cd4acb | jsonify }}],[BAND.bad,{{ lesson_strings.s79fb78a315c2 | jsonify }}],'f'],
code:['def quick_sort(a, lo, hi):','    if lo >= hi:','        return','    pivot = a[hi]','    i = lo','    for j in range(lo, hi):','        if a[j] < pivot:','            a[i], a[j] = a[j], a[i]','            i += 1','    a[i], a[hi] = a[hi], a[i]','    quick_sort(a, lo, i - 1)','    quick_sort(a, i + 1, hi)'],
side:stackSide('quick_sort'),
record(r){const n=r.n,stack=[];
  const qs=(lo,hi)=>{stack.push([lo,hi]);r.st[{{ lesson_strings.s422e1577f0be | jsonify }}]=Math.max(r.st[{{ lesson_strings.s422e1577f0be | jsonify }}],stack.length);const ex=()=>({stack});
    r.S(0,`quick_sort(a, ${lo}, ${hi}{% include js-text.html key="s1f09797c47b6" %}${lo}~${hi}{% include js-text.html key="s848f7fac47e8" %}`,{rng:[lo,Math.max(lo,hi)],ex:ex()});
    if(lo>=hi){if(lo===hi)r.fix(lo);r.S(2,lo===hi?{{ lesson_strings.s9393044e2220 | jsonify }}:{{ lesson_strings.sa6880b23b836 | jsonify }},{rng:[lo,Math.max(lo,hi)],ex:ex()});stack.pop();return;}
    const pl=r.L(hi);let i=lo;
    const band=j=>[{lo,hi:i-1,c:BAND.ok},{lo:i,hi:j-1,c:BAND.bad}].filter(b=>b.hi>=b.lo);
    r.S(3,`{% include js-text.html key="s6ef85d2720c1" %}${J(pl,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s75be97e381bf" %}`,{hl:r.H([hi,'p']),ptr:[{i,t:'i',c:PC.i}],rng:[lo,hi],ex:ex()});
    for(let j=lo;j<hi;j++){r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;const sm=r.v(j)<r.v(hi),P=[{i,t:'i',c:PC.i},{i:j,t:'j',c:PC.j}];
      r.S(6,`${J(r.L(j),{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})}{% include js-text.html key="s55b4eb6f7633" %}${J(pl,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sd932dd896f0a" %}`+(sm?(i===j?{{ lesson_strings.se5726d47b873 | jsonify }}:{{ lesson_strings.sc8878f78eef6 | jsonify }}):{{ lesson_strings.sf8cbeca923af | jsonify }}),{hl:Object.assign(r.H([hi,'p']),r.H([j,'c'])),ptr:P,band:band(j),rng:[lo,hi],ex:ex()});
      if(sm){if(i!==j){r.swap(i,j);r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]++;r.S(7,`${J(r.L(i),{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})} ${r.L(j)}{% include js-text.html key="sc2ffcd318c95" %}`,{hl:Object.assign(r.H([hi,'p']),r.H([i,'s'],[j,'s'])),ptr:P,band:band(j),rng:[lo,hi],ex:ex()});}i++;}}
    if(i!==hi){r.swap(i,hi);r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]++;}r.fix(i);
    r.S(9,`{% include js-text.html key="s40b523719b20" %}${J(pl,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})} ${i}{% include js-text.html key="s80f9283cd21a" %}${i}{% include js-text.html key="s5223be77df47" %}`,{hl:r.H([i,'p']),band:[{lo,hi:i-1,c:BAND.ok},{lo:i+1,hi,c:BAND.bad}].filter(b=>b.hi>=b.lo),rng:[lo,hi],ex:ex()});
    qs(lo,i-1);qs(i+1,hi);stack.pop();};
  qs(0,n-1);r.fixAll();r.S(-1,`{% include js-text.html key="sde5f6b77b90b" %}${r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]}{% include js-text.html key="sb7383b0dd3f8" %}${r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]}{% include js-text.html key="sd3fe85aed7fc" %}${r.st[{{ lesson_strings.s422e1577f0be | jsonify }}]}.`,{ex:{stack:[]}});}};

ALG.merge={name:{{ lesson_strings.sfd79e1b7a217 | jsonify }},aux:{{ lesson_strings.s9b957186a0c8 | jsonify }},stats:{ {{ lesson_strings.sebba48c61d27 | jsonify }}:0,{{ lesson_strings.s84d0e5acf35c | jsonify }}:0},legend:['c','s',[BAND.b,{{ lesson_strings.s00cb8cf24170 | jsonify }}],[BAND.p,{{ lesson_strings.s04332ddae9dc | jsonify }}],['#639922',{{ lesson_strings.s35907126ba3b | jsonify }}],'f'],
code:['def merge_sort(a, lo, hi):','    if lo >= hi:','        return','    mid = (lo + hi) // 2','    merge_sort(a, lo, mid)','    merge_sort(a, mid + 1, hi)','    tmp = []','    i, j = lo, mid + 1','    while i <= mid and j <= hi:','        if a[i] <= a[j]:','            tmp.append(a[i]); i += 1','        else:','            tmp.append(a[j]); j += 1','    tmp += a[i:mid + 1] + a[j:hi + 1]','    a[lo:hi + 1] = tmp'],
side:stackSide('merge_sort'),
record(r){const n=r.n,stack=[];
  const ms=(lo,hi)=>{stack.push([lo,hi]);const ex=()=>({stack});
    r.S(0,`merge_sort(a, ${lo}, ${hi}{% include js-text.html key="s39334d4ff0a7" %}`,{rng:[lo,hi],ex:ex()});
    if(lo>=hi){r.S(2,{{ lesson_strings.s9ab13e6b66bf | jsonify }},{rng:[lo,hi],ex:ex()});stack.pop();return;}
    const mid=(lo+hi)>>1,BB=[{lo,hi:mid,c:BAND.b,l:{{ lesson_strings.sb54afa9950ad | jsonify }}},{lo:mid+1,hi,c:BAND.p,l:{{ lesson_strings.s53c0a389ee32 | jsonify }}}];
    r.S(3,`{% include js-text.html key="s0d1875c97806" %}${mid}{% include js-text.html key="s790203e3dd21" %}${lo}~${mid}{% include js-text.html key="sdda46ac1a94b" %}${mid+1}~${hi}{% include js-text.html key="s91aab40c7d8b" %}`,{band:BB,rng:[lo,hi],ex:ex()});
    ms(lo,mid);ms(mid+1,hi);
    r.S(6,`{% include js-text.html key="sfb956620ad5f" %}${lo}~${mid}{% include js-text.html key="sdda46ac1a94b" %}${mid+1}~${hi}{% include js-text.html key="secfd3da574db" %}`,{band:BB,rng:[lo,hi],ex:ex()});
    let i=lo,j=mid+1,t=lo;
    while(i<=mid&&j<=hi){r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;const le=r.v(i)<=r.v(j),P=[{i,t:'i',c:PC.i},{i:j,t:'j',c:PC.j},{r:1,i:t,t:{{ lesson_strings.s74a159948f9f | jsonify }},c:PC.m}];
      r.S(9,`{% include js-text.html key="s991825d566d1" %}${J(r.L(i),{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})}{% include js-text.html key="s84f9d6b0350c" %}${J(r.L(j),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sd932dd896f0a" %}`+(le?{{ lesson_strings.s31dcb2a5a593 | jsonify }}:{{ lesson_strings.s55d349539b31 | jsonify }}),{hl:r.H([i,'c'],[j,'c']),ptr:P,band:BB,rng:[lo,hi],ex:ex()});
      if(le){r.down(i,t);i++;}else{r.down(j,t);j++;}r.st[{{ lesson_strings.s84d0e5acf35c | jsonify }}]++;
      r.S(le?10:12,`{% include js-text.html key="s792e45371aa1" %}${t}{% include js-text.html key="s24305d24b2d4" %}${J(r.XL(t),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="saab7f7ebe088" %}`,{hl:r.H([t,'s',1]),ptr:[{i:Math.min(i,mid),t:'i',c:PC.i},{i:Math.min(j,hi),t:'j',c:PC.j}],band:BB,rng:[lo,hi],ex:ex()});t++;}
    if(i<=mid||j<=hi){const sd=i<=mid?{{ lesson_strings.sb54afa9950ad | jsonify }}:{{ lesson_strings.s53c0a389ee32 | jsonify }};while(i<=mid){r.down(i,t++);i++;r.st[{{ lesson_strings.s84d0e5acf35c | jsonify }}]++;}while(j<=hi){r.down(j,t++);j++;r.st[{{ lesson_strings.s84d0e5acf35c | jsonify }}]++;}
      r.S(13,`{% include js-text.html key="s0babc3bb4a49" %}${sd}{% include js-text.html key="sc2897508b9ee" %}`,{band:BB,rng:[lo,hi],ex:ex()});}
    for(let p=lo;p<=hi;p++){r.up(p,p);r.st[{{ lesson_strings.s84d0e5acf35c | jsonify }}]++;}
    r.S(14,`{% include js-text.html key="sa61c970d8177" %}${lo}~${hi}{% include js-text.html key="sccb611df4ab8" %}`,{hl:Object.fromEntries(r.a.slice(lo,hi+1).map(id=>[id,'g'])),rng:[lo,hi],ex:ex()});
    stack.pop();};
  ms(0,n-1);r.fixAll();r.S(-1,`{% include js-text.html key="sde5f6b77b90b" %}${r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]}{% include js-text.html key="s7b75dda5bd9d" %}${r.st[{{ lesson_strings.s84d0e5acf35c | jsonify }}]}{% include js-text.html key="sc201965a92c7" %}`,{ex:{stack:[]}});}};

ALG.heap={name:{{ lesson_strings.sa2739dce58ce | jsonify }},stats:{ {{ lesson_strings.sebba48c61d27 | jsonify }}:0,{{ lesson_strings.s5167fef78424 | jsonify }}:0},legend:['m','c','s',[BAND.p,{{ lesson_strings.s9c624be1e35e | jsonify }}],'f'],
code:['def heap_sort(a):','    n = len(a)','    for i in range(n // 2 - 1, -1, -1):','        sift_down(a, i, n)','    for end in range(n - 1, 0, -1):','        a[0], a[end] = a[end], a[0]','        sift_down(a, 0, end)','','def sift_down(a, i, size):','    while 2 * i + 1 < size:','        c = 2 * i + 1','        if c + 1 < size and a[c + 1] > a[c]:','            c += 1','        if a[i] >= a[c]:','            break','        a[i], a[c] = a[c], a[i]','        i = c'],
side(fr,EL){const ex=fr.ex||{size:fr.a.length},n=fr.a.length,Wd=400;let h='';
  const pos=i=>{const d=Math.floor(Math.log2(i+1)),p=i-(2**d-1);return [(p+.5)*Wd/2**d,22+d*50];};
  for(let i=1;i<n;i++){const [x1,y1]=pos(Math.floor((i-1)/2)),[x2,y2]=pos(i);h+=`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="var(--border-strong)" stroke-width="1.5" opacity="${i<ex.size?1:.25}"/>`;}
  for(let i=0;i<n;i++){const id=fr.a[i];if(id==null)continue;const e=EL[id],[x,y]=pos(i),c=fr.hl[id],out=i>=ex.size;
    const fill=c==='c'?'#EF9F27':c==='s'?'#D85A30':c==='m'?'#D4537E':out?'#1D9E75':'#85B7EB';
    h+=`<g opacity="${out&&!c?.45:1}"><circle cx="${x}" cy="${y}" r="16" fill="${fill}"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="13" font-weight="600" fill="${c||out?'#fff':'#042C53'}">${e.v}</text><text x="${x+21}" y="${y-9}" font-size="10" fill="var(--text-muted)">${i}</text></g>`;}
  return `{% include js-text.html key="s4030b85e64a8" %}${ex.size})</div><svg viewBox="0 0 400 190" width="100%">${h}</svg>`;},
record(r){const n=r.n;let size=n;const ex=()=>({size}),band=()=>size>0?[{lo:0,hi:size-1,c:BAND.p,l:{{ lesson_strings.s3b07e0f6101a | jsonify }}}]:[];
  const sift=i=>{while(2*i+1<size){let c=2*i+1;
      if(c+1<size){r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;const rb=r.v(c+1)>r.v(c);r.S(11,`${i}{% include js-text.html key="sa1030c9faf79" %}${J(r.L(c),{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})} ${J(r.L(c+1),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s1503e9c7bb72" %}`,{hl:Object.assign(r.H([i,'m']),r.H([c,'c'],[c+1,'c'])),band:band(),ex:ex(),ptr:[{i,t:{{ lesson_strings.s236ae9d876f9 | jsonify }},c:PC.m},{i:c,t:{{ lesson_strings.sb54afa9950ad | jsonify }},c:PC.j},{i:c+1,t:{{ lesson_strings.s53c0a389ee32 | jsonify }},c:PC.j}]});if(rb)c++;}
      r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]++;const ok=r.v(i)>=r.v(c);
      r.S(13,`{% include js-text.html key="sf12311abb65e" %}${J(r.L(i),{{ lesson_strings.s5e5330dd4dee | jsonify }},{{ lesson_strings.sb90f83485960 | jsonify }})}{% include js-text.html key="s7b9df7c476bf" %}${J(r.L(c),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sd932dd896f0a" %}`+(ok?{{ lesson_strings.scfc93f794360 | jsonify }}:{{ lesson_strings.s3e0493408cf1 | jsonify }}),{hl:Object.assign(r.H([i,'m']),r.H([c,'c'])),band:band(),ex:ex(),ptr:[{i,t:{{ lesson_strings.s236ae9d876f9 | jsonify }},c:PC.m},{i:c,t:{{ lesson_strings.s727a93e0ad7e | jsonify }},c:PC.j}]});
      if(ok)return;r.swap(i,c);r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]++;r.S(15,`${J(r.L(i),{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }})}{% include js-text.html key="sbe7c74459fd8" %}${J(r.L(c),{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }})}{% include js-text.html key="s7746b40a7837" %}`,{hl:r.H([i,'s'],[c,'s']),band:band(),ex:ex()});i=c;}};
  r.S(2,`{% include js-text.html key="sb77426852d86" %}${Math.floor(n/2)-1}{% include js-text.html key="se7ad71ff4874" %}`,{band:band(),ex:ex()});
  for(let i=Math.floor(n/2)-1;i>=0;i--){r.S(3,`${i}{% include js-text.html key="s489f9a21b4ef" %}`,{hl:r.H([i,'m']),band:band(),ex:ex()});sift(i);}
  r.S(4,`{% include js-text.html key="s735d99d1aab0" %}${J(r.L(0),{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }})}{% include js-text.html key="s032c702db875" %}`,{hl:r.H([0,'m']),band:band(),ex:ex()});
  for(let end=n-1;end>0;end--){const mx=r.L(0);r.swap(0,end);r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]++;size=end;r.fix(end);
    r.S(5,`{% include js-text.html key="sfa9215f9a1f0" %}${J(mx,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})} ${end}{% include js-text.html key="s007c57e5ef61" %}${size}{% include js-text.html key="sde5a8faf58ae" %}`,{hl:r.H([0,'s'],[end,'s']),band:band(),ex:ex()});sift(0);}
  size=0;r.fixAll();r.S(-1,`{% include js-text.html key="sde5f6b77b90b" %}${r.st[{{ lesson_strings.sebba48c61d27 | jsonify }}]}{% include js-text.html key="sb7383b0dd3f8" %}${r.st[{{ lesson_strings.s5167fef78424 | jsonify }}]}{% include js-text.html key="sc201965a92c7" %}`,{ex:{size:0}});}};

ALG.counting={name:{{ lesson_strings.s9c821f8ec618 | jsonify }},aux:{{ lesson_strings.sb46ccf08c5ce | jsonify }},stats:{ {{ lesson_strings.sebba48c61d27 | jsonify }}:0,{{ lesson_strings.s84d0e5acf35c | jsonify }}:0},legend:['c','s','f'],
code:['def counting_sort(a):','    k = max(a)','    count = [0] * (k + 1)','    for x in a:','        count[x] += 1','    for v in range(1, k + 1):','        count[v] += count[v - 1]','    out = [0] * len(a)','    for x in reversed(a):','        count[x] -= 1','        out[count[x]] = x','    return out'],
side(fr){const ex=fr.ex;if(!ex||!ex.cnt)return '';return `{% include js-text.html key="sf31df5fa231e" %}${ex.ph})</div><div class="cnt">${ex.cnt.map((c,i)=>`<div class="${i===ex.hi?'on':''}"><b>${c}</b><span>${i}</span></div>`).join('')}</div>`;},
record(r){const n=r.n,K=Math.max(...[...Array(n).keys()].map(i=>r.v(i))),cnt=Array(K+1).fill(0);
  r.S(2,`{% include js-text.html key="s411ab0887590" %}${K}{% include js-text.html key="s072b96986f6d" %}${K}{% include js-text.html key="sc50f7a03f654" %}${K+1}{% include js-text.html key="sa43a7d419d9c" %}`,{ex:{cnt,hi:-1,ph:{{ lesson_strings.sfa8713167200 | jsonify }}}});
  for(let i=0;i<n;i++){const x=r.v(i);cnt[x]++;r.S(4,`a[${i}] = ${r.L(i)} → count[${x}{% include js-text.html key="s7540a1c87732" %}`,{hl:r.H([i,'c']),ex:{cnt,hi:x,ph:{{ lesson_strings.sfa8713167200 | jsonify }}},ptr:[{i,t:'x',c:PC.i}]});}
  for(let v=1;v<=K;v++){cnt[v]+=cnt[v-1];r.S(6,`count[${v}] += count[${v-1}] → ${cnt[v]}{% include js-text.html key="sccfe93e9e443" %}${v}{% include js-text.html key="s480302681d09" %}${v}{% include js-text.html key="s01afd2903f88" %}${J(v,{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }})}{% include js-text.html key="sd0fa04eba02a" %}`,{ex:{cnt,hi:v,ph:{{ lesson_strings.s9968a6424c45 | jsonify }}}});}
  for(let i=n-1;i>=0;i--){const x=r.v(i),l=r.L(i);cnt[x]--;r.down(i,cnt[x]);r.st[{{ lesson_strings.s84d0e5acf35c | jsonify }}]++;
    r.S(10,`{% include js-text.html key="sbaab77ea4c1e" %}${x}{% include js-text.html key="s7f905b6740fc" %}${cnt[x]}{% include js-text.html key="s51de5a660c9f" %}${J(l,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sea1fe76fda3c" %}${cnt[x]}{% include js-text.html key="s33538a864a37" %}`,{hl:r.H([cnt[x],'s',1]),ex:{cnt,hi:x,ph:{{ lesson_strings.se5a8c06d236c | jsonify }}},ptr:[{i,t:'x',c:PC.i}]});}
  r.fixAll();r.S(11,{{ lesson_strings.s1fdb538fd59c | jsonify }},{ex:{cnt,hi:-1,ph:{{ lesson_strings.sb4165c6a1bc6 | jsonify }}}});}};

const $=id=>document.getElementById(id);
const KEYS=['bubble','selection','insertion','quick','merge','heap','counting'];
const N=16;let base=[],P=[],timer=null,rank=0,preset='random';
function gen(p){const a=[...Array(N).keys()].map(i=>i+1);if(p==='reversed')return a.reverse();if(p==='nearly'){for(let t=0;t<2;t++){const i=Math.floor(Math.random()*(N-1));[a[i],a[i+1]]=[a[i+1],a[i]];}return a;}if(p==='dups')return a.map(()=>1+Math.floor(Math.random()*5));return shuffle(a);}
function setup(){stop();base=gen(preset);rank=0;
  P=KEYS.map(key=>{const A=ALG[key],els=base.map((v,i)=>({id:i,v}));const r=new Rec(els,{n:N,aux:A.aux,auxN:N,stats:A.stats});A.record(r);return {key,A,els,f:r.f,k:0,done:false,rk:0};});
  $('rcGrid').innerHTML=P.map((p,i)=>`<div class="rc-p" id="rcP${i}"><div class="rc-h"><b>${p.A.name}</b><span class="rk" id="rcR${i}"></span></div><div class="rc-bars" id="rcB${i}"></div>${p.A.aux?`<div class="rc-bars aux" id="rcX${i}"></div>`:''}<div class="rc-n" id="rcN${i}"></div></div>`).join('');
  P.forEach((p,i)=>paint(i));$('rcMsg').textContent={{ lesson_strings.s1fa20ea1a174 | jsonify }};}
function bars(arr,p,fr,mx){return arr.map(id=>{if(id==null)return '<i class="e"></i>';const e=p.els[id],c=fr.hl[id]||(fr.fixed.has(id)?'f':'');return `<i class="${c}" style="height:${12+e.v/mx*88}%"></i>`;}).join('');}
function paint(i){const p=P[i],fr=p.f[Math.min(p.k,p.f.length-1)],mx=Math.max(...p.els.map(e=>e.v));
  $('rcB'+i).innerHTML=bars(fr.a,p,fr,mx);if(fr.x)$('rcX'+i).innerHTML=bars(fr.x,p,fr,mx);
  $('rcN'+i).innerHTML=Object.entries(fr.st).filter(([a])=>a!=={{ lesson_strings.s422e1577f0be | jsonify }}).map(([a,b])=>`${a} <b>${b}</b>`).join(' · ')+`{% include js-text.html key="s2957b2878f82" %}${Math.min(p.k+1,p.f.length)}</b>`;}
function tick(){let all=true;P.forEach((p,i)=>{if(p.done)return;p.k++;if(p.k>=p.f.length-1){p.k=p.f.length-1;p.done=true;p.rk=++rank;$('rcR'+i).textContent=`${p.rk}{% include js-text.html key="s1ee21d64af79" %}`;$('rcP'+i).classList.add('fin');}else all=false;paint(i);});
  if(all){stop();const order=P.slice().sort((a,b)=>a.rk-b.rk).map(p=>p.A.name);$('rcMsg').textContent=`{% include js-text.html key="s0a2a1ad16dac" %}${order.join(' → ')}`;}}
function stop(){clearInterval(timer);timer=null;$('rcGo').textContent={{ lesson_strings.s48b69d2fe996 | jsonify }};}
$('rcGo').onclick=()=>{if(timer){stop();return;}if(P.every(p=>p.done))setup();timer=setInterval(tick,+$('rcSpd').value);$('rcGo').textContent={{ lesson_strings.sf6d3d23e40b2 | jsonify }};$('rcMsg').textContent={{ lesson_strings.s4331e2319d5d | jsonify }};};
$('rcSpd').onchange=()=>{if(timer){clearInterval(timer);timer=setInterval(tick,+$('rcSpd').value);}};
$('rcReset').onclick=setup;
document.querySelectorAll('[data-rp]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-rp]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');preset=b.dataset.rp;setup();});
setup();

})();
