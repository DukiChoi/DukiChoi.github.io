
(() => {
const $=id=>document.getElementById(id);
const H=(v,d=4)=>'0x'+v.toString(16).toUpperCase().padStart(d,'0');
const B2=v=>v.toString(16).toUpperCase().padStart(2,'0');
let bytes=[],ev=[],k=0,final=0;
function parse(){
  const t=$('crIn').value.trim().split(/[\s,]+/).filter(Boolean);
  if(!t.length||t.length>16||!t.every(x=>/^(0x)?[0-9a-f]{1,2}$/i.test(x))){$('crErr').textContent={{ lesson_strings.s42ef8d6687b0 | jsonify }};return null;}
  $('crErr').textContent='';return t.map(x=>parseInt(x.replace(/^0x/i,''),16));
}
function build(){
  const b=parse();if(!b)return;bytes=b;ev=[];let crc=0xFFFF;
  bytes.forEach((v,bi)=>{const be=crc;crc^=v;ev.push({t:'x',bi,v,be,af:crc});
    for(let j=0;j<8;j++){const lsb=crc&1,be2=crc;crc>>=1;const mid=crc;if(lsb)crc^=0xA001;ev.push({t:'s',bi,j,lsb,be:be2,mid,af:crc});}});
  final=crc;k=0;draw();
}
function row(lbl,val,cls,hex){
  let h=`<div class="lb">${lbl}</div>`;
  for(let i=15;i>=0;i--){const c=cls?cls(i):'';if(c==='no'){h+='<div class="b no"></div>';continue;}const bit=(val>>i)&1;h+=`<div class="b ${c||(bit?'':'z')}">${bit}</div>`;}
  return h+`<div class="hx">${hex??H(val)}</div>`;
}
function draw(){
  const cur=k?ev[k-1]:null,reg=cur?cur.af:0xFFFF,nxt=ev[k];
  const curByte=cur?cur.bi:-1;
  $('crBytes').innerHTML=bytes.map((v,i)=>{const done=k===ev.length||(cur&&i<cur.bi)||(cur&&i===cur.bi&&cur.t==='s'&&cur.j===7);return `<span class="by${i===curByte&&!done?' cur':done?' done':''}">${B2(v)}</span>`;}).join('')+(k===ev.length?`<span class="by crc">${B2(final&0xFF)}</span><span class="by crc">${B2(final>>8)}</span>`:'');
  let h='<div></div>'+[...Array(16).keys()].map(i=>`<div class="idx">${15-i}</div>`).join('')+'<div></div>';
  const lsbMark=i=>(i===0&&nxt&&nxt.t==='s')?'lsb':'';
  if(!cur){h+=row({{ lesson_strings.sf521fbe99f4e | jsonify }},reg,i=>lsbMark(i)||'');$('crMsg').textContent={{ lesson_strings.s43c972f0d6ca | jsonify }};}
  else if(cur.t==='x'){
    h+=row({{ lesson_strings.s5e2f5a6581de | jsonify }},cur.be);
    h+=row('XOR',cur.v,i=>i>7?'no':((cur.v>>i)&1?'op1':'op0'),H(cur.v,2));
    h+=row({{ lesson_strings.s93cf10dc01b6 | jsonify }},reg,i=>lsbMark(i));
    $('crMsg').textContent=`${cur.bi+1}{% include js-text.html key="sca874e12bf79" %}${H(cur.v,2)}{% include js-text.html key="sc99c4f233eab" %}`;
  }else{
    h+=row({{ lesson_strings.s5e2f5a6581de | jsonify }},cur.be,i=>i===0?'out':'');
    h+=row({{ lesson_strings.s5f8d047fe684 | jsonify }},cur.mid);
    if(cur.lsb)h+=row('XOR',0xA001,i=>(0xA001>>i)&1?'op1':'op0');
    h+=row({{ lesson_strings.s93cf10dc01b6 | jsonify }},reg,i=>lsbMark(i));
    $('crMsg').textContent=`${cur.j+1}{% include js-text.html key="s8965d0daa225" %}${cur.lsb}${cur.lsb?{{ lesson_strings.s2a1db0fa04bf | jsonify }}:{{ lesson_strings.sa5948ad3489f | jsonify }}}`;
  }
  $('crOps').innerHTML=h;
  $('crProg').textContent=`{% include js-text.html key="s3afd909a776b" %}${k} / ${ev.length}`;
  if(k===ev.length){
    $('crMsg').textContent={{ lesson_strings.sf22c9c668be7 | jsonify }};
    $('crRes').innerHTML=`{% include js-text.html key="s9ebb8f4ec2fb" %}${H(final)}{% include js-text.html key="se61b874a1333" %}${bytes.map(B2).join(' ')} <span style="color:#BA7517">${B2(final&0xFF)} ${B2(final>>8)}{% include js-text.html key="sa51640a8b42c" %}`;
  }else $('crRes').innerHTML={{ lesson_strings.sd5cb043ece3b | jsonify }};
  ['crStep','crByte','crAll'].forEach(id=>$(id).disabled=k>=ev.length);
}
$('crStep').onclick=()=>{if(k<ev.length){k++;draw();}};
$('crByte').onclick=()=>{if(k>=ev.length)return;const bi=ev[k].bi;while(k<ev.length&&ev[k].bi===bi)k++;draw();};
$('crAll').onclick=()=>{k=ev.length;draw();};
$('crReset').onclick=()=>{k=0;draw();};
$('crIn').onchange=build;$('crIn').oninput=()=>{$('crErr').textContent='';};
build();
})();
