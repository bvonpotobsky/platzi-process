const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Yeah mate, it works!!!!");
    } else {
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// ...............

const requestPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Yeah, it works");
    } else {
    }
  });
};

requestPromise()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), requestPromise()])
  .then((response) => {
    console.log("Array of results", response);
  })
  .catch((err) => {
    console.error(err);
  });
