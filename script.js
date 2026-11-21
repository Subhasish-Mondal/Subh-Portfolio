/* Subhasish Mondal | Portfolio: behaviour
   Background animation, theme switch, projects, awards, avatar, menu and resume button. */
var $=function(i){return document.getElementById(i)},root=document.documentElement,EMAIL="subhasish1817@gmail.com";
/* Background: a circuit grid with signal pulses; nodes light up near the cursor */
(function(){var cv=$("bg"),c=cv.getContext("2d"),w,h,S=48,P=[],mx=-999,my=-999,k=0,line="#16302e",acc="#f2b84b",raf,
on=true;
function mk(){var hz=Math.random()<.5;return{h:hz,p:Math.round(Math.random()*((hz?h:w)/S))*S,t:Math.random()*(hz?w:h),v:(.8+Math.random()*1.6)*(Math.random()<.5?-1:1)}}
function size(){var d=Math.min(devicePixelRatio||1,2);w=innerWidth;h=innerHeight;cv.width=w*d;cv.height=h*d;c.setTransform(d,0,0,d,0,0);P=[];for(var i=0;i<Math.round(w/60)+8;i++)P.push(mk())}
function css(n){return getComputedStyle(root).getPropertyValue(n).trim()}
function sync(){line=css("--grid");acc=css("--accent")}
function frame(){k++;
c.clearRect(0,0,w,h);c.globalAlpha=1;c.strokeStyle=line;c.lineWidth=1;c.beginPath();
for(var x=0;x<=w;x+=S){c.moveTo(x+.5,0);c.lineTo(x+.5,h)}for(var y=0;y<=h;y+=S){c.moveTo(0,y+.5);c.lineTo(w,y+.5)}c.stroke();
c.fillStyle=acc;for(x=0;x<=w;x+=S)for(y=0;y<=h;y+=S){var d=Math.hypot(x-mx,y-my);if(d<150){c.globalAlpha=1-d/150;c.beginPath();c.arc(x,y,3,0,6.283);c.fill()}}
c.lineWidth=2.5;c.globalAlpha=.95;
P.forEach(function(p){p.t+=p.v;var lim=p.h?w:h;if(p.t<-80||p.t>lim+80){var q=mk();p.h=q.h;p.p=q.p;p.v=q.v;p.t=p.v>0?-40:lim+40;lim=p.h?w:h}
var x1=p.h?p.t:p.p,y1=p.h?p.p:p.t,x2=p.h?p.t-p.v*20:p.p,y2=p.h?p.p:p.t-p.v*20,g=c.createLinearGradient(x1,y1,x2,y2);
g.addColorStop(0,acc);g.addColorStop(1,acc+"00");c.strokeStyle=g;c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke()});
c.globalAlpha=1;if(on)raf=requestAnimationFrame(frame)}
function label(){root.dataset.motion=on?"on":"off"}
addEventListener("resize",size);addEventListener("pointermove",function(e){mx=e.clientX;my=e.clientY});
window.toggleMotion=function(){on=!on;label();cancelAnimationFrame(raf);if(on)frame()};
window.refreshBg=function(){sync();if(!on)frame()};
label();size();sync();frame()})();

