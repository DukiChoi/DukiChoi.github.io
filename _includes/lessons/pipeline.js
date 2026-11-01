
(() => {
const $=id=>document.getElementById(id);
const SETS={
ind:[['add r1, r2, r3','r1',['r2','r3']],['sub r4, r5, r6','r4',['r5','r6']],['and r7, r8, r9','r7',['r8','r9']],['or r10, r11, r12','r10',['r11','r12']],['add r13, r14, r15','r13',['r14','r15']]],
raw:[['add r1, r2, r3','r1',['r2','r3']],['sub r4, r1, r5','r4',['r1','r5']],['and r6, r4, r7','r6',['r4','r7']],['or r8, r1, r9','r8',['r1','r9']],['add r10, r6, r8','r10',['r6','r8']]],
lu:[['lw r1, 0(r2)','r1',['r2'],'ld'],['add r3, r1, r4','r3',['r1','r4']],['sub r5, r3, r6','r5',['r3','r6']],['lw r7, 4(r2)','r7',['r2'],'ld'],['or r8, r7, r5','r8',['r7','r5']]],
br:[['add r1, r2, r3','r1',['r2','r3']],['beq r1, r0, L','',['r1','r0'],'br'],['sub r4, r5, r6','r4',['r5','r6'],'fl'],['and r7, r8, r9','r7',['r8','r9'],'fl'],['L: or r6, r7, r8','r6',['r7','r8']],['add r9, r6, r1','r9',['r6','r1']]]};
const CW=50,LW=150,RH=34;
let set='ind',fw=true,P=[],cyc=0,maxC=0,fwd=[];
function schedule(){const I=SETS[set];P=[];fwd=[];let last=null,brEX=null,flPrev=null;
  I.forEach(ins=>{const [txt,dst,src,kind]=ins,o={txt,dst,src,kind};
    if(kind==='fl'){o.IFs=flPrev?flPrev.IFs+1:last.IDs;o.IDs=o.IFs+1;o.cut=brEX;flPrev=o;P.push(o);return;}
    o.IFs=!last?1:(flPrev&&brEX?brEX+1:last.IDs);flPrev=null;
    o.IDs=Math.max(o.IFs+1,last?last.EX:0);
    let ex=Math.max(o.IDs+1,last?last.EX+1:0),why=null;
    const prods=P.filter(p=>p.kind!=='fl'&&p.dst&&src.includes(p.dst));
    prods.forEach(p=>{const need=fw?(p.kind==='ld'?p.EX+2:p.EX+1):p.EX+3;if(need>ex){why={p,reg:p.dst};ex=need;}});
    if(fw)prods.forEach(p=>{if(ex<=p.WB)fwd.push({from:p,stage:p.kind==='ld'?'MEM':'EX',reg:p.dst,to:o});});
    o.EX=ex;o.MEM=ex+1;o.WB=ex+2;o.why=why;if(kind==='br')brEX=ex;P.push(o);last=o;});
  P.forEach((p,i)=>p.i=i);maxC=Math.max(...P.map(p=>p.WB||p.cut))+1;}
function cells(p){const c={};if(p.kind==='fl'){for(let t=p.IFs;t<p.IDs&&t<=p.cut;t++)c[t]=['IF','fl'];if(p.IDs<=p.cut)c[p.IDs]=['ID','fl'];return c;}
  for(let t=p.IFs;t<p.IDs;t++)c[t]=t===p.IFs?['IF','IF']:['stall','stl'];for(let t=p.IDs;t<p.EX;t++)c[t]=t===p.IDs?['ID','ID']:['stall','stl'];c[p.EX]=['EX','EX'];c[p.MEM]=['MEM','MEM'];c[p.WB]=['WB','WB'];return c;}
function render(){const g=$('ppG');g.style.gridTemplateColumns=`${LW}px repeat(${maxC},${CW}px)`;
  let h='<div class="lb"></div>'+[...Array(maxC).keys()].map(t=>`<div class="hd${t+1===cyc?' cur':''}">${t+1}</div>`).join('');
  P.forEach(p=>{const c=cells(p);h+=`<div class="lb">${p.kind==='fl'?'<span style="text-decoration:line-through;color:var(--text-muted)">'+p.txt+'</span>':p.txt}</div>`;
    for(let t=1;t<=maxC;t++){const v=c[t];h+=v?`<div class="${v[1]}${t>cyc?' fut':''}${t===cyc?' colcur':''}">${v[0]==='stall'?{{ lesson_strings.sf580be856442 | jsonify }}:v[0]}</div>`:'<div></div>';}});
  g.innerHTML=h;
  const svg=$('ppSvg');svg.setAttribute('width',LW+maxC*(CW+2));svg.setAttribute('height',(P.length+1)*(RH));
  let a=`<defs><marker id="ppA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="#D85A30" stroke-width="2"/></marker></defs>`;
  const X=t=>LW+2+(t-1)*(CW+2),Y=i=>(i+1)*RH+16;
  fwd.forEach(f=>{const ft=f.stage==='MEM'?f.from.MEM:f.from.EX;if(f.to.EX>cyc)return;a+=`<path d="M${X(ft)+CW-6} ${Y(f.from.i)+8} C${X(ft)+CW+10} ${Y(f.from.i)+20}, ${X(f.to.EX)-14} ${Y(f.to.i)-20}, ${X(f.to.EX)+6} ${Y(f.to.i)-9}" fill="none" stroke="#D85A30" stroke-width="2" marker-end="url(#ppA)"/>`;});
  svg.innerHTML=a;
  const occ={IF:[],ID:[],EX:[],MEM:[],WB:[]};let notes=[];
  P.forEach(p=>{const v=cells(p)[cyc];if(!v)return;const nm=p.txt.replace(/^L: /,'');if(v[0]==='stall'){notes.push(`${nm}{% include js-text.html key="sd0a4dd764f7f" %}`);}else occ[v[0]].push(nm+(v[1]==='fl'?{{ lesson_strings.s5588ff917c45 | jsonify }}:''));});
  let m=cyc===0?{{ lesson_strings.s4af5c4d337ee | jsonify }}:`{% include js-text.html key="s238ea0d548be" %}${cyc}: `+Object.entries(occ).map(([s,l])=>`${s} = ${l.length?l.join(', '):{{ lesson_strings.safcacf3cec7d | jsonify }}}`).join(' · ');
  P.forEach(p=>{if(p.why&&cyc===p.IDs+1)m+=`. ${p.txt}{% include js-text.html key="s6ec8f54c94e7" %}${p.why.reg}{% include js-text.html key="sab1755458d7e" %}${fw?(p.why.p.kind==='ld'?{{ lesson_strings.s05135256d37b | jsonify }}:{{ lesson_strings.s6bbaf2f43262 | jsonify }}):{{ lesson_strings.s4860b1df7603 | jsonify }}}{% include js-text.html key="s11985d5fcb09" %}`;
    if(p.kind==='br'&&cyc===p.EX)m+={{ lesson_strings.s8f5eb425fa18 | jsonify }};});
  fwd.forEach(f=>{if(cyc===f.to.EX)m+=`. ${f.from.txt.replace(/^L: /,'')}{% include js-text.html key="sad1e81eaee86" %}${f.stage}{% include js-text.html key="s307f0ce59c4c" %}${f.reg}{% include js-text.html key="s01a41a9a2ab6" %}${f.to.txt.replace(/^L: /,'')}{% include js-text.html key="s229551e0ca7f" %}`;});
  if(cyc>=maxC-1)m+={{ lesson_strings.s59f7142e8cb9 | jsonify }};
  $('ppMsg').textContent=m+(cyc?'.':'');
  const real=P.filter(p=>p.kind!=='fl'),stalls=P.reduce((s,p)=>s+Object.values(cells(p)).filter(v=>v[0]==='stall').length,0),last=Math.max(...real.map(p=>p.WB));
  $('ppSt').innerHTML=`{% include js-text.html key="sbcdedcb3a380" %}${real.length}{% include js-text.html key="s527d99667223" %}${last}{% include js-text.html key="s7176c016c0ce" %}${stalls}{% include js-text.html key="s54b5b4b5911c" %}${P.length-real.length}{% include js-text.html key="s5c9c541e7d55" %}${((last-4)/real.length).toFixed(2)}</b></span>`;
  $('ppNext').disabled=cyc>=maxC-1;}
$('ppNext').onclick=()=>{if(cyc<maxC-1){cyc++;render();}};$('ppAll').onclick=()=>{cyc=maxC-1;render();};$('ppReset').onclick=()=>{cyc=0;render();};
document.querySelectorAll('[data-ps]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-ps]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');set=b.dataset.ps;schedule();cyc=0;render();});
document.querySelectorAll('[data-fw]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-fw]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');fw=b.dataset.fw==='1';schedule();cyc=0;render();});
schedule();render();

})();
