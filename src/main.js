import { welcome } from './components/welcome.js';
import { signup } from './components/signup.js';
import { login } from './components/login.js';
import { feed } from './components/feed.js';


const root = document.getElementById('root');

const routes = {
  '/': welcome,
  '/signup': signup,
  '/login': login,
  '/feed': feed,
};

//root.appendChild (welcome());
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  root.removeChild(root.firstChild);
  root.appendChild(routes[pathname]());
};

const component = routes[window.location.pathname];
root.appendChild(component());