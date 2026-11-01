
(() => {
const $=id=>document.getElementById(id);
const M=7,sleep=ms=>new Promise(r=>setTimeout(r,ms));
let mode='chain',T,busy=false,cur=-1,hit=-1,fresh=null,look=null,probes=0;
function say(t,c){const m=$('htMsg');m.textContent=t;m.className='msg'+(c?' '+c:'');}
function reset(){T=mode==='chain'?Array.from({length:M},()=>[]):Array(M).fill(null);cur=hit=-1;fresh=look=null;probes=0;render();}
const count=()=>mode==='chain'?T.reduce((s,c)=>s+c.length,0):T.filter(x=>x!==null).length;
function hash(k){const codes=[...k].map(c=>c.charCodeAt(0)),sum=codes.reduce((a,b)=>a+b,0);
  $('htCalc').textContent=[...k].map((c,i)=>`${c}(${codes[i]})`).join(' + ')+` = ${sum},  ${sum} % ${M} = ${sum%M}`;return sum%M;}
function render(){
  $('htTbl').innerHTML=T.map((c,i)=>{
    let inner;
    if(mode==='chain')inner=c.length?c.map((k,j)=>(j?'<span class="ar">→</span>':'')+`<span class="k${k===fresh?' new':''}${k===look?' look':''}">${k}</span>`).join(''):{{ lesson_strings.se0e1af039a5c | jsonify }};
    else inner=c!==null?`<span class="k${c.k===fresh?' new':''}${c.k===look?' look':''}">${c.k}{% include js-text.html key="s42a42de362c5" %}${c.h}{% include js-text.html key="sbf085ae1c1af" %}`:{{ lesson_strings.se0e1af039a5c | jsonify }};
    return `<div class="slot${i===hit?' hit':i===cur?' cur':''}"><span class="ix">${i}{% include js-text.html key="s38e220ce9dd0" %}${inner}</div></div>`;}).join('');
  const n=count();$('htN').textContent=n;$('htA').textContent=(n/M).toFixed(2);$('htP').textContent=probes;
}
function getK(){const k=$('htK').value.trim();if(!/^[A-Za-z0-9]{1,8}$/.test(k)){$('htErr').textContent={{ lesson_strings.sff28a905238c | jsonify }};return null;}$('htErr').textContent='';return k;}
async function insert(k){
  const h=hash(k);cur=h;hit=-1;fresh=null;look=null;probes=1;render();
  if(mode==='chain'){
    const c=T[h];say(`"${k}{% include js-text.html key="s0c72d4299c19" %}${h}{% include js-text.html key="s91e5f6a04aff" %}${c.length?`{% include js-text.html key="sdec6d17abe94" %}${c.length}{% include js-text.html key="s40543a6cb7d5" %}`:{{ lesson_strings.s1b0e692de5d4 | jsonify }}}`);await sleep(900);
    for(const x of c){look=x;render();if(x===k){hit=h;render();say(`"${k}{% include js-text.html key="sc11cb0a8240a" %}`,'bad');return;}await sleep(450);}
    look=null;c.push(k);fresh=k;hit=h;render();say(c.length>1?`${h}{% include js-text.html key="s78d03cf781e8" %}${k}{% include js-text.html key="sf59711848966" %}`:`${h}{% include js-text.html key="sd29abd7ec045" %}${k}{% include js-text.html key="s21ffd1c3e751" %}`,'ok');return;
  }
  for(let p=0;p<M;p++){
    const i=(h+p)%M;cur=i;probes=p+1;render();const c=T[i];
    if(c===null){T[i]={k,h};fresh=k;hit=i;render();say(p?`${i}{% include js-text.html key="sb2865048099d" %}${k}{% include js-text.html key="s6a2fa2613aaa" %}${h}{% include js-text.html key="s6af8b0dd1ac8" %}${p}{% include js-text.html key="sfcdc6c332235" %}`:`${i}{% include js-text.html key="sb2865048099d" %}${k}{% include js-text.html key="sc0579b3f6553" %}`,'ok');return;}
    if(c.k===k){hit=i;render();say(`"${k}{% include js-text.html key="sc11cb0a8240a" %}`,'bad');return;}
    say(p?`${i}{% include js-text.html key="s575049532a09" %}${c.k}{% include js-text.html key="s507dc1d8cce3" %}`:`"${k}{% include js-text.html key="s0c72d4299c19" %}${h}{% include js-text.html key="sc87be2a47cc1" %}${c.k}{% include js-text.html key="s179a46b12636" %}`);await sleep(900);
  }
  cur=-1;render();say({{ lesson_strings.sdfdb6b3e6395 | jsonify }},'bad');
}
async function find(k){
  const h=hash(k);cur=h;hit=-1;fresh=null;look=null;probes=1;render();
  if(mode==='chain'){
    say(`"${k}{% include js-text.html key="s0c72d4299c19" %}${h}{% include js-text.html key="s75982e737e1e" %}`);await sleep(900);let n=0;
    for(const x of T[h]){n++;look=x;render();await sleep(500);if(x===k){hit=h;render();say(`${h}{% include js-text.html key="sf6267030c282" %}${n}{% include js-text.html key="s5c1861256be4" %}${k}{% include js-text.html key="s862a87ca832d" %}`,'ok');return;}}
    look=null;render();say(`${h}{% include js-text.html key="sf314a207a9b8" %}${k}{% include js-text.html key="s0b2fc91cccf3" %}`,'bad');return;
  }
  for(let p=0;p<M;p++){
    const i=(h+p)%M;cur=i;probes=p+1;render();const c=T[i];await sleep(700);
    if(c===null){say(`${i}{% include js-text.html key="se3d2fce8335a" %}${k}{% include js-text.html key="scafa0e49422a" %}`,'bad');return;}
    if(c.k===k){hit=i;render();say(`{% include js-text.html key="s6ad3c1795d8a" %}${p+1}{% include js-text.html key="sf8dbca6197e8" %}${i}{% include js-text.html key="s6e4884681583" %}${k}{% include js-text.html key="s862a87ca832d" %}`,'ok');return;}
  }
  say(`{% include js-text.html key="s5556c2f04861" %}${k}{% include js-text.html key="s0b2fc91cccf3" %}`,'bad');
}
function lock(b){['htIns','htFind','htDemo','htClr'].forEach(id=>$(id).disabled=b);document.querySelectorAll('.ht [data-m]').forEach(x=>x.disabled=b);}
async function run(fn){if(busy)return;busy=true;lock(true);try{await fn();}finally{busy=false;lock(false);}}
$('htIns').onclick=()=>{const k=getK();if(k)run(()=>insert(k));};
$('htFind').onclick=()=>{const k=getK();if(k)run(()=>find(k));};
$('htDemo').onclick=()=>run(async()=>{for(const k of ['cat','dog','act','god','tac']){$('htK').value=k;await insert(k);await sleep(700);}});
$('htClr').onclick=()=>{reset();$('htCalc').textContent={{ lesson_strings.s6f3735d6a7a9 | jsonify }};say({{ lesson_strings.s9a13b1372e38 | jsonify }});};
$('htK').oninput=()=>{$('htErr').textContent='';};
document.querySelectorAll('.ht [data-m]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.ht [data-m]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');mode=b.dataset.m;reset();say(mode==='chain'?{{ lesson_strings.s4b939b7a98c2 | jsonify }}:{{ lesson_strings.se13ef5749b72 | jsonify }});});
reset();say({{ lesson_strings.s884ad0c1e5e7 | jsonify }});
})();
