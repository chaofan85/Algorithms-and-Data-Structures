const a = new Promise((res, rej) => {
  setTimeout(() => {
    res(1);
  }, 2000);
});

const b = a.then(num => {
  console.log("A: ", num);
  return num + 1;
});

b.then(num => {
  console.log("B: ", num);
});
