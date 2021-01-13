/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
const initUrl = 'https://5ffdb7fbd9ddad0017f68719.mockapi.io/api/v1/users'

const batton = document.querySelector('.submit-button');
const error = document.querySelector('.error-text');
const input = document.querySelector('.login-form');


const onInputValid = () => 
  input.reportValidity()
    ? batton.disabled = false 
    : batton.disabled = true;

input.addEventListener('input', onInputValid);


const submittingFormData = (event) => {
  event.preventDefault();

  const user = [...new FormData(input)].reduce(
    (acc, [field, value]) => ({ ...acc, [field]: value }),
    {},
  );

const submitButtonElem = document.querySelector('.login-form');
submitButtonElem.addEventListener('submit', submittingFormData);

const createUserForm = user =>
  fetch(initUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user),
  });

const getUserForm = () =>
  fetch(initUrl)
  .then(response => response.json())
  .then(value => alert(JSON.stringify(value)));

const textError = event => {
  if (event.type === 'input') {
    error.textContent = '';
  };
};

createUserForm(user)
.then(response => response.ok ? response : Promise.reject(response))
.then(() => input.reset())
.then(() => getUserForm())
.catch(() => error.textContent = 'Failed to create user')
.finally(() => input.addEventListener('input', textError))
};