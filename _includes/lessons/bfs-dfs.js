
(() => {
const $=id=>document.getElementById(id);
const P={A:[340,40],B:[180,125],C:[500,125],D:[90,225],E:[260,225],F:[420,225],G:[590,225],H:[340,315]};
const E=[['A','B'],['A','C'],['B','D'],['B','E'],['C','F'],['C','G'],['E','H'],['F','H']];
const NB={};Object.keys(P).forEach(n=>NB[n]=[]);E.forEach(([a,b])=>{NB[a].push(b);NB[b].push(a);});Object.values(NB).forEach(l=>l.sort());
const eul=n=>n+(n==='F'?{{ lesson_strings.s9fbc96bea655 | jsonify }}:{{ lesson_strings.s638343428099 | jsonify }}),eulL=a=>a.join(', ')+(a[a.length-1]==='F'?{{ lesson_strings.s9fbc96bea655 | jsonify }}:{{ lesson_strings.s638343428099 | jsonify }}),eun=n=>n+(n==='F'?{{ lesson_strings.s9ec8bcb5fed9 | jsonify }}:{{ lesson_strings.s222918affd18 | jsonify }});
let alg='bfs',start='A',S=[],k=0,timer=null;
function build(){
  S=[];const disc=new Set([start]),vis=[],tree=[],par={};
  if(alg==='bfs'){
    const q=[start];S.push({cur:null,c:q.slice(),vis:[],disc:new Set(disc),tree:[],msg:`{% include js-text.html key="sc1f1872e70e4" %}${eul(start)}{% include js-text.html key="s672f774f5185" %}`});
    while(q.length){const u=q.shift();vis.push(u);const add=[];
      NB[u].forEach(v=>{if(!disc.has(v)){disc.add(v);q.push(v);tree.push([u,v]);add.push(v);}});
      S.push({cur:u,c:q.slice(),vis:vis.slice(),disc:new Set(disc),tree:tree.slice(),msg:`{% include js-text.html key="s822f6a86db9a" %}${eul(u)}{% include js-text.html key="sa6dfeebe6ac5" %}`+(add.length?`{% include js-text.html key="sa146749a63e4" %}${eulL(add)}{% include js-text.html key="s57f42797807b" %}`:{{ lesson_strings.s2af57eb609a2 | jsonify }})});}
  }else{
    const st=[start];const seen=new Set();S.push({cur:null,c:st.slice(),vis:[],disc:new Set([start]),tree:[],msg:`{% include js-text.html key="sc1f1872e70e4" %}${eul(start)}{% include js-text.html key="sa49b31ee6079" %}`});
    while(st.length){const u=st.pop();
      if(seen.has(u)){S.push({cur:null,skip:u,c:st.slice(),vis:vis.slice(),disc:new Set(disc),tree:tree.slice(),msg:`{% include js-text.html key="sa219b119b86b" %}${eun(u)}{% include js-text.html key="sf59cc6fa045f" %}`});continue;}
      seen.add(u);vis.push(u);if(par[u])tree.push([par[u],u]);
      const add=NB[u].filter(v=>!seen.has(v)).reverse();add.forEach(v=>{st.push(v);disc.add(v);par[v]=u;});
      S.push({cur:u,c:st.slice(),vis:vis.slice(),disc:new Set(disc),tree:tree.slice(),msg:`{% include js-text.html key="sa219b119b86b" %}${eul(u)}{% include js-text.html key="sa6dfeebe6ac5" %}`+(add.length?`{% include js-text.html key="sa963961b5689" %}${eulL(add.slice().reverse())}{% include js-text.html key="s1ababf1a0410" %}`:{{ lesson_strings.s700b5760f8c6 | jsonify }})});}
  }
  S[S.length-1].msg+={{ lesson_strings.s28758837d44d | jsonify }};
}
function draw(){
  const s=k?S[k-1]:null;let h='';
  E.forEach(([a,b])=>{const on=s&&s.tree.some(([x,y])=>(x===a&&y===b)||(x===b&&y===a));
    h+=`<line x1="${P[a][0]}" y1="${P[a][1]}" x2="${P[b][0]}" y2="${P[b][1]}" stroke="${on?'#185FA5':'var(--border-strong)'}" stroke-width="${on?4:1.5}"/>`;});
  Object.keys(P).forEach(n=>{const [x,y]=P[n];let f='var(--surface-1)',st='var(--border-strong)',tc='var(--text-primary)';
    if(s){if(s.vis.includes(n)){f='#5DCAA5';st='#0F6E56';tc='#04342C';}else if(s.disc.has(n)&&s.c.includes(n)){f='#FAC775';st='#BA7517';tc='#412402';}
      if(s.cur===n){f='#185FA5';st='#0C447C';tc='#fff';}}
    if(!s&&n===start){st='#185FA5';}
    h+=`<g data-n="${n}"><circle cx="${x}" cy="${y}" r="24" fill="${f}" stroke="${st}" stroke-width="${n===start?3:1.5}"/><text x="${x}" y="${y+6}" text-anchor="middle" font-size="17" font-weight="600" fill="${tc}">${n}</text></g>`;
    if(s&&s.vis.includes(n))h+=`<text x="${x+30}" y="${y-18}" font-size="12" fill="var(--text-secondary)">${s.vis.indexOf(n)+1}{% include js-text.html key="s697874a5aae7" %}`;});
  $('gsSvg').innerHTML=h;
  $('gsSvg').querySelectorAll('[data-n]').forEach(g=>g.onclick=()=>{if(k>0){$('gsMsg').textContent={{ lesson_strings.s43a629ccba32 | jsonify }};return;}start=g.dataset.n;$('gsStart').textContent=start;build();draw();});
  const cont=s?s.c:[start];
  $('gsCt').textContent=alg==='bfs'?{{ lesson_strings.s3d07e14f8ebe | jsonify }}:{{ lesson_strings.se957c4d9ae36 | jsonify }};
  $('gsC').innerHTML=cont.length?cont.map(n=>`<span class="it q">${n}</span>`).join(''):{{ lesson_strings.se7d8e1a0e572 | jsonify }};
  $('gsV').innerHTML=s&&s.vis.length?s.vis.map(n=>`<span class="it v">${n}</span>`).join(''):{{ lesson_strings.s88371eb4835d | jsonify }};
  $('gsMsg').textContent=s?s.msg:`{% include js-text.html key="s0f8b80daa9bc" %}${start}{% include js-text.html key="s7cbc4266cc19" %}`;
  $('gsStep').disabled=k>=S.length;
}
function step(){if(k<S.length){k++;draw();}if(k>=S.length)stop();}
function stop(){clearInterval(timer);timer=null;$('gsAll').textContent={{ lesson_strings.s3b109e100103 | jsonify }};}
$('gsStep').onclick=()=>{stop();step();};
$('gsAll').onclick=()=>{if(timer){stop();return;}if(k>=S.length){k=0;}timer=setInterval(step,900);$('gsAll').textContent={{ lesson_strings.s8241f385c059 | jsonify }};step();};
$('gsReset').onclick=()=>{stop();k=0;draw();};
document.querySelectorAll('.gs [data-a]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.gs [data-a]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');alg=b.dataset.a;stop();k=0;build();draw();});
build();draw();
})();
