document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburger');
  const sidebar = document.querySelector('.left');
  const overlay = document.getElementById('nav-overlay');
  const nav = document.getElementById('main-nav');

  if (!btn || !sidebar || !overlay || !nav) return;

  function openMenu() {
    sidebar.classList.add('open');
    btn.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    sidebar.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    overlay.hidden = true;
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', function () {
    if (sidebar.classList.contains('open')) closeMenu();
    else openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && sidebar.classList.contains('open')) {
      closeMenu();
      btn.focus();
    }
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      closeMenu();
    }
  });
});
