const button = document.querySelector('.create-btn');

const allert = text => alert(text);
const btnEvent = allert.bind(null,'done');
button.addEventListener('click', btnEvent);