/* Scroll progress */
addEventListener("scroll",function(){var m=root.scrollHeight-innerHeight;$("bar").style.width=(m>0?scrollY/m*100:0)+"%"},{passive:true});
/* Name scramble: runs on load and when you hover or tap the name */
var nm=$("name"),FINAL="Subhasish Mondal",GL="ABCDEFGHJKLMNPQRSTUVWXYZ0123456789",busy=false;
function scramble(){if(busy)return;busy=true;var i=0,t=setInterval(function(){
nm.textContent=FINAL.split("").map(function(ch,j){return ch===" "||j<i?ch:GL[Math.floor(Math.random()*GL.length)]}).join("");
i+=.4;if(i>=FINAL.length){clearInterval(t);nm.textContent=FINAL;busy=false}},35)}
nm.addEventListener("mouseenter",scramble);nm.addEventListener("click",scramble);setTimeout(scramble,400);
/* Typewriter role */
(function(){var R=["Computer Science Engineer","AI/ML Enthusiast","Python Programmer","Front-end Developer"],el=$("role"),cur='<span class="caret"></span>';
/* Typing keeps running even when the device asks to reduce motion: it only swaps text, nothing moves */
var i=0,n=0,del=false;(function tick(){var wd=R[i];n+=del?-1:1;el.innerHTML=wd.slice(0,n)+cur;var t=del?35:85;
if(!del&&n===wd.length){del=true;t=1400}else if(del&&n===0){del=false;i=(i+1)%R.length;t=300}setTimeout(tick,t)})()})();
/* Hero avatar: tilts toward the cursor and the eyes follow it */
(function(){var st=$("av"),ir=document.querySelectorAll(".iris");
addEventListener("pointermove",function(e){var r=st.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,
dx=Math.max(-1,Math.min(1,(e.clientX-cx)/(innerWidth/2))),dy=Math.max(-1,Math.min(1,(e.clientY-cy)/(innerHeight/2)));
st.style.transform="rotateY("+(dx*10)+"deg) rotateX("+(-dy*7)+"deg)";
ir.forEach(function(el){el.style.transform="translate("+(dx*13)+"%,"+(dy*10)+"%)"})})})();
/* Count-up stats */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;io.unobserve(e.target);
var el=e.target,to=+el.dataset.n,s=null;function st(ts){s=s||ts;var p=Math.min((ts-s)/1000,1);el.textContent=Math.round(to*p);if(p<1)requestAnimationFrame(st)}requestAnimationFrame(st)})});
document.querySelectorAll("[data-n]").forEach(function(e){io.observe(e)});
/* Projects: tabs + search + detail dialog */
var PR=[
{t:"Medicinal Plant Identification System using Machine Learning",c:"AI",y:"2025",s:"Recognises and classifies medicinal plants and raw materials from their morphology.",d:"Developed an efficient system for recognising and classifying medicinal plants and raw materials based on morphological characteristics, using image processing techniques.",f:["Image processing on morphological characteristics","Different ML algorithms used to improve classification accuracy","Adaptable to various plant species"],k:["Image Processing","Machine Learning"],doi:"10.2991/978-94-6239-628-9_5"},
{t:"AI Based Human Detection System for Queue Data Analysis",c:"AI",y:"2024",s:"Detects and tracks people in video to estimate queue size and movement.",d:"An AI-based human detection system using YOLO, OpenCV and Python to detect and analyse people in queue environments from video streams.",f:["Real-time detection and tracking to estimate queue size and monitor movement","Extracts queue-related data from video footage","Vision-based pipeline for automated queue monitoring and crowd analytics"],k:["YOLO","OpenCV","Python"],doi:"10.55041/IJSREM40695"},
{t:"Agricultural and Aerial Surveillance Drone",c:"Hardware",y:"2023",s:"Drone for aerial surveillance and fertiliser spraying, built on a Raspberry Pi.",d:"A drone-based system designed for aerial surveillance and fertiliser spraying, using Raspberry Pi and drone technology.",f:["Aerial surveillance and fertiliser spraying","Precision agriculture to improve farming efficiency and productivity","Aims to optimise crop yields and reduce waste"],k:["Raspberry Pi","Drone Technology"]}];
var cat="All",q="",tabs=$("tabs"),grid=$("grid");
tabs.innerHTML=["All","AI","Hardware"].map(function(x){return '<button class="tab" data-c="'+x+'" aria-pressed="'+(x==="All")+'">'+x+'</button>'}).join("")+'<input class="search" id="q" placeholder="Search tools, e.g. YOLO" aria-label="Search projects">';
function draw(){var L=PR.filter(function(p){return(cat==="All"||p.c===cat)&&(p.t+" "+p.s+" "+p.k.join(" ")).toLowerCase().indexOf(q)>-1});
grid.innerHTML=L.length?L.map(function(p){return '<button class="card" data-i="'+PR.indexOf(p)+'"><h3>'+p.t+'</h3><p>'+p.s+'</p><span class="chips">'+p.k.map(function(x){return '<span class="chip">'+x+'</span>'}).join("")+'</span></button>'}).join(""):'<p class="empty">No project matches that. Try another word or tab.</p>'}
tabs.addEventListener("click",function(e){var b=e.target.closest("[data-c]");if(!b)return;cat=b.dataset.c;tabs.querySelectorAll(".tab").forEach(function(t){t.setAttribute("aria-pressed",t===b)});draw()});
$("q").addEventListener("input",function(){q=this.value.trim().toLowerCase();draw()});
grid.addEventListener("click",function(e){var b=e.target.closest("[data-i]");if(!b)return;var p=PR[+b.dataset.i];
$("dlg-body").innerHTML='<h3>'+p.t+'</h3><p class="note">'+p.y+'</p><p>'+p.d+'</p><ul>'+p.f.map(function(x){return '<li>'+x+'</li>'}).join("")+'</ul><span class="chips">'+p.k.map(function(x){return '<span class="chip">'+x+'</span>'}).join("")+'</span>'+(p.doi?'<p><a class="btn" href="https://doi.org/'+p.doi+'" target="_blank" rel="noopener">Related paper</a></p>':'')+'<div class="row"><button class="btn pri" id="close-dlg">Close</button></div>';
$("dlg").showModal();$("close-dlg").onclick=function(){$("dlg").close()}});
$("dlg").addEventListener("click",function(e){if(e.target===this)this.close()});
draw();
/* Research list */
var RS=[
{t:"Identification of Medicinal Plants Through Image Processing Using Machine Learning Algorithms",a:"Saurabh Sarkar, Rishabh Singh, Subhasish Mondal, Sogi Manasa",v:"Springer Nature",y:"2026",doi:"10.2991/978-94-6239-628-9_5"},
{t:"Real-Time Queue Detection and Management System Using YOLO Object Detection",a:"Amarnath JL, Pragnyan Satapathy, Manaswi Patil, Subhasish Mondal, Gaurav Prasad",v:"",y:"2025",doi:"10.55041/IJSREM40695"}];
$("pubs").innerHTML=RS.map(function(r){return '<article><h3>'+r.t+'</h3><p>'+r.a.replace("Subhasish Mondal","<b>Subhasish Mondal</b>")+'</p><div class="meta">'+(r.v?'<span class="chip">'+r.v+'</span>':'')+'<span class="chip">'+r.y+'</span></div><p><a class="btn" href="https://doi.org/'+r.doi+'" target="_blank" rel="noopener">Read the paper</a></p></article>'}).join("");
/* Awards, achievements and courses */
var AW=[
{y:"June 2023",t:"Best Mentor",o:"3rd Innovative Project Expo, Presidency University",c:"Achievement",g:"Best Mentor"},
{y:"April 2023",t:"National Finalist",o:"CODEASHTRA Hackathon, PVPSIT Vijayawada",c:"Hackathon",g:"National finalist"}];
var ac="All",at=$("atabs"),ag=$("agrid");
at.innerHTML=["All","Achievement","Hackathon"].map(function(x){return '<button class="tab" data-c="'+x+'" aria-pressed="'+(x==="All")+'">'+x+'</button>'}).join("");
function adraw(){ag.innerHTML=AW.filter(function(a){return ac==="All"||a.c===ac}).map(function(a){return '<div class="aw"><time>'+a.y+'</time><h3>'+a.t+'</h3><p>'+a.o+'</p>'+'<span class="tag">'+a.g+'</span>'+'</div>'}).join("")}
at.addEventListener("click",function(e){var b=e.target.closest("[data-c]");if(!b)return;ac=b.dataset.c;at.querySelectorAll(".tab").forEach(function(t){t.setAttribute("aria-pressed",t===b)});adraw()});adraw();
/* Mobile menu */
var nav=$("nav"),burger=$("burger");
function menu(o){nav.classList.toggle("open",o);burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Close menu":"Open menu")}
burger.onclick=function(){menu(!nav.classList.contains("open"))};
$("links").addEventListener("click",function(e){if(e.target.closest("a"))menu(false)});

/* Copy email (used by the quick menu) */
function copyEmail(){if(navigator.clipboard)navigator.clipboard.writeText(EMAIL)}
/* Resume: the PDF is stored with the page and opened in a new tab */
var RESUME_URL="resume.pdf";
function openResume(){window.open(RESUME_URL,"_blank","noopener")}
/* Quick menu (Ctrl/Cmd + K) */
var pal=$("pal"),pin=$("pin"),pl=$("plist"),ix=0,AC=[
["Open resume",function(){openResume()}],["Go to Education",function(){location.hash="education"}],["Go to Experience",function(){location.hash="experience"}],["Go to Projects",function(){location.hash="projects"}],["Go to Skills",function(){location.hash="skills"}],["Go to Research",function(){location.hash="research"}],["Go to Awards",function(){location.hash="awards"}],["Go to Contact",function(){location.hash="contact"}],
["Switch light or dark theme",toggleTheme],
["Copy email address",function(){copyEmail()}]],L2=AC;
function pdraw(){var v=pin.value.toLowerCase();L2=AC.filter(function(a){return a[0].toLowerCase().indexOf(v)>-1});ix=0;
pl.innerHTML=L2.map(function(a,i){return '<li role="option" data-i="'+i+'" aria-selected="'+(i===ix)+'">'+a[0]+'</li>'}).join("")||'<li>No match</li>'}
function mark(){pl.querySelectorAll("li").forEach(function(li,i){li.setAttribute("aria-selected",i===ix)})}
function run(i){var a=L2[i];if(!a)return;pal.close();a[1]()}
function openPal(){pin.value="";pdraw();pal.showModal();pin.focus()}
function curTheme(){return root.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark")}
function setThemeLabel(){var t=$("theme-btn"),l=curTheme()==="dark"?"Switch to light theme":"Switch to dark theme";t.setAttribute("aria-label",l);t.title=l}
function toggleTheme(){root.dataset.theme=curTheme()==="dark"?"light":"dark";setThemeLabel();refreshBg()}
$("theme-btn").onclick=toggleTheme;setThemeLabel();
matchMedia("(prefers-color-scheme: light)").addEventListener("change",function(){setThemeLabel();refreshBg()});
addEventListener("keydown",function(e){if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();pal.open?pal.close():openPal()}});
pin.addEventListener("input",pdraw);
pin.addEventListener("keydown",function(e){if(e.key==="ArrowDown"){ix=Math.min(ix+1,L2.length-1);mark();e.preventDefault()}else if(e.key==="ArrowUp"){ix=Math.max(ix-1,0);mark();e.preventDefault()}else if(e.key==="Enter")run(ix)});
pl.addEventListener("click",function(e){var li=e.target.closest("[data-i]");if(li)run(+li.dataset.i)});
pal.addEventListener("click",function(e){if(e.target===this)this.close()});
