
(() => {
const $=id=>document.getElementById(id);
const V=3.3,CLK=72e6,X0=50,X1=500,YH=50,YL=170,PER=4;
let duty=30,freq=1000,view='avg',raf=null,t0=0;
function regs(){let psc=Math.max(0,Math.ceil(CLK/freq/65536)-1);const arr=Math.round(CLK/(freq*(psc+1)))-1;const ccr=Math.round(duty/100*(arr+1));return{psc,arr,ccr};}
function draw(cur,on){
  const pw=(X1-X0)/PER,d=duty/100;let p=`M${X0} ${YL}`;
  for(let i=0;i<PER;i++){const x=X0+i*pw;if(d>0){p+=` L${x} ${YH} L${x+pw*d} ${YH}`;}if(d<1)p+=` L${x+pw*d} ${YL} L${x+pw} ${YL}`;else p+=` L${x+pw} ${YH}`;}
  const ya=YL-d*(YL-YH);
  let h=`<line x1="${X0}" y1="${YL}" x2="${X1}" y2="${YL}" stroke="var(--border)"/>`;
  h+=`<text x="${X0-8}" y="${YH+4}" text-anchor="end" font-size="12" fill="var(--text-muted)">3.3V</text><text x="${X0-8}" y="${YL+4}" text-anchor="end" font-size="12" fill="var(--text-muted)">0V</text>`;
  for(let i=0;i<PER;i++){const x=X0+i*pw;if(d>0)h+=`<rect x="${x}" y="${YH}" width="${pw*d}" height="${YL-YH}" fill="#185FA5" opacity=".12"/>`;}
  h+=`<path d="${p}" fill="none" stroke="#185FA5" stroke-width="2.5"/>`;
  h+=`<line x1="${X0}" y1="${ya}" x2="${X1}" y2="${ya}" stroke="#E8A317" stroke-width="2" stroke-dasharray="6 4"/>`;
  h+=`<text x="${X1+6}" y="${ya+4}{% include js-text.html key="scf610939fdb5" %}${(d*V).toFixed(2)}V</text>`;
  h+=`<text x="${X0+pw/2}" y="${YL+24}{% include js-text.html key="s33d970d28469" %}${X0+2}" y1="${YL+12}" x2="${X0+pw-2}" y2="${YL+12}" stroke="var(--text-muted)"/>`;
  if(cur!=null)h+=`<line x1="${cur}" y1="${YH-12}" x2="${cur}" y2="${YL+4}" stroke="#D85A30" stroke-width="2"/>`;
  const br=on==null?d:(on?1:0);
  h+=`<circle cx="610" cy="100" r="58" fill="#E8A317" opacity="${(br*0.35).toFixed(2)}"/>`;
  h+=`<circle cx="610" cy="100" r="34" fill="#E8A317" opacity="${(0.08+br*0.92).toFixed(2)}" stroke="#BA7517" stroke-width="1.5"/>`;
  h+=`<text x="610" y="185" text-anchor="middle" font-size="13" fill="var(--text-secondary)">LED</text>`;
  $('pwSvg').innerHTML=h;
}
function info(){
  const r=regs();
  $('pwInfo').innerHTML=[[{{ lesson_strings.sda14449fa492 | jsonify }},`${(duty/100*V).toFixed(2)} V`],['PSC',r.psc],['ARR',r.arr],['CCR',r.ccr]].map(([a,b])=>`<div><span>${a}</span><b>${b}</b></div>`).join('');
}
function update(){
  duty=+$('pwD').value;$('pwDv').textContent=duty+'%';info();
  if(view==='avg'){draw(null,null);
    $('pwMsg').textContent=freq>=100?`{% include js-text.html key="s3ff8e6919e21" %}${freq.toLocaleString()}{% include js-text.html key="seb8a55ddecc1" %}${duty}{% include js-text.html key="se2f43a59e3ba" %}`:'';}
}
function slowLoop(now){
  const pw=(X1-X0)/PER,ph=((now-t0)/1000)%PER,i=Math.floor(ph),f=ph-i,on=f<duty/100;
  draw(X0+i*pw+f*pw,on);
  $('pwMsg').textContent=`{% include js-text.html key="s620bcd5ead40" %}${on?{{ lesson_strings.saf0b380560cc | jsonify }}:{{ lesson_strings.s24b7f3f08cc4 | jsonify }}}`;
  raf=requestAnimationFrame(slowLoop);
}
function setView(v){view=v;cancelAnimationFrame(raf);
  document.querySelectorAll('.pw [data-v]').forEach(x=>x.classList.toggle('sel',x.dataset.v===v));
  if(v==='slow'){t0=performance.now();raf=requestAnimationFrame(slowLoop);}else update();}
$('pwD').oninput=update;
document.querySelectorAll('.pw [data-f]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.pw [data-f]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');freq=+b.dataset.f;update();});
document.querySelectorAll('.pw [data-v]').forEach(b=>b.onclick=()=>setView(b.dataset.v));
update();
})();
