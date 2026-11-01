
(() => {
const $=id=>document.getElementById(id);
const N=5,CX=340,CY=185,RP=140,RF=92;
const rad=d=>d*Math.PI/180;
const J=(n,a,b)=>n+('2459'.includes(String(n%10))?b:a),ga=n=>J(n,{{ lesson_strings.s034da7ed1969 | jsonify }},{{ lesson_strings.sea130c74330d | jsonify }}),eul=n=>J(n,{{ lesson_strings.s9fbc96bea655 | jsonify }},{{ lesson_strings.s638343428099 | jsonify }}),eun=n=>J(n,{{ lesson_strings.s9ec8bcb5fed9 | jsonify }},{{ lesson_strings.s222918affd18 | jsonify }});
const pp=i=>[CX+RP*Math.cos(rad(-90+72*i)),CY+RP*Math.sin(rad(-90+72*i))];
const fp=f=>[CX+RF*Math.cos(rad(-90+72*f-36)),CY+RF*Math.sin(rad(-90+72*f-36))];
let mode='naive',st,own,meals,eatT,timer=null,dead=false,busy=false;
const first=i=>mode==='fix'&&i===4?(i+1)%N:i;
const second=i=>first(i)===i?(i+1)%N:i;
function say(t,c){const m=$('dlMsg');m.textContent=t;m.className='msg'+(c?' '+c:'');}
function stop(){clearInterval(timer);timer=null;$('dlRun').textContent={{ lesson_strings.s77f574b793c1 | jsonify }};}
function reset(){stop();busy=false;st=Array(N).fill(0);own=Array(N).fill(-1);meals=Array(N).fill(0);eatT=Array(N).fill(0);dead=false;
  say(mode==='naive'?{{ lesson_strings.sd10bfde4cacc | jsonify }}:{{ lesson_strings.s972931b80e88 | jsonify }});draw();}
function act(i){
  if(st[i]===0){if(Math.random()<.5)st[i]=1;return;}
  if(st[i]===1){const f=first(i);if(own[f]<0){own[f]=i;st[i]=2;}return;}
  if(st[i]===2){const f=second(i);if(own[f]<0){own[f]=i;st[i]=3;eatT[i]=2+Math.floor(Math.random()*2);}return;}
  if(st[i]===3&&--eatT[i]<=0){own[first(i)]=-1;own[second(i)]=-1;st[i]=0;meals[i]++;}
}
function isDead(){return st.every((s,i)=>s===2&&own[second(i)]>=0&&own[second(i)]!==i);}
function check(){if(isDead()){dead=true;stop();say({{ lesson_strings.s78c9856907e4 | jsonify }},'bad');}}
function tick(){act(Math.floor(Math.random()*N));check();draw();}
function wanted(i){return st[i]===1?first(i):st[i]===2?second(i):-1;}
function draw(){
  let h=`<defs><marker id="dlA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.6"/></marker></defs>`;
  h+=`<circle cx="${CX}" cy="${CY}" r="72" fill="var(--surface-1)" stroke="var(--border)"/>`;
  h+=`<text x="${CX}" y="${CY+5}{% include js-text.html key="s70c0946aa5ff" %}`;
  for(let i=0;i<N;i++){const w=wanted(i);if(w<0||own[w]<0||own[w]===i)continue;
    const [x1,y1]=pp(i),[x2,y2]=fp(w),dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy);
    h+=`<line x1="${x1+dx/L*34}" y1="${y1+dy/L*34}" x2="${x2-dx/L*12}" y2="${y2-dy/L*12}" stroke="${dead?'#E24B4A':'#E8A317'}" stroke-width="2" stroke-dasharray="5 4" marker-end="url(#dlA)"/>`;}
  for(let f=0;f<N;f++){let [x,y]=fp(f);const o=own[f];
    if(o>=0){const [px,py]=pp(o);x=x+(px-x)*.42;y=y+(py-y)*.42;}
    const a=Math.atan2(y-CY,x-CX),c=o>=0?'var(--text-primary)':'var(--text-muted)';
    h+=`<line x1="${x-Math.cos(a)*11}" y1="${y-Math.sin(a)*11}" x2="${x+Math.cos(a)*11}" y2="${y+Math.sin(a)*11}" stroke="${c}" stroke-width="${o>=0?4:3}" stroke-linecap="round"/>`;
    h+=`<text x="${x+Math.sin(a)*14}" y="${y-Math.cos(a)*14+4}" text-anchor="middle" font-size="11" fill="${c}{% include js-text.html key="s17c72c01fa24" %}${f}</text>`;}
  const STT=[{{ lesson_strings.s73df432b5864 | jsonify }},{{ lesson_strings.s236152455564 | jsonify }},{{ lesson_strings.s236152455564 | jsonify }},{{ lesson_strings.sf273610d1e8e | jsonify }}];
  for(let i=0;i<N;i++){const [x,y]=pp(i),s=st[i];
    const fill=dead?'#F09595':s===3?'#5DCAA5':s>0?'#FAC775':'var(--surface-1)';
    const stroke=dead?'#A32D2D':s===3?'#0F6E56':s>0?'#854F0B':'var(--border-strong)';
    const tc=(dead||s>0)?'#2C2C2A':'var(--text-primary)';
    h+=`<circle cx="${x}" cy="${y}" r="32" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>`;
    h+=`<text x="${x}" y="${y-3}" text-anchor="middle" font-size="15" font-weight="600" fill="${tc}">P${i}</text>`;
    h+=`<text x="${x}" y="${y+14}" text-anchor="middle" font-size="11" fill="${tc}">${dead?{{ lesson_strings.sf310a7b244ff | jsonify }}:STT[s]}</text>`;
    const ly=y<CY?y-42:y+50;
    h+=`<text x="${x}" y="${ly}{% include js-text.html key="sc10223b9a0bd" %}${meals[i]}{% include js-text.html key="s4a131f4e6338" %}`;}
  $('dlSvg').innerHTML=h;
}
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function force(){
  if(busy)return;reset();busy=true;
  for(let i=0;i<N;i++)st[i]=1;draw();say({{ lesson_strings.s54120b780d27 | jsonify }});await sleep(800);
  for(let i=0;i<N;i++){const f=first(i);
    if(own[f]<0){own[f]=i;st[i]=2;say(`P${ga(i)}{% include js-text.html key="sf4507e3dc2bb" %}${eul(f)}{% include js-text.html key="s2d0cdc0b89e8" %}`);}
    else say(`P${eun(i)}{% include js-text.html key="sf4507e3dc2bb" %}${f}{% include js-text.html key="s5dfd686b9a1a" %}${ga(own[f])}{% include js-text.html key="sfeb16bc0be95" %}${eun(i)}{% include js-text.html key="sffde7d65cb74" %}`);
    draw();await sleep(800);}
  check();draw();busy=false;
  if(!dead){say({{ lesson_strings.s985aca9cba18 | jsonify }},'ok');await sleep(2200);if(!dead&&!timer)run();}
}
function run(){if(timer){stop();return;}if(dead)reset();timer=setInterval(tick,350);$('dlRun').textContent={{ lesson_strings.s8241f385c059 | jsonify }};}
document.querySelectorAll('.dl [data-m]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.dl [data-m]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');mode=b.dataset.m;reset();});
$('dlForce').onclick=force;$('dlRun').onclick=run;$('dlReset').onclick=reset;
reset();
})();
