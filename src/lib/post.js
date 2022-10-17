import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc, query, where, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js';
import { app } from './config.js';
import { auth } from './auth.js';

// ALINE - importé query, where y getDocs




const db = getFirestore(app);

export const savePost = (textpost, nodo) => {
  const promesa = addDoc(collection(db, 'post'), {
    message: textpost,
    user: auth.currentUser.uid, //ALINE - aquí está guardando el ID del user que está autenticado del momento
  });

  console.log('promesa', promesa);
  promesa.then((resultado) => {
    nodo.value = '';
    console.log('respuesta', resultado.id);
  });
};

export const getPost = (callback) => {
  onSnapshot(collection(db, 'post'), callback);
};







// ---------------------------------------------- ALINE -

export const deletePost = async (identifier) => { //identifier es el texto que ingresaste al post
  const postAline = collection(db, "post"); //postAline le dice en qué colección va a buscar
  const q = query(postAline, where("message", "==", String(identifier.textContent))); //encuentra el post donde hayan escrito ESTO, query es BUSCAR,

    const querySnapshot = await getDocs(q); //q NO guarda los documentos, sólo guarda EN DÓNDE ESTÁN los documentos
    querySnapshot.forEach((document) => { //querySnapshot va a guardar los documentos que q SABES DÓNDE ESTÁN
      if(document.data().user === auth.currentUser.uid) {
        deleteDoc(doc(db, 'post', document.id)) //cuando los encuentra los va a borrar
        .then(() => { //resultado, si la promesa es exitosa (si se borra el documento) se muestra "borrado" en consola perras
          console.log('borrado')
        })
        .catch((e) => { //si la promesa no es exitosa (no borra el documento) te va a decir kp2 por qué no pudo
          console.log(e)
        })
      } else {
        console.log("No eres creador de este post")
        alert('no es tu post // aquí tendríamos que quitar los botones de los posts ajenos')

      }
      
    });
};