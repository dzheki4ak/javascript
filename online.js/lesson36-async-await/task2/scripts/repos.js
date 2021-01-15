/* eslint-disable no-return-assign */
const listElem = document.querySelector('.repo-list');

export const cleanReposList = () => listElem.innerHTML = '';

export const renderRepos = repoList => {
  const repoListElem = repoList
    .map(({ name }) => {
      const listItem = document.createElement('li');
      listItem.classList.add('repo-list__item');
      listItem.textContent = name;

      return listItem;
    });
  
  cleanReposList();
  listElem.append(...repoListElem);
};