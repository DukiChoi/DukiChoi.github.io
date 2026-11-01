
(() => {
const $=id=>document.getElementById(id);
const SEQ={seq:'0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15',conf:'0 64 0 64 4 68 0 64',loop:'0 4 8 12 16 0 4 8 12 16 0 4'};
const J=(x,a,b)=>x+(/[013678]$/.test(String(x))?a:b);
const FC={t:'#185FA5',i:'#7F77DD',o:'#888780'};
let ways=1,cs='seq',A=[],S=[],k=-1;
function parse(){const t=$('caIn').value.trim().split(/[\s,]+/).filter(Boolean);
  if(!t.length||t.length>24||!t.every(x=>/^\d{1,3}$/.test(x)&&+x<=255)){$('caErr').textContent={{ lesson_strings.se52beb5fa78b | jsonify }};return null;}$('caErr').textContent='';return t.map(Number);}
function sim(){const a=parse();if(!a)return false;A=a;const sets=4/ways,ib=Math.log2(sets),tb=6-ib;
  const C=Array.from({length:sets},()=>Array.from({length:ways},()=>({v:0,tag:null,blk:null,used:-1})));S=[];let hits=0;
  A.forEach((ad,t)=>{const blk=ad>>2,set=blk%sets,tag=blk>>ib,off=ad&3;const row=C[set];let w=row.findIndex(x=>x.v&&x.tag===tag),hit=w>=0,victim=null;
    if(hit){row[w].used=t;hits++;}else{w=row.findIndex(x=>!x.v);if(w<0){w=row.reduce((m,x,i)=>x.used<row[m].used?i:m,0);victim={...row[w]};}row[w]={v:1,tag,blk,used:t};}
    S.push({ad,blk,set,tag,off,hit,w,victim,C:JSON.parse(JSON.stringify(C)),hits,t,ib,tb});});return true;}
function render(){const sets=4/ways,ib=Math.log2(sets),tb=6-ib,s=S[k];
  if(s){const bits=s.ad.toString(2).padStart(8,'0').split('');$('caBits').innerHTML=bits.map((b,i)=>{const f=i<tb?'t':i<tb+ib?'i':'o';return `<div class="b"><b style="background:${FC[f]}">${b}</b><span>${7-i}</span></div>`;}).join('')+
    `{% include js-text.html key="s8d237af03a4e" %}${s.ad} = <b style="color:${FC.t}{% include js-text.html key="s49fb34940b74" %}${s.tag}</b>${ib?` · <b style="color:${FC.i}{% include js-text.html key="s3bdb8f315ad3" %}${s.set}</b>`:''}{% include js-text.html key="sf60ff30a91b6" %}${s.off}{% include js-text.html key="s4df1a61168f7" %}${s.blk}{% include js-text.html key="s2442dd97063c" %}${s.blk*4}~${s.blk*4+3})</div>`;}
  else $('caBits').innerHTML=`{% include js-text.html key="scdb51e0410a1" %}${tb}{% include js-text.html key="s36425d420737" %}${ib?`{% include js-text.html key="sbed0f4cde2ce" %}${ib}{% include js-text.html key="s36425d420737" %}`:''}{% include js-text.html key="scf3d6473a5a2" %}`;
  const C=s?s.C:Array.from({length:sets},()=>Array.from({length:ways},()=>({v:0})));
  let h=`{% include js-text.html key="s4d8671a94041" %}`;
  C.forEach((row,si)=>row.forEach((c,wi)=>{const cur=s&&s.set===si,me=cur&&s.w===wi;const cls=me?(s.hit?'hit':'bad'):cur?'on':'';
    h+=`<tr class="${cls}">${wi===0?`<td rowspan="${ways}" class="mono">${si}</td>`:''}<td class="mono">${wi}</td><td class="mono">${c.v||0}</td><td class="mono">${c.v?c.tag:'-'}</td><td class="mono">${c.v?`{% include js-text.html key="s77583bf4719e" %}${c.blk} (${c.blk*4}~${c.blk*4+3})`:{{ lesson_strings.safcacf3cec7d | jsonify }}}</td><td class="mono">${c.v?c.used+1+{{ lesson_strings.s5b2a10f42743 | jsonify }}:'-'}</td></tr>`;}));
  $('caT').innerHTML=h;
  const M=$('caMsg');
  if(!s){M.className='msg';M.textContent=ways===1?{{ lesson_strings.sb6abf2f4e9cf | jsonify }}:ways===2?{{ lesson_strings.sb2b397fbb144 | jsonify }}:{{ lesson_strings.s8ce8562f7485 | jsonify }};}
  else{M.className='msg '+(s.hit?'ok':'bad');const where=ib?`{% include js-text.html key="s5d671a6d05f2" %}${s.set}`:{{ lesson_strings.s44687dab2f9d | jsonify }};
    M.textContent=s.hit?`${s.t+1}{% include js-text.html key="sefb2c7411092" %}${s.ad}: ${where}{% include js-text.html key="sdbc6fdf0fd53" %}${J(s.tag,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s99ca7974eb76" %}`:
    `${s.t+1}{% include js-text.html key="sefb2c7411092" %}${s.ad}: ${where}{% include js-text.html key="s60cd3b657536" %}${J(s.tag,{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }})}{% include js-text.html key="sa22fd7642f0a" %}${s.blk}{% include js-text.html key="s4aa0d1785e6b" %}${s.blk*4}~${s.blk*4+3}{% include js-text.html key="s01881f949755" %}${s.victim?`{% include js-text.html key="s2f9ebccc704a" %}${s.w}{% include js-text.html key="sa2faf93889c9" %}${J(s.victim.blk,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})} ${ways>1?{{ lesson_strings.s4e31b97ee82b | jsonify }}:''}{% include js-text.html key="s2b695f88bb55" %}`:{{ lesson_strings.s58e1b1915b23 | jsonify }}}{% include js-text.html key="s2f9ebccc704a" %}${s.w}{% include js-text.html key="s6c972ad532fa" %}`;}
  $('caH').innerHTML=A.map((ad,i)=>`<span class="${i<=k?(S[i].hit?'h':'m'):''}${i===k?' c':''}">${ad}${i<=k?(S[i].hit?' H':' M'):''}</span>`).join('');
  const hits=s?s.hits:0,n=k+1;$('caSt').innerHTML=`{% include js-text.html key="s1ff5e0e8f4a2" %}${n}{% include js-text.html key="s36c81953fbdf" %}${hits}{% include js-text.html key="sf507cbeffcc7" %}${n-hits}{% include js-text.html key="s1dbd6ca255fb" %}${n?Math.round(hits/n*100):0}%</b></span>`;
  $('caNext').disabled=k>=S.length-1;$('caAll').disabled=k>=S.length-1;}
function reset(){if(sim()){k=-1;render();}}
$('caNext').onclick=()=>{if(k<S.length-1){k++;render();}};$('caAll').onclick=()=>{k=S.length-1;render();};$('caReset').onclick=()=>{k=-1;render();};
$('caIn').onchange=()=>{document.querySelectorAll('[data-cs]').forEach(x=>x.classList.remove('sel'));reset();};$('caIn').oninput=()=>$('caErr').textContent='';
document.querySelectorAll('[data-mp]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-mp]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');ways=+b.dataset.mp;reset();});
document.querySelectorAll('[data-cs]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-cs]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');cs=b.dataset.cs;$('caIn').value=SEQ[cs];reset();});
$('caIn').value=SEQ.seq;reset();

})();
