import { createPost } from './Createpost.js';
import { deletePost, getPost, } from '../lib/post.js';

export const feed = () => {
  const div = document.createElement('div');
  const title = document.createElement('h2');
  const buttonLogout = document.createElement('button');
  const postContainer = document.createElement('div');

  title.textContent = 'FEED';
  buttonLogout.textContent = 'LOG OUT';

  getPost((documents) => {
    postContainer.innerHTML = '';
    documents.docs.forEach((element) => {
      const post = element.data();
      const feedEntry = document.createElement('div');
      feedEntry.setAttribute('class', 'post');

      const postText = document.createElement('p');
      postText.textContent = post.message;
      postText.setAttribute('class', 'postText');

      const buttonDelete = document.createElement('button');
      buttonDelete.textContent = 'DELETE';
      buttonDelete.setAttribute('class', 'buttonDelete');
      

      postContainer.appendChild(feedEntry);
      feedEntry.append(postText, buttonDelete);

      buttonDelete.addEventListener('click', function () {
      deletePost(postText)
       })


    });
  });

  div.append(createPost(), title, buttonLogout, postContainer);

  return div;
};