const shmoment = date => {
  const workDate = {
    years: date.getFullYear(),
    months: date.getMonth(),
    days: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    milliseconds: date.getMilliseconds(),
  };

  console.log(...Object.values(workDate)); 

  const methodSet = {
     subtract(unit, number) {
      workDate[unit] -= number;
      return this;
    },

    add(unit, number) {
      workDate[unit] += number;
      return this;
    },

    result() {
      return new Date(...Object.values(workDate));
    },
  };
  return methodSet;
};

const result = shmoment(new Date()).add('days', 10).result();

console.log(result);
