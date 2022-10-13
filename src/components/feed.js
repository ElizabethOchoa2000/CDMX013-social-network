import { createPost } from './Createpost.js';
import { getPost } from '../lib/post.js';

export const feed = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogout = document.createElement('button');

  title.textContent = 'FEED';
  buttonLogout.textContent = 'LOG OUT';

  getPost((documents) => {
    documents.docs.forEach((element) => {
      const feedEntry = document.createElement('div');

      // console.log("message: " + element.data().message);

      feedEntry.style.color = 'white';
      feedEntry.textContent = element.data().message;
      div.appendChild(feedEntry);
    });
  });

  div.append(createPost(), title, buttonLogout);

  return div;
};
