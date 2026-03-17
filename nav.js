(function () {
  /* Nav scroll shadow */
  var nav = document.getElementById('nav');
  window.addEventListener('scroll', function () {
    if (nav) nav.style.boxShadow = window.scrollY > 20 ? '0 2px 24px rgba(0,0,0,.35)' : '';
  }, { passive: true });

  /* Hamburger */
  var hbg = document.getElementById('hbg');
  var mob = document.getElementById('mob');
  if (hbg && mob) {
    hbg.addEventListener('click', function () {
      var open = mob.classList.toggle('open');
      hbg.classList.toggle('open', open);
      hbg.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  window.closeMob = function () {
    if (mob) mob.classList.remove('open');
    if (hbg) { hbg.classList.remove('open'); hbg.setAttribute('aria-expanded', 'false'); }
    document.body.style.overflow = '';
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMob();
  });

  /* Active link */
  var page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.n-links a').forEach(function (a) {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  /* Scroll reveal */
  var els = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) e.target.classList.add('on'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { obs.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('on'); });
  }
})();
