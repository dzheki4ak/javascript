const getRandomNumber = (from, to) => from + Math.random() * (to - from);

const request = url =>
  new Promise(resolve => {
    const randomDelay = getRandomNumber(1000, 3000);
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, randomDelay);
  });

const servers = [
  'https://server.com/us/userld',
  'https://server.com/eu/userld',
  'https://server.com/au/userld',
];

export const getUserASAP = userId => {
  const userUrls = servers.map(serverUrl => `${serverUrl}`);
  console.log(userUrls);

  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};
