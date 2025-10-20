// makes sure the HTML document is fully loaded before running any code
document.addEventListener('DOMContentLoaded', function () {
  // grabbing elements and defining them as variables for functions 
  const btn = document.getElementById('hamburger');
  const sidebar = document.querySelector('.left');
  const overlay = document.getElementById('nav-overlay');
  const nav = document.getElementById('main-nav');
  // Error check to make sure we have the elements if not we stop reading the code
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

  // If sidebar is open and button is clicked close menu, else sidebar is closed so we open
  btn.addEventListener('click', function () {
    if (sidebar.classList.contains('open')) closeMenu();
    else openMenu();
  });
  
  // If user clicks outside nav menu it closes
  overlay.addEventListener('click', closeMenu);
  // If user clicks a link it will close the menu automatically
  nav.addEventListener('click', function (e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      closeMenu();
    }
  });
});
