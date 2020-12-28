// Option 1


// const items = document.querySelectorAll('.list-item');

// function handleClick() {
//      console.log('clicked');
// };

// items.forEach(item => {
//      item.addEventListener('click', handleClick);
// });

// option2

function handleListClick(event) {
     if (event.target.className !== 'list-item') {
          return;
     };
     //
     console.log(event.target.textContent);

}

const list = document.querySelector('.list');
list.addEventListener('click', handleListClick);


// WEB FLOWWW !!!!!!
// - get data from server ==>> [{...}. {...}, {...}]
// - render (!!!)
// - handle event - UPDATE arr [{...}. {...}, {...}], do not touch DOM (HTML)
// - re-render;

// algo
// 1. find task in array
// 2. update done field
// 3. call render
function handleTaskClick (event) {
     //TODO
}

