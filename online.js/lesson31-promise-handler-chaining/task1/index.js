const requestUserData = userId => {
     const prom = new Promise ((resolved, rejected) => {

          if (userId === 'broken') {
               setTimeout(() => {
                    rejected(new Error('User not found'));
               }, 500);

          } else {
               setTimeout(() => {
                    resolved({
                         name: 'John',
                         age: 17,
                         userId,
                         email: `${userId}@example.com`,
                    })
               }, 1000);
          }
     })

     return prom;
};