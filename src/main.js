import { welcome } from './components/Welcome.js';
import { signup } from './components/signup.js';
import { login } from './components/LogIn.js';
import { feed } from './components/feed.js';
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { auth } from './lib/auth.js';

const root = document.getElementById('root');

const routes = {
  '/': welcome,
  '/signup': signup,
  '/login': login,
  '/feed': feed,
};

// root.appendChild (welcome());
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

onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    onNavigate('/feed');
  } else {
    onNavigate('/');
  }
});
