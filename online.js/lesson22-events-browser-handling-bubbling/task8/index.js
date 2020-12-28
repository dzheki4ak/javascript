const textInput = document.querySelector('.text-input');
const inputLogger = event => console.log(event.target.value);
textInput.addEventListener('change', inputLogger);