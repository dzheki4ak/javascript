const initUrl = 'https://5ffdb7fbd9ddad0017f68719.mockapi.io/api/v1/users';

export const getUsersList = () => fetch(initUrl).then(response => response.json());


export const getUserById = userId =>
  fetch(`${initUrl}/${userId}`).then(response => response.json());


export const createUser = user =>
  fetch(initUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });


export const updateUser = (id, user) =>
  fetch(`${initUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(user),
  });


export const deleteUser = id =>
  fetch(`${initUrl}/${id}`, {
    method: 'DELETE',
  });
