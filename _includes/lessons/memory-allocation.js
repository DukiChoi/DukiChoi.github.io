
(() => {
const $=id=>document.getElementById(id);
const TOTAL=100,COL=['#0F6E56','#534AB7','#993C1D','#185FA5','#854F0B'];
const NAME={first:'First-fit',best:'Best-fit',worst:'Worst-fit'};
const WHY={first:{{ lesson_strings.s67f61c0f9af2 | jsonify }},best:{{ lesson_strings.s4bce988a21b6 | jsonify }},worst:{{ lesson_strings.s63826c73986d | jsonify }}};
let strat='first',blocks,nextId,busy=false,demo=false,mark={};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
function say(t,bad){const m=$('maMsg');m.textContent=t;m.className='msg'+(bad?' bad':'');}
function reset(){blocks=[{s:0,n:TOTAL,id:null}];nextId=0;mark={};say({{ lesson_strings.sc811fe139569 | jsonify }});render();}
const holes=()=>blocks.filter(b=>b.id===null);
function pick(n){const c=holes().filter(b=>b.n>=n);if(!c.length)return{c,ch:null};
  const ch=strat==='first'?c[0]:strat==='best'?c.reduce((a,b)=>b.n<a.n?b:a):c.reduce((a,b)=>b.n>a.n?b:a);return{c,ch};}
async function request(n){
  busy=true;const {c,ch}=pick(n);
  if(!ch){const hs=holes(),tot=hs.reduce((s,b)=>s+b.n,0),big=Math.max(0,...hs.map(b=>b.n));
    say(tot>=n?`{% include js-text.html key="sba6b49d34a28" %}${tot}{% include js-text.html key="s1e41f0ec76de" %}${big}{% include js-text.html key="s74595a2d3d73" %}${n}{% include js-text.html key="s72ac74c5f73c" %}`:`{% include js-text.html key="s767038be2604" %}${tot}{% include js-text.html key="s74595a2d3d73" %}${n}{% include js-text.html key="s228918fa7120" %}`,true);
    busy=false;render();return;}
  mark={cand:c,pick:ch};render();
  say(c.length>1?`${NAME[strat]}: ${n}{% include js-text.html key="s5d3c6afa04c0" %}${c.length}{% include js-text.html key="s5e8e17af7fba" %}${WHY[strat]} ${ch.n}{% include js-text.html key="s10e396b45b1a" %}`:`${NAME[strat]}: ${n}{% include js-text.html key="s3823a6ecc981" %}${ch.n}{% include js-text.html key="s96a92f0fbc58" %}`);
  await sleep(1100);
  const id=nextId++,name=String.fromCharCode(65+id%26),i=blocks.indexOf(ch),nb={s:ch.s,n,id,name,col:COL[id%5]};
  if(ch.n>n)blocks.splice(i,1,nb,{s:ch.s+n,n:ch.n-n,id:null});else blocks.splice(i,1,nb);
  mark={};say(`${name}{% include js-text.html key="sa364915150e9" %}${ch.s}{% include js-text.html key="s6a52455250c1" %}${n}{% include js-text.html key="s1158da836424" %}`);busy=false;render();
}
function free(id){
  const b=blocks.find(x=>x.id===id);if(!b)return;b.id=null;
  for(let i=blocks.length-2;i>=0;i--){if(blocks[i].id===null&&blocks[i+1].id===null){blocks[i].n+=blocks[i+1].n;blocks.splice(i+1,1);}}
  say(`${b.name}{% include js-text.html key="sab00c7c46b1e" %}`);render();
}
function render(){
  const bar=$('maBar');
  bar.innerHTML=blocks.map(b=>{
    const st=`left:${b.s}%;width:${b.n}%`;
    if(b.id!==null)return `<button class="blk u" data-id="${b.id}" style="${st};background:${b.col}" aria-label="${b.name}{% include js-text.html key="sddb3467b6c4e" %}${b.n}{% include js-text.html key="sb3354dcb39d2" %}${b.n>=6?b.name:''}<small>${b.n>=8?b.n+'KB':''}</small></button>`;
    const cls=mark.pick===b?' pick':mark.cand&&mark.cand.includes(b)?' cand':'';
    return `<div class="blk h${cls}" style="${st}">${b.n>=5?b.n:''}</div>`;
  }).join('');
  bar.querySelectorAll('.blk.u').forEach(el=>el.onclick=()=>{if(!busy&&!demo)free(+el.dataset.id);});
  const hs=holes();
  $('maTot').textContent=hs.reduce((s,b)=>s+b.n,0);$('maBig').textContent=Math.max(0,...hs.map(b=>b.n));$('maCnt').textContent=hs.length;
  ['maReq','maDemo','maReset'].forEach(x=>$(x).disabled=busy||demo);
}
$('maReq').onclick=()=>{const v=+$('maSize').value;if(!Number.isInteger(v)||v<1||v>100){$('maErr').textContent={{ lesson_strings.sc0ae9797f294 | jsonify }};return;}$('maErr').textContent='';if(!busy&&!demo)request(v);};
$('maSize').oninput=()=>{$('maErr').textContent='';};
$('maReset').onclick=reset;
$('maDemo').onclick=async()=>{
  reset();demo=true;render();
  say({{ lesson_strings.s128cdec72d17 | jsonify }});await sleep(1200);
  for(const n of [20,15,10,25,10]){await request(n);await sleep(500);}
  demo=true;render();
  say({{ lesson_strings.sc7d8d7550b4a | jsonify }});await sleep(1500);
  free(1);await sleep(900);free(3);await sleep(1600);
  say(`{% include js-text.html key="sb9f80b62cae7" %}${NAME[strat]}{% include js-text.html key="s28d60366a43a" %}`);await sleep(1500);
  await request(18);await sleep(1800);
  say({{ lesson_strings.s6f24445a4b44 | jsonify }});await sleep(1500);
  await request(30);
  demo=false;render();
};
document.querySelectorAll('.ma [data-s]').forEach(b=>b.onclick=()=>{if(busy||demo)return;document.querySelectorAll('.ma [data-s]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');strat=b.dataset.s;say(`${NAME[strat]}{% include js-text.html key="s508079d5d7e7" %}`);});
reset();
})();
