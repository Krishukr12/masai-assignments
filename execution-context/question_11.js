// Understanding Global and Function Execution Context

let age = 25;
const displayAge = () => {
  console.log(age);
};
const changeAge = () => {
  age = 26;
  console.log(age);
};

displayAge();
changeAge();

// log ==  25 && 26
