
(() => {
const SC=2;let spd=1;const wait=ms=>new Promise(r=>setTimeout(r,ms/spd));
const R=8,CC=16,bit=[],ch=[],cells=[];const dg=document.getElementById('dg');
for(let i=0;i<R*CC;i++){bit.push(Math.random()<.5?1:0);ch.push(1);const d=document.createElement('div');d.className='dc';dg.appendChild(d);cells.push(d);}
function dp(i){cells[i].style.background=bit[i]?`rgba(55,138,221,${(0.2+0.8*ch[i]).toFixed(2)})`:'';}
cells.forEach((_,i)=>dp(i));
let dT=0,row=0;
setInterval(()=>{for(let i=0;i<R*CC;i++)if(bit[i]){ch[i]=Math.max(0.15,ch[i]-0.01);dp(i);}},100);
setInterval(()=>{const pr=(row+R-1)%R;for(let c=0;c<CC;c++)cells[pr*CC+c].classList.remove('rf');for(let c=0;c<CC;c++){const i=row*CC+c;ch[i]=1;dp(i);cells[i].classList.add('rf');}row=(row+1)%R;},260);
function dwrite(){const i=Math.floor(Math.random()*R*CC);bit[i]^=1;ch[i]=1;dp(i);cells[i].classList.add('hit');setTimeout(()=>cells[i].classList.remove('hit'),500);dT+=0.05;document.getElementById('dt').textContent=dT.toFixed(2);document.getElementById('ds').textContent=`{% include js-text.html key="s1ca97b0a220c" %}${Math.floor(i/CC)}, ${i%CC}{% include js-text.html key="s665e03f45638" %}`;}
const B=4,P=6,pages=[],els=[],blks=[],map=[];let spare=3,nT=0,pend=0,q=Promise.resolve();
const nd=document.getElementById('nd');
for(let b=0;b<B;b++){pages.push([]);els.push([]);const bl=document.createElement('div');bl.className='blk';const lb=document.createElement('span');lb.className='lb';bl.appendChild(lb);
for(let p=0;p<P;p++){const L=b<2?b*P+p:null;pages[b].push({s:b<2?'v':'f',L});if(L!==null)map[L]=[b,p];const e=document.createElement('div');e.className='pg';bl.appendChild(e);els[b].push(e);}nd.appendChild(bl);blks.push({bl,lb});}
function paint(b,p){const g=pages[b][p],e=els[b][p];e.className='pg'+(g.s==='v'?' v':g.s==='x'?' x':'');e.innerHTML=`<span>${g.s==='f'?'':'L'+g.L}</span>`;}
function labels(){blks.forEach((k,b)=>k.lb.textContent=`{% include js-text.html key="s77583bf4719e" %}${b}${b===spare?{{ lesson_strings.scbc40b3c8656 | jsonify }}:''}`);}
for(let b=0;b<B;b++)for(let p=0;p<P;p++)paint(b,p);labels();
const NS=t=>document.getElementById('ns').textContent=t;
function addT(u){nT+=u;document.getElementById('nt').textContent=nT.toLocaleString();}
async function prog(b,p,L){const e=els[b][p];e.className='pg';e.innerHTML=`<div class="bar"></div><span>L${L}</span>`;const bar=e.firstChild;void bar.offsetWidth;bar.style.transition=`width ${500*SC/spd}ms linear`;bar.style.width='100%';await wait(500*SC);pages[b][p]={s:'v',L};paint(b,p);addT(500);}
async function rd(b,p){els[b][p].style.outline='2px solid #378ADD';await wait(50*SC);els[b][p].style.outline='';addT(50);}
function free(ex){for(let b=0;b<B;b++){if(b===ex)continue;for(let p=0;p<P;p++)if(pages[b][p].s==='f')return[b,p];}return null;}
async function gc(){let v=-1,mx=-1;for(let b=0;b<B;b++){if(b===spare)continue;const n=pages[b].filter(g=>g.s==='x').length;if(n>mx){mx=n;v=b;}}
NS(`{% include js-text.html key="s3eacb0b85f5d" %}${v}{% include js-text.html key="se6dfb4c3d864" %}${spare}{% include js-text.html key="sf97a2552d0c6" %}`);
for(let p=0;p<P;p++){const g=pages[v][p];if(g.s!=='v')continue;await rd(v,p);const d=pages[spare].findIndex(x=>x.s==='f');await prog(spare,d,g.L);pages[v][p].s='x';paint(v,p);map[g.L]=[spare,d];}
NS(`{% include js-text.html key="sb0632e140582" %}${v}{% include js-text.html key="s36438d0afc0a" %}`);blks[v].bl.classList.add('er');await wait(2000*SC);
for(let p=0;p<P;p++){pages[v][p]={s:'f',L:null};paint(v,p);}blks[v].bl.classList.remove('er');addT(2000);spare=v;labels();}
async function nwrite(){const L=Math.floor(Math.random()*12);let f=free(spare);if(!f){await gc();f=free(spare);}
NS(`{% include js-text.html key="sc43d51f549d3" %}${L}{% include js-text.html key="sad50a721d7c5" %}${f[0]}{% include js-text.html key="s960de1886d4b" %}${f[1]}{% include js-text.html key="sd010cdda8d61" %}`);
const o=map[L];await prog(f[0],f[1],L);pages[o[0]][o[1]].s='x';paint(o[0],o[1]);map[L]=f;
pend--;document.getElementById('nq').textContent=pend;if(!pend)NS({{ lesson_strings.s2fe5164e4fcd | jsonify }});}
function req(){dwrite();pend++;document.getElementById('nq').textContent=pend;q=q.then(nwrite);}
document.getElementById('w1').onclick=req;
document.getElementById('w5').onclick=()=>{for(let k=0;k<5;k++)setTimeout(req,k*60);};
const sb=(v,on,off)=>{spd=v;document.getElementById(on).classList.add('on');document.getElementById(off).classList.remove('on');};
document.getElementById('s1').onclick=()=>sb(1,'s1','s5');document.getElementById('s5').onclick=()=>sb(5,'s5','s1');
})();
