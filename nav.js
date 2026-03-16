/* AHWAD nav.js — shared across all pages */
(function(){
  // Nav scroll shadow
  var nav=document.getElementById('nav');
  if(nav){
    window.addEventListener('scroll',function(){
      nav.classList.toggle('scrolled',window.scrollY>40);
    },{passive:true});
  }
  // Hamburger
  var hbg=document.getElementById('hbg'),mob=document.getElementById('mob');
  if(hbg&&mob){
    hbg.addEventListener('click',function(){
      var o=mob.classList.toggle('open');
      hbg.classList.toggle('open',o);
      hbg.setAttribute('aria-expanded',String(o));
      document.body.style.overflow=o?'hidden':'';
    });
  }
  // Close menu
  window.closeMenu=function(){
    if(mob)mob.classList.remove('open');
    if(hbg){hbg.classList.remove('open');hbg.setAttribute('aria-expanded','false');}
    document.body.style.overflow='';
  };
  document.addEventListener('keydown',function(e){if(e.key==='Escape')closeMenu();});
  // Active link
  var path=window.location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a,.mob a').forEach(function(a){
    if(a.getAttribute('href')===path)a.classList.add('active');
  });
  // Scroll reveal
  var rvEls=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var obs=new IntersectionObserver(function(entries){
      entries.forEach(function(e){if(e.isIntersecting)e.target.classList.add('on');});
    },{threshold:.1,rootMargin:'0px 0px -40px 0px'});
    rvEls.forEach(function(r){obs.observe(r);});
  }else{rvEls.forEach(function(r){r.classList.add('on');});}
})();
