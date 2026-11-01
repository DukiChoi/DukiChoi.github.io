
(() => {
const $=id=>document.getElementById(id);
const P={A:[80,180],B:[250,70],C:[250,290],D:[430,70],E:[430,290],F:[600,180]};
const E=[['A','B',4],['A','C',2],['B','C',1],['B','D',5],['C','D',8],['C','E',10],['D','E',2],['D','F',6],['E','F',3]];
const N=Object.keys(P),NB={};N.forEach(n=>NB[n]=[]);E.forEach(([a,b,w])=>{NB[a].push([b,w]);NB[b].push([a,w]);});
const eul=n=>n+(n==='F'?{{ lesson_strings.s9fbc96bea655 | jsonify }}:{{ lesson_strings.s638343428099 | jsonify }});
const fmt=d=>d===Infinity?'∞':d;
let start='A',S=[],k=0,timer=null,showPath=null;
function build(){
  const dist={},prev={},done=new Set();N.forEach(n=>{dist[n]=Infinity;prev[n]=null;});dist[start]=0;
  S=[{dist:{...dist},prev:{...prev},done:new Set(),cur:null,chk:[],up:[],msg:`{% include js-text.html key="s79461903c605" %}${start}{% include js-text.html key="se884d5fdbcb8" %}`}];
  while(done.size<N.length){
    let u=null;N.forEach(n=>{if(!done.has(n)&&dist[n]<Infinity&&(u===null||dist[n]<dist[u]))u=n;});if(u===null)break;
    done.add(u);const chk=[],up=[],keep=[];
    NB[u].forEach(([v,w])=>{if(done.has(v))return;chk.push([u,v]);const nd=dist[u]+w;
      if(nd<dist[v]){up.push(`${v} ${fmt(dist[v])} → ${nd}`);dist[v]=nd;prev[v]=u;}else keep.push(`${v}(${dist[u]} + ${w} = ${nd} ≥ ${dist[v]})`);});
    let msg=`{% include js-text.html key="s2eec949e4d99" %}${u}(${dist[u]})${u==='F'?{{ lesson_strings.s9fbc96bea655 | jsonify }}:{{ lesson_strings.s638343428099 | jsonify }}}{% include js-text.html key="s9d9b3b9cb12c" %}`;
    if(up.length)msg+=` ${u}{% include js-text.html key="se5f504b784d8" %}${up.join(', ')}.`.replace(`${u}{% include js-text.html key="sc27a6fda78b5" %}`,`${eul(u)}{% include js-text.html key="s1678fb567c2d" %}`);
    if(keep.length)msg+=`{% include js-text.html key="sc306e37fa1c3" %}${keep.join(', ')}.`;
    if(!chk.length)msg+={{ lesson_strings.s4992886f5310 | jsonify }};
    S.push({dist:{...dist},prev:{...prev},done:new Set(done),cur:u,chk,up:up.map(x=>x[0]),msg});
  }
  S[S.length-1].msg+={{ lesson_strings.sd4ffed26f849 | jsonify }};
}
function pathTo(t,s){const p=[];let x=t;while(x){p.unshift(x);x=s.prev[x];}return p;}
function draw(){
  const s=S[k],fin=k===S.length-1;let h='';
  const onPath=new Set();if(fin&&showPath){const p=pathTo(showPath,s);for(let i=1;i<p.length;i++)onPath.add(p[i-1]+p[i]).add(p[i]+p[i-1]);}
  E.forEach(([a,b,w])=>{
    const tree=s.prev[b]===a||s.prev[a]===b,chk=s.chk.some(([x,y])=>(x===a&&y===b)||(x===b&&y===a)),pth=onPath.has(a+b);
    let col='var(--border-strong)',sw=1.5;
    if(tree&&(s.done.has(a)&&s.done.has(b))){col='#85B7EB';sw=3;}
    if(chk){col='#E8A317';sw=4;}
    if(pth){col='#185FA5';sw=5;}
    h+=`<line x1="${P[a][0]}" y1="${P[a][1]}" x2="${P[b][0]}" y2="${P[b][1]}" stroke="${col}" stroke-width="${sw}"/>`;
    const mx=(P[a][0]+P[b][0])/2,my=(P[a][1]+P[b][1])/2;
    h+=`<rect x="${mx-13}" y="${my-11}" width="26" height="22" rx="4" fill="var(--panel,#fff)" stroke="var(--border)"/><text x="${mx}" y="${my+5}" text-anchor="middle" font-size="13" font-family="var(--font-mono)" fill="var(--text-primary)">${w}</text>`;});
  N.forEach(n=>{const [x,y]=P[n];let f='var(--surface-1)',st='var(--border-strong)',tc='var(--text-primary)';
    if(s.done.has(n)){f='#5DCAA5';st='#0F6E56';tc='#04342C';}
    if(s.cur===n){f='#185FA5';st='#0C447C';tc='#fff';}
    h+=`<g data-n="${n}"><circle cx="${x}" cy="${y}" r="25" fill="${f}" stroke="${st}" stroke-width="${n===start?3.5:1.5}"/><text x="${x}" y="${y+6}" text-anchor="middle" font-size="17" font-weight="600" fill="${tc}">${n}</text></g>`;
    const ly=y<180?y-34:y+45;
    h+=`<text x="${x}" y="${ly}" text-anchor="middle" font-size="13" fill="${s.up.includes(n)?'#BA7517':'var(--text-secondary)'}" font-weight="${s.up.includes(n)?600:400}{% include js-text.html key="s9c1cf6f020e8" %}${fmt(s.dist[n])}</text>`;});
  $('djSvg').innerHTML=h;
  $('djSvg').querySelectorAll('[data-n]').forEach(g=>g.onclick=()=>{const n=g.dataset.n;
    if(k===0){start=n;$('djS').textContent=n;build();showPath=null;draw();return;}
    if(fin){showPath=n;const p=pathTo(n,S[k]);draw();$('djMsg').className='msg ok';$('djMsg').textContent=n===start?`${n}${n==='F'?{{ lesson_strings.s9ec8bcb5fed9 | jsonify }}:{{ lesson_strings.s222918affd18 | jsonify }}}{% include js-text.html key="s72b5555747f7" %}`:`${start}{% include js-text.html key="s107ebe9b7f09" %}${n}{% include js-text.html key="sa2a700ce8bfb" %}${p.join(' → ')}{% include js-text.html key="see182e0a3bcc" %}${S[k].dist[n]}`;return;}
    $('djMsg').textContent={{ lesson_strings.s281a07c92d0c | jsonify }};});
  let t='<tr><th></th>'+N.map(n=>`<th>${n}</th>`).join('')+'</tr>';
  t+={{ lesson_strings.se690e8dbb760 | jsonify }}+N.map(n=>`<td class="${s.up.includes(n)?'up':s.done.has(n)?'dn':''}">${fmt(s.dist[n])}</td>`).join('')+'</tr>';
  t+={{ lesson_strings.s64caf69e8409 | jsonify }}+N.map(n=>`<td>${s.prev[n]??'-'}</td>`).join('')+'</tr>';
  t+={{ lesson_strings.s7885236797f0 | jsonify }}+N.map(n=>`<td class="${s.done.has(n)?'dn':''}">${s.done.has(n)?{{ lesson_strings.se1f7801c7e3d | jsonify }}:''}</td>`).join('')+'</tr>';
  $('djT').innerHTML=t;
  if(!(fin&&showPath)){$('djMsg').className='msg';$('djMsg').textContent=s.msg;}
  $('djStep').disabled=fin;
}
function step(){if(k<S.length-1){k++;showPath=null;draw();}if(k>=S.length-1)stop();}
function stop(){clearInterval(timer);timer=null;$('djAll').textContent={{ lesson_strings.s3b109e100103 | jsonify }};}
$('djStep').onclick=()=>{stop();step();};
$('djAll').onclick=()=>{if(timer){stop();return;}if(k>=S.length-1){k=0;draw();}timer=setInterval(step,1400);$('djAll').textContent={{ lesson_strings.s8241f385c059 | jsonify }};};
$('djReset').onclick=()=>{stop();k=0;showPath=null;draw();};
build();draw();
})();
