const srchBtn = document.querySelector('.search__btn');
const srchField = document.querySelector('.search__input');

const srchLogger = () => console.log(srchField.value);
// const srchEvent = srchLogger.bind();
srchBtn.addEventListener('click', srchLogger.bind());