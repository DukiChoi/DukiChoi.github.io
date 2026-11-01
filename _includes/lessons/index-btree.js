
(() => {
const $=id=>document.getElementById(id);
const LEAF=[[3,7,12],[15,19,22],[28,31,35],[40,44,47],[52,58,63]];
const T={id:'R',keys:[40],ch:[{id:'A',keys:[15,28],ch:[0,1,2]},{id:'B',keys:[52],ch:[3,4]}]};
const HEAP=[[28,3,52],[15,44,7],[63,19,35],[12,58,31],[22,47,40]];
const POS={R:[340,34],A:[197,118],B:[527,118]},LX=[10,142,274,406,538],LW=110,LY=196,HY=286;
let S=[],k=0;
const pageOf=v=>HEAP.findIndex(p=>p.includes(v));
function descend(v,S0,reads){let n=T,path=[];
  while(true){const i=n.keys.filter(x=>v>=x).length;reads.idx++;
    const rel=n.keys.map((x,j)=>v>=x?`${x} ≤ ${v}`:`${v} < ${x}`).join(', ');
    S0.push({node:n.id,read:[...path],msg:`${n.id==='R'?{{ lesson_strings.s7b637db9759e | jsonify }}:{{ lesson_strings.sb98edf235cc6 | jsonify }}}{% include js-text.html key="s56315d8839db" %}${n.keys.join(', ')}{% include js-text.html key="s18a6a5bacf6e" %}${rel}{% include js-text.html key="s25f07495865f" %}${i+1}{% include js-text.html key="sdce512d88be8" %}`,st:{...reads}});
    path.push(n.id);const c=n.ch[i];if(typeof c==='number')return {leaf:c,path};n=c;}}
function build(op){const v=+$('bxK').value,a=+$('bxA').value,b=+$('bxB').value;S=[];k=0;
  if(op==='range'&&(!Number.isFinite(a)||!Number.isFinite(b)||a>b)){$('bxErr').textContent={{ lesson_strings.s5c7659c4a135 | jsonify }};return false;}
  if(op!=='range'&&!Number.isFinite(v)){$('bxErr').textContent={{ lesson_strings.s4dd87219a934 | jsonify }};return false;}
  $('bxErr').textContent='';const reads={idx:0,tbl:0};
  if(op==='scan'){const read=[];
    for(let p=0;p<5;p++){reads.tbl++;const f=HEAP[p].includes(v);read.push(p);
      S.push({hp:p,hread:read.slice(0,-1),found:f?[v]:[],msg:`{% include js-text.html key="s68d74b3c9ea9" %}${p}{% include js-text.html key="sadf4877834ba" %}${HEAP[p].join(', ')}{% include js-text.html key="s904f4fb29576" %}`+(f?` id ${v}{% include js-text.html key="sb8c91c68b3c8" %}`:''),st:{...reads}});}
    S.push({hread:[0,1,2,3,4],found:HEAP.flat().includes(v)?[v]:[],msg:`{% include js-text.html key="s916785c2fc64" %}`,st:{...reads}});return true;}
  if(op==='idx'){const {leaf,path}=descend(v,S,reads);reads.idx++;const has=LEAF[leaf].includes(v);
    S.push({leaf,read:path,found:has?[v]:[],msg:`{% include js-text.html key="s78bae8cb85e7" %}${LEAF[leaf].join(', ')}{% include js-text.html key="sbda5c3fc5413" %}`+(has?`id ${v}{% include js-text.html key="s7ff2144f1f68" %}${pageOf(v)}{% include js-text.html key="sfd0191bccb2b" %}`:`id ${v}{% include js-text.html key="sfe3f7d019787" %}`),st:{...reads}});
    if(has){reads.tbl++;S.push({read:[...path],lread:[leaf],hp:pageOf(v),found:[v],msg:`{% include js-text.html key="sa4c24a1aa4de" %}${pageOf(v)}{% include js-text.html key="s259830424600" %}${reads.idx}{% include js-text.html key="s3b22352b25bc" %}`,st:{...reads}});}
    return true;}
  const {leaf,path}=descend(a,S,reads);let L=leaf,got=[],lread=[],pages=new Set();
  while(L<5){reads.idx++;const ks=LEAF[L].filter(x=>x>=a&&x<=b);got.push(...ks);const stop=LEAF[L].some(x=>x>b);
    S.push({leaf:L,read:path,lread:lread.slice(),found:got.slice(),msg:`{% include js-text.html key="sfe741da1e323" %}${LEAF[L].join(', ')}{% include js-text.html key="sa725be14937b" %}${a}{% include js-text.html key="s616a647f6b8c" %}${b}{% include js-text.html key="se990e21e7285" %}${ks.length?ks.join(', '):{{ lesson_strings.s2bb3ce890266 | jsonify }}}. `+(stop?`${b}{% include js-text.html key="s0f89c7643a4d" %}`:{{ lesson_strings.sfc2f3441a3bf | jsonify }}),st:{...reads}});
    lread.push(L);if(stop)break;L++;}
  got.forEach(x=>pages.add(pageOf(x)));reads.tbl+=pages.size;
  S.push({read:path,lread,found:got,hread:[...pages],msg:`{% include js-text.html key="s8f7051c6a9ca" %}${got.length}{% include js-text.html key="sff946823c69d" %}${[...pages].sort().join(', ')}{% include js-text.html key="s5562d13e9f17" %}${pages.size}{% include js-text.html key="sb40b3cd1fbb5" %}`+(pages.size>=4?{{ lesson_strings.s0b67cfb362b0 | jsonify }}:{{ lesson_strings.sdf7385f8aa12 | jsonify }}),st:{...reads}});return true;}
function box(x,y,keys,cls,found,w){const cw=w||32,W=keys.length*cw;let h=`<rect x="${x-W/2}" y="${y-15}" width="${W}" height="30" rx="5" class="${cls}"/>`;
  keys.forEach((kk,i)=>{const cx=x-W/2+cw*i+cw/2;if(found.includes(kk))h+=`<rect x="${cx-cw/2+2}" y="${y-13}" width="${cw-4}" height="26" rx="4" fill="#639922"/>`;h+=`<text x="${cx}" y="${y+5}" text-anchor="middle" font-size="13" font-family="var(--font-mono)" fill="${found.includes(kk)?'#fff':cls!=='pg'?'#2C2C2A':'var(--text-primary)'}">${kk}</text>`;if(i)h+=`<line x1="${x-W/2+cw*i}" y1="${y-15}" x2="${x-W/2+cw*i}" y2="${y+15}" stroke="var(--border-strong)"/>`;});return h;}
function render(){const st=S[k]||{msg:{{ lesson_strings.sac6fa1194a39 | jsonify }},st:{idx:0,tbl:0},found:[]};const found=st.found||[];let h='';
  const cls=(id,isLeaf)=>{if(isLeaf){if(st.leaf===id)return 'pg cur';if((st.lread||[]).includes(id))return 'pg done';return 'pg';}if(st.node===id)return 'pg cur';if((st.read||[]).includes(id))return 'pg done';return 'pg';};
  const lc=i=>LX[i]+LW/2;
  [[POS.R,POS.A],[POS.R,POS.B]].forEach(([p,q])=>h+=`<line x1="${p[0]}" y1="${p[1]+15}" x2="${q[0]}" y2="${q[1]-15}" stroke="var(--border-strong)" stroke-width="1.5"/>`);
  T.ch.forEach(n=>n.ch.forEach(li=>h+=`<line x1="${POS[n.id][0]}" y1="${POS[n.id][1]+15}" x2="${lc(li)}" y2="${LY-15}" stroke="var(--border-strong)" stroke-width="1.5"/>`));
  h+=box(...POS.R,T.keys,cls('R'),[]);h+=box(...POS.A,T.ch[0].keys,cls('A'),[]);h+=box(...POS.B,T.ch[1].keys,cls('B'),[]);
  LEAF.forEach((ks,i)=>{h+=box(lc(i),LY,ks,cls(i,true),found,LW/3);if(i<4)h+=`<line x1="${LX[i]+LW}" y1="${LY}" x2="${LX[i+1]-2}" y2="${LY}" stroke="#378ADD" stroke-width="1.5" marker-end="url(#bxA)"/>`;});
  h=`<defs><marker id="bxA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M1 1L8 5L1 9" fill="none" stroke="#378ADD" stroke-width="1.6"/></marker></defs>`+h;
  h+=`<text x="12" y="${LY-26}{% include js-text.html key="s213aaafa2a78" %}${HY-30}{% include js-text.html key="s505e64fb3bb1" %}`;
  HEAP.forEach((ks,p)=>{const c=st.hp===p?'pg cur':(st.hread||[]).includes(p)?'pg done':'pg';h+=box(lc(p),HY,ks,c,found,LW/3);h+=`<text x="${lc(p)}" y="${HY+30}{% include js-text.html key="s21dd0b211a01" %}${p}</text>`;});
  $('bxSvg').innerHTML=h;$('bxMsg').textContent=st.msg;
  $('bxStats').innerHTML=`{% include js-text.html key="s1780e68efa35" %}${st.st.idx}{% include js-text.html key="s1f7357517014" %}${st.st.tbl}{% include js-text.html key="sc0df2b8c9cb9" %}${st.st.idx+st.st.tbl}</b></span>`;
  $('bxSt').textContent=S.length?`{% include js-text.html key="s3afd909a776b" %}${k+1} / ${S.length}`:'';$('bxNext').disabled=!S.length||k>=S.length-1;$('bxAll').disabled=!S.length||k>=S.length-1;}
document.querySelectorAll('[data-op]').forEach(b=>b.onclick=()=>{if(build(b.dataset.op))render();});
$('bxNext').onclick=()=>{if(k<S.length-1){k++;render();}};$('bxAll').onclick=()=>{k=S.length-1;render();};
render();

})();
