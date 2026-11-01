
(() => {
const COL=['#0F6E56','#534AB7','#993C1D','#185FA5'];
const IGA=[{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }},{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }}];
const NAME={fcfs:'FCFS',sjf:'SJF',rr:{{ lesson_strings.seeb4272a6e36 | jsonify }}};
const P=[{a:0,b:6},{a:1,b:3},{a:2,b:8},{a:3,b:2}];
let alg='fcfs',q=2,tm=[];
const $=id=>document.getElementById(id);
const fmt=x=>String(Math.round(x*100)/100);
const body=$('schBody');
P.forEach((p,i)=>{const tr=document.createElement('tr');
tr.innerHTML=`<td><span class="dot" style="background:${COL[i]}"></span>P${i+1}</td><td><input type="number" min="0" max="20" value="${p.a}" data-i="${i}" data-f="a" aria-label="P${i+1}{% include js-text.html key="s44a488c3df7b" %}${p.b}" data-i="${i}" data-f="b" aria-label="P${i+1}{% include js-text.html key="sd0a65492f833" %}${i}">-</td>`;
body.appendChild(tr);});
body.querySelectorAll('input').forEach(inp=>inp.onchange=()=>{const f=inp.dataset.f,mn=f==='a'?0:1,mx=f==='a'?20:12;let v=Math.round(+inp.value);if(isNaN(v))v=mn;v=Math.min(mx,Math.max(mn,v));inp.value=v;P[+inp.dataset.i][f]=v;draw(false);});
function sim(al){
  const n=P.length,rem=P.map(p=>p.b),done=Array(n).fill(false),fin=Array(n).fill(0),segs=[];let t=0;
  const push=(id,s,e)=>{const l=segs[segs.length-1];if(l&&l.id===id&&l.e===s)l.e=e;else segs.push({id,s,e});};
  if(al==='rr'){
    const ord=[...Array(n).keys()].sort((x,y)=>P[x].a-P[y].a||x-y);let rq=[],k=0,left=n;
    const admit=()=>{while(k<n&&P[ord[k]].a<=t)rq.push(ord[k++]);};admit();
    while(left){
      if(!rq.length){const nt=P[ord[k]].a;push(-1,t,nt);t=nt;admit();continue;}
      const i=rq.shift(),r=Math.min(q,rem[i]);push(i,t,t+r);t+=r;rem[i]-=r;admit();
      if(rem[i])rq.push(i);else{fin[i]=t;left--;}
    }
  }else{
    let left=n;
    while(left){
      const av=[...Array(n).keys()].filter(i=>!done[i]&&P[i].a<=t);
      if(!av.length){const nt=Math.min(...P.filter((p,i)=>!done[i]).map(p=>p.a));push(-1,t,nt);t=nt;continue;}
      av.sort(al==='sjf'?(x,y)=>P[x].b-P[y].b||P[x].a-P[y].a||x-y:(x,y)=>P[x].a-P[y].a||x-y);
      const i=av[0];push(i,t,t+P[i].b);t+=P[i].b;fin[i]=t;done[i]=true;left--;
    }
  }
  const w=P.map((p,i)=>fin[i]-p.a-p.b);
  return {segs,w,avg:w.reduce((s,x)=>s+x,0)/n,end:t};
}
function finish(r){r.w.forEach((w,i)=>$('schW'+i).textContent=w);$('schMsg').textContent=`${NAME[alg]}{% include js-text.html key="sc5d49cf8d803" %}${fmt(r.avg)}{% include js-text.html key="s28d60366a43a" %}`;}
function draw(anim){
  tm.forEach(clearTimeout);tm=[];
  const r=sim(alg),g=$('schG');g.innerHTML='';
  if(anim)P.forEach((_,i)=>$('schW'+i).textContent='-');
  r.segs.forEach((s,k)=>{
    const d=document.createElement('div');d.className='seg'+(s.id<0?' idle':'');
    d.style.left=s.s/r.end*100+'%';d.style.width=(s.e-s.s)/r.end*100+'%';
    if(s.id>=0)d.style.background=COL[s.id];
    d.textContent=s.id<0?{{ lesson_strings.s6c1ec00b1127 | jsonify }}:'P'+(s.id+1);g.appendChild(d);
    if(anim)tm.push(setTimeout(()=>{d.classList.add('show');$('schMsg').textContent=s.id<0?`${s.s}{% include js-text.html key="se96d4e323c38" %}${s.e}{% include js-text.html key="s1f7f666ebdcd" %}`:`P${s.id+1}${IGA[s.id]} ${s.s}{% include js-text.html key="se96d4e323c38" %}${s.e}{% include js-text.html key="sb2929406b19d" %}`;},k*500));
    else d.classList.add('show');
  });
  const ticks=[...new Set(r.segs.flatMap(s=>[s.s,s.e]))];
  $('schAx').innerHTML=ticks.map(t=>`<span style="left:${t/r.end*100}%">${t}</span>`).join('');
  if(anim)tm.push(setTimeout(()=>finish(r),r.segs.length*500+200));else finish(r);
  const av={};['fcfs','sjf','rr'].forEach(a=>av[a]=sim(a).avg);const mx=Math.max(...Object.values(av),0.01);
  $('schCmp').innerHTML=Object.keys(av).map(a=>{const on=a===alg?' on':'';return `<span class="${on}">${NAME[a]}</span><div class="tr"><div class="fl${on}" style="width:${av[a]/mx*100}%"></div></div><span class="mono${on}">${fmt(av[a])}</span>`;}).join('');
}
document.querySelectorAll('.sch [data-alg]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.sch [data-alg]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');alg=b.dataset.alg;draw(false);});
$('schQ').onchange=e=>{q=+e.target.value;draw(false);};
$('schPlay').onclick=()=>draw(true);
draw(false);
})();
