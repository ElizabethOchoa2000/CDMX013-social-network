/* eslint-disable max-len */
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { app } from './config.js';

export const auth = getAuth();

export const crearUsuaria = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const ingresarusuaria = (email, password) => signInWithEmailAndPassword(auth, email, password);


