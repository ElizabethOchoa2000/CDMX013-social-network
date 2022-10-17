import { savePost } from '../lib/post.js';

export const createPost = () => {
  const div = document.createElement('div');
  const inputPost = document.createElement('textarea');

  inputPost.setAttribute('class', 'inputFeed');

  const buttonUp = document.createElement('button');

  buttonUp.textContent = 'UP';
  buttonUp.addEventListener('click', () => {

    savePost(inputPost.value, inputPost);
    savePost(inputPost.value);

  });
  div.append(inputPost, buttonUp);

  return div;
};
