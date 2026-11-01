
(() => {
const s={A1:0,A0:0,B1:0,B0:0,Cin:0};
const col=v=>v?'#E8A317':'#888780';
function set(id,v){document.getElementById('v'+id).textContent=v;document.getElementById('w'+id).setAttribute('stroke',col(v));}
function upd(){
const S0=s.A0^s.B0^s.Cin, C1=(s.A0&s.B0)|(s.Cin&(s.A0^s.B0));
const S1=s.A1^s.B1^C1, Co=(s.A1&s.B1)|(C1&(s.A1^s.B1));
['A1','A0','B1','B0','Cin'].forEach(k=>set(k,s[k]));
set('C1',C1);set('S1',S1);set('S0',S0);set('Co',Co);
const a=s.A1*2+s.A0,b=s.B1*2+s.B0,r=Co*4+S1*2+S0;
document.getElementById('res').textContent=`${s.A1}${s.A0} + ${s.B1}${s.B0} + ${s.Cin} = ${Co}${S1}${S0}   (${a} + ${b} + ${s.Cin} = ${r})`;
}
document.querySelectorAll('.bt').forEach(b=>b.onclick=()=>{const k=b.dataset.k;s[k]^=1;b.classList.toggle('on',!!s[k]);b.setAttribute('aria-pressed',!!s[k]);upd();});
upd();
})();
