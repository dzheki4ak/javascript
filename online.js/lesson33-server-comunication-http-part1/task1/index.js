/* eslint-disable camelcase */
const userAvatarElem = document.querySelector('.user__avatar');
const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');

userAvatarElem.src = 'https://avatars3.githubusercontent.com/u10001';

const fetchUserData = userName =>
  fetch(`https://api.github.com/users/${userName}`).then(response => response.json());

const renderUserData = userData => {
  const { avatar_url, name, location } = userData;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location ? `from ${location}` : '';
};

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');

const onSearchUser = () => {
  const userName = userNameInputElem.value;
  fetchUserData(userName).then(userData => renderUserData(userData));
};

showUserBtnElem.addEventListener('click', onSearchUser);
