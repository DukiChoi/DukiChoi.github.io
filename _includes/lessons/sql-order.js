
(() => {
const $=id=>document.getElementById(id);
const D=[[{{ lesson_strings.s4c690b2a6348 | jsonify }},{{ lesson_strings.s6e522878683d | jsonify }},4200],[{{ lesson_strings.s61da865732a3 | jsonify }},{{ lesson_strings.s6e522878683d | jsonify }},3800],[{{ lesson_strings.s48565bbbc878 | jsonify }},{{ lesson_strings.sa53a19776416 | jsonify }},2900],[{{ lesson_strings.s6e538600a089 | jsonify }},{{ lesson_strings.sa53a19776416 | jsonify }},3300],[{{ lesson_strings.s94cfce4018b6 | jsonify }},{{ lesson_strings.s6e522878683d | jsonify }},5100],[{{ lesson_strings.sa133cdec4fa8 | jsonify }},{{ lesson_strings.s921800ce68a7 | jsonify }},2700],[{{ lesson_strings.s885df8d7a35b | jsonify }},{{ lesson_strings.sa53a19776416 | jsonify }},3600],[{{ lesson_strings.sb8a98bd7ce4d | jsonify }},{{ lesson_strings.s921800ce68a7 | jsonify }},3100],[{{ lesson_strings.sfa96b3431e6f | jsonify }},{{ lesson_strings.s902ddd8a58d8 | jsonify }},3400],[{{ lesson_strings.s79d1afadfb51 | jsonify }},{{ lesson_strings.s902ddd8a58d8 | jsonify }},2800]];
const GC={ {{ lesson_strings.s6e522878683d | jsonify }}:'#1D9E75',{{ lesson_strings.sa53a19776416 | jsonify }}:'#7F77DD',{{ lesson_strings.s921800ce68a7 | jsonify }}:'#D85A30',{{ lesson_strings.s902ddd8a58d8 | jsonify }}:'#378ADD'};
const WRITE=['SELECT','FROM','WHERE','GROUP BY','HAVING','ORDER BY','LIMIT'],RUN=['FROM','WHERE','GROUP BY','HAVING','SELECT','ORDER BY','LIMIT'],LINE={FROM:1,WHERE:2,'GROUP BY':3,HAVING:4,SELECT:0,'ORDER BY':5,LIMIT:6};
let s=0;
const fmt=n=>n.toLocaleString();
function P(){const w=+$('qW').value;if(!Number.isFinite(w)){$('qErr').textContent={{ lesson_strings.s1966ce7fc031 | jsonify }};return null;}$('qErr').textContent='';return {w,h:+$('qH').value,o:$('qO').value,l:+$('qL').value};}
function render(){
  const p=P();if(!p)return;const step=RUN[s];
  $('qOrd').innerHTML=`{% include js-text.html key="sfe5c0740e30a" %}${WRITE.map(c=>`<span class="${c===step?'on':''}">${c}</span>`).join('')}{% include js-text.html key="s7a443c8537ac" %}${RUN.map((c,i)=>`<span class="${c===step?'on':i<s?'done':''}">${i+1}. ${c}</span>`).join('')}</div>`;
  const sql=[`{% include js-text.html key="sea0ffed325e0" %}`,`{% include js-text.html key="s25b6818e8276" %}`,`{% include js-text.html key="s277bca3a5381" %}${p.w}`,`{% include js-text.html key="sdf0aa44a5653" %}`,`HAVING   COUNT(*) >= ${p.h}`,`{% include js-text.html key="s20db24dc4f41" %}${p.o}`,`LIMIT    ${p.l};`];
  $('qSql').innerHTML=sql.map((l,i)=>`<div class="${LINE[step]===i?'on':''}">${l}</div>`).join('');
  const pass=D.filter(r=>r[2]>=p.w),groups={};pass.forEach(r=>(groups[r[1]]=groups[r[1]]||[]).push(r));
  const G=Object.keys(groups).map(k=>({k,rows:groups[k],n:groups[k].length,avg:Math.round(groups[k].reduce((a,r)=>a+r[2],0)/groups[k].length)}));
  const keep=G.filter(g=>g.n>=p.h),sorted=keep.slice().sort((a,b)=>p.o==='DESC'?b.avg-a.avg:a.avg-b.avg);
  let h='',m='';
  if(s<=1){h={{ lesson_strings.s63632b25d4fa | jsonify }}+(s===1?{{ lesson_strings.sc13223938b96 | jsonify }}:'')+'</tr>'+D.map(r=>{const ok=r[2]>=p.w;return `<tr class="${s===1&&!ok?'out':''}"><td>${r[0]}</td><td>${r[1]}</td><td class="mono">${fmt(r[2])}</td>${s===1?`<td class="${ok?'hit':'bad'}">${ok?{{ lesson_strings.s5493e4aa7c3c | jsonify }}:{{ lesson_strings.s3b03d76314af | jsonify }}}</td>`:''}</tr>`;}).join('');
    m=s===0?`{% include js-text.html key="s21a8925e1245" %}${D.length}{% include js-text.html key="sf0391a82431b" %}`:`{% include js-text.html key="sf89fd4c006ca" %}${p.w}{% include js-text.html key="s285b9fe26872" %}${D.length-pass.length}{% include js-text.html key="s62923f1dc4a7" %}${pass.length}{% include js-text.html key="s849919924255" %}`;}
  else if(s<=3){h={{ lesson_strings.sa92dabf1ed38 | jsonify }}+(s===3?{{ lesson_strings.s644859e18889 | jsonify }}:{{ lesson_strings.s49aaf7606fb0 | jsonify }})+'</tr>';
    G.forEach(g=>{const ok=g.n>=p.h;g.rows.forEach((r,i)=>{h+=`<tr class="${s===3&&!ok?'out':''}"><td style="box-shadow:inset 4px 0 0 ${GC[g.k]}">${i===0?`<b>${g.k}</b>`:''}</td><td>${r[0]}</td><td class="mono">${fmt(r[2])}</td>${i===0?(s===3?`<td rowspan="${g.n}" class="mono">${g.n}</td><td rowspan="${g.n}" class="${ok?'hit':'bad'}">${ok?{{ lesson_strings.s5493e4aa7c3c | jsonify }}:{{ lesson_strings.s3b03d76314af | jsonify }}}</td>`:`<td rowspan="${g.n}" class="mono">${g.n}{% include js-text.html key="s97b4f94b855c" %}`):''}</tr>`;});});
    m=s===2?`{% include js-text.html key="s6a31aac7e000" %}${G.length}{% include js-text.html key="s4453720d185a" %}`:`HAVING COUNT(*) >= ${p.h}{% include js-text.html key="sa5947f32c83a" %}${p.h}{% include js-text.html key="sa214f7d95af8" %}${G.length-keep.length}{% include js-text.html key="se4bb56304d31" %}`;}
  else{const rows=s===4?keep:sorted;h={{ lesson_strings.sd8174bc41d1f | jsonify }}+rows.map((g,i)=>`<tr class="${s===6&&i>=p.l?'out':''}"><td style="box-shadow:inset 4px 0 0 ${GC[g.k]}">${g.k}</td><td class="mono">${g.n}</td><td class="mono">${fmt(g.avg)}</td></tr>`).join('');
    if(!rows.length)h+={{ lesson_strings.s5b220d973e6c | jsonify }};
    m=s===4?{{ lesson_strings.sf5ca0b09b56b | jsonify }}:s===5?`{% include js-text.html key="s20db24dc4f41" %}${p.o}{% include js-text.html key="scd22d4ba3434" %}${p.o==='DESC'?{{ lesson_strings.s21b7c7b4838b | jsonify }}:{{ lesson_strings.s605693cc3c40 | jsonify }}}{% include js-text.html key="s4ce74586a44b" %}`:`LIMIT ${p.l}{% include js-text.html key="s3686556c6a22" %}${p.l}{% include js-text.html key="se4c41f17b227" %}${Math.min(p.l,sorted.length)}{% include js-text.html key="s4b3a7d9c1c29" %}`;}
  $('qT').innerHTML=h;$('qMsg').textContent=m;$('qPrev').disabled=s===0;$('qNext').disabled=s===6;
}
$('qNext').onclick=()=>{if(s<6){s++;render();}};$('qPrev').onclick=()=>{if(s>0){s--;render();}};$('qReset').onclick=()=>{s=0;render();};
['qW','qH','qO','qL'].forEach(id=>$(id).onchange=render);$('qW').oninput=()=>$('qErr').textContent='';
render();

})();
