const textInput = document.querySelector('.text-input');

const inputLogger = () => console.log(textInput.value);
const eventLog = inputLogger.bind();
textInput.addEventListener('change', eventLog);
