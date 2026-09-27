document.documentElement.classList.add('js');
const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
button.hidden = false;
button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); button.querySelector('span').textContent = open ? '−' : '＋'; });
document.addEventListener('keydown', (event) => { if(event.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); button.setAttribute('aria-expanded','false'); button.querySelector('span').textContent = '＋'; button.focus(); } });
document.querySelectorAll('[data-year]').forEach(element => element.textContent = new Date().getFullYear());
