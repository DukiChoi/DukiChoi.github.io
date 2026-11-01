
(() => {
const $=id=>document.getElementById(id);
const SEQ={a:'52 100 800 830 300 60 820 310 1500 70',b:'300 1100 1500 1900 300 600 1100 2000 300 1600'};
let A=[],S=[],k=-1;
const hex=n=>'0x'+n.toString(16).toUpperCase();
const J=(x,a,b)=>x+(/[013678]$/.test(String(x))?a:b);
function parse(){const t=$('vmIn').value.trim().split(/[\s,]+/).filter(Boolean);
  if(!t.length||t.length>16||!t.every(x=>/^\d{1,4}$/.test(x)&&+x<=2047)){$('vmErr').textContent={{ lesson_strings.s03a8a75d8f46 | jsonify }};return null;}$('vmErr').textContent='';return t.map(Number);}
function sim(){const a=parse();if(!a)return false;A=a;S=[];
  const PT=Array.from({length:8},()=>({v:0,f:null}));PT[0]={v:1,f:2};PT[3]={v:1,f:0};const FR=[3,null,0,null];let fifo=[3,0];
  let TLB=[],tick=0;const st={th:0,tm:0,pf:0};
  const snap=(i,ph,msg,hl,res)=>S.push({i,ph,msg,hl,res,PT:JSON.parse(JSON.stringify(PT)),FR:FR.slice(),TLB:JSON.parse(JSON.stringify(TLB)),st:{...st}});
  A.forEach((va,i)=>{const vpn=va>>8,off=va&255;tick++;
    snap(i,'split',`${i+1}{% include js-text.html key="s5691bd51d810" %}${va}(${hex(va)}{% include js-text.html key="s65d644151b37" %}${vpn}{% include js-text.html key="s67f3b843ccf0" %}${off}{% include js-text.html key="s28d60366a43a" %}`,{},null);
    let e=TLB.find(x=>x.vpn===vpn);
    if(e){st.th++;e.used=tick;const pa=e.f*256+off;snap(i,'tlb',`{% include js-text.html key="s9ee64c05272f" %}${vpn}{% include js-text.html key="sb36d6893a61d" %}${J(e.f,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s3fb02aa15bdc" %}`,{tlb:vpn},null);
      snap(i,'pa',`{% include js-text.html key="s6f0b02376f63" %}${e.f}{% include js-text.html key="s8f3e3dd60884" %}${off} = ${pa}`,{tlb:vpn,fr:e.f},pa);return;}
    st.tm++;snap(i,'tlb',`{% include js-text.html key="s9ee64c05272f" %}${vpn}{% include js-text.html key="see4d7d79e44d" %}`.replace(`{% include js-text.html key="sf227587da938" %}${vpn}{% include js-text.html key="s6385c0136591" %}`,`{% include js-text.html key="sf227587da938" %}${J(vpn,{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }})}`),{tlbMiss:1},null);
    if(!PT[vpn].v){st.pf++;let f=FR.indexOf(null),out=null;if(f<0){out=fifo.shift();f=PT[out].f;PT[out]={v:0,f:null};TLB=TLB.filter(x=>x.vpn!==out);}
      snap(i,'pt',`{% include js-text.html key="s6c4457089444" %}${vpn}{% include js-text.html key="sadd285625108" %}${J(vpn,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s6773afbea3b0" %}`+(out!==null?`{% include js-text.html key="s7b1eae135f7b" %}${J(out,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s46e066e139cd" %}${J(f,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s5913aff3b539" %}`:`{% include js-text.html key="s1855d15b211c" %}${J(f,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s37bf7e94c8be" %}`),{pt:vpn,bad:1},null);
      FR[f]=vpn;PT[vpn]={v:1,f};fifo.push(vpn);
      snap(i,'load',`{% include js-text.html key="sf227587da938" %}${vpn}{% include js-text.html key="s48a02b136342" %}${f}{% include js-text.html key="sc1947a4bb4f8" %}${f}).`.replace(`{% include js-text.html key="sf227587da938" %}${vpn}{% include js-text.html key="s568091a04d66" %}`,`{% include js-text.html key="sf227587da938" %}${J(vpn,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}`),{pt:vpn,fr:f},null);}
    else snap(i,'pt',`{% include js-text.html key="s6c4457089444" %}${vpn}{% include js-text.html key="s96f70e5a5135" %}${PT[vpn].f}{% include js-text.html key="s74d9d108329f" %}`.replace(`{% include js-text.html key="sf227587da938" %}${vpn}{% include js-text.html key="s7ea51e58ef3d" %}`,`{% include js-text.html key="sf227587da938" %}${J(vpn,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }})}`),{pt:vpn},null);
    const f=PT[vpn].f;if(TLB.length>=4){TLB.sort((x,y)=>x.used-y.used);TLB.shift();}TLB.push({vpn,f,used:tick});
    const pa=f*256+off;snap(i,'pa',`{% include js-text.html key="saa4997a5a736" %}${f}{% include js-text.html key="s8f3e3dd60884" %}${off} = ${pa}{% include js-text.html key="s6ca2fe1a7f67" %}`.replace(`= ${pa}{% include js-text.html key="s568091a04d66" %}`,`= ${J(pa,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}`),{tlb:vpn,fr:f,pt:vpn},pa);});
  return true;}
function render(){const s=S[k];
  if(s){const va=A[s.i],bits=va.toString(2).padStart(11,'0').split('');$('vmVa').innerHTML=bits.map((b,i)=>`<div class="b"><b style="background:${i<3?'#185FA5':'#888780'}">${b}</b><span>${10-i}</span></div>`).join('')+`{% include js-text.html key="s66854cfb521c" %}${va}{% include js-text.html key="sc2fe84b1e036" %}${va>>8}{% include js-text.html key="s6ce4f0aef7c6" %}${va&255}${s.res!=null?`{% include js-text.html key="s5908738221dc" %}${s.res}</b>`:''}</div>`;}
  else $('vmVa').innerHTML={{ lesson_strings.sbf15a8dca4e1 | jsonify }};
  const PT=s?s.PT:(()=>{const p=Array.from({length:8},()=>({v:0,f:null}));p[0]={v:1,f:2};p[3]={v:1,f:0};return p;})(),FR=s?s.FR:[3,null,0,null],TLB=s?s.TLB:[],hl=s?s.hl:{};
  $('vmTlb').innerHTML={{ lesson_strings.sedfd78134839 | jsonify }}+[0,1,2,3].map(i=>{const e=TLB[i];return e?`<tr class="${hl.tlb===e.vpn?'hit':''}"><td class="mono">${e.vpn}</td><td class="mono">${e.f}</td></tr>`:`<tr class="${hl.tlbMiss&&i===0?'bad':''}"><td class="null">-</td><td class="null">-</td></tr>`;}).join('');
  $('vmPt').innerHTML={{ lesson_strings.sf3ef4a90bb43 | jsonify }}+PT.map((p,i)=>`<tr class="${hl.pt===i?(hl.bad?'bad':'on'):''}"><td class="mono">${i}</td><td class="mono">${p.v}</td><td class="mono">${p.v?p.f:'-'}</td></tr>`).join('');
  $('vmFr').innerHTML=FR.map((p,f)=>`<div class="fr ${hl.fr===f?'hit':''}{% include js-text.html key="s3d30ded4b082" %}${f} · ${p===null?{{ lesson_strings.sd0b1e9a7d3c7 | jsonify }}:{{ lesson_strings.s3b706aab584b | jsonify }}+p}{% include js-text.html key="sbdfb3589f22c" %}${f*256}~${f*256+255}</span></div>`).join('');
  const M=$('vmMsg');M.className='msg'+(s&&s.hl.bad?' bad':s&&s.res!=null?' ok':'');M.textContent=s?s.msg:{{ lesson_strings.sb7c567f70d84 | jsonify }};
  const st=s?s.st:{th:0,tm:0,pf:0};$('vmSt').innerHTML=`{% include js-text.html key="sccc47b183263" %}${st.th}{% include js-text.html key="s3d08088b5223" %}${st.tm}{% include js-text.html key="sa474012e7c4d" %}${st.pf}</b></span>`;
  $('vmCnt').textContent=S.length?`{% include js-text.html key="s3afd909a776b" %}${k+1} / ${S.length}`:'';['vmNext','vmAcc','vmAll'].forEach(id=>$(id).disabled=k>=S.length-1);}
function reset(){if(sim()){k=-1;render();}}
$('vmNext').onclick=()=>{if(k<S.length-1){k++;render();}};
$('vmAcc').onclick=()=>{if(k>=S.length-1)return;k++;const i=S[k].i;while(k<S.length-1&&S[k+1].i===i)k++;render();};
$('vmAll').onclick=()=>{k=S.length-1;render();};$('vmReset').onclick=()=>{k=-1;render();};
$('vmIn').onchange=()=>{document.querySelectorAll('[data-vs]').forEach(x=>x.classList.remove('sel'));reset();};$('vmIn').oninput=()=>$('vmErr').textContent='';
document.querySelectorAll('[data-vs]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-vs]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');$('vmIn').value=SEQ[b.dataset.vs];reset();});
$('vmIn').value=SEQ.a;reset();

})();
