export const getRandomNumber = () =>
  new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      const number = Math.floor(Math.random() * 100);
      if (number % 2 === 0) {
        resolve(number);
      } else {
        reject('Odd number');
      }
    }, 1000);
  });
