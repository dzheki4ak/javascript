const buttons = [...document.querySelectorAll('.btn')];

const handleClick = (event) => {
  console.log(event.target.textContent);
};

buttons.map(el => el.addEventListener('click', handleClick));
