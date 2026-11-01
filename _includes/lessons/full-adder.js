
(() => {
const s={A:0,B:0,Cin:0};
const col=v=>v?'#E8A317':'#888780';
function calc(A,B,Ci){const S1=A^B,C1=A&B,Sum=S1^Ci,C2=S1&Ci;return{S1,C1,Sum,C2,Co:C1|C2};}
const tb=document.getElementById('tb');
for(let Ci=0;Ci<2;Ci++)for(let A=0;A<2;A++)for(let B=0;B<2;B++){const r=calc(A,B,Ci);const tr=document.createElement('tr');tr.id=`r${A}${B}${Ci}`;tr.innerHTML=[A,B,Ci,r.S1,r.C1,r.C2,r.Sum,r.Co,`${A}+${B}+${Ci} = ${A+B+Ci}`].map(v=>`<td>${v}</td>`).join('');tb.appendChild(tr);}
function set(id,v){document.getElementById('v'+id).textContent=v;document.getElementById('w'+id).setAttribute('stroke',col(v));}
function T(id,t){document.getElementById(id).textContent=t;}
function upd(){const {A,B,Cin}=s,r=calc(A,B,Cin);
set('A',A);set('B',B);set('Cin',Cin);set('S1',r.S1);set('C1',r.C1);set('C2',r.C2);set('Sum',r.Sum);set('Co',r.Co);
const d1=A+B,d2=r.S1+Cin,tot=A+B+Cin;
T('ha1eq',`${A} + ${B} = ${d1}`);T('ha2eq',`${r.S1} + ${Cin} = ${d2}`);
T('e1',`${A} + ${B} = ${d1} → ${r.C1}${r.S1}₂`);T('s1',`C1=${r.C1}, S1=${r.S1}`);
T('e2',`${r.S1} + ${Cin} = ${d2} → ${r.C2}${r.Sum}₂`);T('s2',`C2=${r.C2}, Sum=${r.Sum}`);
T('e3',`${r.Co}${r.Sum}₂ = ${tot}`);T('s3',`${A} + ${B} + ${Cin} = ${tot}  (Cout = C1 OR C2 = ${r.Co})`);
document.querySelectorAll('#tb tr').forEach(t=>t.classList.remove('cur'));document.getElementById(`r${A}${B}${Cin}`).classList.add('cur');}
document.querySelectorAll('.bt').forEach(b=>b.onclick=()=>{const k=b.dataset.k;s[k]^=1;b.classList.toggle('on',!!s[k]);b.setAttribute('aria-pressed',!!s[k]);upd();});
upd();
})();
