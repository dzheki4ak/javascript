// algo:

// * select DOM elements + add event listener
// * read form data
// * make post request
// * validate

const initUrl = 'https://5ffdb7fbd9ddad0017f68719.mockapi.io/api/v1/users';
const user = {
  email: 'Igor.ki4@gmail.com',
  firstName: 'Ihor',
  lastName: 'Kychak',
  age: 32,
};

// input: url, object (optional)
/*
Options
method (String) - HTTP request method. Default: "GET"
body (String, body types) - HTTP request body
headers (Object, Headers) - Default: {}
credentials (String) - Authentication credentials mode. Default: "omit"
"omit" - don't include authentication credentials (e.g. cookies) in the request
"same-origin" - include credentials in requests to the same site
"include" - include credentials in requests to all sites
*/

// output: promise

fetch(initUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(user),
})
// in: callback
// out: promise
.then(response => response.json())
.then(body => console.log(body));

