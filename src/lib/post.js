import { getFirestore, collection, addDoc, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const savePost = (textpost) => {
  const promesa = addDoc(collection(db, 'post'), {
    message: textpost
  });

  console.log('promesa', promesa);
  promesa.then((resultado) => {
    console.log('respuesta', resultado.id);
  });
};

export const getPost = (callback) => {
  onSnapshot(collection(db, 'post'), callback);
};
