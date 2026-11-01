
(() => {
const $=id=>document.getElementById(id);
const PROGS={add:{0:['LOAD',10],1:['ADD',11],2:['STORE',12],3:['HALT'],10:7,11:5,12:0},loop:{0:['LOAD',13],1:['JZ',6],2:['SUB',14],3:['STORE',13],4:['JMP',1],6:['HALT'],13:3,14:1}};
const B={PC:[30,30,120,46],IR:[30,110,150,46],CU:[30,200,150,56],MAR:[240,30,120,46],MDR:[240,110,120,46],ACC:[240,200,120,46]};
const MX=430,MY=22,MH=20;
let prog='add',S=[],k=0,timer=null;
const J=(x,a,b)=>x+(/[013678flmnr]$/i.test(String(x))?a:b),RO=x=>x+(/[036]$/.test(String(x))?{{ lesson_strings.s71de05cb681d | jsonify }}:{{ lesson_strings.s42a7eb00876b | jsonify }});
const show=v=>v==null?'-':Array.isArray(v)?v.join(' '):String(v);
function sim(){const M=Array(16).fill(0);Object.entries(PROGS[prog]).forEach(([a,v])=>M[+a]=v);
  const st={PC:0,IR:null,MAR:null,MDR:null,ACC:0,M:M.slice()};S=[];let n=0;
  const snap=(ph,msg,ch,path,mem,ins)=>S.push({ph,msg,ch,path,mem,ins,st:JSON.parse(JSON.stringify(st))});
  snap(null,{{ lesson_strings.s8f181cc7159d | jsonify }},[],[],null,0);
  while(n++<40){const ins=n;
    st.MAR=st.PC;snap({{ lesson_strings.s9025f2c36abe | jsonify }},`{% include js-text.html key="sc35d5789e689" %}${J(st.PC,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s60f8cefd6b7e" %}${st.PC}{% include js-text.html key="sfd572232f863" %}`,['MAR'],[['PC','MAR']],null,ins);
    st.MDR=st.M[st.MAR];snap({{ lesson_strings.s9025f2c36abe | jsonify }},`{% include js-text.html key="s715976091c27" %}${st.MAR}{% include js-text.html key="s844e681a1090" %}${J(show(st.MDR),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s8a13ad678498" %}`,['MDR'],[['MEM','MDR']],st.MAR,ins);
    st.IR=st.MDR;st.PC++;snap({{ lesson_strings.s9025f2c36abe | jsonify }},`{% include js-text.html key="saa7ff20fbcea" %}${RO(st.PC)}{% include js-text.html key="s8d5ecfc2dff8" %}`,['IR','PC'],[['MDR','IR'],['PC','PC']],null,ins);
    const [op,a]=st.IR;
    snap({{ lesson_strings.sec3b36cf5f9d | jsonify }},`{% include js-text.html key="s2f20cc02a0e5" %}${J(show(st.IR),{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s6dca58e9daee" %}${op}`+(a!=null?`{% include js-text.html key="sf3634bed0654" %}${a}{% include js-text.html key="s28d60366a43a" %}`:{{ lesson_strings.s71c2c5e34fe4 | jsonify }}),['CU'],[['IR','CU']],null,ins);
    if(op==='HALT'){snap({{ lesson_strings.s45a8d35a6922 | jsonify }},{{ lesson_strings.sbcabbdd93564 | jsonify }},[],[],null,ins);break;}
    if(op==='LOAD'||op==='ADD'||op==='SUB'){
      st.MAR=a;snap({{ lesson_strings.s45a8d35a6922 | jsonify }},`{% include js-text.html key="s547eca8958fc" %}${J(a,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="se41e89add5c0" %}`,['MAR'],[['IR','MAR']],null,ins);
      st.MDR=st.M[a];snap({{ lesson_strings.s45a8d35a6922 | jsonify }},`{% include js-text.html key="s715976091c27" %}${a}{% include js-text.html key="s044a1bde83d4" %}${J(st.MDR,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s8a13ad678498" %}`,['MDR'],[['MEM','MDR']],a,ins);
      const old=st.ACC;if(op==='LOAD')st.ACC=st.MDR;else if(op==='ADD')st.ACC=old+st.MDR;else st.ACC=old-st.MDR;
      snap({{ lesson_strings.s45a8d35a6922 | jsonify }},op==='LOAD'?`{% include js-text.html key="sa15ab75a827c" %}${J(st.MDR,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sbb4aab0ce002" %}`:`{% include js-text.html key="sde134b3b8ad9" %}${old} ${op==='ADD'?'+':'−'} MDR ${J(st.MDR,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="s11a2f73bb5a7" %}${J(st.ACC,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sbb4aab0ce002" %}`,['ACC'],op==='LOAD'?[['MDR','ACC']]:[['MDR','ALU'],['ACC','ALU'],['ALU','ACC']],null,ins);}
    else if(op==='STORE'){st.MAR=a;snap({{ lesson_strings.s45a8d35a6922 | jsonify }},`{% include js-text.html key="s95034512076b" %}${J(a,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="se41e89add5c0" %}`,['MAR'],[['IR','MAR']],null,ins);
      st.MDR=st.ACC;snap({{ lesson_strings.s45a8d35a6922 | jsonify }},`{% include js-text.html key="s695618e4691b" %}${J(st.ACC,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sd98b7f2a01fe" %}`,['MDR'],[['ACC','MDR']],null,ins);
      st.M[a]=st.MDR;snap({{ lesson_strings.s45a8d35a6922 | jsonify }},`{% include js-text.html key="sa15ab75a827c" %}${J(st.MDR,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }})}{% include js-text.html key="sc1e967acc0bf" %}${a}{% include js-text.html key="s47910bdf83ab" %}`,[],[['MDR','MEM']],a,ins);}
    else if(op==='JZ'){if(st.ACC===0){st.PC=a;snap({{ lesson_strings.s45a8d35a6922 | jsonify }},`{% include js-text.html key="s7ccd9f154816" %}${RO(a)}{% include js-text.html key="s67183d6299d2" %}${a}{% include js-text.html key="sf57f6420a5da" %}`,['PC'],[['IR','PC']],null,ins);}
      else snap({{ lesson_strings.s45a8d35a6922 | jsonify }},`{% include js-text.html key="s99898782e07d" %}${st.ACC}{% include js-text.html key="sc50a6587ba55" %}${st.PC}{% include js-text.html key="s28d60366a43a" %}`,[],[],null,ins);}
    else if(op==='JMP'){st.PC=a;snap({{ lesson_strings.s45a8d35a6922 | jsonify }},`{% include js-text.html key="s7b43df74b59e" %}${RO(a)}{% include js-text.html key="s3d8f52509f04" %}${a}{% include js-text.html key="sce47616043f6" %}`,['PC'],[['IR','PC']],null,ins);}}
  k=0;}
const AN={PC:{r:[150,53],b:[90,76],t:[90,30],l:[30,53]},IR:{r:[180,133],t:[105,110],b:[105,156]},CU:{t:[105,200]},MAR:{l:[240,53],r:[360,53]},MDR:{l:[240,133],r:[360,133],b:[300,156]},ACC:{t:[300,200],b:[300,246],l:[240,223]},ALU:{t:[300,280],l:[262,300]}};
function seg(a,b){const P={'PC>MAR':[AN.PC.r,AN.MAR.l],'MDR>IR':[AN.MDR.l,AN.IR.r],'IR>CU':[AN.IR.b,AN.CU.t],'IR>MAR':[[180,120],[240,45]],'IR>PC':[AN.IR.t,AN.PC.b],'MDR>ACC':[AN.MDR.b,AN.ACC.t],'ACC>MDR':[[320,200],[320,156]],'MDR>ALU':[[372,133],[372,300],[338,300]],'ACC>ALU':[AN.ACC.b,AN.ALU.t],'ALU>ACC':[[262,300],[222,300],[222,223],[240,223]]}[a+'>'+b];return P;}
function render(){const s=S[k],st=s.st;let h=`<defs><marker id="icA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="#E8A317" stroke-width="2"/></marker></defs>`;
  h+=`<rect x="14" y="10" width="390" height="340" rx="10" fill="none" stroke="var(--border-strong)" stroke-dasharray="4 4"/><text x="24" y="342" font-size="12" fill="var(--text-muted)">CPU</text>`;
  h+=`<line x1="360" y1="53" x2="${MX}{% include js-text.html key="s171466366752" %}${MX}{% include js-text.html key="se0c4a1b68d7f" %}`;
  Object.entries(B).forEach(([n,[x,y,w,hh]])=>{const on=s.ch.includes(n);const val=n==='CU'?(st.IR?`{% include js-text.html key="s13d40a3d5333" %}${show(st.IR)}`:''):show(st[n]);
    h+=`<rect x="${x}" y="${y}" width="${w}" height="${hh}" rx="6" fill="${on?'#FAC775':'var(--panel,#fff)'}" stroke="${on?'#BA7517':'var(--border-strong)'}" stroke-width="1.5"/><text x="${x+8}" y="${y+16}" font-size="11" font-weight="600" fill="${on?'#633806':'var(--text-secondary)'}">${n==='CU'?{{ lesson_strings.s07a50f32c85b | jsonify }}:n}</text><text x="${x+w/2}" y="${y+hh-10}" text-anchor="middle" font-size="16" font-family="var(--font-mono)" font-weight="600" fill="${on?'#412402':'var(--text-primary)'}">${val}</text>`;});
  const aluOn=s.path.some(p=>p.includes('ALU'));h+=`<polygon points="250,280 350,280 330,320 270,320" fill="${aluOn?'#FAC775':'var(--surface-1)'}" stroke="${aluOn?'#BA7517':'var(--border-strong)'}" stroke-width="1.5"/><text x="300" y="305" text-anchor="middle" font-size="13" font-weight="600" fill="${aluOn?'#633806':'var(--text-secondary)'}">ALU</text>`;
  h+=`<text x="${MX}{% include js-text.html key="sefa3047120dd" %}`;
  for(let i=0;i<16;i++){const y=MY+i*MH,acc=s.mem===i,pc=st.PC===i;h+=`<rect x="${MX}" y="${y}" width="230" height="${MH-2}" rx="3" fill="${acc?'#FAC775':'var(--surface-1)'}"/><text x="${MX+8}" y="${y+13}" font-size="11" font-family="var(--font-mono)" fill="${acc?'#633806':'var(--text-muted)'}">${String(i).padStart(2,'0')}</text><text x="${MX+40}" y="${y+13}" font-size="12.5" font-family="var(--font-mono)" fill="${acc?'#412402':'var(--text-primary)'}">${Array.isArray(st.M[i])?st.M[i].join(' '):st.M[i]}</text>${pc?`<text x="${MX-14}" y="${y+13}" font-size="12" fill="#185FA5">▶</text>`:''}`;}
  s.path.forEach(([a,b])=>{if(a==='PC'&&b==='PC'){h+=`<path d="M150 40 C178 40 178 66 150 66" fill="none" stroke="#E8A317" stroke-width="2.5" marker-end="url(#icA)"/><text x="182" y="57" font-size="12" font-weight="600" fill="#BA7517">+1</text>`;return;}
    if(a==='MEM'||b==='MEM'){const y=MY+(s.mem??0)*MH+9;h+=a==='MEM'?`<polyline points="${MX},${y} 400,${y} 400,133 362,133" fill="none" stroke="#E8A317" stroke-width="2.5" marker-end="url(#icA)"/>`:`<polyline points="360,133 400,133 400,${y} ${MX-2},${y}" fill="none" stroke="#E8A317" stroke-width="2.5" marker-end="url(#icA)"/>`;return;}
    const P=seg(a,b);if(P)h+=`<polyline points="${P.map(p=>p.join(',')).join(' ')}" fill="none" stroke="#E8A317" stroke-width="2.5" marker-end="url(#icA)"/>`;});
  $('icSvg').innerHTML=h;$('icMsg').textContent=s.msg;
  $('icPh').innerHTML=[{{ lesson_strings.s9025f2c36abe | jsonify }},{{ lesson_strings.sec3b36cf5f9d | jsonify }},{{ lesson_strings.s45a8d35a6922 | jsonify }}].map(p=>`<span class="${s.ph===p?'on':''}">${p}</span>`).join('');
  $('icCnt').textContent=`{% include js-text.html key="s3afd909a776b" %}${k+1} / ${S.length}`;$('icNext').disabled=k>=S.length-1;}
function stop(){clearInterval(timer);timer=null;$('icPlay').textContent={{ lesson_strings.s83a3cd81710b | jsonify }};}
$('icNext').onclick=()=>{stop();if(k<S.length-1){k++;render();}};
$('icInstr').onclick=()=>{stop();if(k>=S.length-1)return;if(S[k].ins===0||S[k+1].ins!==S[k].ins)k++;const cur=S[k].ins;while(k<S.length-1&&S[k+1].ins===cur)k++;render();};
$('icPlay').onclick=()=>{if(timer){stop();return;}if(k>=S.length-1)k=0;timer=setInterval(()=>{if(k>=S.length-1){stop();return;}k++;render();},900);$('icPlay').textContent={{ lesson_strings.sf6d3d23e40b2 | jsonify }};};
$('icReset').onclick=()=>{stop();k=0;render();};
document.querySelectorAll('[data-pg]').forEach(b=>b.onclick=()=>{stop();document.querySelectorAll('[data-pg]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');prog=b.dataset.pg;sim();render();});
sim();render();

})();
