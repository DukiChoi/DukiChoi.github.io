
(() => {
const $=id=>document.getElementById(id);
const NAME={fifo:'FIFO',lru:'LRU',opt:'OPT'};
const WHY={fifo:{{ lesson_strings.s2e7538a55576 | jsonify }},lru:{{ lesson_strings.s653e9edf0466 | jsonify }},opt:{{ lesson_strings.s62c148fab25e | jsonify }}};
const eul=n=>n+('2459'.includes(String(n%10))?{{ lesson_strings.s638343428099 | jsonify }}:{{ lesson_strings.s9fbc96bea655 | jsonify }});
let alg='fifo',F=3,R=[],run=null,k=0,timer=null;
function parse(){
  const tok=$('prRef').value.trim().split(/[\s,]+/).filter(Boolean);
  if(!tok.length||tok.length>24||!tok.every(t=>/^\d{1,2}$/.test(t))){$('prErr').textContent={{ lesson_strings.s0473fb2b81d9 | jsonify }};return null;}
  $('prErr').textContent='';return tok.map(Number);
}
function sim(al,R,F){
  const fr=Array(F).fill(null),lt=Array(F).fill(0),ut=Array(F).fill(0),out=[];let faults=0;
  R.forEach((p,t)=>{
    let slot=fr.indexOf(p),hit=slot>=0,victim=null;
    if(hit)ut[slot]=t;
    else{faults++;slot=fr.indexOf(null);
      if(slot<0){
        if(al==='fifo')slot=lt.indexOf(Math.min(...lt));
        else if(al==='lru')slot=ut.indexOf(Math.min(...ut));
        else{let far=-1;fr.forEach((q,j)=>{let n=R.indexOf(q,t+1);if(n<0)n=Infinity;if(n>far){far=n;slot=j;}});}
        victim=fr[slot];}
      fr[slot]=p;lt[slot]=t;ut[slot]=t;}
    out.push({p,hit,slot,victim,fr:fr.slice(),faults});
  });
  return {out,faults};
}
function rebuild(){const r=parse();if(!r)return false;R=r;run=sim(alg,R,F);k=0;stop();draw();return true;}
function stop(){clearInterval(timer);timer=null;$('prAll').textContent={{ lesson_strings.s3b109e100103 | jsonify }};}
function draw(){
  const n=R.length;let h='';
  const col=`grid-template-columns:70px repeat(${n},minmax(32px,1fr))`;
  h+=`{% include js-text.html key="sbadcd7c091a7" %}`+R.map((p,t)=>`<div class="rq${t<k-1?' done':t===k-1?' cur':''}">${p}</div>`).join('');
  for(let s=0;s<F;s++){
    h+=`{% include js-text.html key="s348447c05d72" %}${s+1}</div>`;
    for(let t=0;t<n;t++){
      if(t>=k){h+=`<div class="fc fu"></div>`;continue;}
      const o=run.out[t],v=o.fr[s];
      let c='fc';if(v===null)c+=' e';else if(o.slot===s)c+=o.hit?' hit':' new';
      h+=`<div class="${c}">${v??''}</div>`;
    }
  }
  h+=`{% include js-text.html key="s25ad7fe3748f" %}`+R.map((_,t)=>t<k?(run.out[t].hit?{{ lesson_strings.sb19280eb6906 | jsonify }}:{{ lesson_strings.sacdc0143419c | jsonify }}):'<div></div>').join('');
  const g=$('prGrid');g.style.cssText=col;g.innerHTML=h;
  g.querySelectorAll('.rs').forEach(d=>d.style.fontSize='12px');
  const f=k?run.out[k-1].faults:0;
  $('prStat').innerHTML=`{% include js-text.html key="s00066a1b2dfd" %}${k}</b> / ${n}{% include js-text.html key="s65f567f5fc96" %}${f}{% include js-text.html key="s06cfc2f3078b" %}`;
  const m=$('prMsg');
  if(!k)m.textContent={{ lesson_strings.s2656e9ffa7f3 | jsonify }};
  else{const o=run.out[k-1];
    if(o.hit)m.textContent=`{% include js-text.html key="sf227587da938" %}${o.p}{% include js-text.html key="s71b10ba47564" %}`;
    else if(o.victim===null)m.textContent=`{% include js-text.html key="sf227587da938" %}${o.p}{% include js-text.html key="s67ff90d551f9" %}`;
    else m.textContent=`{% include js-text.html key="sf227587da938" %}${o.p}{% include js-text.html key="see56d01c0d37" %}${WHY[alg]}{% include js-text.html key="s82ffce5d30e3" %}${eul(o.victim)}{% include js-text.html key="s4c1c81dea6fc" %}${eul(o.p)}{% include js-text.html key="s4c02b25cdc49" %}`;
    if(k===n)m.textContent+=`{% include js-text.html key="s3dc859d55793" %}`;}
  const fs={};['fifo','lru','opt'].forEach(a=>fs[a]=sim(a,R,F).faults);const mx=Math.max(...Object.values(fs),1);
  $('prCmp').innerHTML=Object.keys(fs).map(a=>{const on=a===alg?' on':'';return `<span class="${on}">${NAME[a]}</span><div class="tr"><div class="fl${on}" style="width:${fs[a]/mx*100}%"></div></div><span class="${on}">${fs[a]}{% include js-text.html key="sd1086f5733a9" %}`;}).join('');
}
function step(){if(k<R.length){k++;draw();}if(k>=R.length)stop();}
$('prStep').onclick=()=>{stop();step();};
$('prAll').onclick=()=>{if(timer){stop();return;}if(k>=R.length){k=0;draw();}timer=setInterval(step,600);$('prAll').textContent={{ lesson_strings.s8241f385c059 | jsonify }};};
$('prReset').onclick=()=>{k=0;stop();draw();};
$('prRef').onchange=rebuild;
$('prRef').oninput=()=>{$('prErr').textContent='';};
$('prF').onchange=e=>{F=+e.target.value;rebuild();};
$('prBel').onclick=()=>{$('prRef').value='1 2 3 4 1 2 5 1 2 3 4 5';document.querySelector('.pr [data-a="fifo"]').click();rebuild();$('prMsg').textContent={{ lesson_strings.sa7c3685377f5 | jsonify }};};
document.querySelectorAll('.pr [data-a]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.pr [data-a]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');alg=b.dataset.a;rebuild();});
rebuild();
})();
