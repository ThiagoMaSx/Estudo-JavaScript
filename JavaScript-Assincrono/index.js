// Promises

// Código sem aplicação de Promises
/*
const loginUser = (email, password, onSucess, OnError) => {
  setTimeout(() => {
    const error = false;

    if (error) {
      return onError(new Error("error in login!"));
    }

    console.log("user logged!");
    onSucess({ email });
  }, 1500);
};

// Código com aplicação de Promises

const loginUserPromise = (email, password) => {
  return new Promise((resolve, reject) => {
    const error = false;

    if (error) {
      reject(new Error("Error in Login!"));
    }

    console.log("user logged!");
    resolve({ email });
  });
};

loginUserPromise("thiago.jskk@gmail.com", "123456")
    .then((user) => {
        console.log(user);
    })
    .catch((error) => {
        console.log(error);
    });
*/
