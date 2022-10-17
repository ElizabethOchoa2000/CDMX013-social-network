import { onNavigate } from '../main.js';

export const welcome = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'welcome');

  const title = document.createElement('h2');
  title.setAttribute('class', 'title-welcome');

  const imageEnigma = document.createElement('img');
  imageEnigma.setAttribute('src', './images/enigma.png');
  imageEnigma.setAttribute('class', 'logo');

  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('class', 'buttonlogin-welcome');

  const buttonSignup = document.createElement('button');
  buttonSignup.classList.add('buttonloginSingup');

  buttonLogin.textContent = 'LOG IN';
  buttonSignup.textContent = 'SIGN UP';
  title.textContent = 'ENIGMA';

  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });

  buttonSignup.addEventListener('click', () => {
    onNavigate('/signup');
  });


  div.append(title, imageEnigma, buttonLogin, buttonSignup);

  return div;
};
