const pinger = (times, interval) => {
     console.log('Ping');
     let i = times;
     setInterval(() => {
          if( --i > 0) {
               console.log('Ping');
          }
     }, interval);
}
pinger(5, 1000);