
(() => {
const $=id=>document.getElementById(id);
const CC=['#0F6E56','#534AB7','#993C1D','#185FA5','#854F0B'];
const ga=n=>n+{{ lesson_strings.sc9b303d11932 | jsonify }}[n%10];
const eul=n=>n+('2459'.includes(String(n%10))?{{ lesson_strings.s638343428099 | jsonify }}:{{ lesson_strings.s9fbc96bea655 | jsonify }});
let S,slots,lane,seq;
function say(t){$('spMsg').textContent=t;}
function reset(){S=3;slots=[null,null,null];lane=[];seq=0;say({{ lesson_strings.s8ade523affaa | jsonify }});render();}
function arrive(){
  const id=++seq;
  if(S>0){const k=slots.indexOf(null);S--;slots[k]=id;say(`{% include js-text.html key="s9a77c3311088" %}${ga(id)}{% include js-text.html key="sc680c3578972" %}${S+1} → ${S}{% include js-text.html key="s2e4b32cb2d68" %}`);}
  else{lane.push(id);say(`{% include js-text.html key="s9a77c3311088" %}${ga(id)}{% include js-text.html key="sd30f29614696" %}`);}
  render();
}
function leave(k){
  const id=slots[k];slots[k]=null;
  if(lane.length){const n=lane.shift();slots[k]=n;say(`{% include js-text.html key="s9a77c3311088" %}${ga(id)}{% include js-text.html key="s127109df93a2" %}${ga(n)}{% include js-text.html key="sa12502003399" %}`);}
  else{S++;say(`{% include js-text.html key="s9a77c3311088" %}${ga(id)}{% include js-text.html key="s2177281efa74" %}${S-1} → ${S}).`);}
  render();
}
function render(){
  const b=$('spS');b.textContent=S;b.classList.toggle('zero',S===0);
  $('spLot').innerHTML=slots.map((id,k)=>`<div class="slot">${id?`<button class="car" data-k="${k}" style="background:${CC[(id-1)%5]}{% include js-text.html key="se8a16ffba417" %}${id}{% include js-text.html key="s06d868ae0eed" %}`:{{ lesson_strings.s8cfd314a2fd9 | jsonify }}}</div>`).join('');
  $('spLot').querySelectorAll('.car').forEach(c=>c.onclick=()=>leave(+c.dataset.k));
  $('spLane').innerHTML={{ lesson_strings.s9466f30de4ed | jsonify }}+(lane.length?lane.map(id=>`{% include js-text.html key="s8504affe3a18" %}${id}</span>`).join(''):{{ lesson_strings.s3a32168d05b5 | jsonify }});
}
$('spIn').onclick=arrive;$('spReset').onclick=reset;reset();

const N=5;let buf,inn,out,empty,full,pid,pW,cW,tP=null,tC=null;
function say2(t){$('pcMsg').textContent=t;}
function resetPC(){stopAuto();buf=Array(N).fill(null);inn=0;out=0;empty=N;full=0;pid=0;pW=false;cW=false;say2({{ lesson_strings.sde8565c53c14 | jsonify }});renderPC();}
function produce(){if(pW)return;if(empty===0){pW=true;say2({{ lesson_strings.sfecaf6524b7b | jsonify }});renderPC();return;}doP(false);}
function doP(woke){
  empty--;pid++;buf[inn]=pid;const at=inn;inn=(inn+1)%N;full++;
  say2(`${woke?{{ lesson_strings.s7afecd89fb16 | jsonify }}:''}{% include js-text.html key="sd632dfaf4663" %}${eul(pid)} ${at}{% include js-text.html key="s6b18678f1f43" %}${empty}, full ${full}`);
  if(cW){cW=false;setTimeout(()=>doC(true),500);}renderPC();
}
function consume(){if(cW)return;if(full===0){cW=true;say2({{ lesson_strings.s633b4fd5928e | jsonify }});renderPC();return;}doC(false);}
function doC(woke){
  full--;const v=buf[out],at=out;buf[out]=null;out=(out+1)%N;empty++;
  say2(`${woke?{{ lesson_strings.s7afecd89fb16 | jsonify }}:''}{% include js-text.html key="sffff7f22b963" %}${at}{% include js-text.html key="s89ba21384b8c" %}${eul(v)}{% include js-text.html key="s3dc4cc60c180" %}${empty}, full ${full}`);
  if(pW){pW=false;setTimeout(()=>doP(true),500);}renderPC();
}
function renderPC(){
  $('pcBuf').innerHTML=buf.map(v=>`<div class="cell${v?' f':''}">${v??''}</div>`).join('');
  $('pcMk').innerHTML=[...Array(N).keys()].map(i=>`<span>${i===inn&&i===out?{{ lesson_strings.s29fde166170e | jsonify }}:i===inn?{{ lesson_strings.s8c67a0b3f4ef | jsonify }}:i===out?{{ lesson_strings.s4140d586cea5 | jsonify }}:''}</span>`).join('');
  $('pcE').textContent=empty;$('pcF').textContent=full;
  $('pcP').classList.toggle('wait',pW);$('pcC').classList.toggle('wait',cW);
  $('pcPs').textContent=pW?{{ lesson_strings.s9cd0f1961d83 | jsonify }}:{{ lesson_strings.s2019ac7d1d27 | jsonify }};
  $('pcCs').textContent=cW?{{ lesson_strings.s98a7e8b77bbb | jsonify }}:{{ lesson_strings.s2019ac7d1d27 | jsonify }};
  $('pcPb').disabled=pW;$('pcCb').disabled=cW;
}
function stopAuto(){clearInterval(tP);clearInterval(tC);tP=tC=null;$('pcAuto').textContent={{ lesson_strings.s349db673b0e5 | jsonify }};}
function startAuto(){stopAuto();tP=setInterval(produce,+$('pcPv').value);tC=setInterval(consume,+$('pcCv').value);$('pcAuto').textContent={{ lesson_strings.s784391b61425 | jsonify }};}
$('pcAuto').onclick=()=>tP?stopAuto():startAuto();
$('pcPv').onchange=$('pcCv').onchange=()=>{if(tP)startAuto();};
$('pcPb').onclick=produce;$('pcCb').onclick=consume;$('pcReset').onclick=resetPC;
resetPC();
})();
