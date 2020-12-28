const chkBox = document.querySelector('.task-status');
const chkLogger = () => console.log(chkBox.value === 'on' ? true : false);
chkBox.addEventListener('change', chkLogger);
