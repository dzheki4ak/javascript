import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const onToggleTask = e => {
  const tasksList = getItem('tasksList');
  const newTasksList = tasksList.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem('tasksList', newTasksList);

  renderTasks();
};
