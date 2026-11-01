
(() => {
const $=id=>document.getElementById(id);
const X0=70,X1=665;
let bus='i2c',M=null,k=0,timer=null;
const hx=s=>{const t=s.trim();return /^(0x)?[0-9a-f]{1,2}$/i.test(t)?parseInt(t.replace(/^0x/i,''),16):null;};
const H=v=>'0x'+v.toString(16).toUpperCase().padStart(2,'0');
function buildI2C(addr,data){
  const sig={SCL:[],SDA:[]},drv=[],samp=[],steps=[],groups=[];
  const put=(c,d,w)=>{sig.SCL.push(c);sig.SDA.push(d);drv.push(w);};
  const grp=(u0,l,c)=>groups.push({u0,u1:sig.SCL.length,l,c});
  put(1,1,'m');put(1,1,'m');
  let u=sig.SCL.length;put(1,0,'m');steps.push({u1:sig.SCL.length,msg:{{ lesson_strings.s6a7aa7fa622c | jsonify }}});grp(u,{{ lesson_strings.s53f6f943a9b8 | jsonify }},'#D85A30');
  const bit=(v,w,msg,rx)=>{put(0,v,w);samp.push(sig.SCL.length);put(1,v,w);steps.push({u1:sig.SCL.length,msg,rx});};
  u=sig.SCL.length;
  for(let i=6;i>=0;i--){const v=(addr>>i)&1;bit(v,'m',i===6?`{% include js-text.html key="sd151fa52f43e" %}${v}{% include js-text.html key="sbd1fdeee8173" %}`:`{% include js-text.html key="sffe3564f46ad" %}${i} = ${v}`,['a',v]);}
  grp(u,`{% include js-text.html key="s04528b9889ef" %}${H(addr)}`,'#185FA5');
  u=sig.SCL.length;bit(0,'m',{{ lesson_strings.sfae141b42daf | jsonify }});grp(u,'W','#185FA5');
  u=sig.SCL.length;bit(0,'s',`{% include js-text.html key="sfb283b6e2e88" %}${H(addr)}{% include js-text.html key="s4ed1c6670f50" %}`);grp(u,'ACK','#7F77DD');
  u=sig.SCL.length;
  for(let i=7;i>=0;i--){const v=(data>>i)&1;bit(v,'m',i===7?`{% include js-text.html key="s87e1ad4d2bb1" %}${v}{% include js-text.html key="sc76aa55c1caa" %}`:`{% include js-text.html key="s90353c3d353a" %}${i} = ${v}`,['d',v]);}
  grp(u,`{% include js-text.html key="s9f71acc9749c" %}${H(data)}`,'#185FA5');
  u=sig.SCL.length;bit(0,'s',{{ lesson_strings.sb158e85c461a | jsonify }});grp(u,'ACK','#7F77DD');
  u=sig.SCL.length;put(0,0,'m');put(1,0,'m');put(1,1,'m');steps.push({u1:sig.SCL.length,msg:{{ lesson_strings.sd7b2c1420255 | jsonify }}});grp(u,{{ lesson_strings.s8241f385c059 | jsonify }},'#D85A30');
  put(1,1,'m');
  return {names:['SCL','SDA'],sig,drv,dataRow:'SDA',samp,steps,groups,units:sig.SCL.length,
    regs:[['a',7,{{ lesson_strings.sc54f6858a65e | jsonify }}],['d',8,{{ lesson_strings.s94d55e850cc5 | jsonify }}]],
    leg:{{ lesson_strings.s2589c24d64be | jsonify }}};
}
function buildSPI(mo,mi){
  const sig={CS:[],SCK:[],MOSI:[],MISO:[]},drv=[],samp=[],steps=[],groups=[];
  const put=(c,s,a,b)=>{sig.CS.push(c);sig.SCK.push(s);sig.MOSI.push(a);sig.MISO.push(b);drv.push('m');};
  const grp=(u0,l,c)=>groups.push({u0,u1:sig.CS.length,l,c});
  put(1,0,null,null);put(1,0,null,null);
  let u=sig.CS.length;put(0,0,null,null);steps.push({u1:sig.CS.length,msg:{{ lesson_strings.seeb430e8e9b1 | jsonify }}});grp(u,{{ lesson_strings.s2a900fa8be2a | jsonify }},'#D85A30');
  u=sig.CS.length;
  for(let i=7;i>=0;i--){const a=(mo>>i)&1,b=(mi>>i)&1;put(0,0,a,b);samp.push(sig.CS.length);put(0,1,a,b);
    steps.push({u1:sig.CS.length,msg:i===7?`{% include js-text.html key="s412ff07b9a2f" %}${a}{% include js-text.html key="s111631f240b0" %}${b}{% include js-text.html key="s07a05bd2f99e" %}`:`{% include js-text.html key="s3ff8460dd6d7" %}${i}: MOSI ${a}, MISO ${b}`,rx2:[a,b]});}
  grp(u,{{ lesson_strings.s2d54cd271de6 | jsonify }},'#185FA5');
  u=sig.CS.length;put(0,0,null,null);put(1,0,null,null);steps.push({u1:sig.CS.length,msg:{{ lesson_strings.s02c0853f7a5f | jsonify }}});grp(u,{{ lesson_strings.sbceeddd45c9d | jsonify }},'#D85A30');
  put(1,0,null,null);
  return {names:['CS','SCK','MOSI','MISO'],sig,drv,dataRow:'MOSI',samp,steps,groups,units:sig.CS.length,
    regs:[['so',8,{{ lesson_strings.sfe738be3d5df | jsonify }}],['mi',8,{{ lesson_strings.s077db3f451a0 | jsonify }}]],
    leg:{{ lesson_strings.sceea49db82b5 | jsonify }}};
}
function build(){
  stop();let a,b;
  if(bus==='i2c'){a=hx($('bsAddr').value);b=hx($('bsData').value);
    if(a===null||a>0x7F||b===null){$('bsErr').textContent={{ lesson_strings.s64803a5a70ce | jsonify }};return;}
    M=buildI2C(a,b);}
  else{a=hx($('bsMosi').value);b=hx($('bsMiso').value);
    if(a===null||b===null){$('bsErr').textContent={{ lesson_strings.scd2b7a094c7d | jsonify }};return;}
    M=buildSPI(a,b);}
  $('bsErr').textContent='';k=0;$('bsLeg').innerHTML=M.leg;draw();
}
function draw(){
  const n=M.units,w=(X1-X0)/n,rev=k?M.steps[k-1].u1:0,rows=M.names.length,rh=Math.min(52,190/rows),top=46;
  let h='';
  M.groups.forEach(g=>{const x0=X0+g.u0*w,x1=X0+g.u1*w,on=g.u1<=rev;
    h+=`<rect x="${x0+1}" y="${top-8}" width="${x1-x0-2}" height="${rows*rh+4}" rx="4" fill="${g.c}" opacity="${on?.1:.04}"/>`;
    h+=`<text x="${(x0+x1)/2}" y="${top-14}" text-anchor="middle" font-size="12" fill="${on?'var(--text-primary)':'var(--text-muted)'}">${g.l}</text>`;});
  M.names.forEach((nm,r)=>{
    const yH=top+r*rh+6,yL=top+r*rh+rh-14,ym=(yH+yL)/2,L=M.sig[nm];
    h+=`<text x="${X0-10}" y="${ym+4}" text-anchor="end" font-size="13" font-weight="500" fill="var(--text-primary)">${nm}</text>`;
    for(let i=0;i<n;i++){
      const v=L[i],x0=X0+i*w,x1=x0+w,on=i<rev;
      let col='#185FA5';if(nm==='MISO'||(nm==='SDA'&&M.drv[i]==='s'))col='#7F77DD';
      const op=on?1:.22,sw=on?2.2:1.6;
      if(v===null){h+=`<line x1="${x0}" y1="${ym}" x2="${x1}" y2="${ym}" stroke="var(--text-muted)" stroke-width="1.5" stroke-dasharray="3 3" opacity="${op}"/>`;}
      else{const y=v?yH:yL;h+=`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="${col}" stroke-width="${sw}" opacity="${op}"/>`;}
      if(i>0){const p=L[i-1];if(p!==v){const ya=p===null?ym:(p?yH:yL),yb=v===null?ym:(v?yH:yL);h+=`<line x1="${x0}" y1="${ya}" x2="${x0}" y2="${yb}" stroke="${v===null?'var(--text-muted)':col}" stroke-width="${sw}" opacity="${op}"/>`;}}
    }
    if(nm===M.dataRow||nm==='MISO')M.samp.forEach(si=>{if(si<rev){const v=L[si];if(v!==null)h+=`<circle cx="${X0+si*w+w/2}" cy="${v?yH:yL}" r="4" fill="#E8A317"/>`;}});
  });
  if(k&&k<M.steps.length)h+=`<line x1="${X0+rev*w}" y1="${top-6}" x2="${X0+rev*w}" y2="${top+rows*rh}" stroke="#E8A317" stroke-width="1.5"/>`;
  $('bsSvg').innerHTML=h;
  const got={a:[],d:[],so:[],mi:[]};
  M.steps.slice(0,k).forEach(s=>{if(s.rx)got[s.rx[0]].push(s.rx[1]);if(s.rx2){got.so.push(s.rx2[0]);got.mi.push(s.rx2[1]);}});
  $('bsRegs').innerHTML=M.regs.map(([key,len,lbl])=>{const g=got[key],full=g.length===len;
    return `<div class="reg"><span>${lbl}</span><b>${g.join('')}${'_'.repeat(len-g.length)}</b>${full?` <b>= ${H(parseInt(g.join(''),2))}</b>`:''}</div>`;}).join('');
  $('bsMsg').textContent=k?M.steps[k-1].msg:{{ lesson_strings.s9e7bef4459ea | jsonify }};
  $('bsStep').disabled=k>=M.steps.length;
}
function step(){if(k<M.steps.length){k++;draw();}if(k>=M.steps.length)stop();}
function stop(){clearInterval(timer);timer=null;$('bsAll').textContent={{ lesson_strings.s3b109e100103 | jsonify }};}
$('bsStep').onclick=()=>{stop();step();};
$('bsAll').onclick=()=>{if(timer){stop();return;}if(k>=M.steps.length){k=0;draw();}timer=setInterval(step,550);$('bsAll').textContent={{ lesson_strings.s8241f385c059 | jsonify }};};
$('bsReset').onclick=()=>{stop();k=0;draw();};
document.querySelectorAll('.bs [data-b]').forEach(b=>b.onclick=()=>{document.querySelectorAll('.bs [data-b]').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');bus=b.dataset.b;$('bsI2c').style.display=bus==='i2c'?'':'none';$('bsSpi').style.display=bus==='spi'?'':'none';build();});
['bsAddr','bsData','bsMosi','bsMiso'].forEach(id=>$(id).onchange=build);
build();
})();
