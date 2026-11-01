
(() => {
const $=id=>document.getElementById(id);
const LINES=[['reg = count',{{ lesson_strings.seac100a4ea8e | jsonify }}],['reg = reg + 1',{{ lesson_strings.s34e853ffaab4 | jsonify }}],['count = reg',{{ lesson_strings.s75bdc8c90190 | jsonify }}]];
let count,th,log,auto=null;
const eul=n=>n+('2459'.includes(String(n%10))?{{ lesson_strings.s638343428099 | jsonify }}:{{ lesson_strings.s9fbc96bea655 | jsonify }});
function reset(){clearInterval(auto);auto=null;count=0;th={A:{pc:0,reg:null},B:{pc:0,reg:null}};log=[];render();}
function step(t){
  const s=th[t];if(s.pc>2)return;let txt;
  if(s.pc===0){s.reg=count;txt=`${t}{% include js-text.html key="sa633b355ab2b" %}${eul(count)}{% include js-text.html key="s138b51b522e7" %}`;}
  else if(s.pc===1){s.reg+=1;txt=`${t}{% include js-text.html key="saf3651efa60b" %}${s.reg}{% include js-text.html key="s5d5532eeb0c4" %}${count}{% include js-text.html key="s28d60366a43a" %}`;}
  else{count=s.reg;txt=`${t}{% include js-text.html key="s905efd19dc71" %}${eul(s.reg)}{% include js-text.html key="s35e1c564bcc8" %}`;const b=$('rcCount');b.classList.add('flash');setTimeout(()=>b.classList.remove('flash'),250);}
  s.pc++;log.push(txt);render();
}
function render(){
  ['A','B'].forEach(t=>{
    const s=th[t];
    $(`rc${t}code`).innerHTML=LINES.map((l,i)=>`<li class="${i<s.pc?'done':i===s.pc?'cur':''}"><span class="no">${i+1}</span>${l[0]}<span class="ds">${l[1]}</span></li>`).join('');
    $(`rc${t}reg`).textContent=s.reg===null?'-':s.reg;
    const b=$(`rc${t}bt`);b.disabled=s.pc>2||!!auto;b.textContent=s.pc>2?`${t}{% include js-text.html key="s51b380c8e64e" %}`:`${t}{% include js-text.html key="s9c9b3359171e" %}${s.pc+1}{% include js-text.html key="s78f6da8c14f4" %}`;
  });
  $('rcCount').textContent=count;
  $('rcLog').innerHTML=log.map(x=>`<li>${x}</li>`).join('');
  const m=$('rcMsg');m.className='msg';
  if(th.A.pc>2&&th.B.pc>2){
    if(count===2){m.classList.add('ok');m.textContent={{ lesson_strings.s9f4b94e012c3 | jsonify }};}
    else{m.classList.add('bad');m.textContent={{ lesson_strings.s24b6ac4b08bb | jsonify }};}
  }else m.textContent={{ lesson_strings.scc795888de94 | jsonify }};
}
function play(seq){reset();let k=0;auto=setInterval(()=>{step(seq[k++]);if(k>=seq.length){clearInterval(auto);auto=null;render();}},800);render();}
$('rcAbt').onclick=()=>step('A');$('rcBbt').onclick=()=>step('B');
$('rcSeq').onclick=()=>play(['A','A','A','B','B','B']);
$('rcMix').onclick=()=>play(['A','B','A','B','A','B']);
$('rcReset').onclick=reset;
reset();
})();
