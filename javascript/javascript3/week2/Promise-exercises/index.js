//Create a function that has one parameter: resolveAfter.
//Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

const resolveAfterSetTime = (resolveAfter) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("I am called asynchronously");
    }, resolveAfter * 1000);
  });
};

resolveAfterSetTime(6)
  .then((timeoutData) => {
    console.log(timeoutData); // logged out after 6 seconds
  })
  .catch((error) => {
    console.log(error);
  });

//Use the promise with async/await
const getResolveAfter = async () => {
  const timeoutData = await resolveAfterSetTime(5); // logged out after 5 seconds
  console.log(timeoutData);
};
getResolveAfter();

//Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises.
//The getCurrentPosition function is probably going to throw an error, but that is fine.
const setTimeoutPromise = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Called after ${time} seconds`);
    }, time * 1000);
  });
};

setTimeoutPromise(9)
  .then((timeoutData) => {
    console.log(timeoutData); // logged out after 9 seconds
  })
  .catch((error) => {
    console.log(error);
  });

const getCurrentPosition = () => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      // On Success
      function (position) {
        resolve(`Latitude: ${position.coords.latitude}; Longitude: ${position.coords.longitude}`);
      },
      // On Error
      function (error) {
        reject(error);
      }
    );
  });
};
getCurrentPosition()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error with getting the users location
    console.log(error);
  });
