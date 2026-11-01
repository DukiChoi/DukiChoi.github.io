
(() => {
const $=id=>document.getElementById(id);
const X0=40,X1=660,YC=115,A=80,T=0.5,PH=0.6;
function draw(){
  const f=+$('adF').value,fs=+$('adS').value,ny=fs/2,k=Math.round(f/fs),fa=f-k*fs;
  $('adFv').textContent=f+' Hz';$('adSv').textContent=fs+' Hz';
  const X=t=>X0+t/T*(X1-X0),Y=v=>YC-A*v;
  let h=`<line x1="${X0}" y1="${YC}" x2="${X1}" y2="${YC}" stroke="var(--border)"/>`;
  for(let i=0;i<=5;i++){const t=i*0.1;h+=`<text x="${X(t)}" y="222" text-anchor="middle" font-size="11" fill="var(--text-muted)">${t.toFixed(1)}s</text>`;}
  let p='';for(let i=0;i<=1400;i++){const t=i/1400*T;p+=(i?'L':'M')+X(t).toFixed(1)+' '+Y(Math.sin(2*Math.PI*f*t+PH)).toFixed(1);}
  h+=`<path d="${p}" fill="none" stroke="var(--text-muted)" stroke-width="1.3" opacity=".7"/>`;
  let q='';for(let i=0;i<=700;i++){const t=i/700*T;q+=(i?'L':'M')+X(t).toFixed(1)+' '+Y(Math.sin(2*Math.PI*fa*t+PH)).toFixed(1);}
  h+=`<path d="${q}" fill="none" stroke="#D85A30" stroke-width="2.2" stroke-dasharray="${Math.abs(fa)===f?'0':'7 4'}"/>`;
  const n=Math.floor(T*fs+1e-9);
  for(let i=0;i<=n;i++){const t=i/fs;if(t>T)break;const v=Math.sin(2*Math.PI*f*t+PH);h+=`<line x1="${X(t)}" y1="${YC}" x2="${X(t)}" y2="${Y(v)}" stroke="#E8A317" stroke-width="1" opacity=".5"/><circle cx="${X(t)}" cy="${Y(v)}" r="4.5" fill="#E8A317"/>`;}
  $('adSvg').innerHTML=h;
  $('adInfo').innerHTML=[[{{ lesson_strings.s64535296268b | jsonify }},`${ny%1?ny.toFixed(1):ny} Hz`],[{{ lesson_strings.sd431a56416a5 | jsonify }},`${f} Hz`],[{{ lesson_strings.sba77b4fa910c | jsonify }},`${Math.abs(fa)} Hz`]].map(([a,b])=>`<div><span>${a}</span><b>${b}</b></div>`).join('');
  const m=$('adMsg');
  if(f<ny){m.className='msg ok';m.textContent=`${f}{% include js-text.html key="s68513b9975fb" %}${ny}{% include js-text.html key="s2ad3812b326f" %}`;}
  else if(f===ny){m.className='msg bad';m.textContent=`${f}{% include js-text.html key="s2a70eac35458" %}`;}
  else{m.className='msg bad';m.textContent=Math.abs(fa)===0?`{% include js-text.html key="s493207a66eee" %}${f}{% include js-text.html key="s7cc96fb8f846" %}`:`${f}{% include js-text.html key="saff8e8633764" %}${Math.abs(fa)}{% include js-text.html key="s9e7bad4caf7f" %}${ny}{% include js-text.html key="sa194517337df" %}`;}
}
document.querySelectorAll('.ad [data-pre]').forEach(b=>b.onclick=()=>{const [f,s]=b.dataset.pre.split(',');$('adF').value=f;$('adS').value=s;draw();});
$('adF').oninput=draw;$('adS').oninput=draw;
draw();
})();
