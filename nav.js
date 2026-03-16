/* AHWAD — Shared nav & reveal script */

// Nav scroll
var nav=document.getElementById('nav');
if(nav){
  window.addEventListener('scroll',function(){
    nav.classList.toggle('sc',window.scrollY>55);
  },{passive:true});
}

// Mobile menu
var hbg=document.getElementById('hbg'),mob=document.getElementById('mob');
if(hbg&&mob){
  hbg.addEventListener('click',function(){
    var open=mob.classList.toggle('open');
    hbg.classList.toggle('open',open);
    hbg.setAttribute('aria-expanded',open);
    document.body.style.overflow=open?'hidden':'';
  });
}
function closeMenu(){
  if(mob)mob.classList.remove('open');
  if(hbg){hbg.classList.remove('open');hbg.setAttribute('aria-expanded','false');}
  document.body.style.overflow='';
}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});

// Scroll reveal
var rvEls=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('on');});
  },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
  rvEls.forEach(function(r){obs.observe(r);});
}else{
  rvEls.forEach(function(r){r.classList.add('on');});
}

// Mark active nav link
(function(){
  var path=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a,.mob a').forEach(function(a){
    var href=a.getAttribute('href');
    if(href===path||(path===''&&href==='index.html')){
      a.classList.add('active');
    }
  });
})();
