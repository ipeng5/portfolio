// show the arrow 2s after page load
window.onload = function () {
  setTimeout(function () {
    arrow.classList.remove('hidden-arrow');
  }, 1500);
};

// hide and show nav bar on scroll
let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  const navbar = document.querySelector('#navbar');
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = '0';
  } else {
    navbar.style.top = '-100px';
  }
  prevScrollPos = currentScrollPos;
};

//project data
const projects = [
  {
    img: 'assets/shop.png',
    name: 'Me Fashion E-commer Page',
    info: 'This project is..',
    tools: 'React, Sass',
    github: 'https://github.com/ipeng5/me-fashion',
    live: 'https://ipeng5.github.io/me-fashion',
  },
  {
    img: 'assets/todo.png',
    name: 'Todo List App',
    info: 'This project is..',
    tools: 'HTML&nbsp;&nbsp;|&nbsp;&nbsp;CSS&nbsp;&nbsp;|&nbsp;&nbsp;Sass',
    github: 'https://github.com/ipeng5/todo',
    live: 'https://ipeng5.github.io/todo',
  },
  {
    img: 'assets/weather.png',
    name: 'My Sky Weather App',
    info: 'This project is..',
    tools: 'HTML&nbsp;&nbsp;|&nbsp;&nbsp;CSS&nbsp;&nbsp;|&nbsp;&nbsp;Sass',
    github: 'https://github.com/ipeng5/my-sky',
    live: 'https://mysky.netlify.app/',
  },
  {
    img: 'assets/etch.png',
    name: 'Pixel Art Maker',
    info: 'This project is..',
    tools: 'HTML&nbsp;&nbsp;|&nbsp;&nbsp;CSS&nbsp;&nbsp;|&nbsp;&nbsp;Sass',
    github: 'https://github.com/ipeng5/etch-a-sketch',
    live: 'https://ipeng5.github.io/etch-a-sketch',
  },
];

// render projects
const renderProjects = (() => {
  const container = document.querySelector('#project-container');
  projects.map(p => container.insertAdjacentHTML('beforeend', generateMarkUp(p)));
})();

function generateMarkUp(p) {
  return `
     <div class="project-wrapper hidden-y fade-in">
          <a class="img-box overflow-hidden cursor-pointer bg-black opacity-60 hover:opacity-95 transition duration-1000"  href="${p.live}" target="_blank" rel="noreferrer"><img src="${p.img}" alt="screenshot" class="hover:scale-105 transition duration-1000"></a>
          <div class="project-info">
            <h4>${p.name}</h4>
            <div class="bg-[#151515] opacity-95 py-4 px-8 flex flex-col gap-6">
              <p>${p.info}</p>
              <p class="tools">${p.tools}</p>
            </div>
            <ul class="project-links">
              <li>
                <a class="btn" href="${p.live}" target="_blank" rel="noreferrer"><span>Live Site</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 17.65 5.35 16.6l9.85-9.85H6.25v-1.5h11.5v11.5h-1.5V7.8Z"/></svg>
                </a>
              </li>
              <li>
                <a class="btn" href="${p.github}" target="_blank" rel="noreferrer"><span>Github</span>

               <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 17.65 5.35 16.6l9.85-9.85H6.25v-1.5h11.5v11.5h-1.5V7.8Z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
  `;
}

// animations on scroll
const allHidden = document.querySelectorAll('.fade-in');

const revealSection = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    if (entry.target.classList.contains('hidden-y'))
      entry.target.classList.remove('hidden-y--hidden');
    else entry.target.classList.contains('hidden-z');
    entry.target.classList.remove('hidden-z--hidden');
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allHidden.forEach(el => {
  sectionObserver.observe(el);
  if (el.classList.contains('hidden-y')) el.classList.add('hidden-y--hidden');
  else el.classList.add('hidden-z--hidden');
});
