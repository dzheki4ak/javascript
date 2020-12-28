const allButtons = [...document.querySelectorAll('.pagination__page')];

const handleClick = event => console.log(event.target.dataset.pageNumber);

allButtons.map(el => el.addEventListener('click', handleClick));