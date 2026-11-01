
(() => {
const $=id=>document.getElementById(id);
const LV=['RU','RC','RR','SER'],LVN={RU:'READ UNCOMMITTED',RC:'READ COMMITTED',RR:'REPEATABLE READ',SER:'SERIALIZABLE'};
const AN={dirty:'Dirty Read',nonrep:'Non-repeatable Read',phantom:'Phantom Read'};
const MAT={dirty:{RU:1,RC:0,RR:0,SER:0},nonrep:{RU:1,RC:1,RR:0,SER:0},phantom:{RU:1,RC:1,RR:1,SER:0}};
let sc='dirty',lv='RC',k=-1;
function steps(){const L=lv,S=[];
  if(sc==='dirty'){const pend=[['id 1',{{ lesson_strings.s87b5ce651d46 | jsonify }}]];
    S.push({t:2,sql:'BEGIN;',db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:[]},msg:{{ lesson_strings.s9ce7e39ba251 | jsonify }}});
    S.push({t:2,sql:{{ lesson_strings.sdfb2ed676394 | jsonify }},db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:pend},msg:{{ lesson_strings.saf62b5842feb | jsonify }}});
    S.push({t:1,sql:'BEGIN;',db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:pend},msg:{{ lesson_strings.s516116226644 | jsonify }}});
    if(L==='RU')S.push({t:1,sql:{{ lesson_strings.s2fa89b260a78 | jsonify }},r:['500','b'],db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:pend},msg:{{ lesson_strings.sa3a14c841ce0 | jsonify }},bad:1});
    else if(L==='SER')S.push({t:1,sql:{{ lesson_strings.s2fa89b260a78 | jsonify }},r:[{{ lesson_strings.s77248752724b | jsonify }},'w'],wait:1,db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:pend},msg:{{ lesson_strings.s2ea75b14268d | jsonify }}});
    else S.push({t:1,sql:{{ lesson_strings.s2fa89b260a78 | jsonify }},r:['1000','g'],db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:pend},msg:`${LVN[L]}{% include js-text.html key="s22698412daa6" %}`});
    S.push({t:2,sql:'ROLLBACK;',db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:[]},msg:L==='RU'?{{ lesson_strings.s96a6fe572655 | jsonify }}:{{ lesson_strings.sb89573181611 | jsonify }},bad:L==='RU'});
    S.push({t:1,sql:'COMMIT;',db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:[]},msg:{{ lesson_strings.s7d4becfa8350 | jsonify }}});}
  else if(sc==='nonrep'){const W=L==='SER';
    S.push({t:1,sql:'BEGIN;',db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:[]},msg:{{ lesson_strings.s516116226644 | jsonify }}});
    S.push({t:1,sql:{{ lesson_strings.s2fa89b260a78 | jsonify }},r:['1000','g'],db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:[]},msg:{{ lesson_strings.seea5cee83542 | jsonify }}+(L==='RR'?{{ lesson_strings.s07f9c15ca1b4 | jsonify }}:'')});
    S.push({t:2,sql:{{ lesson_strings.sdfb2ed676394 | jsonify }},r:W?[{{ lesson_strings.sf580be856442 | jsonify }},'w']:null,wait:W,db:{c:[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}]],p:W?[]:[['id 1',{{ lesson_strings.s87b5ce651d46 | jsonify }}]]},msg:W?{{ lesson_strings.s36b04891bb95 | jsonify }}:{{ lesson_strings.s8236c444970f | jsonify }}});
    S.push({t:2,sql:'COMMIT;',r:W?[{{ lesson_strings.sf580be856442 | jsonify }},'w']:null,wait:W,db:{c:[['id 1',W?{{ lesson_strings.scc4202e5eaf2 | jsonify }}:{{ lesson_strings.sdad6849374af | jsonify }}]],p:[]},msg:W?{{ lesson_strings.s71dfa57c9f48 | jsonify }}:{{ lesson_strings.s441fb0399047 | jsonify }}});
    if(L==='RU'||L==='RC')S.push({t:1,sql:{{ lesson_strings.s2fa89b260a78 | jsonify }},r:['500','b'],db:{c:[['id 1',{{ lesson_strings.sdad6849374af | jsonify }}]],p:[]},msg:`${LVN[L]}{% include js-text.html key="sc164d189db10" %}`,bad:1});
    else S.push({t:1,sql:{{ lesson_strings.s2fa89b260a78 | jsonify }},r:['1000','g'],db:{c:[['id 1',W?{{ lesson_strings.scc4202e5eaf2 | jsonify }}:{{ lesson_strings.sdad6849374af | jsonify }}]],p:[]},msg:W?{{ lesson_strings.sc37c1d4ab6b5 | jsonify }}:{{ lesson_strings.sbaf8a249ad8e | jsonify }}});
    S.push({t:1,sql:'COMMIT;',db:{c:[['id 1',{{ lesson_strings.sdad6849374af | jsonify }}]],p:[]},msg:W?{{ lesson_strings.sa233a259ae17 | jsonify }}:{{ lesson_strings.s7d4becfa8350 | jsonify }}});}
  else{const W=L==='SER',base=[['id 1',{{ lesson_strings.scc4202e5eaf2 | jsonify }}],['id 2',{{ lesson_strings.s2f49d14dff2d | jsonify }}]],add=[...base,['id 3',{{ lesson_strings.s8a2f4eb2183e | jsonify }}]];
    S.push({t:1,sql:'BEGIN;',db:{c:base,p:[]},msg:{{ lesson_strings.s516116226644 | jsonify }}});
    S.push({t:1,sql:{{ lesson_strings.sac01a5ffd9b6 | jsonify }},r:['2','g'],db:{c:base,p:[]},msg:{{ lesson_strings.s84613fbc6d1e | jsonify }}});
    S.push({t:2,sql:{{ lesson_strings.sf8d21893488d | jsonify }},r:W?[{{ lesson_strings.sf580be856442 | jsonify }},'w']:null,wait:W,db:{c:base,p:W?[]:[['id 3',{{ lesson_strings.s184d915bff27 | jsonify }}]]},msg:W?{{ lesson_strings.s62a509ff1810 | jsonify }}:{{ lesson_strings.se85daf864335 | jsonify }}});
    S.push({t:2,sql:'COMMIT;',r:W?[{{ lesson_strings.sf580be856442 | jsonify }},'w']:null,wait:W,db:{c:W?base:add,p:[]},msg:W?{{ lesson_strings.s80114b7439ce | jsonify }}:{{ lesson_strings.s88f50e87aa2d | jsonify }}});
    if(W)S.push({t:1,sql:{{ lesson_strings.sac01a5ffd9b6 | jsonify }},r:['2','g'],db:{c:base,p:[]},msg:{{ lesson_strings.sef09186a841d | jsonify }}});
    else S.push({t:1,sql:{{ lesson_strings.sac01a5ffd9b6 | jsonify }},r:['3','b'],db:{c:add,p:[]},msg:`{% include js-text.html key="s3dda0a6ade33" %}`+(L==='RR'?{{ lesson_strings.sd612df0466b2 | jsonify }}:''),bad:1});
    S.push({t:1,sql:'COMMIT;',db:{c:add,p:[]},msg:W?{{ lesson_strings.s0fcbe687b64c | jsonify }}:{{ lesson_strings.s7d4becfa8350 | jsonify }}});}
  return S;}
