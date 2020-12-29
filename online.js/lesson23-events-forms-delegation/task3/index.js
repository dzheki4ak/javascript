const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

/*----------------*/

const taskChanger = event => {
  if (event.target.className === 'list__item-checkbox') {
    const { id } = event.target.dataset;
    tasks[id].done = event.target.checked;

    listElem.innerHTML = '';
    renderTasks(tasks);
  }
};

listElem.addEventListener('click', taskChanger);

/*----------------*/

const newTaskBtn = document.querySelector('.create-task-btn');
const newTaskInField = document.querySelector('.task-input');

const taskAdder = () => {
  if (!newTaskInField.value) {
    return;
  }
  tasks.unshift({
    text: newTaskInField.value,
    done: false,
  });
  newTaskInField.value = '';
  listElem.innerHTML = '';
  renderTasks(tasks);
};
newTaskBtn.addEventListener('click', taskAdder);
