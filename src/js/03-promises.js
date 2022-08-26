function createPromise(position, delay) {
  return new Promise((resoult, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resoult('Промис выполнен успешно!');
      } else {
        reject('Oшибка!');
      }
    });
  }, delay);
}

createPromise(5, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
