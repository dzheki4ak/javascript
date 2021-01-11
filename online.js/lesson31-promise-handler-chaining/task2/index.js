export const asyncCalculator = number =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(number);
      console.log(`Initial value: ${number}`);
    }, 500);
  })
    .then(
      value =>
        new Promise(resolve => {
          setTimeout(() => {
            const sqrVal = value ** 2;
            resolve(sqrVal);
            console.log(`Squared value: ${sqrVal}`);
          }, 500);
        }),
    )
    .then(
      value =>
        new Promise(resolve => {
          const dblVal = value * 2;
          console.log(`Doubled value: ${dblVal}`);
          resolve(dblVal);
        }),
    );
