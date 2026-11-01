
(() => {
let N=3,n=[],hist=[],timer=null,steps=0;
const sv=document.getElementById('sv');
const playButton=document.getElementById('pl');
// Keep the idle label from the HTML, including any symbols the author adds.
const playLabel=playButton.textContent;
const C=v=>v?'#E8A317':'#888780';
function reset(){n=N===3?[0,1,0]:[0,1];hist=[n[0]];steps=0;stop();draw();}
function pending(){for(let i=0;i<N;i++){const o=(i+1)%N;if(n[o]!==1-n[i])return i;}return -1;}
function step(){const p=pending();if(p<0){stop();draw();return;}const o=(p+1)%N;n[o]=1-n[p];steps++;hist.push(n[0]);if(hist.length>26)hist.shift();draw();}
function stop(){if(timer){clearInterval(timer);timer=null;}playButton.textContent=playLabel;playButton.setAttribute('aria-pressed','false');}
function draw(){
const w=440/N,cx=i=>120+w*(i+0.5),y=90,p=pending();
let h={{ lesson_strings.s1e72da357501 | jsonify }};
const last=cx(N-1)+30,first=cx(0)-27;
h+=`<path d="M${last} ${y} L600 ${y} L600 165 L80 165 L80 ${y} L${first} ${y}" fill="none" stroke="${C(n[0])}" stroke-width="2" marker-end="url(#arrow)"/>`;
h+=`<text class="ts" x="340" y="186" text-anchor="middle">n0 = ${n[0]}{% include js-text.html key="s2324fd3783bb" %}`;
for(let i=1;i<N;i++){const x1=cx(i-1)+30,x2=cx(i)-27;h+=`<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${C(n[i])}" stroke-width="2" marker-end="url(#arrow)"/>`;h+=`<text class="th" x="${(x1+x2)/2}" y="${y-14}" text-anchor="middle">n${i}=${n[i]}</text>`;}
for(let i=0;i<N;i++){const c=cx(i),hot=i===p;
h+=`<polygon points="${c-25},${y-22} ${c-25},${y+22} ${c+18},${y}" fill="var(--bg2)" stroke="${hot?'#D85A30':'var(--t)'}" stroke-width="${hot?2:0.8}"/>`;
h+=`<circle cx="${c+24}" cy="${y}" r="5" fill="var(--bg2)" stroke="${hot?'#D85A30':'var(--t)'}" stroke-width="${hot?2:0.8}"/>`;
h+=`<text class="ts" x="${c-8}" y="${y+40}" text-anchor="middle">NOT ${i+1}</text>`;}
h+=`<text class="ts" x="40" y="236">n0</text>`;
const pts=[];hist.forEach((v,k)=>{const x=80+k*20,yy=v?214:248;if(k>0)pts.push(`${x},${hist[k-1]?214:248}`);pts.push(`${x},${yy}`);pts.push(`${x+20},${yy}`);});
h+=`<line x1="80" y1="248" x2="600" y2="248" stroke="var(--b)" stroke-width="0.5"/>`;
h+=`<polyline points="${pts.join(' ')}" fill="none" stroke="#E8A317" stroke-width="1.5"/>`;
sv.innerHTML=h;
const m=document.getElementById('msg');
if(p<0)m.textContent={{ lesson_strings.s06b7a9472586 | jsonify }};
else m.textContent=`{% include js-text.html key="saf2c5785b50a" %}${p+1}{% include js-text.html key="sc65b274ae304" %}${steps}{% include js-text.html key="sa5bf1bddabc7" %}`;
}
const m3=document.getElementById('m3'),m2=document.getElementById('m2');
m3.onclick=()=>{N=3;m3.classList.add('on');m2.classList.remove('on');reset();};
m2.onclick=()=>{N=2;m2.classList.add('on');m3.classList.remove('on');reset();};
document.getElementById('st').onclick=()=>{stop();step();};
document.getElementById('rs').onclick=reset;
playButton.onclick=()=>{if(timer){stop();return;}timer=setInterval(step,550);playButton.textContent=playButton.dataset.stopLabel;playButton.setAttribute('aria-pressed','true');};
reset();
})();
