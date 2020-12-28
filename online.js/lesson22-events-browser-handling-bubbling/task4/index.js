const checkBox = document.querySelector('.task-status');

const checkLogger = () => {
  if (checkBox.value === 'on') console.log(true);
};
const eventLog = checkLogger.bind();
checkBox.addEventListener('change', eventLog);
