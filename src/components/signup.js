import { onNavigate } from '../main.js';
import { crearUsuaria } from '../lib/auth.js';

export const signup = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  title.setAttribute('class', 'title-login');
  div.setAttribute('class', 'caja');

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('placeholder', 'email');
  inputEmail.setAttribute('class', 'input');

  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('placeholder', 'password');
  inputPassword.setAttribute('class', 'input');
  inputPassword.setAttribute('type', 'password');

  const button = document.createElement('button');
  button.setAttribute('id', 'buttonLogin-login');

  const buttonBack = document.createElement('button');
  buttonBack.setAttribute('id', 'buttonlogin-login');

  buttonBack.textContent = 'Back';
  button.textContent = 'SIGN UP';
  title.textContent = 'SIGN UP';

  buttonBack.addEventListener('click', () => {
    onNavigate('/');
  });

  button.addEventListener('click', () => {
    crearUsuaria(inputEmail.value, inputPassword.value).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log('ya se registro', user);
      // ...
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log('Nel no se registro', errorMessage);
      });
  });

  div.append(title, inputEmail, inputPassword, button, buttonBack);

  return div;
};
