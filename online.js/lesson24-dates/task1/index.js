const week = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St']

const dayOfWeek = (date, days) => {
     const currentDay = new Date(date).getDate();
     const newDate = new Date(date).setDate(currentDay + days)
     return week[new Date(newDate).getDay()];
}

dayOfWeek(new Date(), 15);