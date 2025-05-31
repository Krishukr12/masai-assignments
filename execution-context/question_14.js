// Debugging Object Methods

const userProfile = {
  name: "Alice",

  age: 28,

  details: function () {
    return `${this.name} is ${this.age} years old.`;
  },

  updateAge(newAge) {
    if (newAge <= 0) return console.log("Invalid age.");
    this.age = newAge;
    console.log(this.details);
  },
};

userProfile.updateAge(30);

console.log(userProfile.details());
