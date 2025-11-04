"use strict";

// Show the arrow 2s after page load
window.onload = function () {
  setTimeout(function () {
    arrow.classList.remove("opacity-0");
  }, 1500);
};

// Navbar animation
const menu = document.querySelector("#menu");
const navWrapper = document.querySelector("#nav-wrapper");

const handleToggleNav = () => {
  navWrapper.classList.toggle("top-[60px]");
  navWrapper.classList.toggle("top-[-105px]");
  menu.classList.toggle("toggle-btn");
};
menu.addEventListener("click", handleToggleNav);

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
  const navbar = document.querySelector("#navbar");
  const currentScrollPos = window.pageYOffset;
  if (window.screen.availWidth > 580) {
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-80px";
    }
  } else {
    if (prevScrollPos !== currentScrollPos) {
      navWrapper.classList.add("top-[-105px]");
      navWrapper.classList.remove("top-[60px]");
      menu.classList.remove("toggle-btn");
    }
  }
  prevScrollPos = currentScrollPos;
};

// Project data
const projects = [
  {
    img: "assets/expnza.png",
    name: "Expnza",
    info: "A full-stack personal spending tracker that allows users to track expenses and income with detailed categories, visual charts and analytics, and Excel export functionality.",
    tools: "Built with: React, Node.js, Express, MongoDB and Tailwind CSS",
    github: "https://github.com/ipeng5/expnza-spending-tracker",
    live: "https://expnza-frontend.onrender.com/",
  },
  {
    img: "assets/yum.png",
    name: "Yum Book",
    info: "A recipe book app that allows users to find new recipes (consuming API) or upload and manage (edit/delete) their own recipes (Firebase authentication, Firestore & storage).",
    tools: "Built with: Next.js, Tailwind CSS, Framer Motion and HeadlessUI",
    github: "https://github.com/ipeng5/yum-book",
    live: "https://yum-book.vercel.app/",
  },
  {
    img: "assets/shop.png",
    name: "Me Fashion",
    info: `Me Fashion is an e-commerce shopping website that allows users to browse and order products.`,
    tools: "Built with: React, Sass, and Framer Motion",
    github: "https://github.com/ipeng5/me-fashion",
    live: "https://ipeng5.github.io/me-fashion",
  },
  {
    img: "assets/todo.png",
    name: "todo",
    info: "A todo list app that lets users easily organize their projects and tasks. Available also in dark mode.",
    tools: "Built with: JavaScript, Sass and HTML",
    github: "https://github.com/ipeng5/todo",
    live: "https://todo-list-today.netlify.app/",
  },

  {
    img: "assets/weather.png",
    name: "My Sky",
    info: "My Sky is a weather forecast site that provides users with information based on their location or search results.",
    tools: "Built with: JavaScript, Sass and HTML",
    github: "https://github.com/ipeng5/my-sky",
    live: "https://mysky.netlify.app/",
  },
];

// Render projects
const renderProjects = (() => {
  const container = document.querySelector("#project-container");
  projects.map((p) =>
    container.insertAdjacentHTML("beforeend", generateMarkUp(p))
  );
})();

function generateMarkUp(p) {
  return `
     <div class="project-wrapper hidden-y fade-in">
          <a class="img-box overflow-hidden cursor-pointer bg-black opacity-60 hover:opacity-95 transition duration-1000"  href="${p.live}" target="_blank" rel="noreferrer"><img src="${p.img}" alt="screenshot" class="hover:scale-105 transition duration-1000"></a>
          <div class="project-info">
            <h4>${p.name}</h4>
            <div class="bg-[#151515] opacity-95 px-4 py-6 md:p-8 flex flex-col gap-6 pointer-events-auto">
              <p>${p.info}</p>
              <p class="tools italic">${p.tools}</p>
            </div>
            <ul class="project-links">
              <li>
                <a class="btn" href="${p.live}" target="_blank" rel="noreferrer"><span class="pointer-events-auto">Live Site</span>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 17.65 5.35 16.6l9.85-9.85H6.25v-1.5h11.5v11.5h-1.5V7.8Z"/></svg>
                </a>
              </li>
              <li>
                <a class="btn" href="${p.github}" target="_blank" rel="noreferrer"><span class="pointer-events-auto">Github</span>

               <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.4 17.65 5.35 16.6l9.85-9.85H6.25v-1.5h11.5v11.5h-1.5V7.8Z"/></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
  `;
}

// Section animations on scroll
const allHidden = document.querySelectorAll(".fade-in");

const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    if (entry.target.classList.contains("hidden-y"))
      entry.target.classList.remove("hidden-y--hidden");
    else entry.target.classList.contains("hidden-z");
    entry.target.classList.remove("hidden-z--hidden");
    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allHidden.forEach((el) => {
  sectionObserver.observe(el);
  if (el.classList.contains("hidden-y")) el.classList.add("hidden-y--hidden");
  else el.classList.add("hidden-z--hidden");
});

// Footer
const footer = document.querySelector("footer");
footer.innerHTML = `&#169;&nbsp;${new Date().getFullYear()}&nbsp;&nbsp;Ian Peng`;
