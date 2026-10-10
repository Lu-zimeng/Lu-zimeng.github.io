document.documentElement.classList.add('js');
const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
button.hidden = false;
button.addEventListener('click', () => { const open = button.getAttribute('aria-expanded') !== 'true'; button.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); button.querySelector('span').textContent = open ? '−' : '＋'; });
document.addEventListener('keydown', (event) => { if(event.key === 'Escape' && nav.classList.contains('open')) { nav.classList.remove('open'); button.setAttribute('aria-expanded','false'); button.querySelector('span').textContent = '＋'; button.focus(); } });
document.querySelectorAll('[data-year]').forEach(element => element.textContent = new Date().getFullYear());

const hero = document.querySelector('.hero');
if (hero) { const updateRail = () => document.body.classList.toggle('show-rail', hero.getBoundingClientRect().bottom < 100); window.addEventListener('scroll',updateRail,{passive:true}); updateRail(); } else { document.body.classList.add('show-rail'); }

const researchLinks = [...document.querySelectorAll('.timeline-link')];
if (researchLinks.length) {
  const projects = researchLinks.map(link => document.querySelector(link.getAttribute('href')));
  const markProject = id => researchLinks.forEach(link => {
    if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  let clicking = false;
  researchLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const project = document.querySelector(link.hash);
    clicking = true;
    markProject(project.id);
    const rect = project.getBoundingClientRect();
    scrollTo({top: Math.max(0, scrollY + rect.top + rect.height / 2 - innerHeight / 2), behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
    history.replaceState(null, '', link.hash);
    setTimeout(() => { clicking = false; }, 700);
  }));
  let pending = false;
  const updateProject = () => {
    pending = false;
    if (clicking) return;
    const center = innerHeight / 2;
    const nearest = projects.reduce((best, project) => {
      const box = project.getBoundingClientRect();
      const distance = Math.abs((box.top + box.bottom) / 2 - center);
      return distance < best.distance ? {project, distance} : best;
    }, {project: projects[0], distance: Infinity});
    markProject(nearest.project.id);
  };
  addEventListener('scroll', () => { if (!pending) { pending = true; requestAnimationFrame(updateProject); } }, {passive:true});
  updateProject();
}

// Pointer movement scrolls the index alone; project navigation requires a click.
const index = document.querySelector('.research-index');
if (index) {
  let pointerSpeed = 0, speed = 0, frame = 0, lastTime = 0;
  const tick = time => {
    const elapsed = lastTime ? Math.min(time - lastTime, 40) / 1000 : 0;
    lastTime = time;
    speed += (pointerSpeed - speed) * Math.min(1, elapsed * 10);
    index.scrollTop += speed * elapsed;
    if (Math.abs(speed) > 1 || Math.abs(pointerSpeed) > 1) frame = requestAnimationFrame(tick);
    else { frame = 0; lastTime = 0; }
  };
  index.addEventListener('pointermove', event => {
    if (event.pointerType !== 'mouse' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const box = index.getBoundingClientRect();
    const position = (event.clientY - box.top) / box.height;
    pointerSpeed = position < .3 ? -180 * (.3 - position) / .3 : position > .7 ? 180 * (position - .7) / .3 : 0;
    if (!frame) frame = requestAnimationFrame(tick);
  });
  index.addEventListener('pointerleave', () => { pointerSpeed = 0; });
  index.addEventListener('wheel', event => {
    if (index.scrollHeight > index.clientHeight) {
      event.preventDefault();
      index.scrollTop += event.deltaY;
    }
  }, {passive:false});
}
