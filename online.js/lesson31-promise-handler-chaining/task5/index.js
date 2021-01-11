const delay = delayTime => new Promise(resolve => {
          setTimeout(() => {
               resolve('Done')
          }, delayTime);
     })
     .then(value => console.log(value));

     delay(3000)

