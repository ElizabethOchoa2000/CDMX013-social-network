import { onNavigate } from '../main.js';
import { ingresarusuaria } from '../lib/auth.js';

export const login = () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'div-login');

  const title = document.createElement('h2');
  title.setAttribute('class', 'title-login');


  //más adelante será necesario saber quién escribio el post
  const emailLogin = document.createElement('input');
  emailLogin.setAttribute('class', 'input');


  const passLogin = document.createElement('input');
  passLogin.setAttribute('class', 'input');
  passLogin.setAttribute('type', 'password');


  const buttonLogin = document.createElement('button');
  buttonLogin.setAttribute('id', 'buttonLogin-login');

  const buttonBack = document.createElement('button');
  buttonBack.setAttribute('id', 'buttonBack-login');

  buttonBack.textContent = 'Back';
  buttonLogin.textContent = 'LOG IN';
  title.textContent = 'LOG IN';
  // buttonBack.textContent = 'Back';
  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });
  buttonLogin.addEventListener('click', () => {
    const emailValue = emailLogin.value;
    const passValue = passLogin.value;

    ingresarusuaria(emailValue, passValue).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  });

  div.append(title, emailLogin, passLogin, buttonLogin, buttonBack);

  return div;
};
