const getDiff = (startDate, endDate) => {
     const difference = Math.abs(startDate - endDate);
     console.log(difference);
     
     const day = 1000 * 60 * 60 * 24;
     const hour = day / 24;
     const minute = hour / 60;
     const second = minute / 60;
   
     const dayDiff = difference / day;
     const hourDiff = difference % day / hour;
     const minDiff = difference % hour / minute;
     const secDiff = difference % minute / second;
   
   return `${Math.floor(dayDiff)}d ${Math.floor(hourDiff)}h ${Math.floor(minDiff)}m ${Math.floor(secDiff)}s`;
   
   };


getDiff(new Date(2020, 8, 13, 16, 50, 10), new Date(2019, 8, 13, 16, 51, 5));