function render(){const S=steps(),cur=S[k];
  let h=`<div class="hd" style="background:#185FA5">T1</div><div class="hd" style="background:#993C1D">T2</div>`;
  S.forEach((s,i)=>{const c=`st${i>k?' fu':''}${i===k?' cur':''}${s.wait&&i<=k?' wait':''}`;const card=`<div class="${c}">${s.sql.replace(/\n/g,'<br>')}${s.r&&i<=k?`<br><span class="rs ${s.r[1]}">${s.t===1&&s.r[1]!=='w'?{{ lesson_strings.s6f844ab53f54 | jsonify }}:''}${s.r[0]}</span>`:''}</div>`;
    h+=s.t===1?card+'<div class="em"></div>':'<div class="em"></div>'+card;});
  $('txLane').innerHTML=h;
  const db=cur?cur.db:S[0].db;
  $('txDb').innerHTML=`{% include js-text.html key="sa524d42a6677" %}${db.c.map(r=>`<div class="rw">${r[0]} · ${r[1]}</div>`).join('')}{% include js-text.html key="s7f19c3b32557" %}${db.p.length?db.p.map(r=>`<div class="rw p">${r[0]} · ${r[1]}</div>`).join(''):{{ lesson_strings.s055b37b3d089 | jsonify }}}`;
  const M=$('txMsg');M.className='msg'+(cur&&cur.bad?' bad':'');M.textContent=cur?cur.msg:`${AN[sc]}{% include js-text.html key="sb625f23af0a1" %}${LVN[lv]}{% include js-text.html key="s9596631a831a" %}`;
  $('txM').innerHTML='<tr><th></th>'+LV.map(l=>`<th class="${l===lv?'on':''}">${LVN[l]}</th>`).join('')+'</tr>'+Object.keys(AN).map(a=>`<tr><th style="text-align:left" class="${a===sc?'on':''}">${AN[a]}</th>${LV.map(l=>`<td class="${a===sc&&l===lv?'on':MAT[a][l]?'bad':'hit'}">${MAT[a][l]?{{ lesson_strings.s1c02786f27f0 | jsonify }}:{{ lesson_strings.s8aa2cb5bd5c6 | jsonify }}}</td>`).join('')}</tr>`).join('');
  $('txNext').disabled=k>=S.length-1;$('txAll').disabled=k>=S.length-1;}
$('txNext').onclick=()=>{k++;render();};$('txAll').onclick=()=>{k=steps().length-1;render();};$('txReset').onclick=()=>{k=-1;render();};
document.querySelectorAll('[data-sc]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-sc]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');sc=b.dataset.sc;k=-1;render();});
document.querySelectorAll('[data-lv]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-lv]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');lv=b.dataset.lv;k=-1;render();});
render();

})();
