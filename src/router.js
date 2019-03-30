import register from './UI/register.js';
import home from './UI/home.js';
import login from './UI/login.js';
import courses from './UI/courses.js';
export  const viewTemplate = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  // const security = document.getElementById('select-security').value;
  // console.log(security);
  container.innerHTML = '';
  switch (router) {
    case 'home':
      container.appendChild(home());
    break;
    case 'register': 
      container.appendChild(register());
      break;
    case 'login':
    container.appendChild(login());
      break;
    case 'courses': 
    container.appendChild(courses());
    break;
    case 'html':
    container.appendChild(html());
    break;
    case 'css':
    container.appendChild(css());
    break;
    case 'bootstrap':
    container.appendChild(bootstrap());
    break;
    case 'wordPress':
    container.appendChild(wordPress());
    break;
  }
};

export const changeTemplate = (hash) => {
  if(hash === 'home' || hash === '#/register' || hash === '#/login' || hash === '#/courses' || hash === '#/html' || hash === '#/css' || hash === '#/bootstrap' || hash === '#/wordPress') return viewTemplate(hash);
  else return viewTemplate('#/home'); 
};

export const initRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash))
  if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash)
}