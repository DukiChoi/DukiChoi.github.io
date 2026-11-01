
(() => {
const $=id=>document.getElementById(id);
const L=[[1,{{ lesson_strings.s9c9e72d7bf0a | jsonify }}],[2,{{ lesson_strings.s4fa6f3be3148 | jsonify }}],[3,{{ lesson_strings.s83682993f8aa | jsonify }}],[4,{{ lesson_strings.se78c02ea52ab | jsonify }}]],R=[[1,'DB'],[1,'OS'],[3,{{ lesson_strings.s80ae73a535a4 | jsonify }}],[5,{{ lesson_strings.sfa3deec80ad9 | jsonify }}]];
let type='INNER',k=0,S=[];
const NL='<span class="null">NULL</span>';
function build(){S=[];const res=[],usedR=new Set();
  S.push({cur:-1,m:[],res:[],msg:`{% include js-text.html key="s705dd7223e52" %}`});
  L.forEach((l,i)=>{const m=R.map((r,j)=>r[0]===l[0]?j:-1).filter(j=>j>=0);m.forEach(j=>usedR.add(j));
    let msg=`{% include js-text.html key="s390531a85488" %}${l[0]} ${l[1]}{% include js-text.html key="s0c31b9e7baa9" %}${l[0]}{% include js-text.html key="sd223f2356c54" %}${m.length}{% include js-text.html key="s1bf83b18bebb" %}`;
    if(m.length){m.forEach(j=>res.push([l[0],l[1],R[j][0],R[j][1]]));msg+=m.length>1?`{% include js-text.html key="s7deff1a76ab0" %}${m.length}{% include js-text.html key="s7a157a035515" %}${l[1]}{% include js-text.html key="s202a86a1d677" %}${m.length}{% include js-text.html key="s284b3f558f93" %}`:{{ lesson_strings.sbcb38c94a385 | jsonify }};if(type==='RIGHT')msg+={{ lesson_strings.sb4302076f1b7 | jsonify }};}
    else if(type==='LEFT'||type==='FULL'){res.push([l[0],l[1],null,null]);msg+=`{% include js-text.html key="seac4a7cb4fb4" %}${type}{% include js-text.html key="seb9f7fd98824" %}`;}
    else msg+=`{% include js-text.html key="sab7c44af634f" %}${type==='INNER'?'INNER':'RIGHT'}{% include js-text.html key="s62022e514319" %}`;
    S.push({cur:i,m,res:res.slice(),msg});});
  if(type==='RIGHT'||type==='FULL'){const un=R.map((r,j)=>usedR.has(j)?-1:j).filter(j=>j>=0);un.forEach(j=>res.push([null,null,R[j][0],R[j][1]]));
    S.push({cur:-1,m:[],un,res:res.slice(),msg:`{% include js-text.html key="sd3089da31a3a" %}${un.map(j=>{{ lesson_strings.sed44dc76aad0 | jsonify }}+R[j][0]).join(', ')}{% include js-text.html key="sb0f7c51e07d7" %}${type}{% include js-text.html key="s11dab7e71fad" %}`});}
  const last=S[S.length-1];S.push({cur:-1,m:[],res:res.slice(),done:true,msg:`{% include js-text.html key="se69dc696bfd0" %}${type==='INNER'?{{ lesson_strings.sb69a7f660ab1 | jsonify }}:type==='LEFT'?{{ lesson_strings.sc7a110af794e | jsonify }}:type==='RIGHT'?{{ lesson_strings.s9d045ec08f57 | jsonify }}:{{ lesson_strings.s8a3692e7747f | jsonify }}}{% include js-text.html key="s6daeb92ec09a" %}${res.length}{% include js-text.html key="s4b3a7d9c1c29" %}`});
  k=0;}
function lines(st){const W=$('jW'),svg=$('jSvg'),sr=svg.getBoundingClientRect(),h=Math.max(1,sr.height);svg.setAttribute('viewBox',`0 0 100 ${h}`);svg.setAttribute('preserveAspectRatio','none');
  const y=(tb,i)=>{const row=$(tb).rows[i+1].getBoundingClientRect();return row.top+row.height/2-sr.top;};let out='';
  L.forEach((l,i)=>R.forEach((r,j)=>{if(l[0]!==r[0])return;const on=st.cur===i;out+=`<line x1="0" y1="${y('jL',i)}" x2="100" y2="${y('jR',j)}" stroke="${on?'#E8A317':'var(--border-strong)'}" stroke-width="${on?3:1.5}" vector-effect="non-scaling-stroke"/>`;}));
  svg.innerHTML=out;}
function venn(){const f={INNER:[0,1,0],LEFT:[1,1,0],RIGHT:[0,1,1],FULL:[1,1,1]}[type],c='rgba(55,138,221,.45)';
  $('jV').innerHTML=`<defs><clipPath id="cA"><circle cx="58" cy="50" r="36"/></clipPath><clipPath id="cB"><circle cx="102" cy="50" r="36"/></clipPath></defs>
  ${f[0]?`<circle cx="58" cy="50" r="36" fill="${c}"/>`:''}${f[2]?`<circle cx="102" cy="50" r="36" fill="${c}"/>`:''}${!f[0]&&!f[2]?`<circle cx="102" cy="50" r="36" fill="${c}" clip-path="url(#cA)"/>`:''}{% include js-text.html key="s8d7cb4d6c932" %}`;}
function render(){const st=S[k];
  $('jSql').innerHTML=`{% include js-text.html key="s059871a6d12f" %}${type==='FULL'?'FULL OUTER':type}{% include js-text.html key="s457b4ab14792" %}`;
  $('jL').innerHTML={{ lesson_strings.scbd789912802 | jsonify }}+L.map((l,i)=>`<tr class="${st.cur===i?'on':''}"><td class="mono">${l[0]}</td><td>${l[1]}</td></tr>`).join('');
  $('jR').innerHTML={{ lesson_strings.sa3145197d10e | jsonify }}+R.map((r,j)=>`<tr class="${st.m.includes(j)?'on':st.un&&st.un.includes(j)?'bad':''}"><td class="mono">${r[0]}</td><td>${r[1]}</td></tr>`).join('');
  $('jRes').innerHTML={{ lesson_strings.sff4d19f789b8 | jsonify }}+(st.res.length?st.res.map((r,i)=>`<tr>${r.map(v=>`<td class="${typeof v==='number'?'mono':''}">${v===null?NL:v}</td>`).join('')}</tr>`).join(''):{{ lesson_strings.sae02d906477c | jsonify }});
  $('jCnt').textContent=`(${st.res.length}{% include js-text.html key="sc54e5e993db8" %}`;$('jMsg').textContent=st.msg;$('jNext').disabled=k>=S.length-1;
  requestAnimationFrame(()=>lines(st));venn();}
$('jNext').onclick=()=>{if(k<S.length-1){k++;render();}};$('jAll').onclick=()=>{k=S.length-1;render();};$('jReset').onclick=()=>{k=0;render();};
document.querySelectorAll('[data-j]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-j]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');type=b.dataset.j;build();render();});
window.addEventListener('resize',()=>lines(S[k]));
build();render();

})();
